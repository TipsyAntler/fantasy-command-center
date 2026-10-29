import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getServerYahooSession } from "@/lib/yahoo-store";
import { getLeague, LEAGUES } from "@/lib/yahoo-scout";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = {
  "Cache-Control": "private, no-store, max-age=0",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
};
function authorized(request: NextRequest) {
  const secret = process.env.FFCC_MONITOR_READ_KEY;
  if (!secret || secret.length < 32) return false;
  // The Vercel fetch connector only supports URLs; accept a query capability
  // for the existing private hourly watcher, or an Authorization header.
  const provided = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ||
    request.nextUrl.searchParams.get("key") || "";
  const a = Buffer.from(secret);
  const b = Buffer.from(provided);
  return a.length === b.length && timingSafeEqual(a, b);
}
export async function GET(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404, headers });
  try {
    const session = await getServerYahooSession(request.nextUrl.origin);
    if (!session) return NextResponse.json({
      ok: false, error: "Yahoo needs one authenticated FFCC browser visit to initialize server sync",
    }, { status: 503, headers });
    const leagues = await Promise.all(LEAGUES.map((league) =>
      getLeague(league.id, league.short, league.expectedTeam, session, request.nextUrl.origin)));
    const complete = leagues.every((league) => league.starters.length > 0 && league.standings.length > 0);
    return NextResponse.json({
      ok: complete, fetchedAt: new Date().toISOString(),
      mode: "read-only", season: 2026, leagues,
      warning: complete ? undefined : "Partial Yahoo data; do not treat missing players as free agents or assume no lineup issues",
      rules: "Advice only. Never submit waiver claims, add/drop players, accept trades, or change lineups.",
    }, { status: complete ? 200 : 503, headers });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yahoo monitoring unavailable";
    return NextResponse.json({ ok: false, error: message.replace(/https?:\/\/\S+/g, "[endpoint]") }, { status: 502, headers });
  }
}
