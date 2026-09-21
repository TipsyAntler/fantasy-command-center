export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 3,
  status: "directional",
  asOf: "Sep 21, 2026 · Monday evening market audit",
  headline: "WEEK 3 DIRECTIONAL: E3 KC · ONE ENTRY REMAINS",
  summary: "Week 2 is complete for the survivor portfolio: Entry 3 advanced with SF, while Entry 4 was eliminated by Tampa Bay's 23-19 loss to Cleveland. Entries 1 and 2 were already eliminated in Week 1, so Entry 3 is the sole survivor. Its used-team history is JAX (Week 1) and SF (Week 2). Kansas City remains the clear Week 3 directional anchor at Miami. The market has strengthened from roughly KC -10/-10.5 at open to as high as -11.5 Monday afternoon at bet365, with a -750 moneyline, reinforcing KC as the strongest current-week safety option. Keep this directional until V1per41 posts Week 3, the workbook is inspected/reconciled, ownership and injury news develop, and the final market is audited.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "KC", alternate: "GB", confidence: "high", rationale: "Sole surviving entry used JAX then SF. KC is available and has strengthened from roughly -10/-10.5 at open to as high as -11.5 Monday afternoon at bet365, with a -750 moneyline. GB, also unused, remains the early legal alternate around -6.5/-7 vs Atlanta; SF is unavailable because Entry 3 used it in Week 2." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2. Entries 1-2 eliminated Week 1 on LAC. Entry 4: DET Week 1, eliminated Week 2 on TB." },
    { label: "Current market", state: "live", detail: "Monday evening Week 3: KC has strengthened from roughly -10/-10.5 at open to as high as -11.5 at bet365, moneyline -750, at Miami. Other leading favorites include SF around -8.5 vs Arizona, BUF around -7 vs the Chargers, and GB around -6.5/-7 vs Atlanta. SF is unavailable to Entry 3 because it was used Week 2." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so cross-entry diversification is no longer applicable. Optimize the single surviving path for full-season survival and future inventory." },
    { label: "V1per41", state: "pending", detail: "No verified Week 3 V1per41 post/workbook found in the Monday evening audit. When posted, inspect and reconcile the workbook probability matrix, formulas and post before finalizing." },
    { label: "Ownership", state: "pending", detail: "Week 3 ownership is not mature yet. Recheck commissioner-pool/public ownership as the week develops." },
    { label: "Finalization gate", state: "pending", detail: "KC is directional only. Do not mark FINAL until V1per41 workbook, injuries, market, ownership, legal used-team history and future-path opportunity cost are fully audited." },
  ],
};
