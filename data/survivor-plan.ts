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
  status: "final",
  asOf: "Sep 13, 2026 · Sunday 4:26 PM ET · live results monitored",
  headline: "FINAL / SUBMITTED: 2 LAC / 1 JAX / 1 DET · JAX ADVANCED",
  summary:
    "Week 1 portfolio remains submitted and unchanged: Entry 1 LAC, Entry 2 LAC, Entry 3 JAX, Entry 4 DET. Jacksonville has completed a 34-10 win over Cleveland, so Entry 3 is safely through Week 1. Detroit is still in progress against New Orleans and the two Chargers entries are beginning the late window against Arizona. No late injury, market, duplicate-history, or portfolio-correlation signal created an actionable change before those games locked.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "Portfolio anchor. LAC remains the strongest raw Week 1 survival option and the best place to accept one deliberate same-team correlation exposure.",
    },
    {
      entryNumber: 2,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "The one deliberate duplicate. Two Chargers entries preserve expected survivors while Entries 3 and 4 diversify away from a Chargers-specific upset.",
    },
    {
      entryNumber: 3,
      team: "JAX",
      alternate: "LAC",
      confidence: "high",
      rationale: "ADVANCED: Jacksonville beat Cleveland 34-10, validating the second portfolio anchor and safely moving Entry 3 through Week 1.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "medium",
      rationale: "Intentional portfolio hedge. Detroit remains the third independent outcome in the portfolio; its Week 1 game is in progress.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Optimize jointly for the chance at least one of four entries survives the season, with expected survivors and per-entry path quality as secondary objectives.",
    },
    {
      label: "V1per41 Week 1 update",
      state: "loaded",
      detail: "Current Week 1 post ranked LAC 81% / JAX 75% / DET 73% for this week's win probability. No newer post or spreadsheet update located that changes the submitted portfolio.",
    },
    {
      label: "Current market/model safety",
      state: "live",
      detail: "Jacksonville has already advanced with a 34-10 win. Detroit remains in progress and both Chargers entries have locked into the late window; there is no remaining pre-lock action on those entries.",
    },
    {
      label: "Cross-entry correlation",
      state: "loaded",
      detail: "The 2 LAC / 1 JAX / 1 DET structure kept the strongest favorite duplicated while adding two independent alternatives, balancing expected survivors against single-upset portfolio risk.",
    },
    {
      label: "Pool ownership + entry history",
      state: "loaded",
      detail: "Week 1 had no prior used-team conflict for any entry. No duplicate-history restriction blocked LAC, JAX, or DET.",
    },
    {
      label: "Final injury + market audit",
      state: "loaded",
      detail: "Completed before submission and monitored through Sunday lock. No available Week 1 news changed LAC/JAX/DET materially enough to alter the portfolio.",
    },
    {
      label: "Submission",
      state: "loaded",
      detail: "User confirmed all four Week 1 picks submitted Friday at approximately 3:14 PM ET: LAC / LAC / JAX / DET.",
    },
  ],
};
