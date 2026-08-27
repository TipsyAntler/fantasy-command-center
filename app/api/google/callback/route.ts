import { NextRequest, NextResponse } from "next/server";
import {
  GOOGLE_STATE_COOKIE,
  GOOGLE_TOKEN_COOKIE,
  encryptRefreshToken,
  googleRedirectUri,
} from "@/lib/google-survivor";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const returnedError = request.nextUrl.searchParams.get("error");
  const expectedState = request.cookies.get(GOOGLE_STATE_COOKIE)?.value;

  if (returnedError) {
    return NextResponse.redirect(new URL(`/survivor?google=error&message=${encodeURIComponent(returnedError)}`, request.url));
  }
  if (!code || !state || !expectedState || state !== expectedState) {
    return NextResponse.redirect(new URL("/survivor?google=error&message=OAuth%20state%20check%20failed", request.url));
  }

  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    if (!clientId || !clientSecret) throw new Error("Google OAuth credentials are missing");

    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: googleRedirectUri(request.nextUrl.origin),
        grant_type: "authorization_code",
      }),
      cache: "no-store",
    });

    const json = await response.json() as { refresh_token?: string; error_description?: string };
    if (!response.ok) throw new Error(json.error_description || `Google token exchange failed (${response.status})`);
    if (!json.refresh_token) throw new Error("Google did not return a refresh token. Reconnect and approve access again.");

    const redirect = NextResponse.redirect(new URL("/survivor?google=connected", request.url));
    redirect.cookies.set(GOOGLE_TOKEN_COOKIE, encryptRefreshToken(json.refresh_token), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 180,
    });
    redirect.cookies.delete(GOOGLE_STATE_COOKIE);
    return redirect;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Google OAuth failed";
    return NextResponse.redirect(new URL(`/survivor?google=error&message=${encodeURIComponent(message)}`, request.url));
  }
}
