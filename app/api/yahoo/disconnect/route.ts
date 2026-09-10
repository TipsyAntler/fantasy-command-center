import { NextRequest, NextResponse } from "next/server";
import { YAHOO_SESSION_COOKIE, YAHOO_STATE_COOKIE } from "@/lib/yahoo";

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/settings?yahoo=disconnected", request.url));
  response.cookies.delete(YAHOO_SESSION_COOKIE);
  response.cookies.delete(YAHOO_STATE_COOKIE);
  return response;
}
