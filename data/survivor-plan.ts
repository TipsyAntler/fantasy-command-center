export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 3,
  status: "final",
  asOf: "Sep 27, 2026 · KC won 24-10 at Miami · Entry 3 advances",
  headline: "WEEK 3 COMPLETE: E3 KC WON · ONE ENTRY ADVANCES",
  summary: "Entry 3, the sole survivor after using JAX in Week 1 and SF in Week 2, advanced through Week 3 with Kansas City's 24-10 win at Miami. The final KC selection was made after direct inspection of the current-week V1per41 workbook, whose refreshed Week 3 probability inputs showed KC at 84.89%, SF at 78.17%, BUF at 74.69%, SEA at 73.03%, DET at 72.61% and GB at 69.20%. SF was unavailable because Entry 3 had already used it in Week 2. Week 4 must start with a fresh plan using Entry 3's now-updated used-team history: JAX, SF, KC.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "KC", alternate: "GB", confidence: "high", rationale: "KC defeated Miami 24-10 in Week 3. Entry 3 advances after previously using JAX in Week 1 and SF in Week 2; its used-team history entering Week 4 is JAX, SF, KC." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3 entering Week 4: JAX Week 1, SF Week 2, KC Week 3. Entries 1-2 eliminated Week 1 on LAC. Entry 4: DET Week 1, eliminated Week 2 on TB." },
    { label: "Week 3 result", state: "loaded", detail: "Kansas City defeated Miami 24-10 on Sep 27, so Entry 3 survives and advances." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so cross-entry diversification is no longer applicable. Optimize the single surviving path for full-season survival and future inventory." },
    { label: "V1per41 post", state: "loaded", detail: "Week 3 post supported KC for managers who already used SF/JAX, matching Entry 3's actual history." },
    { label: "V1per41 workbook", state: "loaded", detail: "Current Week 3 workbook inspected directly from Mike's upload. Refreshed Week 3 probabilities: KC 84.89%, SF 78.17%, BUF 74.69%, SEA 73.03%, DET 72.61%, GB 69.20%. Formula logic reconciled current-week Vegas inputs with future-week model averages; no material post/workbook discrepancy affected the KC decision." },
    { label: "Finalization gate", state: "loaded", detail: "Week 3 complete. KC won. Create a fresh Week 4 plan when the new week's market/model/ownership inputs become available." },
  ],
};
