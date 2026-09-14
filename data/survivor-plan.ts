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
  asOf: "Sep 14, 2026 · 3:41 AM ET · overnight refresh",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 LAC",
  summary:
    "Only Entries 3 and 4 remain alive. Entry 3 used JAX in Week 1 and Entry 4 used DET. SF remains the Week 2 anchor. The second leg changes from TB to LAC after a meaningful overnight market move: LAC is now about -9.5 / -380 vs LV while TB is about -6.5 / -278 vs CLE. LAC also enters a much tougher run after Week 2, so this is an efficient spot to use them while keeping the two surviving entries on different teams. The plan remains directional pending ownership, injuries, a fresh V1per41 update, and the final duplicate-history audit.",
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
      alternate: "SEA",
      confidence: "high",
      rationale: "Entry 3 used JAX in Week 1, so SF is available. SF remains the strongest current Week 2 option at roughly -10.5 / -675 vs Miami.",
    },
    {
      entryNumber: 4,
      team: "LAC",
      alternate: "LAR",
      confidence: "medium",
      rationale: "Entry 4 used DET in Week 1, so LAC is available. LAC has strengthened to roughly -9.5 / -380 vs Las Vegas while TB has slipped to about -6.5 / -278 vs Cleveland, creating enough separation to change the directional second leg.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Keep one SF anchor and one independent second leg rather than put both surviving entries on the same team.",
    },
    {
      label: "Current market",
      state: "live",
      detail: "SF about -10.5 / -675 vs MIA; SEA about -10 / -550 at ARI; LAR about -9.5 / -485 vs NYG; LAC about -9.5 / -380 vs LV; BAL about -7.5 / -360 vs NO; TB about -6.5 / -278 vs CLE.",
    },
    {
      label: "Future inventory",
      state: "loaded",
      detail: "LAC faces BUF, SEA, DEN and KC in the four games after Week 2, making Raiders-at-home one of the cleaner near-term spots to use them. TB, SEA and LAR retain useful later opportunities.",
    },
    {
      label: "V1per41",
      state: "pending",
      detail: "No fresh 2026 Week 2 rerun located in the latest overnight search. The prior season map had TB vs CLE for Week 2, but current market movement now points to stronger alternatives.",
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
