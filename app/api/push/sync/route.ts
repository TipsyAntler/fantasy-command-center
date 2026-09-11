import { NextResponse } from "next/server";
import { actionableAlerts } from "@/data/actionable-alerts";
import { sendFfccPushOnce, type FfccPushAlert } from "@/lib/push";

export const dynamic = "force-dynamic";

function categoryForPush(category: string): FfccPushAlert["category"] {
  if (category === "Survivor") return "survivor";
  if (category === "Pick'em") return "pickem";
  return "fantasy";
}

export async function GET() {
  const active = actionableAlerts.filter((alert) => alert.active);
  const results: Array<{ id: string; sent: boolean; error?: string }> = [];

  for (const alert of active) {
    try {
      const sent = await sendFfccPushOnce(alert.id, {
        category: categoryForPush(alert.category),
        severity: "breaking",
        title: `FFCC · ${alert.category}`,
        body: `${alert.headline} — ${alert.detail}`,
        url: alert.href,
        tag: `ffcc-${alert.id}`,
      });
      results.push({ id: alert.id, sent });
    } catch (error) {
      results.push({
        id: alert.id,
        sent: false,
        error: error instanceof Error ? error.message : "Push failed.",
      });
    }
  }

  return NextResponse.json({
    ok: results.every((result) => !result.error),
    active: active.length,
    sent: results.filter((result) => result.sent).length,
    results,
  });
}
