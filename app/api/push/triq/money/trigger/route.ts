import { NextResponse } from "next/server";
import { sendPushToOnce, triqMoneyBridgeAuthorized } from "@/lib/push";

export const dynamic = "force-dynamic";

const COPY: Record<string, { title: string; fallback: string }> = {
  transfer_due: { title: "TrIQ · Transfer due", fallback: "A planned household transfer is due. Open Money for the latest status." },
  underfunded: { title: "TrIQ · Funding needed", fallback: "A household bill is approaching without enough usable Joint funding. Open Money." },
  missed_bill: { title: "TrIQ · Bill needs attention", fallback: "A scheduled household bill looks missed or unresolved. Open Money to review it." },
  card_risk: { title: "TrIQ · Card check", fallback: "A purchase card looks inconsistent with the pay-in-full plan. Open Money to review it." },
  cashflow_risk: { title: "TrIQ · Cash-flow check", fallback: "The household cash-flow plan needs attention. Open Money for the latest status." },
  test: { title: "TrIQ · Money alerts are live", fallback: "The Money Watch can now send actionable alerts to this phone." },
};

function clean(value: string | null, max = 60) {
  return String(value || "").replace(/[\r\n\t]+/g, " ").replace(/[^a-zA-Z0-9%&+().,\'’\- →/]/g, "").trim().slice(0, max);
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    if (!(await triqMoneyBridgeAuthorized(token))) return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    const event = clean(url.searchParams.get("event"), 30).toLowerCase();
    const copy = COPY[event];
    if (!copy) return NextResponse.json({ ok: false, error: "Unknown money alert event." }, { status: 400 });
    const item = clean(url.searchParams.get("item"), 60);
    const cycle = clean(url.searchParams.get("cycle"), 40) || new Date().toISOString().slice(0, 10);
    let body = copy.fallback;
    if (item && event === "transfer_due") body = `${item} is due. Open Money to confirm it’s handled.`;
    else if (item && event === "underfunded") body = `${item} is approaching without enough usable Joint funding. Open Money.`;
    else if (item && event === "missed_bill") body = `${item} looks missed or unresolved. Open Money to review it.`;
    const alertId = `triq-money-${event}-${item || "general"}-${cycle}`.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
    const sent = await sendPushToOnce("triq", alertId, {
      title: copy.title, body, url: "https://tridente-family-hq.vercel.app/",
      tag: `triq-money-${event}`, category: "money", severity: "actionable",
    });
    return NextResponse.json({ ok: true, sent, event });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Money push failed." }, { status: 500 });
  }
}
