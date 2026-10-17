import { NextResponse } from "next/server";
import { getPushSubscriptionsFor, triqMoneyBridgeAuthorized } from "@/lib/push";

export const dynamic = "force-dynamic";

/**
 * Private, read-only diagnostics. Never sends a push or returns subscription endpoints,
 * keys, tokens, balances, or other private data.
 */
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  try {
    if (!(await triqMoneyBridgeAuthorized(token))) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }
    const subscriptions = await getPushSubscriptionsFor("triq");
    const registered = subscriptions.length > 0;
    return NextResponse.json({
      ok: registered,
      store: "reachable",
      subscriptions: registered ? "registered" : "missing",
      // Registration does not prove delivery; only an actual provider send can.
      delivery: "not_tested",
      checkedAt: new Date().toISOString(),
    }, { status: registered ? 200 : 503, headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({
      ok: false, store: "unavailable", subscriptions: "unknown",
      delivery: "not_tested", checkedAt: new Date().toISOString(),
    }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
