export type Week5PoolGame = {
  day: string;
  kickoff: string;
  away: string;
  home: string;
  poolPick: string;
  poolLine: number;
  mikeVibe: string;
  poolFavorite: string;
  poolSpread: number;
  marketLabel: string;
  marketTotal: number;
  confidence: 1 | 2 | 3 | 4 | 5;
  signal: string;
  rationale: string;
  watch: string;
};

export const week5Number = 5;
export const week5PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week5PoolStatus = "POOL LINES FROZEN · EXACT WEEK 5 LINES CAPTURED · MIKE VIBES LOGGED BEFORE MARKET REVIEW";
export const week5MarketAsOf = "Oct 7 · 7:17 AM ET · early cross-source market audit";

export const week5Standing = {
  correct: 27,
  rank: 72,
  leaderCorrect: 39,
  note: "Last confirmed screenshot was before Week 4 MNF; reconcile final Week 4 total separately."
};

const watch = "Recheck fresh multi-book two-sided prices at the exact frozen pool spread plus official injuries before the actual game lock. Do not flip on small price noise.";

export const week5PoolGames: Week5PoolGame[] = [
  {
    day:"Thu", kickoff:"8:15 PM", away:"TB", home:"DAL",
    poolPick:"TB", poolLine:10.5, mikeVibe:"DAL -10.5", poolFavorite:"DAL", poolSpread:10.5,
    marketLabel:"DAL -8.5 consensus", marketTotal:47.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · size uncalibrated",
    rationale:"The pool gives Tampa Bay +10.5 while current consensus is around Dallas -8.5. Two extra points favor TB at the frozen number; this is an early line-value pick, not a claim that Tampa is the better team.",
    watch
  },
  {
    day:"Sun", kickoff:"9:30 AM", away:"PHI", home:"JAX",
    poolPick:"PHI", poolLine:7.5, mikeVibe:"PHI +7.5", poolFavorite:"JAX", poolSpread:7.5,
    marketLabel:"JAX -6.5 to -7", marketTotal:42.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 7",
    rationale:"PHI +7.5 is better than the current market's roughly +6.5 to +7 and turns a seven-point Jacksonville win into a pool cover.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CHI", home:"GB",
    poolPick:"GB", poolLine:3.5, mikeVibe:"CHI -3.5", poolFavorite:"CHI", poolSpread:3.5,
    marketLabel:"CHI -2.5 to -3", marketTotal:45.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"GB +3.5 is materially better than the current +2.5 to +3 market range. A three-point Chicago win cashes the pool side instead of losing or pushing.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"HOU", home:"TEN",
    poolPick:"TEN", poolLine:7.5, mikeVibe:"HOU -7.5", poolFavorite:"HOU", poolSpread:7.5,
    marketLabel:"HOU -7 to -7.5", marketTotal:37.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN · key 7",
    rationale:"The market is clustered around Houston -7 to -7.5. TEN +7.5 gets the useful half-point above seven at some books, but the edge is not universal.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CIN", home:"MIA",
    poolPick:"MIA", poolLine:7.5, mikeVibe:"MIA +7.5", poolFavorite:"CIN", poolSpread:7.5,
    marketLabel:"CIN -7 to -7.5", marketTotal:42.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN · key 7",
    rationale:"MIA +7.5 is at worst near the current market and at some consensus snapshots is a half-point better than +7. Keep Miami provisionally while exact +7.5 prices are audited.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"LV", home:"NE",
    poolPick:"LV", poolLine:4.5, mikeVibe:"NE -4.5", poolFavorite:"NE", poolSpread:4.5,
    marketLabel:"NE -3.5", marketTotal:45.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE",
    rationale:"The pool gives Las Vegas +4.5 while the current market is around +3.5. That full extra point favors LV.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"MIN", home:"NO",
    poolPick:"NO", poolLine:2.5, mikeVibe:"MIN -2.5", poolFavorite:"MIN", poolSpread:2.5,
    marketLabel:"MIN -1.5", marketTotal:42.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE",
    rationale:"NO +2.5 is a full point better than the current market around +1.5. The stale pool number favors New Orleans even though Minnesota remains the market favorite.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CLE", home:"NYJ",
    poolPick:"CLE", poolLine:3.5, mikeVibe:"CLE +3.5", poolFavorite:"NYJ", poolSpread:3.5,
    marketLabel:"NYJ -1.5 to -2.5", marketTotal:39.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"CLE +3.5 is one to two points better than the market and sits above the key field-goal margin.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"IND", home:"PIT",
    poolPick:"IND", poolLine:3.5, mikeVibe:"IND +3.5", poolFavorite:"PIT", poolSpread:3.5,
    marketLabel:"PIT -2.5", marketTotal:44.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"IND +3.5 versus a current +2.5 market crosses the key three and creates clear frozen-line value.",
    watch
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"NYG", home:"WAS",
    poolPick:"NYG", poolLine:3.5, mikeVibe:"NYG +3.5", poolFavorite:"WAS", poolSpread:3.5,
    marketLabel:"WAS -3 to -3.5", marketTotal:43.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN",
    rationale:"NYG +3.5 is equal to or a half-point better than current consensus depending on source. Keep the Giants provisionally pending exact-line prices.",
    watch
  },
  {
    day:"Sun", kickoff:"4:05 PM", away:"DEN", home:"LAC",
    poolPick:"LAC", poolLine:4.5, mikeVibe:"LAC +4.5", poolFavorite:"DEN", poolSpread:4.5,
    marketLabel:"DEN -3.5", marketTotal:42.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE",
    rationale:"The pool gives LAC +4.5 versus a current market around +3.5, a full point of frozen-line value.",
    watch
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"DET", home:"ARI",
    poolPick:"ARI", poolLine:5.5, mikeVibe:"DET -5.5", poolFavorite:"DET", poolSpread:5.5,
    marketLabel:"DET -4.5 to -5.5", marketTotal:54.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN",
    rationale:"ARI +5.5 is equal to or roughly a point better than the current market depending on source. The early edge is modest, so exact +5.5 prices matter.",
    watch
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"SF", home:"SEA",
    poolPick:"SF", poolLine:3.5, mikeVibe:"SF +3.5", poolFavorite:"SEA", poolSpread:3.5,
    marketLabel:"SEA -2.5 to -3", marketTotal:47.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"SF +3.5 is better than the current +2.5 to +3 market and sits on the valuable side of three.",
    watch
  },
  {
    day:"Sun", kickoff:"8:20 PM", away:"BAL", home:"ATL",
    poolPick:"ATL", poolLine:3.5, mikeVibe:"BAL -3.5", poolFavorite:"BAL", poolSpread:3.5,
    marketLabel:"ATL -3 to -3.5", marketTotal:43.5, confidence:4,
    signal:"MAJOR FROZEN-NUMBER ADVANTAGE · injury-driven",
    rationale:"The frozen pool still makes Baltimore -3.5, but Lamar Jackson's ankle injury has moved the live market through zero to roughly Atlanta -3. That creates about six-plus points of stale-line value on ATL +3.5. This is the clearest early Week 5 discrepancy.",
    watch
  },
  {
    day:"Mon", kickoff:"8:15 PM", away:"BUF", home:"LAR",
    poolPick:"BUF", poolLine:3.5, mikeVibe:"BUF +3.5", poolFavorite:"LAR", poolSpread:3.5,
    marketLabel:"LAR -3", marketTotal:54.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"BUF +3.5 is a half-point better than the current +3 market and turns a three-point Rams win into a pool cover.",
    watch
  }
];

export const week5Tiebreaker = {
  matchup:"BUF @ LAR",
  label:"Total points scored in the final game of the week",
  currentMarketTotal:54.5,
  earlyFfccTarget:55,
  note:"Use 55 as the early FFCC target around the current 54.5 market total. Mike's vibe tiebreaker number was not visible in the screenshots."
};
