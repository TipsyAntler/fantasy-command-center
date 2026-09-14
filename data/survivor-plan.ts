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
  asOf: "Sep 14, 2026 · 4:45 AM ET · overnight refresh",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 TB",
  summary:
    "Only Entries 3 and 4 remain alive. Entry 3 used JAX in Week 1 and Entry 4 used DET. SF remains the clear Week 2 anchor. The second leg moves back from LAC to TB after the overnight market clarified that Tampa Bay is now materially safer than Los Angeles this week. SF/TB keeps the two surviving entries independent while improving current-week survival. The plan remains directional pending ownership, injuries, a fresh V1per41 update, and the final duplicate-history audit.",
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
      rationale: "Entry 4 used DET in Week 1, so TB is available. Tampa Bay has moved ahead of the Chargers as the safer second-leg option for this week, enough to outweigh the future-inventory case for using LAC now.",
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
      detail: "San Francisco is the clear top favorite. Tampa Bay and Baltimore form the next safety tier, with the Chargers now a step behind after overnight movement.",
    },
    {
      label: "Future inventory",
      state: "loaded",
      detail: "LAC still has relatively limited near-term value after Week 2, but the current safety gap versus TB has widened enough that future-inventory efficiency no longer drives the second entry onto LAC. Baltimore remains a viable alternate but is more valuable future inventory than Tampa Bay.",
    },
    {
      label: "Ownership",
      state: "pending",
      detail: "Reliable Week 2 survivor ownership projections were not yet available in the overnight search. Re-evaluate once public and pool ownership stabilizes.",
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
