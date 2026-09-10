import { NextResponse } from "next/server";
import { savePushSubscription } from "@/lib/push";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const subscription = await request.json();
    if (!subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) {
      return NextResponse.json({ ok: false, error: "Invalid push subscription." }, { status: 400 });
    }
    await savePushSubscription(subscription);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Could not save push subscription." },
      { status: 500 },
    );
  }
}
