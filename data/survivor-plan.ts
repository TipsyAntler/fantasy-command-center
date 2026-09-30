export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 4,
  status: "directional",
  asOf: "Sep 29, 2026 · Tuesday morning Week 4 market",
  headline: "WEEK 4 DIRECTIONAL: MINNESOTA MOVES AHEAD, BALTIMORE IS THE SAFETY ALTERNATE",
  summary: "Entry 3 is the only live entry and enters Week 4 having used JAX, SF and KC. Minnesota has moved narrowly ahead of Baltimore for the directional pick. Both are roughly -11.5, but BAL is currently around -750 versus MIN around -700, public ownership is similar, and multiple season-path grids flag this Miami matchup as Minnesota's best remaining use while Baltimore retains a premium Week 16 home spot against Cleveland. The previously stored BAL -8.5 opener was stale/look-ahead data and has been removed. This is still directional pending the 2026 Week 4 V1per41 post/workbook, later injury reports and final market confirmation.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "MIN", alternate: "BAL", confidence: "medium", rationale: "Minnesota moves narrowly ahead on full-season path value: roughly -11.5 / -700 vs Miami, similar public ownership to Baltimore, and this profiles as MIN's best remaining matchup while BAL has a premium Week 16 Cleveland spot. Entry 3 has used JAX, SF and KC, so both remain available. Keep MIN directional pending V1per41, injuries and final market." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2, KC Week 3. BAL remains available. Entries 1-2 and 4 are eliminated." },
    { label: "Early Week 4 market", state: "live", detail: "MIN is roughly -11.5 / -700 vs Miami; BAL is roughly -11.5 / -750 vs Tennessee. The previously stored BAL -8.5 opener was stale look-ahead data. Baltimore has the slightly stronger current safety price; Minnesota keeps the directional nod on future-value efficiency." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive. Cross-entry diversification no longer applies, so optimize the single surviving path. Current season-path grids favor spending MIN now and preserving BAL for a stronger later spot." },
    { label: "V1per41 Week 4 post/workbook", state: "pending", detail: "No verified 2026 Week 4 V1per41 post/workbook has been incorporated yet. Do not finalize until the new post/workbook is available and its current probability matrix/formulas are audited." },
    { label: "Ownership/injury audit", state: "pending", detail: "Week 4 survivor ownership and full injury/practice information are still developing Tuesday morning." },
    { label: "Finalization gate", state: "pending", detail: "MIN is directional, not FINAL. Recheck V1per41, market, ownership, Justin Jefferson/Miami injury news and future-path opportunity cost before submission." },
  ],
};
