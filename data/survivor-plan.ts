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

// Human-reviewed four-entry portfolio plan.
// Primary objective: maximize the probability that at least one entry survives the season.
// Secondary objectives: preserve strong individual paths, expected survivors and future inventory.
// Same-team concentration is used only when the quality gap is worth the correlation risk.
// Switch status to "final" only after the last ownership/injury/market/history audit.
export const survivorWeekPlan: SurvivorWeekPlan = {
  week: 2,
  status: "directional",
  asOf: "Sep 14, 2026 · 1:18 AM ET · opening-market refresh",
  headline: "WEEK 2 DIRECTIONAL: E3 SF / E4 TB · TWO-ENTRY DIVERSIFICATION",
  summary:
    "Only Entries 3 and 4 remain alive after Week 1. Entry 3 has JAX used; Entry 4 has DET used. San Francisco remains the clear raw-survival leader, now around -13.5 versus Miami. Tampa Bay is around -7.5 versus Cleveland, while Baltimore and the Rams are around -8.5. With only two bullets left, doubling SF would maximize expected current-week survivors but would expose the entire portfolio to one upset. The directional split remains Entry 3 SF and Entry 4 TB: SF supplies the strongest single-entry survival anchor, while TB creates an independent path at a still-strong win probability and preserves Baltimore for later. The one-point market gap between TB and BAL is not yet large enough to outweigh the portfolio/path value of keeping the entries differentiated. This is not FINAL; ownership, injury news, fresh V1per41 Week 2 output, market movement, and the commissioner-sheet history audit still need to be rechecked before submission.",
  entries: [
    {
      entryNumber: 1,
      team: "ELIMINATED",
      confidence: "low",
      rationale: "Eliminated in Week 1 on LAC. No future recommendation.",
    },
    {
      entryNumber: 2,
      team: "ELIMINATED",
      confidence: "low",
      rationale: "Eliminated in Week 1 on LAC. No future recommendation.",
    },
    {
      entryNumber: 3,
      team: "SF",
      alternate: "TB",
      confidence: "high",
      rationale: "Directional anchor. Entry 3 used JAX in Week 1, so SF is available. San Francisco is now roughly -13.5 vs Miami, clearly the strongest raw win-probability option on the Week 2 board. Using SF here gives one surviving entry the safest available current-week path while leaving Entry 4 uncorrelated.",
    },
    {
      entryNumber: 4,
      team: "TB",
      alternate: "BAL",
      confidence: "medium",
      rationale: "Directional diversification leg. Entry 4 used DET in Week 1, so TB is available. Tampa Bay is currently about -7.5 vs Cleveland; Baltimore is about -8.5 vs New Orleans. BAL has a small current-week market edge, but TB remains the directional choice because the survival gap is modest, V1per41's prior season map identified TB-CLE as Tampa Bay's best use, and preserving Baltimore helps keep the surviving entries on more distinct future paths. Fresh V1per41 Week 2 output and ownership still need review.",
    },
  ],
  inputs: [
    {
      label: "Portfolio objective",
      state: "loaded",
      detail: "Primary objective is now especially sensitive to correlation because only two entries remain. Directional allocation favors one SF anchor plus one independent high-probability leg rather than doubling the same team without a compelling quality-gap reason.",
    },
    {
      label: "Opening market",
      state: "live",
      detail: "Early Week 2 market after Sunday's games: SF about -13.5 vs MIA; TB about -7.5 vs CLE; BAL about -8.5 vs NO; LAR about -8.5 vs NYG; LAC about -7 vs LV. SF strengthened from the first look, while TB softened by about a point relative to the initial snapshot. The recommendation has not changed.",
    },
    {
      label: "V1per41",
      state: "pending",
      detail: "No fresh 2026 Week 2 post/rerun located in the latest check. V1per41's prior season map listed TB vs CLE as the Week 2 choice, but the workbook should be rerun with current sportsbook lines. Treat TB as supportive directional evidence, not a final pick.",
    },
    {
      label: "Used-team history",
      state: "loaded",
      detail: "Surviving Entry 3 used JAX in Week 1; surviving Entry 4 used DET in Week 1. JAX is unavailable to Entry 3 and DET is unavailable to Entry 4. Entries 1 and 2 are eliminated after using LAC.",
    },
    {
      label: "Cross-entry correlation",
      state: "loaded",
      detail: "A double-SF allocation would have the highest expected Week 2 survivors but a single Miami upset would eliminate the entire remaining portfolio. SF/TB sacrifices some expected survivors in exchange for a materially higher current-week probability that at least one entry survives and more distinct future season paths.",
    },
    {
      label: "Finalization gate",
      state: "pending",
      detail: "Do not mark FINAL until ownership, injuries, late-week market, V1per41 update, commissioner-sheet duplicate history, and cross-entry future-path overlap are audited.",
    },
  ],
};
