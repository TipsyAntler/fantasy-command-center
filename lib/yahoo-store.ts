import { createHash, randomUUID } from "node:crypto";
import {
  decryptYahooSession, encryptYahooSession, refreshYahooSession, yahooFantasyRequest,
  type YahooSession,
} from "@/lib/yahoo";

const SESSION_KEY = "ffcc:yahoo:session:v1";
const LOCK_KEY = "ffcc:yahoo:refresh-lock:v1";

function configured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}
export function yahooServerStorageConfigured() {
  return configured();
}
async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error("Persistent Yahoo storage is not configured");
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Persistent Yahoo storage unavailable (" + response.status + ")");
  const payload = await response.json() as { result?: T; error?: string };
  if (payload.error) throw new Error("Persistent Yahoo storage command failed");
  return payload.result as T;
}
async function getStoredSession() {
  const encrypted = await redis<string | null>(["GET", SESSION_KEY]);
  return encrypted ? decryptYahooSession(encrypted) : null;
}
function fingerprint(token: string) {
  return createHash("sha256").update(token).digest("hex");
}
export async function validateYahooLeagueMembership(session: YahooSession, origin: string) {
  // Never let an unrelated Yahoo login replace the owner's server session.
  const response = await yahooFantasyRequest("users;use_login=1/games;game_codes=nfl;seasons=2026/leagues", session, origin);
  const payload = JSON.stringify(response.data);
  if (!payload.includes('"470.l.890742"') || !payload.includes('"470.l.864304"')) {
    throw new Error("This Yahoo account is not a member of both configured FFCC leagues");
  }
  // If validation renewed an expiring token, persist the NEW token while
  // retaining the ORIGINAL browser session fingerprint for owner checks.
  return { ...response.session, ownerFingerprint: fingerprint(session.refreshToken) };
}
export async function saveServerYahooSession(session: YahooSession) {
  const owned = { ...session, ownerFingerprint: session.ownerFingerprint || fingerprint(session.refreshToken) };
  await redis(["SET", SESSION_KEY, encryptYahooSession(owned)]);
}
export async function clearServerYahooSession() {
  if (!configured()) return;
  await redis(["DEL", SESSION_KEY]);
}
export async function hasServerYahooSession() {
  if (!configured()) return false;
  try { return Boolean(await getStoredSession()); }
  catch { return false; }
}
function sameSession(a: YahooSession, b: YahooSession) {
  return a.refreshToken === b.refreshToken && a.expiresAt === b.expiresAt;
}
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * All callers share one encrypted refresh token in persistent KV.
 * A Redis lock serializes refreshes so parallel serverless requests cannot
 * invalidate each other's rotating Yahoo refresh token.
 */
async function freshStoredSession(origin: string): Promise<YahooSession | null> {
  const first = await getStoredSession();
  if (!first) return null;
  if (first.expiresAt - Date.now() > 180_000) return first;

  for (let attempt = 0; attempt < 25; attempt++) {
    const latest = await getStoredSession();
    if (!latest) return null;
    if (latest.expiresAt - Date.now() > 180_000) return latest;
    const lockId = randomUUID();
    const acquired = await redis<string | null>(["SET", LOCK_KEY, lockId, "NX", "PX", 20000]);
    if (acquired === "OK") {
      try {
        const current = await getStoredSession();
        if (!current) return null;
        if (current.expiresAt - Date.now() > 180_000) return current;
        let renewed: YahooSession;
        try {
          renewed = await refreshYahooSession(current, origin);
        } catch (error) {
          const other = await getStoredSession();
          if (other && !sameSession(other, current) && other.expiresAt - Date.now() > 60000) return other;
          throw error;
        }
        await saveServerYahooSession(renewed);
        return renewed;
      } finally {
        // Compare-and-delete is atomic; never release another request's lock.
        await redis(["EVAL",
          "if redis.call('GET',KEYS[1])==ARGV[1] then return redis.call('DEL',KEYS[1]) else return 0 end",
          "1", LOCK_KEY, lockId]).catch(() => undefined);
      }
    }
    await pause(250);
  }
  throw new Error("Yahoo token renewal is busy; please retry in a moment");
}
export async function getServerYahooSession(origin: string) {
  return freshStoredSession(origin);
}
export async function getBrowserYahooSession(cookie: string | undefined, origin: string) {
  if (!cookie) return null;
  const browserSession = decryptYahooSession(cookie);
  if (!configured()) return browserSession;
  const existing = await freshStoredSession(origin);
  if (existing) {
    if (!existing.ownerFingerprint && existing.refreshToken === browserSession.refreshToken) {
      const tagged = { ...existing, ownerFingerprint: fingerprint(browserSession.refreshToken) };
      await saveServerYahooSession(tagged);
      return tagged;
    }
    if (existing.ownerFingerprint !== fingerprint(browserSession.refreshToken) &&
        existing.refreshToken !== browserSession.refreshToken) {
      throw new Error("This browser has an older or different Yahoo session. Reconnect Yahoo in Settings.");
    }
    return existing;
  }
  const verified = await validateYahooLeagueMembership(browserSession, origin);
  // First authenticated browser request upgrades the original cookie-only
  // connection to durable storage, with no additional Yahoo login.
  await saveServerYahooSession(verified);
  return freshStoredSession(origin);
}
