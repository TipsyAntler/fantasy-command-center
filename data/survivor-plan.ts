export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 4,
  status: "directional",
  asOf: "Sep 28, 2026 · Monday morning Week 4 market",
  headline: "WEEK 4 DIRECTIONAL: BALTIMORE LEADS FOR THE SOLE SURVIVING ENTRY",
  summary: "Entry 3 is the only live entry and enters Week 4 having used JAX, SF and KC. Baltimore is the clear early survivor candidate: a tracked BetMGM market opened BAL -8.5 vs Tennessee and moved rapidly into the -11/-11.5 range, with current moneyline pricing roughly -650 to -770 across major books. BAL is unused by Entry 3. This corrects the prior note that characterized -11.5 as the opener. The move toward Baltimore strengthens the early case, but the pick remains directional pending the Week 4 V1per41 post/workbook, ownership, injury reports and later market confirmation.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "BAL", confidence: "medium", rationale: "Early Week 4 leader. Baltimore moved from a tracked -8.5 opener to roughly -11/-11.5 at home against Tennessee, with moneyline pricing around -650 to -770, and remains available after Entry 3 used JAX, SF and KC. Hold as directional pending V1per41's Week 4 workbook, ownership, injuries and market confirmation." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2, KC Week 3. BAL remains available. Entries 1-2 and 4 are eliminated." },
    { label: "Early Week 4 market", state: "live", detail: "Tracked BetMGM opener was BAL -8.5 vs Tennessee, followed by a rapid move to about -11/-11.5. Current moneyline pricing is roughly -650 to -770 across major books. This corrects the prior plan's opening-line description and reinforces BAL as the strongest obvious early survivor candidate." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so optimize the single surviving path for full-season survival and future inventory; cross-entry diversification no longer applies." },
    { label: "V1per41 Week 4 post/workbook", state: "pending", detail: "No verified 2026 Week 4 V1per41 post/workbook has been incorporated yet. Do not finalize until the new post/workbook is available and its current probability matrix/formulas are audited." },
    { label: "Ownership/injury audit", state: "pending", detail: "Week 4 survivor ownership and full injury/practice information are not yet mature Monday morning." },
    { label: "Finalization gate", state: "pending", detail: "BAL is directional, not FINAL. Recheck V1per41, market, ownership, injuries and future-path opportunity cost before submission." },
  ],
};
