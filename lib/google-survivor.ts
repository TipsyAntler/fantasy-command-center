import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

export const GOOGLE_SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";
export const GOOGLE_TOKEN_COOKIE = "fcc_google_survivor";
export const GOOGLE_STATE_COOKIE = "fcc_google_oauth_state";
export const SURVIVOR_SHEET_ID = "1D6T-kLXAhth3iZSy2V0MMujHpbQ2NIilL7usxjM-zj4";
export const SURVIVOR_SHEET_TAB = "2026";

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

function secretKey() {
  return createHash("sha256").update(required("GOOGLE_TOKEN_SECRET")).digest();
}

export function encryptRefreshToken(token: string) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", secretKey(), iv);
  const encrypted = Buffer.concat([cipher.update(token, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv, tag, encrypted].map((part) => part.toString("base64url")).join(".");
}

export function decryptRefreshToken(payload: string) {
  const [ivRaw, tagRaw, encryptedRaw] = payload.split(".");
  if (!ivRaw || !tagRaw || !encryptedRaw) throw new Error("Invalid Google token cookie");
  const decipher = createDecipheriv("aes-256-gcm", secretKey(), Buffer.from(ivRaw, "base64url"));
  decipher.setAuthTag(Buffer.from(tagRaw, "base64url"));
  return Buffer.concat([
    decipher.update(Buffer.from(encryptedRaw, "base64url")),
    decipher.final(),
  ]).toString("utf8");
}

export function googleRedirectUri(origin: string) {
  const base = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || origin.replace(/\/$/, "");
  return `${base}/api/google/callback`;
}

export function googleAuthorizationUrl(origin: string, state: string) {
  const params = new URLSearchParams({
    client_id: required("GOOGLE_CLIENT_ID"),
    redirect_uri: googleRedirectUri(origin),
    response_type: "code",
    scope: GOOGLE_SCOPE,
    access_type: "offline",
    include_granted_scopes: "true",
    prompt: "consent",
    state,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

async function accessTokenFromRefreshToken(refreshToken: string) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: required("GOOGLE_CLIENT_ID"),
      client_secret: required("GOOGLE_CLIENT_SECRET"),
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Google refresh failed (${response.status})`);
  const json = await response.json() as { access_token?: string };
  if (!json.access_token) throw new Error("Google did not return an access token");
  return json.access_token;
}

export async function hasGoogleSurvivorConnection() {
  const store = await cookies();
  return Boolean(store.get(GOOGLE_TOKEN_COOKIE)?.value);
}

async function getAccessTokenFromCookie() {
  const store = await cookies();
  const encrypted = store.get(GOOGLE_TOKEN_COOKIE)?.value;
  if (!encrypted) return null;
  return accessTokenFromRefreshToken(decryptRefreshToken(encrypted));
}

export type SurvivorEntry = {
  name: string;
  alive: boolean;
  usedTeams: Array<{ team: string; week: number }>;
  currentPick?: string;
};

export type SurvivorOwnership = {
  team: string;
  count: number;
  pct: number;
};

export type SurvivorSnapshot = {
  connected: boolean;
  entries: SurvivorEntry[];
  ownership: SurvivorOwnership[];
  submitted: number;
  aliveEntries: number;
  currentWeek: number;
  error?: string;
};

function numericWeek(value: unknown) {
  const text = String(value ?? "").trim();
  if (!/^\d+$/.test(text)) return null;
  const n = Number(text);
  return Number.isFinite(n) ? n : null;
}

export async function getSurvivorSnapshot(currentWeek: number): Promise<SurvivorSnapshot> {
  const accessToken = await getAccessTokenFromCookie();
  if (!accessToken) {
    return { connected: false, entries: [], ownership: [], submitted: 0, aliveEntries: 0, currentWeek };
  }

  try {
    const range = encodeURIComponent(`'${SURVIVOR_SHEET_TAB}'!A1:AL2500`);
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SURVIVOR_SHEET_ID}/values/${range}?majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE`,
      { headers: { authorization: `Bearer ${accessToken}` }, cache: "no-store" },
    );
    if (!response.ok) throw new Error(`Google Sheets read failed (${response.status})`);
    const json = await response.json() as { values?: unknown[][] };
    const rows = json.values || [];
    const header = (rows[0] || []).map((v) => String(v ?? "").trim());

    const teamColumns = header
      .map((label, index) => ({ label, index }))
      .filter(({ label, index }) => index >= 4 && index <= 35 && /^[A-Z]{2,3}$/.test(label));

    const poolRows = rows.slice(1).filter((row) => String(row[1] ?? "").trim());
    const aliveRows = poolRows.filter((row) => String(row[3] ?? "").trim().toLowerCase() === "yes");
    const ownershipCounts = new Map<string, number>();
    let submitted = 0;

    for (const row of aliveRows) {
      let found = false;
      for (const { label, index } of teamColumns) {
        if (numericWeek(row[index]) === currentWeek) {
          ownershipCounts.set(label, (ownershipCounts.get(label) || 0) + 1);
          found = true;
        }
      }
      if (found) submitted += 1;
    }

    const entries: SurvivorEntry[] = poolRows
      .filter((row) => /^Mike Tridente\s+\d+$/i.test(String(row[1] ?? "").trim()))
      .map((row) => {
        const usedTeams: Array<{ team: string; week: number }> = [];
        let currentPick: string | undefined;
        for (const { label, index } of teamColumns) {
          const week = numericWeek(row[index]);
          if (week !== null) {
            usedTeams.push({ team: label, week });
            if (week === currentWeek) currentPick = label;
          }
        }
        usedTeams.sort((a, b) => a.week - b.week);
        return {
          name: String(row[1] ?? "").trim(),
          alive: String(row[3] ?? "").trim().toLowerCase() === "yes",
          usedTeams,
          currentPick,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    const ownership = [...ownershipCounts.entries()]
      .map(([team, count]) => ({ team, count, pct: submitted ? (count / submitted) * 100 : 0 }))
      .sort((a, b) => b.count - a.count);

    return {
      connected: true,
      entries,
      ownership,
      submitted,
      aliveEntries: aliveRows.length,
      currentWeek,
    };
  } catch (error) {
    return {
      connected: true,
      entries: [],
      ownership: [],
      submitted: 0,
      aliveEntries: 0,
      currentWeek,
      error: error instanceof Error ? error.message : "Unable to read survivor sheet",
    };
  }
}
