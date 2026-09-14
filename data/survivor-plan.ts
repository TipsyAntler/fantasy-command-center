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
  asOf: "Sep 14, 2026 · 6:24 PM ET · evening market and ownership refresh",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 TB",
  summary:
    "Only Entries 3 and 4 remain alive. Entry 3 used JAX in Week 1 and Entry 4 used DET. SF remains the clear Week 2 anchor. TB remains the preferred independent second leg: Baltimore is priced identically on the latest bet365 board, while Tampa Bay preserves the more useful Baltimore inventory and keeps the surviving entries on different outcomes. Early public Week 2 ownership also supports the current construction rather than forcing a change. The plan remains directional pending injuries, a fresh V1per41 update, final ownership, and the commissioner-sheet duplicate-history audit.",
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
      rationale: "Entry 4 used DET in Week 1, so TB is available. Tampa Bay is priced identically to Baltimore on the latest bet365 moneyline while preserving more valuable Baltimore future inventory and keeping the two surviving entries independent.",
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
      detail: "Latest Sept. 14 bet365 board: SF -12.5 / -950 vs MIA; TB -8.5 / -425 vs CLE; BAL -8.5 / -425 vs NO; LAC -7.5 / -330 vs LV. The market continues to support E3 SF / E4 TB.",
    },
    {
      label: "Future inventory",
      state: "loaded",
      detail: "Baltimore is currently priced the same as Tampa Bay, but BAL carries more useful future spots. Tampa Bay remains close enough in current-week survival probability to justify the independent path.",
    },
    {
      label: "Ownership",
      state: "live",
      detail: "Early public Week 2 survivor usage is approximately SF 30%, TB 22%, PHI 10%, BAL 9%, LAC 6%. This is not the commissioner pool's exact ownership, but it is now stable enough to use directionally and does not justify changing the SF/TB split.",
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
      detail: "Do not mark FINAL until injuries, late-week market, final ownership, V1per41, commissioner-sheet duplicate history, and cross-entry path overlap are audited.",
    },
  ],
};
