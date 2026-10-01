export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 4,
  status: "directional",
  asOf: "Oct 1, 2026 · V1per41 Week 4 post + uploaded workbook audited",
  headline: "WEEK 4 DIRECTIONAL: V1PER41 WORKBOOK CONFIRMS MINNESOTA OVER BALTIMORE",
  summary: "V1per41's 2026 Week 4 post is live and the uploaded workbook has been audited through its source inputs, probability formulas, Matrix and Results outputs. The workbook is current for Week 4 and reconciles to the post: MIN 82.98% this week / 3.895% P(Win Out), SEA 74.57% / 3.272%, BAL 84.15% / 3.250%, DET 63.13% / 2.909%. For current-week games, Probabilities uses the VegasInsider-derived probability when present; future weeks fall back to the average of SurvivorGrid, RotoWire and RotoBaller, and Matrix feeds the season optimizer. That confirms the exact reason MIN beats the slightly safer BAL: using Minnesota now preserves Baltimore's stronger later utility. Entry 3 has used JAX, SF and KC, so MIN is legal. Keep MIN directional rather than FINAL until the remaining injury/ownership/final-market audit is complete.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "MIN", alternate: "BAL", confidence: "medium", rationale: "Minnesota is now strongly supported by V1per41's refreshed Week 4 workbook: 82.98% current-week win probability and 3.895% optimized P(Win Out), versus BAL at 84.15% / 3.250%. The model deliberately accepts roughly 1.2 points less Week 4 safety to preserve Baltimore's future utility. Entry 3 has used JAX, SF and KC, so MIN is available. Keep MIN directional pending the final injury, ownership and market audit." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2, KC Week 3. BAL remains available. Entries 1-2 and 4 are eliminated." },
    { label: "Early Week 4 market", state: "live", detail: "MIN is roughly -11.5 / -700 vs Miami; BAL is roughly -11.5 / -750 vs Tennessee. The previously stored BAL -8.5 opener was stale look-ahead data. Baltimore has the slightly stronger current safety price; Minnesota keeps the directional nod on future-value efficiency." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive. Cross-entry diversification no longer applies, so optimize the single surviving path. Current season-path grids favor spending MIN now and preserving BAL for a stronger later spot." },
    { label: "V1per41 Week 4 post/workbook", state: "loaded", detail: "AUDITED Oct 1: current 2026 Week 4 workbook reconciles to the post. MIN 82.98% / 3.895% P(Win Out) ranks first; SEA 74.57% / 3.272%; BAL 84.15% / 3.250%; DET 63.13% / 2.909%. Current-week probabilities use VegasInsider when populated; future weeks average SurvivorGrid, RotoWire and RotoBaller before the Matrix/optimizer step. Post contains minor prose typos ('Week 3 Pick' and 'assuming you pick the Cardinals') but its ranking/table match the workbook." },
    { label: "Ownership/injury audit", state: "pending", detail: "Week 4 survivor ownership and full injury/practice information are still developing Tuesday morning." },
    { label: "Finalization gate", state: "pending", detail: "V1per41 gate is cleared and materially strengthens MIN. Still recheck final Minnesota/Miami injury status, pool ownership and market before changing status to FINAL." },
  ],
};
