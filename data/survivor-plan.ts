export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 3,
  status: "final",
  asOf: "Sep 25, 2026 · KC locked after V1per41 workbook audit",
  headline: "WEEK 3 FINAL: E3 KC LOCKED · ONE ENTRY REMAINS",
  summary: "Entry 3 is the sole survivor after using JAX in Week 1 and SF in Week 2. Kansas City is FINAL and locked for Week 3 at Miami. The uploaded current-week V1per41 workbook was inspected directly: its refreshed Week 3 probability inputs show KC at 84.89%, SF at 78.17%, BUF at 74.69%, SEA at 73.03%, DET at 72.61% and GB at 69.20%. The workbook's season-long optimizer still ranks SF slightly ahead on generic P(Win Out), but SF is unavailable to Entry 3 because it was already used in Week 2. With only one entry alive, there is no portfolio-diversification benefit to taking a materially less safe current-week team. KC therefore remains the best legal Week 3 choice after workbook, market, used-team and future-path review.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "KC", alternate: "GB", confidence: "high", rationale: "Sole surviving entry used JAX then SF. KC is available and has the strongest current-week win probability among the legal top options. V1per41's refreshed Week 3 matrix gives KC 84.89% versus 78.17% for SF, and SF is unavailable because it was already used in Week 2." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2. Entries 1-2 eliminated Week 1 on LAC. Entry 4: DET Week 1, eliminated Week 2 on TB." },
    { label: "Current market", state: "live", detail: "KC remains the strongest favorite at Miami. No material late market or injury development has weakened the Week 3 case enough to move off Kansas City." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so cross-entry diversification is no longer applicable. Optimize the single surviving path for full-season survival and future inventory." },
    { label: "V1per41 post", state: "loaded", detail: "Week 3 post supports KC for managers who already used SF/JAX, matching Entry 3's actual history." },
    { label: "V1per41 workbook", state: "loaded", detail: "Current Week 3 workbook inspected directly from Mike's upload. Refreshed Week 3 probabilities: KC 84.89%, SF 78.17%, BUF 74.69%, SEA 73.03%, DET 72.61%, GB 69.20%. Formula logic reconciles current-week Vegas inputs with future-week model averages; no material post/workbook discrepancy affects the KC decision." },
    { label: "Ownership", state: "loaded", detail: "No ownership signal was strong enough to offset KC's current-week safety advantage for the sole surviving entry." },
    { label: "Finalization gate", state: "loaded", detail: "FINAL. KC locked after current-week V1per41 workbook inspection, legal used-team history check, market/injury review and future-path audit." },
  ],
};
