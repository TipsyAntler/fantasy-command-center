export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = {
  entryNumber: 1 | 2 | 3 | 4;
  team: string;
  alternate?: string;
  confidence: "high" | "medium" | "low";
  rationale: string;
};

export type SurvivorPlanInput = {
  label: string;
  state: "loaded" | "live" | "pending";
  detail: string;
};

export type SurvivorWeekPlan = {
  week: number;
  status: SurvivorPlanStatus;
  asOf: string;
  headline: string;
  summary: string;
  entries: SurvivorPlanEntry[];
  inputs: SurvivorPlanInput[];
};

// Human-reviewed four-entry portfolio plan.
// Primary objective: maximize the probability that at least one entry survives the season.
// Secondary objectives: preserve strong individual paths, expected survivors and future inventory.
// Same-team concentration is used only when the quality gap is worth the correlation risk.
// Switch status to "final" only after the last ownership/injury/market/history audit.
export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 1,
  status: "directional",
  asOf: "Sep 11, 2026 · Friday 10:25 AM ET portfolio review",
  headline: "Portfolio lean: 2 LAC / 1 JAX / 1 DET",
  summary:
    "The portfolio objective is to maximize the chance at least one of four entries survives the full pool, not to make four copies of the single-entry favorite. V1per41's latest Week 1 post now ranks LAC first (81%), JAX second (75%), DET third (73%), and PHI fourth (66%), which directly supports keeping DET as the fourth-entry hedge instead of treating it as a purely contrarian reach. Current market pricing still makes LAC and JAX the two strongest raw-survival choices, while DET remains close enough to provide meaningful cross-entry diversification. The 2 LAC / 1 JAX / 1 DET split therefore remains unchanged: two Chargers entries preserve expected survivors, while JAX and DET reduce the chance that one upset wipes out the entire portfolio. Directional only until the final Friday injury, ownership, market, duplicate-history, and cross-entry audit is complete before the 4 PM deadline.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "Portfolio anchor. LAC remains the strongest raw Week 1 survival option, and V1per41's latest post ranks the Chargers first at 81% win probability.",
    },
    {
      entryNumber: 2,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "The one deliberate duplicate. Keeping two entries on the best current path preserves expected survivors while Entries 3 and 4 diversify away from a Chargers upset.",
    },
    {
      entryNumber: 3,
      team: "JAX",
      alternate: "LAC",
      confidence: "high",
      rationale: "JAX remains very close to LAC in current survival probability, carries little future opportunity cost, and protects the portfolio from a Chargers-specific upset. V1per41 currently ranks Jacksonville second at 75%.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "medium",
      rationale: "Portfolio hedge with legitimate model support. V1per41's latest post ranks Detroit third at 73%, so the diversification no longer requires reaching outside his top tier. DET creates a third independent Week 1 outcome while giving up only modest raw safety versus JAX.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Optimize jointly for the chance at least one of four entries survives the season, with expected survivors and per-entry path quality as secondary objectives.",
    },
    {
      label: "V1per41 latest Week 1 post",
      state: "loaded",
      detail: "Latest post ranks LAC 81%, JAX 75%, DET 73%, PHI 66%. He says LAC and JAX are the only two teams he would normally consider, but DET is now clearly his third-ranked survival option and fits the portfolio hedge role.",
    },
    {
      label: "Current market/model safety",
      state: "live",
      detail: "Current sources continue to price LAC as the strongest favorite, JAX next, with DET in the next safety tier. No market move yet warrants changing the 2/1/1 split.",
    },
    {
      label: "Cross-entry correlation",
      state: "loaded",
      detail: "A pure 2 LAC / 2 JAX split has only two independent Week 1 outcomes. The current 2/1/1 structure adds a third independent outcome at a modest safety cost, supporting the primary at-least-one-survivor objective.",
    },
    {
      label: "Pool ownership + entry history",
      state: "live",
      detail: "Commissioner sheet remains the source of truth. Week 1 has no prior used-team conflict, but live ownership can still move Entry 4 between DET/JAX before submission.",
    },
    {
      label: "Final injury + market audit",
      state: "pending",
      detail: "Required before this portfolio turns FINAL / green. Friday game-status reports are still pending for several Sunday teams.",
    },
  ],
};
