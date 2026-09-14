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
  asOf: "Sep 14, 2026 · 2:22 PM ET · afternoon market refresh",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 TB",
  summary:
    "Only Entries 3 and 4 remain alive. Entry 3 used JAX in Week 1 and Entry 4 used DET. SF remains the clear Week 2 anchor. TB remains the preferred independent second leg after the afternoon market refresh: Baltimore is priced identically on the latest bet365 moneyline and the Rams slightly safer, but their future inventory remains more valuable, while Tampa Bay remains in the same safety tier as Baltimore. The plan remains directional pending ownership, injuries, a fresh V1per41 update, and the final duplicate-history audit.",
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
      rationale: "Entry 3 used JAX in Week 1, so SF is available. San Francisco remains the strongest current Week 2 option and the portfolio's maximum-survival anchor.",
    },
    {
      entryNumber: 4,
      team: "TB",
      alternate: "BAL",
      confidence: "medium",
      rationale: "Entry 4 used DET in Week 1, so TB is available. Tampa Bay is priced identically to Baltimore on the latest bet365 moneyline while preserving more valuable future inventory and keeping the two surviving entries independent.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Keep one SF anchor and one independent second leg rather than putting both surviving entries on the same team.",
    },
    {
      label: "Current market",
      state: "live",
      detail: "Latest bet365 board at 1:37 PM ET: SF -12.5 / -900 vs MIA; TB -8.5 / -425 vs CLE; BAL -8.5 / -425 vs NO; LAR -7.5 / -360 vs NYG; LAC -6.5 / -310 vs LV. The market reinforces E3 SF / E4 TB rather than changing it.",
    },
    {
      label: "Future inventory",
      state: "loaded",
      detail: "Baltimore is currently priced the same as Tampa Bay and the Rams slightly safer by moneyline, but both carry more useful future spots. Tampa Bay remains close enough in current-week survival probability to justify the independent path.",
    },
    {
      label: "Ownership",
      state: "pending",
      detail: "Reliable Week 2 survivor ownership projections are not yet stable enough to drive a portfolio change. Re-evaluate once public and pool ownership firms up.",
    },
    {
      label: "V1per41",
      state: "pending",
      detail: "No fresh 2026 Week 2 rerun located in the latest search. The prior season map had TB vs CLE for Week 2, but a current-week rerun is still needed before finalization.",
    },
    {
      label: "Used-team history",
      state: "loaded",
      detail: "Entry 3 used JAX in Week 1; Entry 4 used DET. Entries 1 and 2 are eliminated after using LAC.",
    },
    {
      label: "Finalization gate",
      state: "pending",
      detail: "Do not mark FINAL until ownership, injuries, late-week market, V1per41, commissioner-sheet duplicate history, and cross-entry path overlap are audited.",
    },
  ],
};
