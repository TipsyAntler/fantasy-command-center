export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 3,
  status: "directional",
  asOf: "Sep 24, 2026 · overnight V1per41 + market audit",
  headline: "WEEK 3 DIRECTIONAL: E3 KC · ONE ENTRY REMAINS",
  summary: "Entry 3 is the sole survivor after using JAX in Week 1 and SF in Week 2. Kansas City remains the Week 3 directional pick at Miami. The current market is KC -11.5 / -750, up from roughly -10.5 at open. V1per41 posted his Week 3 analysis on Sep 23: his generic full-season model ranks SF first (78% this week, 3.39% P(Win Out)) and KC second (85% this week, 3.19% P(Win Out)), but his alternative-options section explicitly says that if SF (and likely JAC) has already been used, KC is the only team he would consider this week. That matches Entry 3 exactly. Keep the plan directional until the newly linked workbook itself can be downloaded and its current Probability/Matrix inputs and formulas reconciled; the MediaFire page currently exposes an older Sep 16 upload timestamp, so cached workbook outputs must not be trusted without inspection.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "KC", alternate: "GB", confidence: "high", rationale: "Sole surviving entry used JAX then SF. KC is available and is the strongest current-week favorite at roughly -11.5 / -750. V1per41's Sep 23 Week 3 post gives KC an 85% current-week win probability and explicitly says that managers who already used SF (and likely JAC) should use KC. His generic model's SF-first path is not legal for Entry 3." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2. Entries 1-2 eliminated Week 1 on LAC. Entry 4: DET Week 1, eliminated Week 2 on TB." },
    { label: "Current market", state: "live", detail: "Sep 23 market: KC -11.5 / -750 at Miami after opening around -10.5. SF is -8.5 / -425 vs Arizona but is unavailable to Entry 3 because it was used Week 2. BUF is -7 / -360 vs the Chargers; SEA is -7 / -310 at Washington." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so cross-entry diversification is no longer applicable. Optimize the single surviving path for full-season survival and future inventory." },
    { label: "V1per41 post", state: "loaded", detail: "Week 3 post published Sep 23. Generic ranking: SF 78% week / 3.39% P(Win Out), KC 85% / 3.19%, DET 73% / 3.05%, SEA 73% / 3.00%. Crucially, V1per41 says if SF (and likely JAC) has already been used, KC is the only team he would consider. This directly supports KC for Entry 3's JAX/SF history." },
    { label: "V1per41 workbook", state: "pending", detail: "The post links NFL Survivor.xlsm on MediaFire, but the download endpoint was not retrievable in this audit and the MediaFire page reports an upload timestamp of Sep 16. Do not trust cached Results/Survivor outputs until the workbook can be downloaded and the Probability/Matrix source inputs, formulas and current-season values are reconciled to the Sep 23 post." },
    { label: "Ownership", state: "pending", detail: "Week 3 ownership is not mature enough to override the safety/path case for the sole remaining entry. Recheck before final submission." },
    { label: "Finalization gate", state: "pending", detail: "KC remains directional, not FINAL. Finalize only after the linked V1per41 workbook is inspected/reconciled plus final injuries, market, ownership, legal used-team history and future-path opportunity cost are audited." },
  ],
};
