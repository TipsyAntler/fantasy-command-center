import { NextResponse } from "next/server";
import { sendFfccPush, type FfccPushAlert } from "@/lib/push";

export const dynamic = "force-dynamic";

function authorized(request: Request) {
  const token = process.env.FFCC_PUSH_SEND_TOKEN;
  if (!token) return false;
  const header = request.headers.get("authorization");
  return header === `Bearer ${token}`;
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const alert = await request.json() as FfccPushAlert;
    if (!alert?.title || !alert?.body || !alert?.url) {
      return NextResponse.json({ ok: false, error: "Missing alert fields." }, { status: 400 });
    }
    if (!(["breaking", "actionable"] as const).includes(alert.severity)) {
      return NextResponse.json({ ok: false, error: "FFCC push is reserved for actionable alerts." }, { status: 400 });
    }
    await sendFfccPush(alert);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Push failed." },
      { status: 500 },
    );
  }
}
