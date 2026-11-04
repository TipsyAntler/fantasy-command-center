export type Week9PoolGame = {
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
  marketTotal: number | null;
  confidence: 1 | 2 | 3 | 4 | 5;
  signal: string;
  rationale: string;
  watch: string;
};

export const week9Number = 9;
export const week9CapturedAt = "2026-11-04T14:45:00-05:00";
export const week9CapturedLabel = "Nov 4 · 2:45 PM ET";
export const week9ReviewedAt = "2026-11-04T14:36:00-05:00";
export const week9ReviewedLabel = "Nov 4 · 2:36 PM ET";
export const week9PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week9PoolStatus = "WEEK 9 · ALL 15 EXACT FROZEN SPREADS CAPTURED · 14-GAME MARKET AUDIT COMPLETED NOV 4 AT 2:36 PM ET · DET–MIA MARKET AUDIT PENDING · VIBES ARE NOT SUBMISSIONS";
export const week9MarketAsOf = "Fourteen-game market audit completed Nov. 4 at 2:36 PM ET (DET–MIA was not included and remains unaudited) using the frozen SZN numbers, a contemporaneous multi-book board, eDraft's Nov. 4 12:33 PM ET snapshot, and dated FOX/bet365 and CBS/DraftKings snapshots. Exact-line pairs were proportionally de-vigged where available. Official reports were reviewed where posted; several Wednesday reports were still pending, so the listed watch items remain live. Article snapshots are dated evidence, not a live quote feed.";
export const week9Standing = {correct:56,rank:70,leaderCorrect:76,note:"Nov. 4 user screenshot: 56 season correct, overall rank 70; leader 76."};
export const week9MikeVibeCard = {
  observedAt: "Nov 4, 2026 · approximately 1:01 PM ET",
  source: "The SZN Week 9 orange-highlighted sides in Mike's screenshots",
  picks: ["JAX -8.5","CIN -3.5","DAL -6.5","KC -9.5","NO -2.5","NYG -3.5","LAR -5.5","CAR +3.5","HOU -4.5","GB +3.5","SF -10.5","ARI +11.5","CHI -6.5","MIN +3.5","DET -7.5"],
  tiebreaker: null,
  note: "VIBES ONLY. The page showed 15 picks made, but Mike uses highlights to communicate instinct; no side or tiebreaker is treated as a confirmed submission without explicit confirmation."
};
export const week9PendingPoolGames: {day:string; kickoff:string; away:string; home:string; mikeVibe:string; reason:string}[] = [];
export const week9Tiebreaker = {
  matchup: "BUF @ MIN",
  earlyFfccTarget: "46",
  currentMarketTotal: "45.5 consensus · 44.5–46.5 range",
  note: "Provisional whole-number target from the Nov. 4 multi-book total board. Mike has not shown an entered value. Recheck after Kyler Murray's Thursday practice status and Monday weather before treating 46 as final."
};
export const week9PoolGames: Week9PoolGame[] = [
  {
    "day": "Thu",
    "kickoff": "8:15 PM",
    "away": "JAX",
    "home": "BAL",
    "poolPick": "JAX",
    "poolLine": -8.5,
    "mikeVibe": "JAX -8.5",
    "poolFavorite": "JAX",
    "poolSpread": 8.5,
    "marketLabel": "Nov. 4 audit: broad market JAX -9.5 to -10.5; pool preserves JAX -8.5. VegasInsider consensus -10 (-108), total 39.5.",
    "marketTotal": 39.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Keep JAX -8.5. The reviewed market had Jacksonville roughly one to two points more expensive, so the frozen pool number is favorable. Baltimore's quarterback injuries are already reflected in the move; no separate narrative boost is added.",
    "watch": "Thursday inactives: Lamar Jackson is headed to IR and Tyler Huntley was trending doubtful; recheck only for an unexpected Baltimore quarterback upgrade before 8:15 PM ET."
  },
  {
    "day": "Sun",
    "kickoff": "9:30 AM",
    "away": "CIN",
    "home": "ATL",
    "poolPick": "ATL",
    "poolLine": 3.5,
    "mikeVibe": "CIN -3.5",
    "poolFavorite": "CIN",
    "poolSpread": 3.5,
    "marketLabel": "Nov. 4 audit: most books CIN -3; exact +3.5 quotes included ATL -127 and -117 versus CIN +107 and +113. Total 52.5.",
    "marketTotal": 52.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Flip to ATL +3.5. The pool crosses the key field-goal margin while most reviewed books dealt Cincinnati -3; the available exact +3.5 prices also charged a premium for Atlanta. This is a number edge, not a claim that Atlanta is the better team.",
    "watch": "Madrid travel and official late-week injury reports; change only if verified news moves the reliable market through Cincinnati -3.5 at comparable pricing."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "DAL",
    "home": "IND",
    "poolPick": "IND",
    "poolLine": 6.5,
    "mikeVibe": "DAL -6.5",
    "poolFavorite": "DAL",
    "poolSpread": 6.5,
    "marketLabel": "Nov. 4 audit: eight-book board mostly DAL -5.5, one -6; consensus -5.5 (-112). Total 51.5.",
    "marketTotal": 51.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Flip to IND +6.5. The pool gives Indianapolis a half-point to a full point beyond the reviewed market. The Colts' official Tuesday depth chart lists Daniel Jones as QB1, and the coach confirmed he remains the Week 9 starter, so no unverified quarterback absence is baked into this recommendation.",
    "watch": "Official Wednesday-Friday Colts and Cowboys reports, especially offensive line and any quarterback setback; preserve the hook unless reliable prices reach DAL -6.5."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "NYJ",
    "home": "KC",
    "poolPick": "KC",
    "poolLine": -9.5,
    "mikeVibe": "KC -9.5",
    "poolFavorite": "KC",
    "poolSpread": 9.5,
    "marketLabel": "Nov. 4 exact-line audit: KC -9.5 pairs de-vig to roughly 51.4%-52.4% across available books; broader market -9.5 to -10. Total 47.5.",
    "marketTotal": 47.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Keep KC -9.5. Multiple reviewed books offered both sides at the exact frozen spread and the proportional no-vig prices modestly favored Kansas City. The lean is small and not a high-confidence projection.",
    "watch": "Final Kansas City offensive-line and skill-player status; reverse only if fresh exact -9.5 pricing consistently favors the Jets."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "DET",
    "home": "MIA",
    "poolPick": "DET",
    "poolLine": -7.5,
    "mikeVibe": "DET -7.5",
    "poolFavorite": "DET",
    "poolSpread": 7.5,
    "marketLabel": "Frozen SZN spread confirmed by Mike's Nov. 4, 2:45 PM ET screenshot: DET -7.5 at MIA +7.5. Independent current ATS market not yet audited for this game.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Keep DET -7.5 as a provisional tie choice matching Mike's vibe, not a validated market advantage. The exact frozen pool spread is now confirmed, but independent two-sided prices and relevant injuries have not yet been reviewed for this game.",
    "watch": "Audit synchronized independent ATS prices at the exact -7.5 spread and current Detroit/Miami injury reports before any recommendation flip."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "CLE",
    "home": "NO",
    "poolPick": "NO",
    "poolLine": -2.5,
    "mikeVibe": "NO -2.5",
    "poolFavorite": "NO",
    "poolSpread": 2.5,
    "marketLabel": "Nov. 4 audit: NO -2.5 to -3 across books; VegasInsider consensus NO -3 (-112). Total 42.5.",
    "marketTotal": 42.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Keep NO -2.5. The frozen number stays below the key field goal while much of the reviewed market was Saints -3. The edge is the number only; no unsupported model agreement is claimed.",
    "watch": "Both teams' quarterback and offensive-line reports; reassess if the market falls below NO -2.5 rather than merely changing price."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "NYG",
    "home": "PHI",
    "poolPick": "PHI",
    "poolLine": 3.5,
    "mikeVibe": "NYG -3.5",
    "poolFavorite": "NYG",
    "poolSpread": 3.5,
    "marketLabel": "Nov. 4 exact-line audit: PHI +3.5 priced -114 to -120 at several books versus NYG -3.5 from even to -106; some books had NYG -3. Total 38.5.",
    "marketTotal": 38.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Flip to PHI +3.5. The exact frozen spread repeatedly charged a premium for Philadelphia, and other books shortened New York to -3. This is a modest exact-line market lean with key-number protection, not an injury-based forecast.",
    "watch": "Philadelphia's Wednesday report was not yet posted at audit time. Recheck quarterback status and DeVonta Smith's hamstring before lock; a confirmed major absence could invalidate the lean."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "LAR",
    "home": "WAS",
    "poolPick": "LAR",
    "poolLine": -5.5,
    "mikeVibe": "LAR -5.5",
    "poolFavorite": "LAR",
    "poolSpread": 5.5,
    "marketLabel": "Nov. 4 exact-line consensus LAR -5.5 (-118) versus WAS +5.5 (-102). Total 47.5.",
    "marketTotal": 47.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Keep LAR -5.5. The reviewed exact-line consensus prices Los Angeles materially shorter at the frozen number. Because the evidence is a price lean rather than a calibrated cover model, confidence remains modest.",
    "watch": "Washington quarterback and offensive-line availability; require fresh verified evidence favoring Washington at +5.5 before changing."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "DEN",
    "home": "CAR",
    "poolPick": "CAR",
    "poolLine": 3.5,
    "mikeVibe": "CAR +3.5",
    "poolFavorite": "DEN",
    "poolSpread": 3.5,
    "marketLabel": "Nov. 4 audit: market DEN -2.5 to -3; consensus DEN -2.5 (-120). Total 44.5.",
    "marketTotal": 44.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Keep CAR +3.5. The pool gives Carolina a full point beyond the consensus and crosses the key field goal compared with most reviewed books. That frozen-number value is not converted into an invented probability.",
    "watch": "Official quarterback and offensive-line reports; retain unless reliable market evidence moves Denver through -3.5."
  },
  {
    "day": "Sun",
    "kickoff": "4:05 PM",
    "away": "HOU",
    "home": "LAC",
    "poolPick": "HOU",
    "poolLine": -4.5,
    "mikeVibe": "HOU -4.5",
    "poolFavorite": "HOU",
    "poolSpread": 4.5,
    "marketLabel": "Nov. 4 exact-line board: HOU -4.5 generally -110 to -118 versus LAC +4.5 -104 to -110; consensus -115/-105. Total 40.5.",
    "marketTotal": 40.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Keep HOU -4.5. Comparable exact-line prices consistently made Houston the shorter side; the proportional no-vig edge is small, so this remains a modest market lean rather than a strong prediction.",
    "watch": "Chargers quarterback/offensive-line and Houston injury reports; change only if fresh exact -4.5 prices favor Los Angeles."
  },
  {
    "day": "Sun",
    "kickoff": "4:25 PM",
    "away": "GB",
    "home": "NE",
    "poolPick": "GB",
    "poolLine": 3.5,
    "mikeVibe": "GB +3.5",
    "poolFavorite": "NE",
    "poolSpread": 3.5,
    "marketLabel": "Nov. 4 audit: market NE -2.5 to -3; consensus NE -3 (-115). Pool GB +3.5 beats the reviewed market. Total 46.5.",
    "marketTotal": 46.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Keep GB +3.5. The frozen line gives Green Bay the hook above the key field goal while reviewed books were mostly New England -2.5 or -3. This is uncalibrated number value, not a standalone team-rating claim.",
    "watch": "Both quarterbacks and offensive lines; reassess only for a verified late absence that pushes the dependable market beyond NE -3.5."
  },
  {
    "day": "Sun",
    "kickoff": "4:25 PM",
    "away": "LV",
    "home": "SF",
    "poolPick": "LV",
    "poolLine": 10.5,
    "mikeVibe": "SF -10.5",
    "poolFavorite": "SF",
    "poolSpread": 10.5,
    "marketLabel": "Nov. 4 audit: eight-book market SF -9.5 to -10; consensus SF -10 (-108). Pool gives LV +10.5. Total 52.5.",
    "marketTotal": 52.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Flip to LV +10.5. The frozen pool spread gives Las Vegas a half-point to a full point beyond every reviewed book, including protection above 10. No separate narrative edge is added.",
    "watch": "Quarterback and offensive-line reports for both teams; reverse only if reliable market pricing moves through SF -10.5."
  },
  {
    "day": "Sun",
    "kickoff": "4:25 PM",
    "away": "ARI",
    "home": "SEA",
    "poolPick": "ARI",
    "poolLine": 11.5,
    "mikeVibe": "ARI +11.5",
    "poolFavorite": "SEA",
    "poolSpread": 11.5,
    "marketLabel": "Nov. 4 audit: independent snapshots ranged SEA -10.5 to -12.3, with several books -11.5; one VegasInsider consensus feed showed -8.5 and was treated as an outlier. Total around 40.5.",
    "marketTotal": 40.5,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Keep ARI +11.5 provisionally. The reviewed market was too dispersed to support a robust exact-line lean; at the pool number, neither side has validated independent evidence strong enough to justify a change from the prior recommendation.",
    "watch": "Recheck a synchronized multi-book board and both teams' quarterback status before Sunday; do not rely on the conflicting single-feed snapshot."
  },
  {
    "day": "Sun",
    "kickoff": "8:20 PM",
    "away": "TB",
    "home": "CHI",
    "poolPick": "TB",
    "poolLine": 6.5,
    "mikeVibe": "CHI -6.5",
    "poolFavorite": "CHI",
    "poolSpread": 6.5,
    "marketLabel": "Nov. 4 exact-line board: TB +6.5 roughly -104 to -112 versus CHI -6.5 -100 to -110; broader consensus CHI -6. Total 47.5.",
    "marketTotal": 47.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Flip to TB +6.5. The exact pool number was balanced to slightly Tampa-favored, while the broader market mostly sat at Chicago -6. The pool hook creates the actionable advantage; no unsupported injury narrative is counted twice.",
    "watch": "Tampa receiver availability and Chicago's short-week report; reverse only if reliable market pricing establishes CHI -6.5 or higher."
  },
  {
    "day": "Mon",
    "kickoff": "8:15 PM",
    "away": "BUF",
    "home": "MIN",
    "poolPick": "MIN",
    "poolLine": 3.5,
    "mikeVibe": "MIN +3.5",
    "poolFavorite": "BUF",
    "poolSpread": 3.5,
    "marketLabel": "Nov. 4 exact-line board: MIN +3.5 generally -115 to -120 versus BUF -3.5 from even to -105; total mostly 45.5, range 44.5-46.5.",
    "marketTotal": 45.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Keep MIN +3.5. Exact frozen-spread prices consistently charged a premium for Minnesota, producing a robust small market lean. Kyler Murray's hamstring status remains unresolved, so the recommendation must be rechecked after Thursday practice.",
    "watch": "Kyler Murray's hamstring and Minnesota's offensive line. Carson Wentz is next in line; a confirmed Murray absence could move the market enough to require a new audit."
  }
];
