import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_STATE_COOKIE, GOOGLE_TOKEN_COOKIE } from "@/lib/google-survivor";

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/survivor?google=disconnected", request.url));
  response.cookies.delete(GOOGLE_TOKEN_COOKIE);
  response.cookies.delete(GOOGLE_STATE_COOKIE);
  return response;
}
