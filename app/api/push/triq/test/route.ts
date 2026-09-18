import { NextResponse } from "next/server";
import { getPushSubscriptionFor, sendPushTo } from "@/lib/push";

export const dynamic = "force-dynamic";

const TRIQ_ORIGIN = "https://tridente-family-hq.vercel.app";
const cors = {
  "Access-Control-Allow-Origin": TRIQ_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Vary": "Origin",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: cors });
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (origin && origin !== TRIQ_ORIGIN) {
      return NextResponse.json({ ok: false, error: "Origin not allowed." }, { status: 403, headers: cors });
    }

    const { endpoint } = await request.json();
    const stored = await getPushSubscriptionFor("triq");
    if (!stored || !endpoint || stored.endpoint !== endpoint) {
      return NextResponse.json({ ok: false, error: "This device is not the registered TrIQ push device." }, { status: 403, headers: cors });
    }

    await sendPushTo("triq", {
      title: "TrIQ · Push is live",
      body: "Family HQ can reach this phone even when TrIQ is closed.",
      url: "https://tridente-family-hq.vercel.app/",
      tag: `triq-server-test-${Date.now()}`,
      category: "system",
      severity: "actionable",
    });

    return NextResponse.json({ ok: true }, { headers: cors });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "TrIQ server push test failed." },
      { status: 500, headers: cors },
    );
  }
}
