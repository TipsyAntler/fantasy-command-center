import { NextRequest, NextResponse } from "next/server";
import { YAHOO_SESSION_COOKIE } from "@/lib/yahoo";
import { getBrowserYahooSession } from "@/lib/yahoo-store";
import { getLeague, LEAGUES } from "@/lib/yahoo-scout";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const encrypted = request.cookies.get(YAHOO_SESSION_COOKIE)?.value;
  if (!encrypted) return NextResponse.json({
    ok: false, error: "Yahoo is not connected in this browser. Open Settings and connect Yahoo.",
  }, { status: 401, headers: { "Cache-Control": "private, no-store" } });
  try {
    const session = await getBrowserYahooSession(encrypted, request.nextUrl.origin);
    if (!session) throw new Error("Yahoo session unavailable");
    const selected = request.nextUrl.searchParams.get("league")?.toUpperCase();
    const requested = selected && selected !== "ALL"
      ? LEAGUES.filter((league) => league.short === selected)
      : LEAGUES;
    if (!requested.length) return NextResponse.json({ ok: false, error: "Unknown league" }, { status: 400 });
    const leagues = await Promise.all(requested.map((league) =>
      getLeague(league.id, league.short, league.expectedTeam, session, request.nextUrl.origin)));
    return NextResponse.json({
      ok: true, fetchedAt: new Date().toISOString(), leagues,
      mode: "read-only",
      caveat: "Yahoo player ranks are not weekly projections. Advice only; no roster or lineup changes are possible in FFCC.",
    }, { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yahoo scout failed";
    return NextResponse.json({ ok: false, error: /invalid refresh token/i.test(message)
      ? "Yahoo session needs reconnecting. Disconnect Yahoo in Settings, then reconnect once."
      : message }, { status: 502, headers: { "Cache-Control": "private, no-store" } });
  }
}
