export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = { entryNumber: 1 | 2 | 3 | 4; team: string; alternate?: string; confidence: "high" | "medium" | "low"; rationale: string; };
export type SurvivorPlanInput = { label: string; state: "loaded" | "live" | "pending"; detail: string; };
export type SurvivorWeekPlan = { week: number; status: SurvivorPlanStatus; asOf: string; headline: string; summary: string; entries: SurvivorPlanEntry[]; inputs: SurvivorPlanInput[]; };

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 5,
  status: "directional",
  asOf: "Oct 7, 2026 · Week 5 catch-up audit · 11:50 PM ET",
  headline: "WEEK 5 DIRECTIONAL: DALLAS LEADS; HOUSTON / CINCINNATI ARE THE ALTERNATES",
  summary: "Entry 3 is the only live entry and has used JAX (Week 1), SF (Week 2), KC (Week 3) and MIN (Week 4). Dallas, Houston and Cincinnati are all legal; Jacksonville is not. V1per41 posted Week 5 today and corrected an initial workbook bug that had skipped Dallas once bye weeks began. His corrected post ranks DAL first at 79% current-week win probability and 3.95% P(Win Out), ahead of JAX 75% / 3.68%, HOU 76% / 3.66% and CIN 73% / 3.55%. Current consensus moneylines independently reconcile with those current-week probabilities: DAL roughly -472 vs TB +360 de-vigs to about 79.2%; HOU -369 vs TEN +291 to about 75.5%; CIN -319 vs MIA +258 to about 73.2%. JAX is unavailable to Mike because Entry 3 already used Jacksonville. Dallas also gets a major injury boost because Tampa Bay has ruled out Baker Mayfield, Antoine Winfield Jr., Benjamin Morrison and SirVocea Dennis. The commissioner sheet currently shows 359 entries alive; among the 38 live entries already showing a Week 5 pick, 26 are on DAL, 9 CIN, 1 HOU, 1 PIT and 1 DET. That is heavy early Dallas ownership, but the current-week safety gap and V1per season-path edge are large enough that ownership alone does not justify fading Dallas. Keep DAL directional pending direct inspection of the corrected Week 5 workbook and the final Thursday market/inactive audit.",
  entries: [
    { entryNumber: 1, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 2, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 1 on LAC." },
    { entryNumber: 3, team: "DAL", alternate: "HOU", confidence: "high", rationale: "DIRECTIONAL: DAL is the current leader. Mike's legal alternatives include HOU and CIN; JAX is unavailable because it was used in Week 1. Current market de-vigs to roughly 79% DAL, 75.5% HOU and 73% CIN. V1per's corrected Week 5 post also gives DAL the best season path (3.95% P(Win Out)) and explicitly corrected a workbook bug that initially omitted Dallas. Heavy early DAL ownership is noted, but does not yet outweigh the safety/path advantage." },
    { entryNumber: 4, team: "ELIMINATED", confidence: "low", rationale: "Eliminated in Week 2 on TB after using DET in Week 1." },
  ],
  inputs: [
    { label: "Used-team history", state: "loaded", detail: "Commissioner sheet checked Oct 7. Entry 3 is alive and has used JAX Week 1, SF Week 2, KC Week 3 and MIN Week 4. DAL/HOU/CIN remain legal; JAX cannot be used." },
    { label: "Current Week 5 market", state: "live", detail: "Consensus snapshot: DAL about -472 vs TB +360 (about 79.2% de-vigged); HOU about -369 vs TEN +291 (about 75.5%); CIN about -319 vs MIA +258 (about 73.2%). Dallas is the strongest available current-week favorite for Mike." },
    { label: "V1per41 Week 5 post", state: "loaded", detail: "POSTED Oct 7 and corrected shortly after posting. Initial workbook bug skipped DAL when byes began; V1per fixed it and changed the official Week 5 pick to DAL. Corrected table: DAL 79% / 3.95% P(Win Out); JAX 75% / 3.68%; HOU 76% / 3.66%; CIN 73% / 3.55%. Full-season public path uses DAL Week 5, LAR Week 6, HOU Week 7, CIN Week 8." },
    { label: "V1per41 corrected workbook", state: "pending", detail: "Direct workbook audit still required. The linked MediaFire binary is visible but not currently retrievable through the available browser download path. Do not mark FINAL until the corrected workbook's Probability/Matrix inputs and formulas are inspected or Mike uploads the refreshed file." },
    { label: "Injury/news audit", state: "loaded", detail: "Tampa Bay has ruled out QB Baker Mayfield (thumb), S Antoine Winfield Jr. (rib), CB Benjamin Morrison (quad) and LB SirVocea Dennis. Dallas has CB Cobie Durant, LB DeMarvion Overshown and T Drew Shelton out; G Tyler Smith is questionable after a full Wednesday practice." },
    { label: "Pool ownership", state: "live", detail: "Commissioner sheet Oct 7: 359 entries alive. Only 38 live entries currently show Week 5 picks, so ownership is early/incomplete: DAL 26, CIN 9, HOU 1, PIT 1, DET 1." },
    { label: "Finalization gate", state: "pending", detail: "Need direct corrected V1per workbook inspection plus Thursday final market/inactives before changing DAL from DIRECTIONAL to FINAL. Because Dallas plays Thursday, this gate must clear before kickoff." },
  ],
};