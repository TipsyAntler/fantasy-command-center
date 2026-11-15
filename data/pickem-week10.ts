import type { Week9PoolGame } from "./pickem-week9";
// Week 10 (Nov 15, 2026): user-provided The SZN exact frozen ATS lines, 12 remaining games.
// Thursday WAS @ NYG and Sunday 9:30am NE @ DET omitted as already started/played.
// User intentionally SKIPPED vibes this week. Do not treat recommendations as submissions.
// Market evidence is from dated public odds pages, not verified exact-line multi-book de-vig.
export const week10Number = 10;
export const week10CapturedAt = "2026-11-15T11:57:00-05:00";
export const week10CapturedLabel = "Nov 15 · 11:57 AM ET";
export const week10ReviewedAt = "2026-11-15T11:57:00-05:00";
export const week10ReviewedLabel = "Nov 15 · pre-1 PM review";
export const week10PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week10PoolStatus = "WEEK 10 · ALL 12 REMAINING FROZEN LINES CAPTURED · NO VIBES REQUESTED · FFCC RECOMMENDATIONS PROVISIONAL · SZN SUBMISSION NOT CONFIRMED";
export const week10MarketAsOf = "Pre-1 PM Nov 15 public-market review using user-supplied frozen lines, FantasyData Week 10 odds, FanDuel Research Week 10 public odds, and Chargers.com Nov 14 six-book preview. Not an audited simultaneous multi-book exact-line price feed. 12 unplayed matches captured; prior Thursday and Munich matches omitted. Selections are FFCC recommendations only, NOT user-confirmed SZN submissions.";
export const week10Standing = {correct:56,rank:70,leaderCorrect:76,note:"Historical last-known Week 9 snapshot from Nov 4, NOT an updated Week 10 standing."};
export const week10SubmittedCard = { confirmedDate:null, confirmationSource:"Not confirmed", picks:{} as Record<string,string>, tiebreaker:"Not submitted", note:"FFCC suggested picks are not SZN entries; user must submit and confirm." };
export const week10PendingPoolGames: {day:string; kickoff:string; away:string; home:string; mikeVibe:string; reason:string}[] = [];
export const week10Tiebreaker = { matchup:"LAC @ BAL", earlyFfccTarget:"39", currentMarketTotal:"38.5–39 (Nov 14–15 public snapshots)", note:"Provisional Monday total 39; user submission not confirmed. Saturday six-book spread -4.5; totals were generally 38.5 to 39." };
export const week10PoolGames: Week9PoolGame[] = [
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "KC",
    "home": "ATL",
    "poolPick": "KC",
    "poolLine": -3.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "ATL",
    "poolSpread": 3.5,
    "marketLabel": "Nov 15, 2026 public odds review: KC -3 to -3.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 47.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · KEY 3",
    "rationale": "Atlanta gets +3.5 while the reviewed market clustered around Chiefs -3; the hook above 3 is useful. This is value in the number, not an assertion Atlanta wins.",
    "watch": "Review current 1 PM inactives; an exact market at -3.5 could weaken this edge."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "HOU",
    "home": "CLE",
    "poolPick": "CLE",
    "poolLine": 4.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "HOU",
    "poolSpread": 4.5,
    "marketLabel": "Nov 15, 2026 public odds review: HOU -4 to -4.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 40.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · MODEST",
    "rationale": "Cleveland +4.5 is a half-point better than one reviewed spread (Houston -4), though other feeds showed Houston -4.5. Houston remains a strong matchup favorite; this is a marginal frozen-line selection.",
    "watch": "Market disagreement -4 vs -4.5; confidence low."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "MIN",
    "home": "GB",
    "poolPick": "MIN",
    "poolLine": 4.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "MIN",
    "poolSpread": 4.5,
    "marketLabel": "Nov 15, 2026 public odds review: GB -2.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 42,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · 2 POINTS",
    "rationale": "The SZN Minnesota +4.5 is roughly two points richer than the reviewed Packers -2.5 market. A meaningful frozen-number advantage.",
    "watch": "Verify quarterback and inactives before kickoff; market snapshot may change."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "JAX",
    "home": "TEN",
    "poolPick": "JAX",
    "poolLine": -10.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "JAX",
    "poolSpread": 10.5,
    "marketLabel": "Nov 15, 2026 public odds review: JAX -10.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 45.5,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL",
    "rationale": "Pool and reviewed market both Jacksonville -10.5; no spread discount. Jaguars selected as a matchup-based low-confidence tie choice against a struggling Tennessee offense.",
    "watch": "Large favorite creates backdoor-cover risk; no documented number edge."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "MIA",
    "home": "IND",
    "poolPick": "IND",
    "poolLine": -2.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "IND",
    "poolSpread": 2.5,
    "marketLabel": "Nov 15, 2026 public odds review: IND -4.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 37.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · 2 POINTS",
    "rationale": "The pool has Indianapolis -2.5 while the reviewed market was Indianapolis -4.5, providing roughly two points of value, and -2.5 wins on an exact field-goal margin.",
    "watch": "Verify late quarterback and offensive-line status before 1 PM."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "CAR",
    "home": "NO",
    "poolPick": "CAR",
    "poolLine": 1.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "NO",
    "poolSpread": 1.5,
    "marketLabel": "Nov 15, 2026 public odds review: NO -0.5 to -1.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 48.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · MODEST",
    "rationale": "The pool gives Carolina +1.5; one reviewed spread was Carolina +0.5, and FanDuel's exact +1.5 price charged a premium. Lean Carolina.",
    "watch": "Near-even game; snapshots differ around Carolina +0.5 to +1.5."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "BUF",
    "home": "NYJ",
    "poolPick": "NYJ",
    "poolLine": 8.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "BUF",
    "poolSpread": 8.5,
    "marketLabel": "Nov 15, 2026 public odds review: BUF -7.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 51,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · 1 POINT",
    "rationale": "Pool Jets +8.5 is a full point beyond the reviewed market's Bills -7.5, reducing the cost of backing a large underdog.",
    "watch": "Buffalo has a significant underlying team edge; this is spread value only."
  },
  {
    "day": "Sun",
    "kickoff": "4:05 PM",
    "away": "SEA",
    "home": "LV",
    "poolPick": "SEA",
    "poolLine": -3.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "SEA",
    "poolSpread": 3.5,
    "marketLabel": "Nov 15, 2026 public odds review: SEA -6.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 40.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · 3 POINTS",
    "rationale": "The SZN Seahawks -3.5 is around three points cheaper than reviewed Seattle -6.5. This is the strongest stale-number difference on the card.",
    "watch": "Check the Raiders quarterback/inactives. Preserve the pool -3.5."
  },
  {
    "day": "Sun",
    "kickoff": "4:05 PM",
    "away": "LAR",
    "home": "ARI",
    "poolPick": "LAR",
    "poolLine": -9.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "LAR",
    "poolSpread": 9.5,
    "marketLabel": "Nov 15, 2026 public odds review: LAR -10. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 38.5,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · SMALL",
    "rationale": "The pool Rams -9.5 is a half-point cheaper than the reviewed -10. Slight Rams advantage, but the magnitude is modest.",
    "watch": "Lower game total increases backdoor and underdog variance."
  },
  {
    "day": "Sun",
    "kickoff": "4:25 PM",
    "away": "SF",
    "home": "DAL",
    "poolPick": "SF",
    "poolLine": -3.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "SF",
    "poolSpread": 3.5,
    "marketLabel": "Nov 15, 2026 public odds review: SF -4 to -4.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 56,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · 1 POINT",
    "rationale": "Reviewed market ranged San Francisco -4 to -4.5; the pool preserves -3.5. Lean San Francisco despite Dallas's credible offense.",
    "watch": "Check whether the market reverts toward -3.5; this is not a strong model edge."
  },
  {
    "day": "Sun",
    "kickoff": "8:20 PM",
    "away": "PIT",
    "home": "CIN",
    "poolPick": "PIT",
    "poolLine": 3.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "CIN",
    "poolSpread": 3.5,
    "marketLabel": "Nov 15, 2026 public odds review: CIN -3.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 49.5,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL",
    "rationale": "Pool and reviewed market both Pittsburgh +3.5. Low-confidence side supported by Pittsburgh's rest advantage and defensive profile; there is no verified spread advantage.",
    "watch": "Same exact pool and market number; no numerical advantage."
  },
  {
    "day": "Mon",
    "kickoff": "8:15 PM",
    "away": "LAC",
    "home": "BAL",
    "poolPick": "LAC",
    "poolLine": 5.5,
    "mikeVibe": "Not provided — intentionally skipped",
    "poolFavorite": "BAL",
    "poolSpread": 5.5,
    "marketLabel": "Nov 15, 2026 public odds review: BAL -4.5. Sources: FantasyData NFL odds (https://fantasydata.com/nfl/odds), FanDuel Research Week 10 board and Chargers.com Nov 14 six-book Monday preview. Dated/public snapshots, not verified simultaneous live quotes.",
    "marketTotal": 39,
    "confidence": 2,
    "signal": "FROZEN-NUMBER ADVANTAGE · 1 POINT",
    "rationale": "The pool Chargers +5.5 is one point richer than the Saturday six-book Ravens -4.5 market. This is value even with Baltimore favored to win.",
    "watch": "Recheck Monday quarterback and injury news, but Sunday card recommendation remains Chargers +5.5."
  }
];
