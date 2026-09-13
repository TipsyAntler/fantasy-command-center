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
  asOf: "Sep 13, 2026 · Sunday 7:58 PM ET · Week 1 survivor outcomes complete",
  headline: "FINAL RESULT: 2 OF 4 ADVANCE · JAX / DET LIVE · LAC / LAC ELIMINATED",
  summary:
    "Week 1 portfolio result: Entry 1 LAC eliminated, Entry 2 LAC eliminated, Entry 3 JAX advanced, Entry 4 DET advanced. Arizona upset the Chargers 26-14, wiping out the two deliberate same-team LAC exposures. Jacksonville beat Cleveland 34-10 and Detroit survived New Orleans 31-30 in overtime, so two independent entries advance to Week 2. The diversification hedge did exactly what it was designed to do: a single Chargers upset did not eliminate the entire four-entry portfolio. Week 2 planning must now treat JAX as used for Entry 3 and DET as used for Entry 4, with Entries 1 and 2 permanently eliminated.",
  entries: [
    {
      entryNumber: 1,
      team: "LAC",
      alternate: "JAX",
      confidence: "low",
      rationale: "ELIMINATED: Arizona upset the Chargers 26-14. This entry is out and should not receive future recommendations.",
    },
    {
      entryNumber: 2,
      team: "LAC",
      alternate: "JAX",
      confidence: "low",
      rationale: "ELIMINATED: Arizona upset the Chargers 26-14. The deliberate duplicate created a two-entry loss on the same upset; this entry is out and should not receive future recommendations.",
    },
    {
      entryNumber: 3,
      team: "JAX",
      alternate: "LAC",
      confidence: "high",
      rationale: "ADVANCED: Jacksonville beat Cleveland 34-10. Entry 3 moves to Week 2 with JAX recorded as used and unavailable for this entry going forward.",
    },
    {
      entryNumber: 4,
      team: "DET",
      alternate: "JAX",
      confidence: "high",
      rationale: "ADVANCED: Detroit escaped New Orleans 31-30 in overtime. Entry 4 moves to Week 2 with DET recorded as used and unavailable for this entry going forward.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Two independent entries remain alive. Week 2 optimization should maximize the chance at least one of Entries 3 and 4 survives the season while preserving distinct future paths when diversification is cheap.",
    },
    {
      label: "Week 1 results",
      state: "loaded",
      detail: "LAC lost 26-14 to Arizona; JAX beat Cleveland 34-10; DET beat New Orleans 31-30 in overtime. Entries 1-2 are eliminated; Entries 3-4 advance.",
    },
    {
      label: "V1per41 Week 1 update",
      state: "loaded",
      detail: "Latest located Week 1 guidance still had LAC as the top raw survival option; no newer V1per41 post or spreadsheet update was located that could have changed the already-locked result.",
    },
    {
      label: "Cross-entry correlation",
      state: "loaded",
      detail: "The LAC upset eliminated both correlated entries, but the JAX and DET hedges preserved half of the portfolio. Future planning should explicitly account for the higher cost of same-team correlation now that only two entries remain.",
    },
    {
      label: "Used-team history",
      state: "loaded",
      detail: "Entry 3 used JAX in Week 1. Entry 4 used DET in Week 1. Those teams cannot be reused on their respective surviving entries. Entries 1 and 2 are eliminated.",
    },
    {
      label: "Submission",
      state: "loaded",
      detail: "User confirmed all four Week 1 picks submitted Friday at approximately 3:14 PM ET: LAC / LAC / JAX / DET.",
    },
  ],
};
