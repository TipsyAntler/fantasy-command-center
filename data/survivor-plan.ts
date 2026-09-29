export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 4,
  status: "directional",
  asOf: "Sep 29, 2026 · Tuesday morning Week 4 market",
  headline: "WEEK 4 DIRECTIONAL: BALTIMORE LEADS FOR THE SOLE SURVIVING ENTRY",
  summary: "Entry 3 is the only live entry and enters Week 4 having used JAX, SF and KC. Baltimore remains the early survivor candidate. Fresh Week 4 market verification shows BAL opened around -11.5 vs Tennessee and is still roughly -11.5, with current moneyline pricing around -700. The previously stored -8.5 opener was stale/look-ahead data and has been removed. BAL is unused by Entry 3. Minnesota is the other major safety candidate at roughly -11.5/-750 after Miami lost De'Von Achane for the season. The pick remains directional pending the Week 4 V1per41 post/workbook, ownership, injury reports and future-value audit.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "BAL", alternate: "MIN", confidence: "medium", rationale: "Early Week 4 leader. Baltimore is roughly -11.5 / -700 at home against Tennessee and remains available after Entry 3 used JAX, SF and KC. Minnesota is now a serious alternate at roughly -11.5 / -750 versus Miami. Hold BAL as directional pending V1per41's Week 4 workbook, ownership, injuries and the future-inventory comparison." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2, KC Week 3. BAL remains available. Entries 1-2 and 4 are eliminated." },
    { label: "Early Week 4 market", state: "live", detail: "Fresh verification shows BAL opened around -11.5 vs Tennessee and remains roughly -11.5 / -700. The previously stored -8.5 opener was stale look-ahead data. MIN is also roughly -11.5 / -750 vs Miami, creating a legitimate alternate that must be compared on future value." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so optimize the single surviving path for full-season survival and future inventory; cross-entry diversification no longer applies." },
    { label: "V1per41 Week 4 post/workbook", state: "pending", detail: "No verified 2026 Week 4 V1per41 post/workbook has been incorporated yet. Do not finalize until the new post/workbook is available and its current probability matrix/formulas are audited." },
    { label: "Ownership/injury audit", state: "pending", detail: "Week 4 survivor ownership and full injury/practice information are still developing Tuesday morning." },
    { label: "Finalization gate", state: "pending", detail: "BAL is directional, not FINAL. Recheck V1per41, market, ownership, injuries and future-path opportunity cost before submission." },
  ],
};
