import { NextRequest, NextResponse } from "next/server";
import { YAHOO_SESSION_COOKIE, YAHOO_STATE_COOKIE } from "@/lib/yahoo";
import { clearServerYahooSession } from "@/lib/yahoo-store";

// Disconnect is a state-changing action; never allow cross-site GET requests
// to erase the shared read-only monitoring session.
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin ||
      !request.cookies.get(YAHOO_SESSION_COOKIE)?.value) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  try {
    await clearServerYahooSession();
  } catch {
    return NextResponse.json({ error: "Could not clear persistent Yahoo connection" }, { status: 503 });
  }
  const response = NextResponse.redirect(new URL("/settings?yahoo=disconnected", request.url), 303);
  response.cookies.delete(YAHOO_SESSION_COOKIE);
  response.cookies.delete(YAHOO_STATE_COOKIE);
  return response;
}
