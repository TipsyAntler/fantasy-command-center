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
  result?: string;
  outcome?: "win" | "loss" | "push";
};

export const week5Number = 5;
export const week5PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week5PoolStatus = "POOL LINES FROZEN · EXACT WEEK 5 LINES CAPTURED · MIKE VIBES LOGGED BEFORE MARKET REVIEW";
export const week5MarketAsOf = "Oct 11 · 7:28 PM ET · Sunday-night final-inactives and market audit";

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
    marketLabel:"DAL -8.5 to -9.5 final pregame", marketTotal:47.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · size uncalibrated",
    rationale:"FINAL PREGAME AUDIT (Oct 8, 7:02 PM ET): keep TB +10.5. The live market remains roughly Dallas -8.5 to -9.5, leaving one to two points of frozen-line value. Dallas activated LG Tyler Smith but unexpectedly scratched CB Joey Porter Jr.; Tampa still lacks Baker Mayfield, Antoine Winfield Jr., Benjamin Morrison and SirVocea Dennis, while Rueben Bain Jr. and Ko Kieft return. The injuries do not overcome the better frozen number.",
    watch:"Final inactives reviewed. Mike\'s actual submitted side remains unconfirmed in FFCC.",
    result:"TB 24, DAL 16 — FFCC recommendation TB +10.5 covered outright.",
    outcome:"win"
  },
  {
    day:"Sun", kickoff:"9:30 AM", away:"PHI", home:"JAX",
    poolPick:"JAX", poolLine:-7.5, mikeVibe:"PHI +7.5", poolFavorite:"JAX", poolSpread:7.5,
    marketLabel:"JAX -7.5 · exact: JAX -114 to -120 / PHI even to -106; several books JAX -8", marketTotal:41.5, confidence:2,
    signal:"FINAL PREGAME · SMALL EXACT-LINE PRICE LEAN",
    rationale:"FINAL PREGAME AUDIT (Oct 11, 8:22 AM ET): keep JAX -7.5. Philadelphia confirmed Saquon Barkley, DeVonta Smith, Drew Kendall, Hollywood Brown and Marcus Epps inactive, then also ruled edge rusher Jonathan Greenard out after his pregame workout. The comparable exact-line board prices JAX -7.5 around -114 to -120 versus PHI +7.5 from even to -106, and several books have moved to Jacksonville -8. The frozen -7.5 therefore retains a small exact-line price lean, not a calibrated high-confidence edge.",
    watch:"FINAL: official inactives and exact-line prices reviewed. Keep JAX -7.5 through the 9:30 AM ET lock. Mike's actual submitted side remains unconfirmed.",
    result:"JAX 19, PHI 17 — FFCC recommendation JAX -7.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CHI", home:"GB",
    poolPick:"GB", poolLine:3.5, mikeVibe:"CHI -3.5", poolFavorite:"CHI", poolSpread:3.5,
    marketLabel:"CHI -1.5 after Caleb Williams inactive", marketTotal:45.5, confidence:3,
    signal:"FINAL PREGAME · FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"FINAL PREGAME AUDIT (Oct 11, 11:58 AM ET): keep GB +3.5. Chicago officially ruled Caleb Williams and RB Kyle Monangai inactive, while Green Bay will have newly signed G Kevin Zeitler active. The live market is now roughly Chicago -1.5, so the frozen pool line gives Green Bay about two points of value and remains above the key three. This is a frozen-number advantage with uncalibrated size, not a model-derived cover probability.",
    watch:"FINAL: official inactives and the current market reviewed. Keep GB +3.5 through the 1 PM ET lock. Mike's actual submitted side remains unconfirmed.",
    result:"GB 31, CHI 7 — FFCC recommendation GB +3.5 covered.",
    outcome:"win"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"HOU", home:"TEN",
    poolPick:"TEN", poolLine:7.5, mikeVibe:"HOU -7.5", poolFavorite:"HOU", poolSpread:7.5,
    marketLabel:"HOU -7 to -7.5", marketTotal:37.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN · key 7",
    rationale:"The market is clustered around Houston -7 to -7.5. TEN +7.5 gets the useful half-point above seven at some books, but the edge is not universal.",
    watch,
    result:"HOU 26, TEN 3 — FFCC recommendation TEN +7.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CIN", home:"MIA",
    poolPick:"MIA", poolLine:7.5, mikeVibe:"MIA +7.5", poolFavorite:"CIN", poolSpread:7.5,
    marketLabel:"CIN -7 to -7.5", marketTotal:42.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN · key 7",
    rationale:"MIA +7.5 is at worst near the current market and at some consensus snapshots is a half-point better than +7. Keep Miami provisionally while exact +7.5 prices are audited.",
    watch,
    result:"CIN 31, MIA 24 — FFCC recommendation MIA +7.5 covered.",
    outcome:"win"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"LV", home:"NE",
    poolPick:"LV", poolLine:4.5, mikeVibe:"NE -4.5", poolFavorite:"NE", poolSpread:4.5,
    marketLabel:"NE -3.5", marketTotal:45.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE",
    rationale:"The pool gives Las Vegas +4.5 while the current market is around +3.5. That full extra point favors LV.",
    watch,
    result:"NE 45, LV 17 — FFCC recommendation LV +4.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"MIN", home:"NO",
    poolPick:"NO", poolLine:2.5, mikeVibe:"MIN -2.5", poolFavorite:"MIN", poolSpread:2.5,
    marketLabel:"MIN -1.5", marketTotal:42.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE",
    rationale:"NO +2.5 is a full point better than the current market around +1.5. The stale pool number favors New Orleans even though Minnesota remains the market favorite.",
    watch,
    result:"MIN 23, NO 13 — FFCC recommendation NO +2.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CLE", home:"NYJ",
    poolPick:"CLE", poolLine:3.5, mikeVibe:"CLE +3.5", poolFavorite:"NYJ", poolSpread:3.5,
    marketLabel:"NYJ -1.5 to -2.5", marketTotal:39.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"CLE +3.5 is one to two points better than the market and sits above the key field-goal margin.",
    watch,
    result:"NYJ 17, CLE 12 — FFCC recommendation CLE +3.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"IND", home:"PIT",
    poolPick:"IND", poolLine:3.5, mikeVibe:"IND +3.5", poolFavorite:"PIT", poolSpread:3.5,
    marketLabel:"PIT -2.5", marketTotal:44.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"IND +3.5 versus a current +2.5 market crosses the key three and creates clear frozen-line value.",
    watch,
    result:"PIT 34, IND 22 — FFCC recommendation IND +3.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"NYG", home:"WAS",
    poolPick:"NYG", poolLine:3.5, mikeVibe:"NYG +3.5", poolFavorite:"WAS", poolSpread:3.5,
    marketLabel:"WAS -3 to -3.5", marketTotal:43.5, confidence:2,
    signal:"SMALL FROZEN-NUMBER LEAN",
    rationale:"NYG +3.5 is equal to or a half-point better than current consensus depending on source. Keep the Giants provisionally pending exact-line prices.",
    watch,
    result:"NYG 27, WAS 27 — FFCC recommendation NYG +3.5 covered.",
    outcome:"win"
  },
  {
    day:"Sun", kickoff:"4:05 PM", away:"DEN", home:"LAC",
    poolPick:"LAC", poolLine:4.5, mikeVibe:"LAC +4.5", poolFavorite:"DEN", poolSpread:4.5,
    marketLabel:"DEN -3.5 final pregame", marketTotal:42.5, confidence:3,
    signal:"FINAL PREGAME · FROZEN-NUMBER ADVANTAGE",
    rationale:"FINAL PREGAME AUDIT (Oct 11, 3:15 PM ET): keep LAC +4.5. The live market remains around Denver -3.5, leaving a full point of frozen-line value. Los Angeles is depleted at receiver, offensive line and defensive back, but Denver is also without starting corners Pat Surtain II and Riley Moss; Omarion Hampton remains active. Those absences do not erase the better pool number.",
    watch:"FINAL: official inactives and the current market reviewed. Keep LAC +4.5 through the 4:05 PM ET lock. Mike's actual submitted side remains unconfirmed.",
    result:"DEN 23, LAC 17 — FFCC recommendation LAC +4.5 did not cover.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"DET", home:"ARI",
    poolPick:"ARI", poolLine:5.5, mikeVibe:"DET -5.5", poolFavorite:"DET", poolSpread:5.5,
    marketLabel:"DET -5.5 · exact: DET -108 / ARI -111", marketTotal:54.5, confidence:2,
    signal:"FINAL PREGAME · SMALL EXACT-LINE PRICE LEAN",
    rationale:"FINAL PREGAME AUDIT (Oct 11, 3:15 PM ET): keep ARI +5.5. Marvin Harrison Jr. is inactive while Arizona works on a trade, but the exact frozen spread remains essentially balanced with a slight Arizona price lean: Detroit -5.5 -108 versus Arizona +5.5 -111. Detroit also confirmed DT Tyleik Williams active. The market has fully had time to digest Harrison's absence and still does not validate a Detroit flip.",
    watch:"FINAL: official inactives and the exact frozen-line price reviewed. Keep ARI +5.5 through the 4:25 PM ET lock. Mike's actual submitted side remains unconfirmed."
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"SF", home:"SEA",
    poolPick:"SF", poolLine:3.5, mikeVibe:"SF +3.5", poolFavorite:"SEA", poolSpread:3.5,
    marketLabel:"SEA -3 to -3.5 final pregame", marketTotal:46.5, confidence:3,
    signal:"FINAL PREGAME · FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"FINAL PREGAME AUDIT (Oct 11, 3:15 PM ET): keep SF +3.5. DraftKings and FanDuel are around Seattle -3 while BetMGM is -3.5, so the frozen number is at least equal to the best widely available 49ers line and often a half-point better across the key three. Seattle's starting secondary is fully active for the first time this season, but the market has not moved far enough to erase the number advantage.",
    watch:"FINAL: official inactives and current multi-book spreads reviewed. Keep SF +3.5 through the 4:25 PM ET lock. Mike's actual submitted side remains unconfirmed."
  },
  {
    day:"Sun", kickoff:"8:20 PM", away:"BAL", home:"ATL",
    poolPick:"ATL", poolLine:3.5, mikeVibe:"ATL +3.5", poolFavorite:"BAL", poolSpread:3.5,
    marketLabel:"ATL -3 to -3.5 final pregame", marketTotal:43.5, confidence:4,
    signal:"FINAL PREGAME · MAJOR FROZEN-NUMBER ADVANTAGE · injury-driven",
    rationale:"FINAL PREGAME AUDIT (Oct 11, 7:28 PM ET): keep ATL +3.5. Lamar Jackson is inactive and Tyler Huntley starts; Baltimore also scratched starting RG Andrew Vorhees, while Zay Flowers and Marlon Humphrey are active. Atlanta has LT Jake Matthews active but edge Za'Darius Smith inactive. FanDuel still makes Atlanta a 3.5-point favorite, with other live books around ATL -3, so the frozen pool line remains roughly 6.5 to 7 points better and crosses zero plus the key three. This is a large frozen-number advantage with uncalibrated size, not a model-derived cover probability.",
    watch:"FINAL: official inactives and current market reviewed. Keep ATL +3.5 through the 8:20 PM ET lock. Mike's actual submitted side remains unconfirmed."
  },
  {
    day:"Mon", kickoff:"8:15 PM", away:"BUF", home:"LAR",
    poolPick:"BUF", poolLine:3.5, mikeVibe:"BUF +3.5", poolFavorite:"LAR", poolSpread:3.5,
    marketLabel:"LAR -3.5 · FanDuel exact: BUF +3.5 -118 / LAR -3.5 -104", marketTotal:54.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · key 3",
    rationale:"KEEP BUF +3.5 after Buffalo ruled out DT Ed Oliver and WR Joshua Palmer, with WR DJ Moore questionable. FanDuel now lists the exact frozen spread at BUF +3.5 -118 versus LAR -3.5 -104 as of Oct 10 at 9:20 PM ET, so the injury news has not produced a Rams-side exact-line edge; the proportional de-vig price still favors Buffalo. The frozen +3.5 also remains on the valuable side of the key three.",
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
