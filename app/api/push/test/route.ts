import { NextResponse } from "next/server";
import { getPushSubscription, sendFfccPush } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { endpoint } = await request.json();
    const stored = await getPushSubscription();

    if (!stored || !endpoint || stored.endpoint !== endpoint) {
      return NextResponse.json({ ok: false, error: "This device is not the registered FFCC push device." }, { status: 403 });
    }

    await sendFfccPush({
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
