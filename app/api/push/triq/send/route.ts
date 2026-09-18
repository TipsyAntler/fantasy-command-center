import { NextResponse } from "next/server";
import { sendPushTo } from "@/lib/push";

export const dynamic = "force-dynamic";

const ALLOWED_CATEGORIES = new Set(["money", "kids", "house", "system"]);

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

    const category = String(alert.category || "").toLowerCase().trim();
    if (!ALLOWED_CATEGORIES.has(category)) {
      return NextResponse.json(
        {
          ok: false,
          blocked: true,
          error: category === "calendar"
            ? "Calendar push is disabled in TrIQ. Google Calendar owns event notifications."
            : "This TrIQ push category is not enabled.",
          allowedCategories: [...ALLOWED_CATEGORIES],
        },
        { status: 400 },
      );
    }

    await sendPushTo("triq", {
      title: String(alert.title),
      body: String(alert.body),
      url: String(alert.url || "https://tridente-family-hq.vercel.app/"),
      tag: alert.tag ? String(alert.tag) : undefined,
      category,
      severity: alert.severity ? String(alert.severity) : "actionable",
    });

    return NextResponse.json({ ok: true, category });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "TrIQ push failed." },
      { status: 500 },
    );
  }
}
