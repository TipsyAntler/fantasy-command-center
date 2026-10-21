import type { Week5PoolGame } from "./pickem-week5";

export const week7Number = 7;
export const week7PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week7PoolStatus = "EXACT WEEK 7 FROZEN LINES CAPTURED · MIKE'S 14 CURRENT ENTERED/VIBES SIDES CAPTURED · EARLY FFCC CARD PROVISIONAL";
export const week7MarketAsOf = "Oct 20, 2026 · Tuesday night ET · bet365 snapshots via FOX Sports and Sportsbook Review, with NFLLines movement cross-check; exact two-sided ATS prices remain unverified unless stated";
export const week7Standing = {correct:40,rank:78,leaderCorrect:57,note:"Oct 20 user screenshot. Rank ties by total correct. This is Mike's actual SZN standing, not FFCC model performance."};
export const week7MikeSubmittedCard = {
  confirmedAt: "Oct 20, 2026 · 10:35 PM ET · user screenshots",
  source: "The SZN Week 7 pool card",
  picks: [
    "NE +3.5", "NO +3.5", "SF -3.5", "TEN +1.5", "MIN -6.5", "NYJ -4.5", "CAR -3.5",
    "BAL -2.5", "NYG +10.5", "DEN -4.5", "DET -3.5", "LAR -4.5", "KC +2.5", "DAL -4.5",
  ],
  tiebreaker: null,
  note: "Orange-highlighted sides and 14/14 entered are visible in Mike's SZN screenshots. They are logged as his current Week 7 entered/vibes card and remain editable; Mike does not make a separate vibes tiebreaker.",
};
export const week7PoolGames: Week5PoolGame[] = [
  {
    day:"Thu", kickoff:"8:15 PM", away:"NE", home:"CHI", poolPick:"NE", poolLine:3.5, mikeVibe:"NE +3.5", poolFavorite:"CHI", poolSpread:3.5,
    marketLabel:"CHI -2.5 (FOX/bet365 11:35 AM ET) to -3 (NFLLines Tuesday night)", marketTotal:50.5, confidence:3,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Take NE +3.5 provisionally. The pool gives New England the hook above the key 3 while reviewed current markets list Chicago -2.5 to -3. No current two-sided alternate pair at the exact NE +3.5 was verified, so the size is uncalibrated.",
    watch:"Thursday final injury report, inactives, weather and fresh exact-line prices. Mike is also currently on NE +3.5. Not final."
  },
  {
    day:"Sun", kickoff:"9:30 AM", away:"PIT", home:"NO", poolPick:"PIT", poolLine:-3.5, mikeVibe:"NO +3.5", poolFavorite:"PIT", poolSpread:3.5,
    marketLabel:"PIT -3.5 (FOX/bet365 and NFLLines Tuesday)", marketTotal:44.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The reliable reviewed market is sitting on the frozen PIT -3.5 and no validated independent same-line edge was found. Use Pittsburgh as the initial market-side tie choice, not as a claimed advantage.",
    watch:"Seek independent two-sided prices at PIT -3.5 and recheck France-game reports. Mike is currently on NO +3.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"SF", home:"ATL", poolPick:"ATL", poolLine:3.5, mikeVibe:"SF -3.5", poolFavorite:"SF", poolSpread:3.5,
    marketLabel:"SF -3 (NFLLines Tuesday night); FOX/bet365 earlier -3.5", marketTotal:50.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Take ATL +3.5 provisionally. A current movement feed has San Francisco -3 after earlier -3.5 listings, giving Atlanta the hook above 3. Mike Evans' Achilles status is a material watch, but the move is treated as priced rather than counted twice.",
    watch:"49ers receiver availability, final reports and a verified exact ATL +3.5 price. Mike is currently on SF -3.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CLE", home:"TEN", poolPick:"CLE", poolLine:-1.5, mikeVibe:"TEN +1.5", poolFavorite:"CLE", poolSpread:1.5,
    marketLabel:"CLE -1.5 (reviewed market consensus)", marketTotal:38.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The reviewed market matches the pool at CLE -1.5 and no verified exact-line price lean or independent override was found. Use Cleveland as the initial market-side tie choice.",
    watch:"Wednesday-Friday quarterback/offensive-line reports and exact-line prices. Mike is currently on TEN +1.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"IND", home:"MIN", poolPick:"MIN", poolLine:-6.5, mikeVibe:"MIN -6.5", poolFavorite:"MIN", poolSpread:6.5,
    marketLabel:"MIN -6.5 Tuesday; earlier sources ranged -5.5 to -6.5", marketTotal:41.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The latest reviewed market reached the frozen MIN -6.5 after earlier -5.5 readings. With no verified two-sided price at the exact number, retain Minnesota only as a transparent initial tie choice.",
    watch:"Monitor whether the market falls back below 6.5 and review final quarterback/line reports. Mike is currently on MIN -6.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"MIA", home:"NYJ", poolPick:"NYJ", poolLine:-4.5, mikeVibe:"NYJ -4.5", poolFavorite:"NYJ", poolSpread:4.5,
    marketLabel:"NYJ -4.5 Tuesday; one earlier snapshot -5.5", marketTotal:39.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"Current reviewed listings center on the frozen NYJ -4.5. No reliable exact-line price lean was captured, so New York is the initial tie choice with no measured edge.",
    watch:"Monitor Miami quarterback/skill availability and exact-line consensus. Mike is currently on NYJ -4.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"TB", home:"CAR", poolPick:"CAR", poolLine:-3.5, mikeVibe:"CAR -3.5", poolFavorite:"CAR", poolSpread:3.5,
    marketLabel:"CAR -3.5 (reviewed market consensus)", marketTotal:44.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The reviewed market matches the frozen CAR -3.5. No verified exact-line price lean or validated independent override was found, so retain Carolina as the initial market-side tie choice.",
    watch:"Recheck final offensive-line and quarterback reports plus exact-line prices. Mike is currently on CAR -3.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CIN", home:"BAL", poolPick:"BAL", poolLine:-2.5, mikeVibe:"BAL -2.5", poolFavorite:"BAL", poolSpread:2.5,
    marketLabel:"BAL -2.5 Tuesday after opening nearer -3.5", marketTotal:51.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The current reviewed market matches the frozen BAL -2.5 after earlier Baltimore -3 to -3.5 readings. Without a verified exact-line price, keep Baltimore only as the initial tie choice.",
    watch:"Lamar Jackson practice participation is the main football input; verify exact-line prices after Wednesday reports. Mike is currently on BAL -2.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"NYG", home:"HOU", poolPick:"NYG", poolLine:10.5, mikeVibe:"NYG +10.5", poolFavorite:"HOU", poolSpread:10.5,
    marketLabel:"HOU -9.5 (FOX/bet365) to -10 (NFLLines Tuesday)", marketTotal:42.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Take NYG +10.5 provisionally. Reviewed markets list Houston -9.5 to -10, so the pool provides a half to full point of extra cushion. No exact NYG +10.5 two-sided pair was verified.",
    watch:"At an integer current line, push probability matters; do not convert the half-point gap into a fabricated cover percentage. Mike is currently on NYG +10.5."
  },
  {
    day:"Sun", kickoff:"4:05 PM", away:"DEN", home:"ARI", poolPick:"DEN", poolLine:-4.5, mikeVibe:"DEN -4.5", poolFavorite:"DEN", poolSpread:4.5,
    marketLabel:"DEN -4.5 Tuesday after opening near -5.5", marketTotal:43.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The current reviewed market matches the frozen DEN -4.5. No verified exact-line price lean exists yet, so Denver is a transparent initial tie choice.",
    watch:"Recheck quarterback/offensive-line reports and exact-line consensus. Mike is currently on DEN -4.5."
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"GB", home:"DET", poolPick:"GB", poolLine:3.5, mikeVibe:"DET -3.5", poolFavorite:"DET", poolSpread:3.5,
    marketLabel:"DET -3 (NFLLines Tuesday); FOX/bet365 earlier -3.5", marketTotal:53.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Take GB +3.5 provisionally. A current movement source lists Detroit -3, so the pool gives Green Bay the hook above the key 3; an earlier bet365 snapshot was still -3.5. No exact-line price consensus was verified.",
    watch:"Resolve the -3 versus -3.5 market split and review final divisional-game injuries. Mike is currently on DET -3.5."
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"LAR", home:"LV", poolPick:"LAR", poolLine:-4.5, mikeVibe:"LAR -4.5", poolFavorite:"LAR", poolSpread:4.5,
    marketLabel:"LAR -4.5 Tuesday after opening near -7", marketTotal:47.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The latest reviewed market matches the frozen LAR -4.5 after a large early move down from -7. With no current exact-line price lean, retain the Rams only as the initial tie choice.",
    watch:"Davante Adams is already out 6-10 weeks and the market has repriced; do not double-count it. Recheck exact-line prices and final reports. Mike is currently on LAR -4.5."
  },
  {
    day:"Sun", kickoff:"8:20 PM", away:"KC", home:"SEA", poolPick:"SEA", poolLine:-2.5, mikeVibe:"KC +2.5", poolFavorite:"SEA", poolSpread:2.5,
    marketLabel:"SEA -2.5 (reviewed market consensus)", marketTotal:42.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The reviewed market matches the frozen SEA -2.5 and no verified exact-line price lean or validated independent override was found. Use Seattle as the initial market-side tie choice.",
    watch:"Zach Charbonnet's possible return and both offensive-line reports require review; seek exact two-sided prices. Mike is currently on KC +2.5."
  },
  {
    day:"Mon", kickoff:"8:15 PM", away:"DAL", home:"PHI", poolPick:"DAL", poolLine:-4.5, mikeVibe:"DAL -4.5", poolFavorite:"DAL", poolSpread:4.5,
    marketLabel:"DAL -4.5 (reviewed market consensus)", marketTotal:44.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The reviewed market matches the frozen DAL -4.5. No verified two-sided exact-line price lean was captured, so Dallas is the transparent initial tie choice rather than a claimed edge.",
    watch:"Jalen Hurts is expected out long term; the market already reflects that news. Recheck final reports, weather, exact-line prices and the Sunday editing cutoff."
  }
];
export const week7Tiebreaker = {matchup:"DAL @ PHI",label:"Total points scored in final game of the week (Monday)",currentMarketTotal:44.5,earlyFfccTarget:45,mikeSubmittedTotal:null,note:"EARLY FFCC TARGET: reviewed Tuesday totals center on 44.5, rounded to 45. Mike does not make a separate vibes tiebreaker, so none is logged. Recheck weather, final reports, fresh totals and the pool control before finalizing."};
