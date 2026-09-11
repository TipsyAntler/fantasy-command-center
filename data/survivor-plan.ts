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
  asOf: "Sep 11, 2026 · Friday morning portfolio review",
  headline: "Portfolio lean: 2 LAC / 1 JAX / 1 DET",
  summary:
    "The portfolio objective is not to make four copies of the single-entry favorite. Current research supports cheap diversification when the top alternatives are close, but not diversification at any price. LAC remains the best raw-survival anchor, JAX is close while carrying very little future-value cost, and DET adds a third independent Week 1 outcome with only a small current-week safety drop. A fourth unique team such as PHI currently gives up enough win probability that the extra diversification does not yet justify the dilution. Directional only until actual pool ownership, late injuries and market movement are checked before submission.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "Portfolio anchor. LAC remains the strongest raw Week 1 survival option and still grades as a strong full-season path in V1per41's model.",
    },
    {
      entryNumber: 2,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "The one deliberate duplicate. Keeping two entries on the best current path preserves portfolio quality while the other two entries diversify away from the Chargers upset scenario.",
    },
    {
      entryNumber: 3,
      team: "JAX",
      alternate: "LAC",
      confidence: "high",
      rationale: "JAX is very close to LAC in current and season-path quality, has minimal future opportunity cost, and protects the portfolio if Arizona upsets the Chargers.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "medium",
      rationale: "DET creates a third independent game outcome and materially cuts single-upset concentration while remaining near the top survival tier. The cost is meaningful future value, so this entry remains the most ownership-sensitive assignment before lock.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Optimize jointly for the chance at least one of four entries survives the season, not merely the expected number of Week 1 survivors.",
    },
    {
      label: "V1per41 model",
      state: "loaded",
      detail: "Core Week 1 hierarchy remains LAC/JAX at the top, with DET next. V1per's season-path model keeps LAC and JAX especially close after future value is considered.",
    },
    {
      label: "Multi-entry research",
      state: "loaded",
      detail: "Distinct paths improve portfolio survival when alternatives are close; convergence is still correct when the quality drop to another team is too steep. Current sweet spot is three unique Week 1 outcomes rather than forced four-way diversification.",
    },
    {
      label: "Pool ownership",
      state: "live",
      detail: "Commissioner sheet is the source of truth. Ownership can still move Entry 4 between DET/JAX or alter the LAC concentration before submission.",
    },
    {
      label: "Final injury + market audit",
      state: "pending",
      detail: "Required before this portfolio turns FINAL / green.",
    },
  ],
};
