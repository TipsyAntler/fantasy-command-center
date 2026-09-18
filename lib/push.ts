import webpush from "web-push";

export type FfccPushAlert = {
  category: "fantasy" | "survivor" | "pickem" | "system";
  severity: "breaking" | "actionable";
  title: string;
  body: string;
  url: string;
  tag?: string;
};

type StoredSubscription = webpush.PushSubscription;
type StoredVapidKeys = { publicKey: string; privateKey: string };

const STORE_KEY = "ffcc:push:primary";
const TRIQ_STORE_KEY = "triq:push:primary";
const TRIQ_SUBSCRIPTIONS_KEY = "triq:push:subscriptions";
// TrIQ supports multiple registered devices.
const VAPID_KEY = "ffcc:push:vapid";
const SENT_TTL_SECONDS = 60 * 60 * 24 * 21;
const TRIQ_MONEY_BRIDGE_KEY = "triq:money:bridge-token";

function getPushStoreConfig() {
  const url = process.env.KV_REST_API_URL || process.env.PUSH_STORE_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.PUSH_STORE_TOKEN;
  return { url, token };
}

function pushStoreConfigured() {
  const { url, token } = getPushStoreConfig();
  return Boolean(url && token);
}

async function redis(command: Array<string>) {
  if (!pushStoreConfigured()) throw new Error("Push store is not configured.");
  const { url, token } = getPushStoreConfig();
  const response = await fetch(url!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Push store request failed (${response.status}).`);
  const payload = await response.json();
  return payload?.result;
}

export async function getOrCreateVapidKeys(): Promise<StoredVapidKeys> {
  const envPublic = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const envPrivate = process.env.PUSH_VAPID_PRIVATE_KEY;
  if (envPublic && envPrivate) return { publicKey: envPublic, privateKey: envPrivate };

  const stored = await redis(["GET", VAPID_KEY]);
  if (stored) return JSON.parse(stored) as StoredVapidKeys;

  const generated = webpush.generateVAPIDKeys();
  const keys = { publicKey: generated.publicKey, privateKey: generated.privateKey };
  await redis(["SET", VAPID_KEY, JSON.stringify(keys)]);
  return keys;
}

function pushKey(channel: "ffcc" | "triq") {
  return channel === "triq" ? TRIQ_STORE_KEY : STORE_KEY;
}

function uniqueSubscriptions(subscriptions: StoredSubscription[]) {
  const byEndpoint = new Map<string, StoredSubscription>();
  for (const sub of subscriptions) {
    if (sub?.endpoint) byEndpoint.set(sub.endpoint, sub);
  }
  return [...byEndpoint.values()];
}

export async function getPushSubscriptionsFor(channel: "ffcc" | "triq"): Promise<StoredSubscription[]> {
  if (channel === "ffcc") {
    const value = await redis(["GET", STORE_KEY]);
    return value ? [JSON.parse(value) as StoredSubscription] : [];
  }

  const [manyRaw, legacyRaw] = await Promise.all([
    redis(["GET", TRIQ_SUBSCRIPTIONS_KEY]),
    redis(["GET", TRIQ_STORE_KEY]),
  ]);
  const many = manyRaw ? (JSON.parse(manyRaw) as StoredSubscription[]) : [];
  const legacy = legacyRaw ? [JSON.parse(legacyRaw) as StoredSubscription] : [];
  return uniqueSubscriptions([...many, ...legacy]);
}

export async function savePushSubscriptionFor(channel: "ffcc" | "triq", subscription: StoredSubscription) {
  if (channel === "ffcc") {
    await redis(["SET", STORE_KEY, JSON.stringify(subscription)]);
    return;
  }
  const existing = await getPushSubscriptionsFor("triq");
  const merged = uniqueSubscriptions([...existing, subscription]);
  await redis(["SET", TRIQ_SUBSCRIPTIONS_KEY, JSON.stringify(merged)]);
}

export async function getPushSubscriptionFor(channel: "ffcc" | "triq"): Promise<StoredSubscription | null> {
  const subscriptions = await getPushSubscriptionsFor(channel);
  return subscriptions[0] || null;
}

export async function getPushSubscriptionByEndpoint(
  channel: "ffcc" | "triq",
  endpoint: string,
): Promise<StoredSubscription | null> {
  const subscriptions = await getPushSubscriptionsFor(channel);
  return subscriptions.find((sub) => sub.endpoint === endpoint) || null;
}

export async function savePushSubscription(subscription: StoredSubscription) {
  await savePushSubscriptionFor("ffcc", subscription);
}

export async function getPushSubscription(): Promise<StoredSubscription | null> {
  return getPushSubscriptionFor("ffcc");
}

async function sendToSubscription(
  subscription: StoredSubscription,
  alert: { title: string; body: string; url: string; tag?: string; category?: string; severity?: string },
) {
  const vapid = await getOrCreateVapidKeys();
  const subject = process.env.PUSH_VAPID_SUBJECT || process.env.NEXT_PUBLIC_APP_URL || "https://fantasy-command-center-omega.vercel.app";
  webpush.setVapidDetails(subject, vapid.publicKey, vapid.privateKey);
  await webpush.sendNotification(subscription, JSON.stringify({
    title: alert.title,
    body: alert.body,
    url: alert.url,
    tag: alert.tag || "triq-alert",
    category: alert.category || "system",
    severity: alert.severity || "actionable",
  }));
}

export async function sendPushToSubscription(
  subscription: StoredSubscription,
  alert: { title: string; body: string; url: string; tag?: string; category?: string; severity?: string },
) {
  await sendToSubscription(subscription, alert);
}

export async function sendPushTo(
  channel: "ffcc" | "triq",
  alert: { title: string; body: string; url: string; tag?: string; category?: string; severity?: string },
) {
  const subscriptions = await getPushSubscriptionsFor(channel);
  if (!subscriptions.length) throw new Error(`No ${channel === "triq" ? "TrIQ" : "FFCC"} push subscription is registered.`);

  if (channel === "ffcc") {
    await sendToSubscription(subscriptions[0], alert);
    return;
  }

  const valid: StoredSubscription[] = [];
  let delivered = 0;
  for (const subscription of subscriptions) {
    try {
      await sendToSubscription(subscription, alert);
      valid.push(subscription);
      delivered += 1;
    } catch (error: any) {
      const code = error?.statusCode;
      if (code !== 404 && code !== 410) {
        valid.push(subscription);
        console.error("TrIQ push delivery failed", error);
      }
    }
  }
  await redis(["SET", TRIQ_SUBSCRIPTIONS_KEY, JSON.stringify(uniqueSubscriptions(valid))]);
  if (!delivered) throw new Error("TrIQ push could not be delivered to any registered device.");
}

export async function sendPushToOnce(
  channel: "ffcc" | "triq",
  alertId: string,
  alert: { title: string; body: string; url: string; tag?: string; category?: string; severity?: string },
): Promise<boolean> {
  const sentKey = `${channel}:push:sent:${alertId}`;
  const claimed = await redis(["SET", sentKey, "1", "NX", "EX", String(SENT_TTL_SECONDS)]);
  if (claimed !== "OK") return false;

  try {
    await sendPushTo(channel, alert);
    return true;
  } catch (error) {
    await redis(["DEL", sentKey]).catch(() => undefined);
    throw error;
  }
}

export async function claimTriqMoneyBridgeToken(): Promise<string | null> {
  const existing = await redis(["GET", TRIQ_MONEY_BRIDGE_KEY]);
  if (existing) return null;

  const token = (crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, "");
  const claimed = await redis(["SET", TRIQ_MONEY_BRIDGE_KEY, token, "NX"]);
  return claimed === "OK" ? token : null;
}

export async function triqMoneyBridgeAuthorized(token: string | null): Promise<boolean> {
  if (!token) return false;
  const stored = await redis(["GET", TRIQ_MONEY_BRIDGE_KEY]);
  return Boolean(stored && stored === token);
}

export async function sendFfccPush(alert: FfccPushAlert) {
  await sendPushTo("ffcc", {
    ...alert,
    tag: alert.tag || `ffcc-${alert.category}-${alert.severity}`,
  });
}

export async function sendFfccPushOnce(alertId: string, alert: FfccPushAlert): Promise<boolean> {
  return sendPushToOnce("ffcc", alertId, alert);
}
