export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 5,
  status: "final",
  asOf: "Oct 8, 2026 · 11:45 PM ET · FINAL RESULT",
  headline: "SURVIVOR PORTFOLIO ELIMINATED",
  summary: "Tampa Bay defeated Dallas 24-16 on Thursday night, eliminating Entry 3 and ending Mike\'s four-entry Survivor portfolio. Entries 1 and 2 were eliminated on LAC in Week 1; Entry 4 was eliminated on TB in Week 2. The Dallas recommendation had the stronger audited current-week win probability, but the upset occurred. No Week 6 pick should be generated because no entries remain alive.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated Week 1 on LAC. No Week 5 pick; cannot contribute to four-entry portfolio survival." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated Week 1 on LAC. No Week 5 pick; cannot contribute to four-entry portfolio survival." },
    { entryNumber: 3, team: "ELIMINATED", confidence: "low", rationale: "Eliminated Week 5 on DAL after using JAX, SF, KC and MIN in Weeks 1-4. Tampa Bay won 24-16. No Week 6 pick." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated Week 2 on TB after using DET in Week 1. No Week 5 pick." },
  ],
  inputs: [
    { label: "Entry-by-entry history", state: "loaded", detail: "Commissioner sheet last verified Oct 7: Entry 1 eliminated on LAC W1; Entry 2 eliminated on LAC W1; Entry 3 live, used JAX W1/SF W2/KC W3/MIN W4; Entry 4 eliminated on TB W2 after DET W1. Three entries are already eliminated, so cross-entry correlation and diversification cannot improve this week's remaining portfolio survival." },
    { label: "Corrected V1per41 post and workbook", state: "loaded", detail: "Oct 7 corrected post: DAL 79%/3.95%, JAC 75%/3.68%, HOU 76%/3.66%, CIN 73%/3.55%. Uploaded NFL Survivor (12).xlsm directly inspected Oct 8, including hidden Probabilities, Matrix and Results. The post and workbook agree; earlier Dallas bye-week omission is fixed. Current-week Probabilities use VegasInsider moneyline inputs when available, future weeks average Rotoballer/Rotowire/SurvivorGrid. Independently verified all 448 W5-W18 Matrix cells (416 playable, 32 bye zeroes) and DAL published 14-week product 3.954858649%. Historical source/cache error cells exist outside the audited future Matrix, but no mismatch found in W5-W18 inputs." },
    { label: "Mike-specific season-long assignment", state: "loaded", detail: "Independent max-product one-team-per-week Hungarian assignment for Weeks 5-18, excluding JAX/SF/KC/MIN: HOU forced Week 5 = 3.18902% remaining-season P(Win Out); DAL = 3.06665%; CIN = 2.55567%; DET = 2.66365%. Unlike V1per's 3.95% public DAL path, Mike cannot use KC Week 11 or JAC Week 12. HOU leads the exact averaged model by only 0.12237 percentage points (about 4% relative), not a calibrated edge." },
    { label: "Future model sensitivity", state: "loaded", detail: "When independently rerunning the season assignment with future forecast-source pairs (Week 5 Vegas unchanged), Rotoballer+Rotowire favors HOU 2.7915% vs DAL 2.6171%; Rotoballer+SurvivorGrid favors DAL 3.2064% vs HOU 3.1562%; Rotowire+SurvivorGrid favors DAL 4.1885% vs HOU 4.1288%. This is a sensitivity diagnostic, not a new weighted forecast. Therefore the small central HOU lead is fragile." },
    { label: "Week 5 markets", state: "loaded", detail: "Thursday Oct 8 morning verification: VegasInsider consensus DAL -470/TB +360 and HOU -395/TEN +310, approximately 79.1% and 76.6% favorite win probabilities after proportional de-vig; FanDuel lists HOU -370/TEN +295 and CBS shows HOU -7.5. Dallas remains safer now, but the current-week gap is closer to about 2.5 percentage points than the corrected workbook's 3.46-point gap. These are timestamped public snapshots, not guaranteed executable quotes; refresh near the 4 PM ET commissioner deadline." },
    { label: "Injury and availability", state: "loaded", detail: "Oct 7 official team reports: TB Baker Mayfield, Antoine Winfield Jr., Benjamin Morrison and SirVocea Dennis OUT Thursday; DAL Cobie Durant, DeMarvion Overshown and Drew Shelton OUT. NFL Network reported Thursday afternoon that Dallas guard Tyler Smith will return from IR and make his season debut tonight. Texans Will Anderson Jr. DNP (ankle) Wednesday; Titans Jeffery Simmons DNP (back), John Franklin-Myers DNP and Amani Hooker DNP. Sunday-game Thursday statuses remain pending." },
    { label: "Pool ownership and leverage", state: "loaded", detail: "Oct 7 commissioner snapshot: 359 entries alive; 38 currently picked Week 5, of which DAL 26, CIN 9, HOU 1, PIT 1, DET 1. Early incomplete ownership; no reliable full-field ownership estimate. V1per workbook entrant-count cell is 10,000 and does not describe Mike's pool." },
    { label: "Final result", state: "loaded", detail: "Tampa Bay beat Dallas 24-16 on Oct 8. Entry 3 is eliminated and the four-entry portfolio is finished. Do not advance to a Week 6 recommendation." },
  ],
};
