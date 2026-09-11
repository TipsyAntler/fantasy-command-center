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
  asOf: "Sep 11, 2026 · Friday 9 AM ET portfolio review",
  headline: "Portfolio lean: 2 LAC / 1 JAX / 1 DET",
  summary:
    "The portfolio objective is to maximize the chance at least one of four entries survives the full pool, not to make four copies of the single-entry favorite. Friday market pricing still makes LAC and JAX the two strongest raw-survival choices. V1per41's Friday update also keeps LAC/JAX as his best options, followed by PHI/PIT rather than DET. The DET assignment is therefore not a single-entry ranking call; it is an intentional cross-entry hedge. At roughly current market win rates, using three independent Week 1 outcomes (LAC/JAX/DET) materially lowers the chance that one upset wipes out all four entries versus a pure 2 LAC / 2 JAX split, while two LAC entries preserve expected survivors. DET's higher future value makes Entry 4 the most sensitive assignment and it can still move back to JAX if ownership or late market/injury information makes the hedge too expensive. Directional only until ownership, late injuries, current lines and entry-history checks are complete.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "high",
      rationale: "Portfolio anchor. LAC remains the strongest raw Week 1 survival option at roughly 80-85% across current market/model sources, with manageable future-value cost.",
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
      rationale: "JAX remains very close to LAC in current survival probability, carries little future opportunity cost, and protects the portfolio from a Chargers-specific upset.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "medium",
      rationale: "Portfolio hedge, not the fourth-best single-entry pick. Detroit gives up some Week 1 safety and has more future value than JAX, but creates a third independent outcome and sharply reduces the risk that one LAC/JAX upset scenario takes down the entire four-entry portfolio. Revert this entry to JAX if ownership or late information makes the diversification cost too high.",
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
      detail: "Friday update says LAC and JAX remain the best Week 1 options, now followed by PHI and PIT. V1per41 does not plan a normal Sunday update this week.",
    },
    {
      label: "Current market/model safety",
      state: "live",
      detail: "Current sources price LAC around 80-85% and JAX around 77-81% to win; Detroit remains in the next safety tier around the mid-70s. LAC/JAX remain the raw-safety core.",
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
      detail: "Required before this portfolio turns FINAL / green.",
    },
  ],
};
