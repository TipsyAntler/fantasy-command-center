import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_STATE_COOKIE, googleAuthorizationUrl } from "@/lib/google-survivor";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const state = randomBytes(24).toString("base64url");
    const response = NextResponse.redirect(googleAuthorizationUrl(request.nextUrl.origin, state));
    response.cookies.set(GOOGLE_STATE_COOKIE, state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 10 * 60,
    });
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Google OAuth is not configured";
    return NextResponse.redirect(new URL(`/survivor?google=error&message=${encodeURIComponent(message)}`, request.url));
  }
}
