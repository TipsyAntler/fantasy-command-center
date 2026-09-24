export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 3,
  status: "directional",
  asOf: "Sep 24, 2026 · 4:43 AM ET V1per41 + market audit",
  headline: "WEEK 3 DIRECTIONAL: E3 KC · ONE ENTRY REMAINS",
  summary: "Entry 3 is the sole survivor after using JAX in Week 1 and SF in Week 2. Kansas City remains the Week 3 directional pick at Miami. The market still makes KC the strongest favorite on the board, with current pricing around -10.5 to -11.5 and roughly -750 depending on book. V1per41's Sep 23 Week 3 post ranks SF first for his generic full-season path (78% this week, 3.39% P(Win Out)) and KC second (85% this week, 3.19% P(Win Out)), but his alternative-options section explicitly says that if SF (and likely JAC) has already been used, KC is the only team he would consider this week. That matches Entry 3 exactly. MediaFire now confirms the linked NFL Survivor.xlsm was uploaded Sep 23 at 11:40 AM, so it is the current weekly file; however, its direct download still cannot be retrieved in this audit, so the workbook's Probability/Matrix inputs and formulas have not yet been independently reconciled to the post. Keep the plan directional until that inspection plus final market/injury/ownership checks are complete.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "KC", alternate: "GB", confidence: "high", rationale: "Sole surviving entry used JAX then SF. KC is available and remains the strongest current-week favorite, around -10.5 to -11.5 and roughly -750 depending on book. V1per41's Sep 23 Week 3 post gives KC an 85% current-week win probability and explicitly says managers who already used SF (and likely JAC) should use KC. His generic model's SF-first path is not legal for Entry 3." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Entry 3: JAX Week 1, SF Week 2. Entries 1-2 eliminated Week 1 on LAC. Entry 4: DET Week 1, eliminated Week 2 on TB." },
    { label: "Current market", state: "live", detail: "Sep 24 overnight market: KC remains the strongest favorite at Miami, around -10.5 to -11.5 with moneyline roughly -750 depending on book. SF is also a large favorite vs Arizona but is unavailable to Entry 3 because it was used Week 2." },
    { label: "Portfolio state", state: "loaded", detail: "Only Entry 3 remains alive, so cross-entry diversification is no longer applicable. Optimize the single surviving path for full-season survival and future inventory." },
    { label: "V1per41 post", state: "loaded", detail: "Week 3 post published Sep 23. Generic ranking: SF 78% week / 3.39% P(Win Out), KC 85% / 3.19%, DET 73% / 3.05%, SEA 73% / 3.00%. Crucially, V1per41 says if SF (and likely JAC) has already been used, KC is the only team he would consider. This directly supports KC for Entry 3's JAX/SF history." },
    { label: "V1per41 workbook", state: "pending", detail: "MediaFire confirms the linked NFL Survivor.xlsm is a fresh Week 3 upload from Sep 23, 2026 at 11:40 AM (508.17 KB). The direct download currently redirects to MediaFire's inaccessible repair endpoint in this audit, so the workbook itself still cannot be inspected. Do not treat cached Results/Survivor outputs as authoritative until the Probability/Matrix source inputs, formulas and current-season values can be reconciled to the Sep 23 post." },
    { label: "Ownership", state: "pending", detail: "Week 3 ownership is not mature enough to override the safety/path case for the sole remaining entry. Recheck before final submission." },
    { label: "Finalization gate", state: "pending", detail: "KC remains directional, not FINAL. Finalize only after the linked V1per41 workbook is inspected/reconciled plus final injuries, market, ownership, legal used-team history and future-path opportunity cost are audited." },
  ],
};
