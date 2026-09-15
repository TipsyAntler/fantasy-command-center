import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  YAHOO_STATE_COOKIE,
  yahooAuthorizationUrl,
  yahooCredentialsConfigured,
  yahooFantasyEnabled,
} from "@/lib/yahoo";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    if (!yahooFantasyEnabled()) {
      throw new Error("Yahoo Fantasy access is still in provisioning mode");
    }
    if (!yahooCredentialsConfigured()) {
      const requiredVariables = [
        "YAHOO_CLIENT_ID",
        "YAHOO_CLIENT_SECRET",
        "YAHOO_TOKEN_SECRET",
      ] as const;
      const missing = requiredVariables.filter((name) => !process.env[name]);
      throw new Error(
        missing.length
          ? `Yahoo OAuth is missing server environment variable(s): ${missing.join(", ")}`
          : "Yahoo OAuth credentials are not configured in the server environment",
      );
    }

    const state = randomBytes(24).toString("base64url");
    const response = NextResponse.redirect(yahooAuthorizationUrl(request.nextUrl.origin, state));
    response.cookies.set(YAHOO_STATE_COOKIE, state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 10 * 60,
    });
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Yahoo OAuth is not ready";
    return NextResponse.redirect(new URL(`/settings?yahoo=error&message=${encodeURIComponent(message)}`, request.url));
  }
}
