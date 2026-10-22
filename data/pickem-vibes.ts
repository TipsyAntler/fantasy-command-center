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

export type PickemVibePick = {
  week: number;
  matchup: string;
  frozenLine: string;
  mikeSide: string;
  loggedAt: string;
  result?: "Win" | "Loss" | "Push" | "Pending";
  originalVibeSide?: string;
  submittedConfirmedAt?: string;
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
  principle: "Track Mike's pregame matchup sides against FFCC prospectively, especially on disagreements. Do not track tiebreaker totals in the vibe experiment. Keep the market-first recommendation independent until the record is large and stable enough to justify an explicit change.",
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
    week: 6,
    status: "final",
    gamesDecided: 14,
    mikeCorrect: 5,
    ffccCorrect: 9,
    mikeSeasonCorrect: 40,
    mikeRank: 78,
    note: "Week 6 final. Tiebreaker excluded from vibes vs FFCC comparison.",
  },
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

export const pickemVibeDisagreements: PickemVibeDisagreement[] = [
  { week: 7, matchup: "SF @ ATL", frozenLine: "SF -3.5 / ATL +3.5", mikeSide: "SF -3.5", ffccSide: "ATL +3.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending", note: "Current SF -3 gives ATL the hook above the key 3; frozen-number advantage with uncalibrated size." },
  { week: 7, matchup: "KC @ SEA", frozenLine: "SEA -2.5 / KC +2.5", mikeSide: "KC +2.5", ffccSide: "SEA -2.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending", note: "No measured edge; provisional market-side tie choice." },
  { week: 5, matchup: "TB @ DAL", frozenLine: "DAL -10.5 / TB +10.5", mikeSide: "DAL -10.5", ffccSide: "TB +10.5", loggedAt: "2026-10-07 07:25 ET", result: "Pending", note: "Early market around DAL -8.5 creates roughly two points of frozen-line value on TB." },
  { week: 5, matchup: "CHI @ GB", frozenLine: "CHI -3.5 / GB +3.5", mikeSide: "CHI -3.5", ffccSide: "GB +3.5", loggedAt: "2026-10-07 07:25 ET", result: "Pending", note: "Current market roughly CHI -2.5 to -3; FFCC takes the pool half-point above the key 3." },
  { week: 5, matchup: "HOU @ TEN", frozenLine: "HOU -7.5 / TEN +7.5", mikeSide: "HOU -7.5", ffccSide: "TEN +7.5", loggedAt: "2026-10-07 07:25 ET", result: "Pending", note: "Current market clusters around HOU -7 to -7.5; FFCC takes the useful hook above seven." },
  { week: 5, matchup: "LV @ NE", frozenLine: "NE -4.5 / LV +4.5", mikeSide: "NE -4.5", ffccSide: "LV +4.5", loggedAt: "2026-10-07 07:25 ET", result: "Pending", note: "Current market around NE -3.5 creates one point of frozen-line value on LV." },
  { week: 5, matchup: "MIN @ NO", frozenLine: "MIN -2.5 / NO +2.5", mikeSide: "MIN -2.5", ffccSide: "NO +2.5", loggedAt: "2026-10-07 07:25 ET", result: "Pending", note: "Current market around MIN -1.5 creates one point of stale-line value on NO." },
  { week: 5, matchup: "DET @ ARI", frozenLine: "DET -5.5 / ARI +5.5", mikeSide: "DET -5.5", ffccSide: "ARI +5.5", loggedAt: "2026-10-07 07:25 ET", result: "Pending", note: "Market sources range DET -4.5 to -5.5; FFCC takes the better frozen number provisionally." },
];


export const pickemVibePicks: PickemVibePick[] = [
  // Oct 20 initial vibes retained as originalVibeSide; Oct 22 The SZN photo confirms Mike's 14 submitted hybrid picks.
  // Mike does not make a separate vibes tiebreaker; FFCC independently recommends one shared total.
  { week: 7, matchup: "NE @ CHI", frozenLine: "CHI -3.5 / NE +3.5", mikeSide: "NE +3.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "PIT @ NO", frozenLine: "PIT -3.5 / NO +3.5", mikeSide: "PIT -3.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending", originalVibeSide: "NO +3.5", submittedConfirmedAt: "2026-10-22 08:54 ET" },
  { week: 7, matchup: "SF @ ATL", frozenLine: "SF -3.5 / ATL +3.5", mikeSide: "SF -3.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "CLE @ TEN", frozenLine: "CLE -1.5 / TEN +1.5", mikeSide: "CLE -1.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending", originalVibeSide: "TEN +1.5", submittedConfirmedAt: "2026-10-22 08:54 ET" },
  { week: 7, matchup: "IND @ MIN", frozenLine: "MIN -6.5 / IND +6.5", mikeSide: "MIN -6.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "MIA @ NYJ", frozenLine: "NYJ -4.5 / MIA +4.5", mikeSide: "NYJ -4.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "TB @ CAR", frozenLine: "CAR -3.5 / TB +3.5", mikeSide: "CAR -3.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "CIN @ BAL", frozenLine: "BAL -2.5 / CIN +2.5", mikeSide: "BAL -2.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "NYG @ HOU", frozenLine: "HOU -10.5 / NYG +10.5", mikeSide: "NYG +10.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "DEN @ ARI", frozenLine: "DEN -4.5 / ARI +4.5", mikeSide: "DEN -4.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "GB @ DET", frozenLine: "DET -3.5 / GB +3.5", mikeSide: "GB +3.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending", originalVibeSide: "DET -3.5", submittedConfirmedAt: "2026-10-22 08:54 ET" },
  { week: 7, matchup: "LAR @ LV", frozenLine: "LAR -4.5 / LV +4.5", mikeSide: "LAR -4.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "KC @ SEA", frozenLine: "SEA -2.5 / KC +2.5", mikeSide: "KC +2.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  { week: 7, matchup: "DAL @ PHI", frozenLine: "DAL -4.5 / PHI +4.5", mikeSide: "DAL -4.5", loggedAt: "2026-10-20 22:35 ET", result: "Pending" },
  // All 14 orange-highlighted sides in the Oct 14 The SZN screenshots.
  // Picks made: 14/14 shown; successful final submission not independently confirmed.
  { week: 6, matchup: "SEA @ DEN", frozenLine: "SEA -3.5 / DEN +3.5", mikeSide: "SEA -3.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "HOU @ JAX", frozenLine: "JAX -3.5 / HOU +3.5", mikeSide: "HOU +3.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "CHI @ ATL", frozenLine: "CHI -3.5 / ATL +3.5", mikeSide: "ATL +3.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "BAL @ CLE", frozenLine: "BAL -4.5 / CLE +4.5", mikeSide: "BAL -4.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "TEN @ IND", frozenLine: "IND -7.5 / TEN +7.5", mikeSide: "TEN +7.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "NYJ @ NE", frozenLine: "NE -7.5 / NYJ +7.5", mikeSide: "NE -7.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "NO @ NYG", frozenLine: "NYG -1.5 / NO +1.5", mikeSide: "NO +1.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "CAR @ PHI", frozenLine: "PHI -1.5 / CAR +1.5", mikeSide: "PHI -1.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "PIT @ TB", frozenLine: "PIT -3.5 / TB +3.5", mikeSide: "PIT -3.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "ARI @ LAR", frozenLine: "LAR -13.5 / ARI +13.5", mikeSide: "LAR -13.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "LAC @ KC", frozenLine: "KC -8.5 / LAC +8.5", mikeSide: "KC -8.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "BUF @ LV", frozenLine: "BUF -6.5 / LV +6.5", mikeSide: "BUF -6.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "DAL @ GB", frozenLine: "GB -1.5 / DAL +1.5", mikeSide: "DAL +1.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 6, matchup: "WAS @ SF", frozenLine: "SF -7.5 / WAS +7.5", mikeSide: "SF -7.5", loggedAt: "2026-10-14 13:25 ET", result: "Pending" },
  { week: 5, matchup: "TB @ DAL", frozenLine: "DAL -10.5 / TB +10.5", mikeSide: "DAL -10.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "PHI @ JAX", frozenLine: "JAX -7.5 / PHI +7.5", mikeSide: "PHI +7.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "CHI @ GB", frozenLine: "CHI -3.5 / GB +3.5", mikeSide: "CHI -3.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "HOU @ TEN", frozenLine: "HOU -7.5 / TEN +7.5", mikeSide: "HOU -7.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "CIN @ MIA", frozenLine: "CIN -7.5 / MIA +7.5", mikeSide: "MIA +7.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "LV @ NE", frozenLine: "NE -4.5 / LV +4.5", mikeSide: "NE -4.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "MIN @ NO", frozenLine: "MIN -2.5 / NO +2.5", mikeSide: "MIN -2.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "CLE @ NYJ", frozenLine: "NYJ -3.5 / CLE +3.5", mikeSide: "CLE +3.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "IND @ PIT", frozenLine: "PIT -3.5 / IND +3.5", mikeSide: "IND +3.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "NYG @ WAS", frozenLine: "WAS -3.5 / NYG +3.5", mikeSide: "NYG +3.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "DEN @ LAC", frozenLine: "DEN -4.5 / LAC +4.5", mikeSide: "LAC +4.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "DET @ ARI", frozenLine: "DET -5.5 / ARI +5.5", mikeSide: "DET -5.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "SF @ SEA", frozenLine: "SEA -3.5 / SF +3.5", mikeSide: "SF +3.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
  { week: 5, matchup: "BAL @ ATL", frozenLine: "BAL -3.5 / ATL +3.5", mikeSide: "ATL +3.5", loggedAt: "2026-10-07 23:43 ET", result: "Pending" },
  { week: 5, matchup: "BUF @ LAR", frozenLine: "LAR -3.5 / BUF +3.5", mikeSide: "BUF +3.5", loggedAt: "2026-10-07 07:17 ET", result: "Pending" },
];
