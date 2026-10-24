import { NextResponse } from "next/server";
import { sendPushToOnce, triqMoneyBridgeAuthorized } from "@/lib/push";

export const dynamic = "force-dynamic";

const COPY: Record<string, { title: string; fallback: string }> = {
  transfer_due: { title: "TrIQ · Transfer due", fallback: "A planned household transfer is due. Open Money for the latest status." },
  underfunded: { title: "TrIQ · Funding needed", fallback: "A household bill is approaching without enough usable Joint funding. Open Money." },
  missed_bill: { title: "TrIQ · Bill needs attention", fallback: "A scheduled household bill looks missed or unresolved. Open Money to review it." },
  card_risk: { title: "TrIQ · Card check", fallback: "A purchase card looks inconsistent with the pay-in-full plan. Open Money to review it." },
  cashflow_risk: { title: "TrIQ · Cash-flow check", fallback: "The household cash-flow plan needs attention. Open Money for the latest status." },
  future_you: { title: "TrIQ · Future You expense", fallback: "A possible Future You-eligible expense was found. Review Money before moving savings." },
  test: { title: "TrIQ · Money alerts are live", fallback: "The Money Watch can now send actionable alerts to this phone." },
};

const FUTURE_YOU_BUCKETS = new Set(["home", "kids", "vacation", "gifts"]);
const FUTURE_YOU_QUERY_KEYS = new Set(["token", "event", "bucket", "fingerprint"]);

function clean(value: string | null, max = 60) {
  return String(value || "").replace(/[\r\n\t]+/g, " ").replace(/[^a-zA-Z0-9%&+().,\'’\- →/]/g, "").trim().slice(0, max);
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    if (!(await triqMoneyBridgeAuthorized(token))) return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    const event = String(url.searchParams.get("event") || "").toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 30);
    const copy = COPY[event];
    if (!copy) return NextResponse.json({ ok: false, error: "Unknown money alert event." }, { status: 400 });

    if (event === "future_you") {
      // The URL is logged by intermediaries. Accept only a broad bucket and a
      // truncated SHA-256 of a stable posted-transaction identity; NEVER send
      // amounts, merchant names, account numbers, raw transaction IDs or balances.
      const keys = [...url.searchParams.keys()];
      if (keys.some((key) => !FUTURE_YOU_QUERY_KEYS.has(key)) || new Set(keys).size !== keys.length) {
        return NextResponse.json({ ok: false, error: "Unsupported Future You alert parameters." }, { status: 400 });
      }
      const bucket = String(url.searchParams.get("bucket") || "").toLowerCase();
      const fingerprint = String(url.searchParams.get("fingerprint") || "").toLowerCase();
      if (!FUTURE_YOU_BUCKETS.has(bucket) || !/^[a-f0-9]{24}$/.test(fingerprint)) {
        return NextResponse.json({ ok: false, error: "Invalid Future You bucket or fingerprint." }, { status: 400 });
      }
      // A transaction keeps the same ID even if its classification changes.
      // A per-transaction tag also prevents iOS from visually replacing prior alerts.
      const alertId = `triq-money-future-you-${fingerprint}`;
      const sent = await sendPushToOnce("triq", alertId, {
        title: copy.title, body: copy.fallback,
        url: "https://tridente-family-hq.vercel.app/",
        tag: alertId, category: "money", severity: "actionable",
      });
      return NextResponse.json({
        ok: true, sent, event,
        // Push-provider acceptance is not proof the phone displayed the alert.
        delivery: sent ? "accepted_by_push_provider" : "already_processed",
      }, { headers: { "Cache-Control": "no-store" } });
    }

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
