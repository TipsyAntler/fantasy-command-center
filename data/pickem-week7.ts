import type { Week5PoolGame } from "./pickem-week5";

export const week7Number = 7;
export const week7PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week7PoolStatus = "EXACT WEEK 7 FROZEN LINES CAPTURED · MIKE'S 14 HYBRID PICKS CONFIRMED OCT 22 · THURSDAY FINAL · 4 FRIDAY FFCC FLIPS · TIEBREAKER UPDATED TO 44 · REMAINING CARD PROVISIONAL";
export const week7MarketAsOf = "Oct 23, 2026 · 3:48 PM ET · eDraft multi-book median cross-checked against 10:45 AM DraftKings and 11:13 AM bet365 snapshots; exact two-sided ATS prices at frozen lines remain unverified unless stated";
export const week7Standing = {correct:40,rank:78,leaderCorrect:57,note:"Oct 20 user screenshot. Rank ties by total correct. This is Mike's actual SZN standing, not FFCC model performance."};
export const week7MikeSubmittedCard = {
  confirmedAt: "Oct 22, 2026 · morning ET · user submission confirmation photo",
  source: "The SZN Week 7 pool card",
  picks: [
    "NE +3.5", "PIT -3.5", "SF -3.5", "CLE -1.5", "MIN -6.5", "NYJ -4.5", "CAR -3.5",
    "BAL -2.5", "NYG +10.5", "DEN -4.5", "GB +3.5", "LAR -4.5", "KC +2.5", "DAL -4.5",
  ],
  tiebreaker: null,
  note: "The SZN Oct 22 Boom! Picks confirmed screen verifies all 14 actual Week 7 hybrid choices. Oct 20 original vibes preserved in audit. Mike does not make a separate vibes tiebreaker; shared FFCC target is provisional.",
};
export const week7PoolGames: Week5PoolGame[] = [
  {
    day:"Thu", kickoff:"8:15 PM", away:"NE", home:"CHI", poolPick:"NE", poolLine:3.5, mikeVibe:"NE +3.5", poolFavorite:"CHI", poolSpread:3.5,
    marketLabel:"CHI -3 closing consensus after earlier -2.5; total 50.5", marketTotal:50.5, confidence:3,
    signal:"FINAL · FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Final pregame audit kept NE +3.5. Official inactives and the closing market were reviewed; Chicago remained -3, so the frozen pool line gave New England the hook above the key 3. No current two-sided alternate pair at the exact NE +3.5 was verified, so the edge size remained uncalibrated.",
    watch:"Locked at kickoff. Mike's submitted side was also NE +3.5; FFCC advice and the SZN submission are recorded separately.",
    result:"CHI 30, NE 24 — FFCC recommendation NE +3.5 did not cover; Mike's submitted NE +3.5 also lost.",
    outcome:"loss"
  },
  {
    day:"Sun", kickoff:"9:30 AM", away:"PIT", home:"NO", poolPick:"NO", poolLine:3.5, mikeVibe:"PIT -3.5", poolFavorite:"PIT", poolSpread:3.5,
    marketLabel:"PIT -3 median Friday; DraftKings -3, bet365 -3.5", marketTotal:44.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Flip to NO +3.5. Friday's multi-book median and DraftKings both moved Pittsburgh to -3, giving New Orleans the hook above the key 3 at the frozen pool line. Bet365 remained PIT -3.5, and no exact two-sided alternate pair at NO +3.5 was verified, so the edge size is uncalibrated.",
    watch:"Recheck the Sunday-morning market and France-game inactives before the 1:00 PM ET pool edit cutoff. Mike's submitted side remains PIT -3.5; this changes FFCC advice only."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"SF", home:"ATL", poolPick:"ATL", poolLine:3.5, mikeVibe:"SF -3.5", poolFavorite:"SF", poolSpread:3.5,
    marketLabel:"SF -3 (NFLLines Tuesday night); FOX/bet365 earlier -3.5", marketTotal:50.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Take ATL +3.5 provisionally. A current movement feed has San Francisco -3 after earlier -3.5 listings, giving Atlanta the hook above 3. Mike Evans' Achilles status is a material watch, but the move is treated as priced rather than counted twice.",
    watch:"49ers receiver availability, final reports and a verified exact ATL +3.5 price. Mike is currently on SF -3.5."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CLE", home:"TEN", poolPick:"CLE", poolLine:-1.5, mikeVibe:"CLE -1.5", poolFavorite:"CLE", poolSpread:1.5,
    marketLabel:"CLE -1.5 (reviewed market consensus)", marketTotal:38.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The reviewed market matches the pool at CLE -1.5 and no verified exact-line price lean or independent override was found. Use Cleveland as the initial market-side tie choice.",
    watch:"Wednesday-Friday quarterback/offensive-line reports and exact-line prices. Mike submitted CLE -1.5 in the confirmed hybrid card."
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
    day:"Sun", kickoff:"1:00 PM", away:"TB", home:"CAR", poolPick:"TB", poolLine:3.5, mikeVibe:"CAR -3.5", poolFavorite:"CAR", poolSpread:3.5,
    marketLabel:"CAR -2.8 median Friday; bet365 -2.5, DraftKings -3", marketTotal:44.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Flip to TB +3.5. Friday's independent snapshots and multi-book median all price Carolina below -3.5, with the market clustered from -2.5 to -3. The frozen pool line gives Tampa Bay the hook above the key 3; no exact two-sided alternate pair at TB +3.5 was verified, so the edge size is uncalibrated.",
    watch:"Recheck Baker Mayfield and both offensive lines plus fresh prices before Sunday's 1:00 PM ET edit cutoff. Mike's submitted side remains CAR -3.5; this changes FFCC advice only."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"CIN", home:"BAL", poolPick:"CIN", poolLine:2.5, mikeVibe:"BAL -2.5", poolFavorite:"BAL", poolSpread:2.5,
    marketLabel:"BAL -1.5 consensus Friday after a volatile move that briefly flipped to CIN -1/-1.5", marketTotal:48.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Keep CIN +2.5. The frozen pool line asks Baltimore to cover one point more than Friday's BAL -1.5 multi-book consensus. Lamar Jackson was limited all three practice days and is officially questionable with a possible game-time decision. No current two-sided alternate pair at the exact CIN +2.5 was verified, so the advantage is real in number but uncalibrated.",
    watch:"Recheck Jackson's Sunday status and fresh exact-line prices before the 1:00 PM ET edit cutoff. Mike's submitted side remains BAL -2.5; this changes FFCC advice only."
  },
  {
    day:"Sun", kickoff:"1:00 PM", away:"NYG", home:"HOU", poolPick:"NYG", poolLine:10.5, mikeVibe:"NYG +10.5", poolFavorite:"HOU", poolSpread:10.5,
    marketLabel:"HOU -10.5 Friday across the multi-book median, DraftKings and bet365", marketTotal:42.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"Friday's reliable market now matches the frozen HOU -10.5 exactly. With no verified exact-line price lean or validated independent override, retain the prior NYG +10.5 recommendation only as a transparent tie choice.",
    watch:"Recheck final reports and exact-line prices before the edit cutoff. Mike is currently on NYG +10.5."
  },
  {
    day:"Sun", kickoff:"4:05 PM", away:"DEN", home:"ARI", poolPick:"DEN", poolLine:-4.5, mikeVibe:"DEN -4.5", poolFavorite:"DEN", poolSpread:4.5,
    marketLabel:"DEN -4.5 Tuesday after opening near -5.5", marketTotal:43.5, confidence:1,
    signal:"NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    rationale:"The current reviewed market matches the frozen DEN -4.5. No verified exact-line price lean exists yet, so Denver is a transparent initial tie choice.",
    watch:"Recheck quarterback/offensive-line reports and exact-line consensus. Mike is currently on DEN -4.5."
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"GB", home:"DET", poolPick:"GB", poolLine:3.5, mikeVibe:"GB +3.5", poolFavorite:"DET", poolSpread:3.5,
    marketLabel:"DET -3 (NFLLines Tuesday); FOX/bet365 earlier -3.5", marketTotal:53.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Take GB +3.5 provisionally. A current movement source lists Detroit -3, so the pool gives Green Bay the hook above the key 3; an earlier bet365 snapshot was still -3.5. No exact-line price consensus was verified.",
    watch:"Resolve the -3 versus -3.5 market split and review final divisional-game injuries. Mike submitted GB +3.5 in the confirmed hybrid card."
  },
  {
    day:"Sun", kickoff:"4:25 PM", away:"LAR", home:"LV", poolPick:"LV", poolLine:4.5, mikeVibe:"LAR -4.5", poolFavorite:"LAR", poolSpread:4.5,
    marketLabel:"LAR -3.5 Friday across the multi-book median, DraftKings and bet365", marketTotal:48.5, confidence:2,
    signal:"FROZEN-NUMBER ADVANTAGE · UNCALIBRATED SIZE",
    rationale:"Flip to LV +4.5. Three independently reviewed Friday views all price the Rams at -3.5, giving Las Vegas a full extra point at the frozen pool line. No exact two-sided alternate pair at LV +4.5 was verified, so the size remains uncalibrated.",
    watch:"Puka Nacua is questionable after a Friday DNP; the market may keep moving. Recheck his status and exact-line prices before Sunday's 1:00 PM ET edit cutoff. Mike's submitted side remains LAR -4.5; this changes FFCC advice only."
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
export const week7Tiebreaker = {matchup:"DAL @ PHI",label:"Total points scored in final game of the week (Monday)",currentMarketTotal:44,earlyFfccTarget:44,mikeSubmittedTotal:null,note:"FRIDAY FFCC TARGET: the 3:48 PM ET multi-book median is 44, while DraftKings and bet365 remain 44.5. Use 44 provisionally. Mike does not make a separate vibes tiebreaker, so none is logged. Recheck weather, final reports, fresh totals and the pool control before finalizing."};
