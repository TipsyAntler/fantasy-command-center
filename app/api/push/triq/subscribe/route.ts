import { NextResponse } from "next/server";
import { savePushSubscriptionFor } from "@/lib/push";

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

    const subscription = await request.json();
    if (!subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) {
      return NextResponse.json({ ok: false, error: "Invalid push subscription." }, { status: 400, headers: cors });
    }

    await savePushSubscriptionFor("triq", subscription);
    return NextResponse.json({ ok: true }, { headers: cors });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not save TrIQ push subscription." },
      { status: 500, headers: cors },
    );
  }
}
