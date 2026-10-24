import { NextResponse } from "next/server";
import { getPushSubscriptionByEndpoint, sendPushToSubscription } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { endpoint } = await request.json();
    const stored = endpoint ? await getPushSubscriptionByEndpoint("ffcc", endpoint) : null;

    if (!stored) {
      return NextResponse.json({ ok: false, error: "This device has no matching FFCC push subscription. Reconnect This Device and try again." }, { status: 403 });
    }

    await sendPushToSubscription(stored, {
      category: "system",
      severity: "actionable",
      title: "FFCC · Push is live",
      body: "This came from the FFCC server, through web push, to your phone. Breaking alerts are fully connected.",
      url: "/",
      tag: `ffcc-server-test-${Date.now()}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Server push test failed." },
      { status: 500 },
    );
  }
}
