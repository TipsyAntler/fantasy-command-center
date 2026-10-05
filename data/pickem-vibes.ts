export type PickemVibeWeek = {
  week: number;
  status: "partial" | "final";
  gamesDecided: number;
  mikeCorrect: number;
  ffccCorrect: number;
  mikeSeasonCorrect?: number;
  mikeRank?: number;
  note: string;
};

export type PickemVibeDisagreement = {
  week: number;
  matchup: string;
  frozenLine: string;
  mikeSide: string;
  ffccSide: string;
  loggedAt: string;
  result?: "Mike" | "FFCC" | "Push" | "Pending";
  closingSameLine?: string;
  note?: string;
};

// Diagnostic only. Mike's instinct is recorded BEFORE results whenever he expresses
// a side. It does not override the market-first FFCC recommendation by default.
export const pickemVibePolicy = {
  reviewAfterWeek: 7,
  principle: "Track Mike's pregame instinct/submitted side against FFCC prospectively, especially on disagreements. Keep the market-first recommendation independent until the record is large and stable enough to justify an explicit change.",
  metrics: [
    "ATS accuracy on all prospectively logged Mike picks",
    "ATS accuracy on Mike-vs-FFCC disagreement games",
    "FFCC accuracy on the same disagreement games",
    "Same-line closing-market value where exact prices are available",
    "Performance by evidence bucket: frozen-number advantage, small price lean, and no measured edge",
  ],
  guardrail: "Week 4 is an aggregate baseline only. Do not backfill unlogged vibes after seeing results. A Week 7 review is exploratory; any permanent weighting of Mike's instinct requires a broader out-of-sample record.",
};

export const pickemVibeWeeks: PickemVibeWeek[] = [
  {
    week: 4,
    status: "partial",
    gamesDecided: 15,
    mikeCorrect: 5,
    ffccCorrect: 3,
    mikeSeasonCorrect: 27,
    mikeRank: 72,
    note: "Through Sunday with ATL-NO still pending. Mike entered Week 4 with 22 season correct. FFCC score uses the final recommendation card. Game-level Mike vibes were not fully logged prospectively, so Week 4 is not used for disagreement-level inference.",
  },
];

export const pickemVibeDisagreements: PickemVibeDisagreement[] = [];
