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

const STORE_KEY = "ffcc:push:primary";

function pushStoreConfigured() {
  return Boolean(process.env.PUSH_STORE_URL && process.env.PUSH_STORE_TOKEN);
}

function vapidConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY &&
    process.env.PUSH_VAPID_PRIVATE_KEY &&
    process.env.PUSH_VAPID_SUBJECT,
  );
}

async function redis(command: Array<string>) {
  if (!pushStoreConfigured()) throw new Error("Push store is not configured.");
  const response = await fetch(process.env.PUSH_STORE_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PUSH_STORE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Push store request failed (${response.status}).`);
  const payload = await response.json();
  return payload?.result;
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
  if (!vapidConfigured()) throw new Error("VAPID is not configured.");
  const subscription = await getPushSubscription();
  if (!subscription) throw new Error("No FFCC push subscription is registered.");

  webpush.setVapidDetails(
    process.env.PUSH_VAPID_SUBJECT!,
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.PUSH_VAPID_PRIVATE_KEY!,
  );

  await webpush.sendNotification(subscription, JSON.stringify({
    title: alert.title,
    body: alert.body,
    url: alert.url,
    tag: alert.tag || `ffcc-${alert.category}-${alert.severity}`,
    category: alert.category,
    severity: alert.severity,
  }));
}
