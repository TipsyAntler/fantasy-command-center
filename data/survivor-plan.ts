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
  asOf: "Sep 18, 2026 · 1:48 PM ET · Friday submission audit",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 TB · READY TO SUBMIT",
  summary:
    "Only Entries 3 and 4 remain alive. Entry 3 used JAX in Week 1 and Entry 4 used DET. SF remains the clear Week 2 anchor at roughly -13.5 / -900 or stronger. TB remains the preferred independent second leg around -8.5 / -440: Baltimore is in the same general safety tier but carries more useful future inventory, while Tampa keeps the two surviving entries on different outcomes. Thursday injury and market news does not materially change the allocation. The allocation remains E3 SF / E4 TB after the Friday submission audit. V1per41’s Week 2 post names TB as his top season-long pick (78% current-week, 0.90% win-out) and SF second (87% current-week, 0.87% win-out), which supports using both across the two-entry portfolio. The plan is operationally ready to submit, but remains labeled directional because the linked MediaFire workbook could not be fully inspected in-environment.",
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
      rationale: "Entry 3 used JAX in Week 1, so SF is available. San Francisco remains the portfolio's maximum-survival anchor at roughly -13.5 with a moneyline around -900 or stronger; Thursday's 49ers injury developments do not materially weaken the matchup.",
    },
    {
      entryNumber: 4,
      team: "TB",
      alternate: "BAL",
      confidence: "medium",
      rationale: "Entry 4 used DET in Week 1, so TB is available. Tampa Bay remains around -8.5 / roughly -440 and close enough to Baltimore in current-week safety to justify preserving BAL future inventory and keeping the two surviving entries independent.",
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
      detail: "Sept. 18 market: SF about -13.5 / -900 vs MIA; TB about -8.5 / -455 vs CLE. Both remain strong favorites, with SF the safety anchor and TB the better low-future-value second leg. The market still supports E3 SF / E4 TB.",
    },
    {
      label: "Future inventory",
      state: "loaded",
      detail: "Baltimore remains a useful future asset. Tampa Bay is close enough in current-week survival probability to justify using TB as the independent second path while preserving BAL.",
    },
    {
      label: "Ownership",
      state: "live",
      detail: "Public Week 2 survivor guidance remains concentrated on SF among the premier choices. Exact commissioner-pool ownership is still required before finalization.",
    },
    {
      label: "V1per41",
      state: "pending",
      detail: "V1per41 Week 2 post is live: TB ranks #1 season-long at 78% current-week / 0.90% P(Win Out), SF #2 at 87% / 0.87%. The linked workbook was located, but the MediaFire download could not be fully retrieved for formula/input inspection in-environment, so the post is incorporated while the workbook audit remains incomplete.",
    },
    {
      label: "Used-team history",
      state: "loaded",
      detail: "Entry 3 used JAX in Week 1; Entry 4 used DET. Entries 1 and 2 are eliminated after using LAC.",
    },
    {
      label: "Finalization gate",
      state: "pending",
      detail: "Operationally ready to submit E3 SF / E4 TB. Keep status directional until the V1per41 workbook itself can be fully inspected/reconciled, per the project finalization gate.",
    },
  ],
};
