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
  asOf: "Sep 13, 2026 · Sunday 12:15 PM ET · submitted / monitored",
  headline: "FINAL / SUBMITTED: 2 LAC / 1 JAX / 1 DET",
  summary:
    "Week 1 portfolio remains submitted and unchanged: Entry 1 LAC, Entry 2 LAC, Entry 3 JAX, Entry 4 DET. The portfolio objective is to maximize the chance at least one of four entries survives the full pool while preserving expected survivors and future inventory. V1per41's current Week 1 post ranks LAC first at 81% current-week win probability, JAX second at 75%, and DET third at 73%, matching the portfolio's three-team structure. His full-season model also slightly prefers the LAC Week 1 path to JAX when looking through Week 2. No Sunday injury, market, duplicate-history, or portfolio-correlation signal is strong enough to alter the already-submitted 2/1/1 allocation.",
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
      rationale: "JAX remains the clear second anchor and V1per41's current Week 1 model still ranks Jacksonville second behind LAC.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "medium",
      rationale: "Intentional portfolio hedge. Detroit remains V1per41's third-ranked current-week option and supplies a third independent outcome without enough survival-cost gap to justify reconverging.",
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
      detail: "Current Week 1 post ranks LAC 81% / JAX 75% / DET 73% for this week's win probability. The recommended full-season path begins LAC in Week 1; no Sunday update changes the submitted portfolio.",
    },
    {
      label: "Current market/model safety",
      state: "loaded",
      detail: "Sunday pricing and V1per41's current-week probabilities continue to rank LAC first, JAX second, and DET in the next safety tier. No late move warrants changing the 2/1/1 split.",
    },
    {
      label: "Cross-entry correlation",
      state: "loaded",
      detail: "The 2 LAC / 1 JAX / 1 DET structure keeps the strongest favorite duplicated while adding two independent alternatives, balancing expected survivors against single-upset portfolio risk.",
    },
    {
      label: "Pool ownership + entry history",
      state: "loaded",
      detail: "Week 1 had no prior used-team conflict for any entry. No duplicate-history restriction blocked LAC, JAX, or DET.",
    },
    {
      label: "Final injury + market audit",
      state: "loaded",
      detail: "Completed before submission and monitored again Sunday. No available Week 1 news changed LAC/JAX/DET materially enough to alter the portfolio.",
    },
    {
      label: "Submission",
      state: "loaded",
      detail: "User confirmed all four Week 1 picks submitted Friday at approximately 3:14 PM ET: LAC / LAC / JAX / DET.",
    },
  ],
};
