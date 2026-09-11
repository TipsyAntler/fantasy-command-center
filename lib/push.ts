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
const VAPID_KEY = "ffcc:push:vapid";

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

export async function savePushSubscription(subscription: StoredSubscription) {
  await redis(["SET", STORE_KEY, JSON.stringify(subscription)]);
}

export async function getPushSubscription(): Promise<StoredSubscription | null> {
  const value = await redis(["GET", STORE_KEY]);
  if (!value) return null;
  return JSON.parse(value) as StoredSubscription;
}

export async function sendFfccPush(alert: FfccPushAlert) {
  const subscription = await getPushSubscription();
  if (!subscription) throw new Error("No FFCC push subscription is registered.");

  const vapid = await getOrCreateVapidKeys();
  const subject = process.env.PUSH_VAPID_SUBJECT || process.env.NEXT_PUBLIC_APP_URL || "https://fantasy-command-center-omega.vercel.app";

  webpush.setVapidDetails(subject, vapid.publicKey, vapid.privateKey);

  await webpush.sendNotification(subscription, JSON.stringify({
    title: alert.title,
    body: alert.body,
    url: alert.url,
    tag: alert.tag || `ffcc-${alert.category}-${alert.severity}`,
    category: alert.category,
    severity: alert.severity,
  }));
}
