import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

export const YAHOO_STATE_COOKIE = "ffcc_yahoo_oauth_state";
export const YAHOO_SESSION_COOKIE = "ffcc_yahoo_session";

const YAHOO_AUTH_URL = "https://api.login.yahoo.com/oauth2/request_auth";
const YAHOO_TOKEN_URL = "https://api.login.yahoo.com/oauth2/get_token";
const YAHOO_FANTASY_BASE = "https://fantasysports.yahooapis.com/fantasy/v2";

export type YahooSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  tokenType: string;
};

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

function tokenKey() {
  return createHash("sha256").update(required("YAHOO_TOKEN_SECRET")).digest();
}

export function yahooFantasyEnabled() {
  return process.env.YAHOO_FANTASY_ENABLED?.toLowerCase() === "true";
}

export function yahooCredentialsConfigured() {
  return Boolean(
    process.env.YAHOO_CLIENT_ID &&
    process.env.YAHOO_CLIENT_SECRET &&
    process.env.YAHOO_TOKEN_SECRET,
  );
}

export function yahooRedirectUri(origin: string) {
  if (process.env.YAHOO_REDIRECT_URI) return process.env.YAHOO_REDIRECT_URI;
  const base = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || origin.replace(/\/$/, "");
  return `${base}/api/yahoo/callback`;
}

export function yahooAuthorizationUrl(origin: string, state: string) {
  const params = new URLSearchParams({
    client_id: required("YAHOO_CLIENT_ID"),
    redirect_uri: yahooRedirectUri(origin),
    response_type: "code",
    state,
    language: "en-us",
  });
  return `${YAHOO_AUTH_URL}?${params.toString()}`;
}

export function encryptYahooSession(session: YahooSession) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", tokenKey(), iv);
  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(session), "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  return [iv, tag, encrypted].map((part) => part.toString("base64url")).join(".");
}

export function decryptYahooSession(payload: string): YahooSession {
  const [ivRaw, tagRaw, encryptedRaw] = payload.split(".");
  if (!ivRaw || !tagRaw || !encryptedRaw) throw new Error("Invalid Yahoo session cookie");
  const decipher = createDecipheriv("aes-256-gcm", tokenKey(), Buffer.from(ivRaw, "base64url"));
  decipher.setAuthTag(Buffer.from(tagRaw, "base64url"));
  const json = Buffer.concat([
    decipher.update(Buffer.from(encryptedRaw, "base64url")),
    decipher.final(),
  ]).toString("utf8");
  return JSON.parse(json) as YahooSession;
}

function basicAuthorization() {
  const credentials = Buffer.from(`${required("YAHOO_CLIENT_ID")}:${required("YAHOO_CLIENT_SECRET")}`).toString("base64");
  return `Basic ${credentials}`;
}

type YahooTokenResponse = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
  error?: string;
  error_description?: string;
};

async function tokenRequest(body: URLSearchParams) {
  const response = await fetch(YAHOO_TOKEN_URL, {
    method: "POST",
    headers: {
      authorization: basicAuthorization(),
      "content-type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const json = await response.json() as YahooTokenResponse;
  if (!response.ok || !json.access_token) {
    throw new Error(json.error_description || json.error || `Yahoo token request failed (${response.status})`);
  }
  return json;
}

export async function exchangeYahooCode(code: string, origin: string): Promise<YahooSession> {
  const json = await tokenRequest(new URLSearchParams({
    code,
    redirect_uri: yahooRedirectUri(origin),
    grant_type: "authorization_code",
  }));

  if (!json.refresh_token) throw new Error("Yahoo did not return a refresh token");
  return {
    accessToken: json.access_token!,
    refreshToken: json.refresh_token,
    expiresAt: Date.now() + Math.max(60, json.expires_in ?? 3600) * 1000,
    tokenType: json.token_type || "bearer",
  };
}

export async function refreshYahooSession(session: YahooSession, origin: string): Promise<YahooSession> {
  const json = await tokenRequest(new URLSearchParams({
    refresh_token: session.refreshToken,
    redirect_uri: yahooRedirectUri(origin),
    grant_type: "refresh_token",
  }));

  return {
    accessToken: json.access_token!,
    refreshToken: json.refresh_token || session.refreshToken,
    expiresAt: Date.now() + Math.max(60, json.expires_in ?? 3600) * 1000,
    tokenType: json.token_type || session.tokenType || "bearer",
  };
}

export async function ensureFreshYahooSession(session: YahooSession, origin: string) {
  if (session.expiresAt - Date.now() > 60_000) {
    return { session, refreshed: false };
  }
  return { session: await refreshYahooSession(session, origin), refreshed: true };
}

export async function yahooFantasyRequest(path: string, session: YahooSession, origin: string) {
  const fresh = await ensureFreshYahooSession(session, origin);
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`${YAHOO_FANTASY_BASE}/${path}${separator}format=json`, {
    headers: {
      authorization: `Bearer ${fresh.session.accessToken}`,
      accept: "application/json",
    },
    cache: "no-store",
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Yahoo Fantasy API failed (${response.status}): ${text.slice(0, 240)}`);
  }

  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  return { data, session: fresh.session, refreshed: fresh.refreshed };
}

export async function hasYahooConnection() {
  const store = await cookies();
  return Boolean(store.get(YAHOO_SESSION_COOKIE)?.value);
}

export async function getYahooSessionFromCookies() {
  const store = await cookies();
  const encrypted = store.get(YAHOO_SESSION_COOKIE)?.value;
  if (!encrypted) return null;
  return decryptYahooSession(encrypted);
}
