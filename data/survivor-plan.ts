export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 4,
  status: "final",
  asOf: "Oct 2, 2026 · FINAL submission audit · 2:03 PM ET",
  headline: "WEEK 4 FINAL: MINNESOTA OVER MIAMI",
  summary: "FINAL submission audit keeps Minnesota for Entry 3. The commissioner sheet confirms Entry 3 is the only live entry and has used JAX (Week 1), SF (Week 2) and KC (Week 3), so MIN is legal. Current multi-book market consensus is about MIN 82.7% to win versus BAL 83.8%, leaving only about a one-point current-week safety gap. V1per41's audited Week 4 workbook still ranks MIN first on season path value (82.98% this week / 3.895% P(Win Out)) ahead of BAL (84.15% / 3.250%), primarily because Baltimore retains a premium Week 16 home spot against Cleveland. Actual pool ownership is effectively tied among currently submitted live entries: 99 MIN and 100 BAL out of 229 submitted among 382 alive, so there is no meaningful ownership reason to switch. Justin Jefferson missed Wednesday and Thursday practice with an ankle injury and his Friday designation is still pending, but the market remains MIN -10.5 / roughly -625 and has not materially backed away from Minnesota. Miami remains without De'Von Achane, and Jaylen Wright is expected to play. At the submission deadline, the small extra BAL safety does not outweigh Minnesota's future-inventory advantage.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "MIN", alternate: "BAL", confidence: "high", rationale: "FINAL: MIN remains the pick. Current consensus win probability is roughly 82.7% versus BAL around 83.8%, while V1per41's audited optimized season path gives MIN 3.895% P(Win Out) versus BAL 3.250%. Actual pool ownership is essentially even (99 MIN vs 100 BAL among 229 submitted live entries), so the decision comes down to future value. Preserve BAL for its stronger later utility." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2, KC Week 3. BAL remains available. Entries 1-2 and 4 are eliminated." },
    { label: "Early Week 4 market", state: "live", detail: "MIN is roughly -11.5 / -700 vs Miami; BAL is roughly -11.5 / -750 vs Tennessee. The previously stored BAL -8.5 opener was stale look-ahead data. Baltimore has the slightly stronger current safety price; Minnesota keeps the directional nod on future-value efficiency." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive. Cross-entry diversification no longer applies, so optimize the single surviving path. Current season-path grids favor spending MIN now and preserving BAL for a stronger later spot." },
    { label: "V1per41 Week 4 post/workbook", state: "loaded", detail: "AUDITED Oct 1: current 2026 Week 4 workbook reconciles to the post. MIN 82.98% / 3.895% P(Win Out) ranks first; SEA 74.57% / 3.272%; BAL 84.15% / 3.250%; DET 63.13% / 2.909%. Current-week probabilities use VegasInsider when populated; future weeks average SurvivorGrid, RotoWire and RotoBaller before the Matrix/optimizer step. Post contains minor prose typos ('Week 3 Pick' and 'assuming you pick the Cardinals') but its ranking/table match the workbook." },
    { label: "Ownership/injury audit", state: "loaded", detail: "Commissioner sheet checked Oct 2: 382 entries alive; among 229 live entries with a Week 4 pick submitted, BAL has 100 and MIN 99. Jefferson was DNP Wed/Thu with an ankle injury and Friday status is pending, but current market remains roughly MIN -10.5 / -625. Miami remains without De'Von Achane; Jaylen Wright is expected to play." },
    { label: "Finalization gate", state: "loaded", detail: "FINAL as of Oct 2 at submission: duplicate-history, V1per41 workbook, actual pool ownership, current market and available injury information all rechecked. Submit MIN for Entry 3." },
  ],
};
