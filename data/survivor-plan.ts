export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 4,
  status: "directional",
  asOf: "Sep 28, 2026 · early Week 4 market",
  headline: "WEEK 4 DIRECTIONAL: BALTIMORE LEADS FOR THE SOLE SURVIVING ENTRY",
  summary: "Entry 3 is the only live entry and enters Week 4 having used JAX, SF and KC. The first Week 4 market makes Baltimore the clear early survivor candidate: the Ravens opened roughly -11.5 at home against Tennessee with a moneyline around -575 to -700 across books. BAL is unused by Entry 3. This is directional only: the Week 4 V1per41 post/workbook, pool ownership, injury reports and later market movement have not yet been fully incorporated, so the pick is not FINAL.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "BAL", confidence: "medium", rationale: "Early Week 4 leader. Baltimore is an approximately 11-point home favorite over Tennessee and is available after Entry 3 used JAX, SF and KC. Hold as directional pending V1per41's Week 4 workbook, ownership, injuries and market confirmation." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2, KC Week 3. BAL remains available. Entries 1-2 and 4 are eliminated." },
    { label: "Early Week 4 market", state: "live", detail: "Baltimore opened about -11.5 vs Tennessee and moved near -11, with moneyline pricing roughly -575 to -700 across books, making BAL the strongest obvious early survivor candidate." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so optimize the single surviving path for full-season survival and future inventory; cross-entry diversification no longer applies." },
    { label: "V1per41 Week 4 post/workbook", state: "pending", detail: "No verified Week 4 workbook has been incorporated yet. Do not finalize until the new post/workbook is available and its current probability matrix/formulas are audited." },
    { label: "Ownership/injury audit", state: "pending", detail: "Week 4 survivor ownership and full injury/practice information are not yet mature early Monday." },
    { label: "Finalization gate", state: "pending", detail: "BAL is directional, not FINAL. Recheck V1per41, market, ownership, injuries and future-path opportunity cost before submission." },
  ],
};
