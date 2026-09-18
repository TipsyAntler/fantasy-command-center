import { NextResponse } from "next/server";
import { sendPushTo } from "@/lib/push";

export const dynamic = "force-dynamic";

function authorized(request: Request) {
  const token = process.env.FFCC_PUSH_SEND_TOKEN;
  if (!token) return false;
  return request.headers.get("authorization") === `Bearer ${token}`;
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const alert = await request.json();
    if (!alert?.title || !alert?.body) {
      return NextResponse.json({ ok: false, error: "Missing alert fields." }, { status: 400 });
    }

    await sendPushTo("triq", {
      title: String(alert.title),
      body: String(alert.body),
      url: String(alert.url || "https://tridente-family-hq.vercel.app/"),
      tag: alert.tag ? String(alert.tag) : undefined,
      category: alert.category ? String(alert.category) : "family",
      severity: alert.severity ? String(alert.severity) : "actionable",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "TrIQ push failed." },
      { status: 500 },
    );
  }
}
