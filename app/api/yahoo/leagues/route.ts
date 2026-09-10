import { NextRequest, NextResponse } from "next/server";
import {
  YAHOO_SESSION_COOKIE,
  decryptYahooSession,
  encryptYahooSession,
  yahooFantasyEnabled,
  yahooFantasyRequest,
} from "@/lib/yahoo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!yahooFantasyEnabled()) {
    return NextResponse.json({ ok: false, error: "Yahoo Fantasy access is still in provisioning mode" }, { status: 503 });
  }

  const encrypted = request.cookies.get(YAHOO_SESSION_COOKIE)?.value;
  if (!encrypted) {
    return NextResponse.json({ ok: false, error: "Yahoo is not connected" }, { status: 401 });
  }

  try {
    const currentSession = decryptYahooSession(encrypted);
    const result = await yahooFantasyRequest(
      "users;use_login=1/games;game_codes=nfl;seasons=2026/leagues",
      currentSession,
      request.nextUrl.origin,
    );

    const response = NextResponse.json({ ok: true, season: 2026, data: result.data });
    if (result.refreshed) {
      response.cookies.set(YAHOO_SESSION_COOKIE, encryptYahooSession(result.session), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 180,
      });
    }
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yahoo league sync failed";
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
