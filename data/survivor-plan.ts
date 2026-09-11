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
  asOf: "Sep 11, 2026 · Friday morning working plan",
  headline: "Working split holds: 2 LAC / 2 JAX",
  summary:
    "V1per41's Friday update still ranks LAC and JAX as the two best Week 1 options. Current market pricing also keeps both clearly atop the safety tier, so there is no reason to disturb the balanced four-entry split yet. The plan remains directional until the final ownership, injury, market and duplicate-history audit is complete.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "V1per41 still has LAC among the top two Week 1 options, and the Chargers remain the strongest current moneyline favorite. Keep one of the portfolio anchors on the highest raw survival probability.",
    },
    {
      entryNumber: 2,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "A second LAC entry preserves the portfolio's emphasis on the strongest Week 1 survival probability while still leaving half the portfolio diversified to Jacksonville.",
    },
    {
      entryNumber: 3,
      team: "JAX",
      alternate: "LAC",
      confidence: "high",
      rationale: "Jacksonville remains V1per41's other top Week 1 option and a substantial favorite, giving the four-entry portfolio meaningful diversification without a large survival-probability sacrifice.",
    },
    {
      entryNumber: 4,
      team: "JAX",
      alternate: "LAC",
      confidence: "high",
      rationale: "Second JAX allocation keeps the portfolio balanced between the two consensus top choices pending final ownership and late injury/market information.",
    },
  ],
  inputs: [
    {
      label: "V1per41 model",
      state: "loaded",
      detail: "Friday update: LAC and JAX remain his best Week 1 options; PHI and PIT follow. He does not expect to post his normal Sunday-morning update this week.",
    },
    {
      label: "Pool ownership",
      state: "live",
      detail: "Commissioner sheet remains the ownership/history source; no portfolio-changing ownership signal has been established in this check.",
    },
    {
      label: "Final injury + market audit",
      state: "pending",
      detail: "Required before the four-entry portfolio turns FINAL.",
    },
  ],
};
