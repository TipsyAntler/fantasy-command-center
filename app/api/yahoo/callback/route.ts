import { NextRequest, NextResponse } from "next/server";
import {
  YAHOO_SESSION_COOKIE,
  YAHOO_STATE_COOKIE,
  encryptYahooSession,
  exchangeYahooCode,
} from "@/lib/yahoo";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const returnedError = request.nextUrl.searchParams.get("error");
  const expectedState = request.cookies.get(YAHOO_STATE_COOKIE)?.value;

  if (returnedError) {
    return NextResponse.redirect(new URL(`/settings?yahoo=error&message=${encodeURIComponent(returnedError)}`, request.url));
  }

  if (!code || !state || !expectedState || state !== expectedState) {
    return NextResponse.redirect(new URL("/settings?yahoo=error&message=OAuth%20state%20check%20failed", request.url));
  }

  try {
    const session = await exchangeYahooCode(code, request.nextUrl.origin);
    const response = NextResponse.redirect(new URL("/settings?yahoo=connected", request.url));
    response.cookies.set(YAHOO_SESSION_COOKIE, encryptYahooSession(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 180,
    });
    response.cookies.delete(YAHOO_STATE_COOKIE);
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yahoo OAuth failed";
    return NextResponse.redirect(new URL(`/settings?yahoo=error&message=${encodeURIComponent(message)}`, request.url));
  }
}
