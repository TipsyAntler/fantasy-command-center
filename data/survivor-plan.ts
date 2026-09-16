export type SurvivorPlanStatus = "directional" | "final";

export type SurvivorPlanEntry = {
  entryNumber: 1 | 2 | 3 | 4;
  team: string;
  alternate?: string;
  confidence: "high" | "medium" | "low";
  rationale: string;
};

export type SurvivorPlanInput = {
  label: string;
  state: "loaded" | "live" | "pending";
  detail: string;
};

export type SurvivorWeekPlan = {
  week: number;
  status: SurvivorPlanStatus;
  asOf: string;
  headline: string;
  summary: string;
  entries: SurvivorPlanEntry[];
  inputs: SurvivorPlanInput[];
};

export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 2,
  status: "directional",
  asOf: "Sep 16, 2026 · 7:21 PM ET · Wednesday injury and market refresh",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 TB",
  summary:
    "Only Entries 3 and 4 remain alive. Entry 3 used JAX in Week 1 and Entry 4 used DET. SF remains the clear Week 2 anchor and has strengthened from -12.5 to -13.5 while holding roughly a -900 moneyline. TB remains the preferred independent second leg at -8.5 / about -425: Baltimore is priced similarly, while Tampa Bay preserves the more useful Baltimore inventory and keeps the surviving entries on different outcomes. Wednesday injury news does not materially change the allocation. The plan remains directional pending late-week injuries, a fresh V1per41 update, final ownership, and the commissioner-sheet duplicate-history audit.",
  entries: [
    {
      entryNumber: 1,
      team: "ELIMINATED",
      confidence: "low",
      rationale: "Eliminated in Week 1 on LAC.",
    },
    {
      entryNumber: 2,
      team: "ELIMINATED",
      confidence: "low",
      rationale: "Eliminated in Week 1 on LAC.",
    },
    {
      entryNumber: 3,
      team: "SF",
      alternate: "BAL",
      confidence: "high",
      rationale: "Entry 3 used JAX in Week 1, so SF is available. San Francisco remains the strongest current Week 2 option and the portfolio's maximum-survival anchor; the spread has strengthened to -13.5 while the moneyline remains around -900.",
    },
    {
      entryNumber: 4,
      team: "TB",
      alternate: "BAL",
      confidence: "medium",
      rationale: "Entry 4 used DET in Week 1, so TB is available. Tampa Bay remains around -8.5 / -425 and is close enough to Baltimore in current-week safety to justify preserving BAL future inventory and keeping the two surviving entries independent.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Keep one SF anchor and one independent second leg rather than putting both surviving entries on the same team when the safety gap is not large enough to justify correlated elimination risk.",
    },
    {
      label: "Current market",
      state: "live",
      detail: "Sept. 16 market: SF -13.5 / roughly -900 vs MIA; TB -8.5 / roughly -425 vs CLE; BAL -8.5 / roughly -425 vs NO; PHI -7 / roughly -340 at TEN. SF has strengthened by about a point since the prior refresh; the market still supports E3 SF / E4 TB.",
    },
    {
      label: "Future inventory",
      state: "loaded",
      detail: "Baltimore is currently priced similarly to Tampa Bay, but BAL carries more useful future spots. Tampa Bay remains close enough in current-week survival probability to justify the independent path.",
    },
    {
      label: "Ownership",
      state: "live",
      detail: "Early public Week 2 survivor usage remains directionally concentrated on SF and TB. Exact commissioner-pool ownership is still required before finalization.",
    },
    {
      label: "V1per41",
      state: "pending",
      detail: "No credible fresh 2026 Week 2 V1per41 Survivor/Eliminator thread or spreadsheet update located in the latest Sept. 16 search. The prior season map had TB vs CLE for Week 2, but a current-week rerun is still needed before finalization.",
    },
    {
      label: "Used-team history",
      state: "loaded",
      detail: "Entry 3 used JAX in Week 1; Entry 4 used DET. Entries 1 and 2 are eliminated after using LAC.",
    },
    {
      label: "Finalization gate",
      state: "pending",
      detail: "Do not mark FINAL until injuries, late-week market, final ownership, V1per41, commissioner-sheet duplicate history, and cross-entry path overlap are audited.",
    },
  ],
};
