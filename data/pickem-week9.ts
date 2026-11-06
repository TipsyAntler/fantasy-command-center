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
export const week9ReviewedAt = "2026-11-06T08:00:00-05:00";
export const week9ReviewedLabel = "Nov 6 · 8:00 AM ET";
export const week9PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week9PoolStatus = "WEEK 9 · THURSDAY RESULT: JAX -8.5 WON, 33-10 · 14 GAMES PENDING · USER-CONFIRMED SUBMISSION SNAPSHOT PRESERVED SEPARATELY";
export const week9MarketAsOf = "Full 15-game board audit completed Nov. 6 at 8:00 AM ET using the frozen SZN numbers, a fresh six-book consensus built at 5:20 AM ET, and a current two-sided consensus board crawled Nov. 6. Exact-line evidence from the Nov. 4 audit remains preserved where still relevant. Friday final injury reports were not yet complete, so official availability remains a watch item rather than a separate edge. No FFCC side changed in this audit; the immutable user-confirmed submission remains preserved separately.";

export const week9Standing = {correct:56,rank:70,leaderCorrect:76,note:"Nov. 4 user screenshot: 56 season correct, overall rank 70; leader 76."};
export const week9MikeVibeCard = {
  observedAt: "Nov 4, 2026 · approximately 1:01 PM ET",
  source: "The SZN Week 9 orange-highlighted sides in Mike's screenshots",
  picks: ["JAX -8.5","CIN -3.5","DAL -6.5","KC -9.5","NO -2.5","NYG -3.5","LAR -5.5","CAR +3.5","HOU -4.5","GB +3.5","SF -10.5","ARI +11.5","CHI -6.5","MIN +3.5","DET -7.5"],
  tiebreaker: null,
  note: "VIBES ONLY. The page showed 15 picks made, but Mike uses highlights to communicate instinct; no side or tiebreaker is treated as a confirmed submission without explicit confirmation."
};
// Historical user-confirmed submission; do not overwrite when FFCC recommendations change.
// User reported submitting all current FFCC sides and the recommended tiebreaker on Nov 4.
// Confirmation is self-reported, not independently read from The SZN.
export const week9SubmittedCard = {
  confirmedDate: "2026-11-04",
  confirmationSource: "User message: Just submitted all current FFCC picks + tiebreaker recommendation",
  picks: {
    "JAX-BAL": "JAX -8.5", "CIN-ATL": "ATL +3.5", "DAL-IND": "IND +6.5",
    "NYJ-KC": "KC -9.5", "DET-MIA": "DET -7.5", "CLE-NO": "NO -2.5",
    "NYG-PHI": "PHI +3.5", "LAR-WAS": "LAR -5.5", "DEN-CAR": "CAR +3.5",
    "HOU-LAC": "HOU -4.5", "GB-NE": "GB +3.5", "LV-SF": "LV +10.5",
    "ARI-SEA": "ARI +11.5", "TB-CHI": "TB +6.5", "BUF-MIN": "MIN +3.5"
  } as Record<string,string>,
  tiebreaker: "46",
  note: "User-confirmed submission of the then-current FFCC card. Later FFCC advice changes do not automatically change The SZN entries."
};
export const week9PendingPoolGames: {day:string; kickoff:string; away:string; home:string; mikeVibe:string; reason:string}[] = [];
export const week9Tiebreaker = {
  matchup: "BUF @ MIN",
  earlyFfccTarget: "45",
  currentMarketTotal: "45.5 consensus · 44.5–46 range · Nov. 5, 5:30 PM ET",
  note: "Mike confirmed submitting 46 on Nov. 4. After Carson Wentz was confirmed as Minnesota’s starter, books repriced the total into a 44.5–46 range with a 45.5 consensus and under juice at several shops; FFCC now recommends 45. This changes advice only, not the preserved submitted tiebreaker."
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
    "marketLabel": "Nov. 4 late recheck (8:20 PM ET): VegasInsider remained JAX -9.5 to -10.5 with consensus -10 (-108); VSiN major books were mostly -10, totals 39.5-40.5. Pool preserves JAX -8.5.",
    "marketTotal": 39.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Keep JAX -8.5. The reviewed market had Jacksonville roughly one to two points more expensive, so the frozen pool number is favorable. Baltimore's quarterback injuries are already reflected in the move; no separate narrative boost is added.",
    "watch": "Official Wednesday status: Lamar Jackson and Tyler Huntley are OUT; Joe Fagnano practiced fully. Jacksonville lists Bhayshul Tuten and Travon Walker questionable. Recheck Thursday inactives before 8:15 PM ET, but no quarterback upgrade is currently indicated."
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: six-book consensus and current board remained CIN -3; pool ATL +3.5 retains the key-number hook. Total 52.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: current boards remained DAL -5.5; pool IND +6.5 retains a full point. Total 51.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: six-book consensus and current board were KC -10; the prior exact -9.5 pricing and fresh half-point gap continue to support pool KC -9.5. Total 47.5.",
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
    "poolPick": "MIA",
    "poolLine": 7.5,
    "mikeVibe": "DET -7.5",
    "poolFavorite": "DET",
    "poolSpread": 7.5,
    "marketLabel": "Nov. 6 8:00 AM ET recheck: fresh consensus boards remained DET -7, while the pool gives MIA +7.5; the Nov. 4 exact +7.5 premium remains preserved. Total 50-50.5.",
    "marketTotal": 50.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Flip the FFCC recommendation to MIA +7.5. The frozen pool line gives Miami a half-point to a full point beyond the reviewed market and preserves the hook above the key touchdown margin. The exact +7.5 price also charged a substantial premium for Miami. This is a number edge, not a claim that Miami is the stronger team.",
    "watch": "Detroit's secondary and center availability plus Miami's offensive line. Reverse only if synchronized reliable pricing moves through DET -7.5; later news that merely returns the market to -7 does not erase the pool hook."
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: current consensus was NO -3; pool NO -2.5 remains below the key field goal. Total 42.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: fresh consensus was NYG -3, preserving the pool hook at PHI +3.5; the prior exact +3.5 premium remains preserved. Total 38.5-39.5.",
    "marketTotal": 39.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Keep PHI +3.5 after the quarterback news. Philadelphia named Joe Milton over Tanner McKee, but the post-announcement exact frozen spread still charged a premium for the Eagles and some books remained at NYG -3. The recommendation therefore stays a modest exact-line market lean with key-number protection; Milton is not counted as a separate narrative edge.",
    "watch": "Joe Milton is confirmed to start; recheck DeVonta Smith's hamstring and the late-week offensive-line report. Change only if fresh exact +3.5 prices stop favoring Philadelphia or a verified absence materially moves the market."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "LAR",
    "home": "WAS",
    "poolPick": "WAS",
    "poolLine": 5.5,
    "mikeVibe": "LAR -5.5",
    "poolFavorite": "LAR",
    "poolSpread": 5.5,
    "marketLabel": "Nov. 6 8:00 AM ET recheck: fresh six-book and current boards remained LAR -4.5; pool WAS +5.5 retains roughly one point. Total 48-48.5.",
    "marketTotal": 48,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Flip to WAS +5.5. The frozen pool number gives Washington roughly one point beyond the broad current market, which is centered on Rams -4.5. The strongest case against the move is Washington's depleted receiving corps and offensive line; however, those absences are already present while the synchronized market still gives the Commanders the extra point.",
    "watch": "Friday final reports for Washington's offensive line and the Rams' secondary. Reverse only if reliable multi-book pricing moves back through LAR -5.5, not if one outlier remains there."
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: current consensus remained DEN -2.5; pool CAR +3.5 retains a full point and crosses 3. Total 44.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: fresh consensus moved to HOU -5.5; pool HOU -4.5 is now a full point better. Total 40.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: current consensus remained NE -3; pool GB +3.5 preserves the hook. Total 44.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: fresh consensus was SF -9.5; pool LV +10.5 retains roughly one point and protection above 10. Total 52.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: the earlier SEA -8.5 feed was confirmed by fresh six-book and current consensus boards; pool ARI +11.5 now gives roughly three points. Total 39.5.",
    "marketTotal": 40.5,
    "confidence": 1,
    "signal": "FROZEN-NUMBER ADVANTAGE · SIZE UNCALIBRATED",
    "rationale": "Keep ARI +11.5. Fresh synchronized boards now center Seattle at -8.5, roughly three points below the frozen -11.5 pool spread. The size is not converted into an invented cover probability.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: current consensus remained CHI -6; pool TB +6.5 preserves the hook. Total 47.5.",
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
    "marketLabel": "Nov. 6 8:00 AM ET recheck: fresh consensus was BUF -3 with a 44.5 total; pool MIN +3.5 retains the hook and the prior exact-line premium remains preserved.",
    "marketTotal": 45.5,
    "confidence": 2,
    "signal": "SMALL EXACT-LINE PRICE LEAN",
    "rationale": "Keep MIN +3.5. Wentz replacing Kyler Murray is material, but the post-news exact-line market still charges a premium for Minnesota +3.5. The strongest case against Minnesota is the quarterback downgrade; the counter is that the downgrade is now priced while the frozen hook remains market-favored.",
    "watch": "Minnesota’s offensive line and any further move through 3. Flip only if fresh exact-line pricing makes BUF -3.5 the preferred side."
  }
];
