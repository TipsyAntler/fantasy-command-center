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

// This is the human-reviewed working portfolio, not an automatic market ranking.
// Update it whenever new V1per41 work, pool ownership, injuries, market movement,
// future-value analysis or Mike's input materially changes the recommended split.
// Switch status to "final" only when the four entry assignments are ready to submit.
export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 1,
  status: "directional",
  asOf: "Sep 10, 2026 · working plan",
  headline: "Working split: 2 LAC / 2 JAX",
  summary:
    "LAC remains the mathematical default, while JAX is the close alternative for deliberate multi-entry diversification. This split is directional until the final ownership, injury and market audit is complete.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "V1per41's top Week 1 path: strongest current survival probability and a slight edge even after the near-term future-value check.",
    },
    {
      entryNumber: 2,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "A second LAC entry keeps the portfolio anchored to the strongest season-aware Week 1 path rather than diversifying just for variety.",
    },
    {
      entryNumber: 3,
      team: "JAX",
      alternate: "LAC",
      confidence: "medium",
      rationale: "JAX is the closest conventional alternative and gives the four-entry portfolio meaningful diversification without a large survival-probability sacrifice.",
    },
    {
      entryNumber: 4,
      team: "JAX",
      alternate: "LAC",
      confidence: "medium",
      rationale: "Second JAX allocation keeps the current working portfolio balanced while we wait for final pool ownership and late-week information.",
    },
  ],
  inputs: [
    {
      label: "V1per41 model",
      state: "loaded",
      detail: "Week 1 model and future-value comparison loaded",
    },
    {
      label: "Pool ownership",
      state: "live",
      detail: "Commissioner-sheet ownership is available when Google sync is healthy",
    },
    {
      label: "Final injury + market audit",
      state: "pending",
      detail: "Required before the portfolio turns green / FINAL",
    },
  ],
};
