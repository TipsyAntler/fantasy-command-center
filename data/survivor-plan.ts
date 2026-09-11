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
  asOf: "Sep 11, 2026 · Friday 3:11 PM ET final pre-deadline audit",
  headline: "FINAL: 2 LAC / 1 JAX / 1 DET",
  summary:
    "FINAL Week 1 portfolio: Entry 1 LAC, Entry 2 LAC, Entry 3 JAX, Entry 4 DET. The portfolio objective is to maximize the chance at least one of four entries survives the full pool while preserving expected survivors and future inventory. LAC remains the strongest raw Week 1 survival option, JAX remains the clear second anchor, and DET remains close enough in win probability to justify the correlation reduction from adding a third independent outcome. V1per41's Friday update still identifies LAC and JAX as the best Week 1 options and does not introduce a late change. Jacksonville's final Friday report has no new major offensive absence: Montaric Brown and Wyatt Milum are out, while Cole Van Lanen is questionable. Current market pricing continues to support the hierarchy, with LAC around the mid--500s, JAX roughly -400 to -470, and DET roughly -300 to -330. No late injury, market, duplicate-history, or portfolio-correlation signal is strong enough to alter the 2/1/1 allocation before the 4 PM deadline.",
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
      rationale: "JAX remains the clear second anchor. The final Friday injury report does not create a meaningful downgrade, and Jacksonville still carries strong current-week safety with modest future-value cost.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "medium",
      rationale: "Intentional portfolio hedge. Detroit gives up some raw Week 1 safety versus a second JAX entry but creates a third independent outcome and materially lowers the risk that one upset wipes out multiple entries, without a large enough survival-cost gap to justify reconverging.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Optimize jointly for the chance at least one of four entries survives the season, with expected survivors and per-entry path quality as secondary objectives.",
    },
    {
      label: "V1per41 Friday update",
      state: "loaded",
      detail: "Latest Friday guidance still has LAC and JAX as the best Week 1 options. No later post materially changes the recommendation before the deadline.",
    },
    {
      label: "Current market/model safety",
      state: "loaded",
      detail: "Current pricing still clearly ranks LAC first, JAX second, and DET in the next safety tier. No late market move warrants changing the 2/1/1 split.",
    },
    {
      label: "Cross-entry correlation",
      state: "loaded",
      detail: "The 2 LAC / 1 JAX / 1 DET structure keeps the strongest favorite duplicated while adding two independent alternatives, balancing expected survivors against single-upset portfolio risk.",
    },
    {
      label: "Pool ownership + entry history",
      state: "loaded",
      detail: "Week 1 has no prior used-team conflict for any entry. No duplicate-history restriction blocks LAC, JAX, or DET.",
    },
    {
      label: "Final injury + market audit",
      state: "loaded",
      detail: "Completed Friday afternoon before the 4 PM submission deadline. Jacksonville's final report shows no new major offensive absence; no available late information changes LAC/JAX/DET materially enough to alter the portfolio.",
    },
  ],
};
