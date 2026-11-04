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
export const week9CapturedAt = "2026-11-04T13:01:00-05:00";
export const week9CapturedLabel = "Nov 4 · 1:01 PM ET";
export const week9ReviewedAt = "";
export const week9ReviewedLabel = "Full board audit pending";
export const week9PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week9PoolStatus = "WEEK 9 · 14 OF 15 EXACT FROZEN SPREADS CAPTURED FROM USER SCREENSHOTS · DET–MIA SPREAD CROPPED AND NOT INFERRED · VIBES ARE NOT SUBMISSIONS";
export const week9MarketAsOf = "Exact frozen pool numbers were transcribed from Mike's Nov. 4 screenshots. No Week 9 full-board market/injury audit has been completed yet, so all visible FFCC sides remain provisional tie choices with no measured edge.";
export const week9Standing = {correct:56,rank:70,leaderCorrect:76,note:"Nov. 4 user screenshot: 56 season correct, overall rank 70; leader 76."};
export const week9MikeVibeCard = {
  observedAt: "Nov 4, 2026 · approximately 1:01 PM ET",
  source: "The SZN Week 9 orange-highlighted sides in Mike's screenshots",
  picks: [
  "JAX -8.5",
  "CIN -3.5",
  "DAL -6.5",
  "KC -9.5",
  "NO -2.5",
  "NYG -3.5",
  "LAR -5.5",
  "CAR +3.5",
  "HOU -4.5",
  "GB +3.5",
  "SF -10.5",
  "ARI +11.5",
  "CHI -6.5",
  "MIN +3.5",
  "DET (spread not visible)"
],
  tiebreaker: null,
  note: "VIBES ONLY. The page showed 15 picks made, but Mike uses highlights to communicate instinct; no side or tiebreaker is treated as a confirmed submission without explicit confirmation."
};
export const week9PendingPoolGames = [
  {day:"Sun",kickoff:"1:00 PM",away:"DET",home:"MIA",mikeVibe:"DET",reason:"The screenshot cropped this game's spread. Do not infer either side's number."}
];
export const week9Tiebreaker = {
  matchup: "BUF @ MIN",
  earlyFfccTarget: "Pending audit",
  currentMarketTotal: "Not reviewed",
  note: "Mike has not shown an entered value. Review fresh totals, weather and final availability before setting the FFCC whole-number target."
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
    "watch": "Audit exact JAX -8.5 prices plus final Thursday injuries before kickoff.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
  },
  {
    "day": "Sun",
    "kickoff": "9:30 AM",
    "away": "CIN",
    "home": "ATL",
    "poolPick": "CIN",
    "poolLine": -3.5,
    "mikeVibe": "CIN -3.5",
    "poolFavorite": "CIN",
    "poolSpread": 3.5,
    "watch": "Audit exact CIN -3.5 prices, travel context and official Madrid injury reports.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "DAL",
    "home": "IND",
    "poolPick": "DAL",
    "poolLine": -6.5,
    "mikeVibe": "DAL -6.5",
    "poolFavorite": "DAL",
    "poolSpread": 6.5,
    "watch": "Resolve Indianapolis quarterback availability and audit exact DAL -6.5 prices.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Audit exact KC -9.5 prices and final offensive-line/skill-player reports.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Audit exact NO -2.5 prices and both quarterback/offensive-line reports.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
  },
  {
    "day": "Sun",
    "kickoff": "1:00 PM",
    "away": "NYG",
    "home": "PHI",
    "poolPick": "NYG",
    "poolLine": -3.5,
    "mikeVibe": "NYG -3.5",
    "poolFavorite": "NYG",
    "poolSpread": 3.5,
    "watch": "Resolve Philadelphia quarterback availability before treating the captured side as more than provisional.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Priority exact-line audit: compare LAR -5.5 with current market and Washington availability.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Audit exact CAR +3.5 prices and official quarterback/offensive-line reports.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Priority exact-line audit: compare both sides at HOU -4.5 and review Chargers availability.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Audit exact GB +3.5 prices and official quarterback/offensive-line reports.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
  },
  {
    "day": "Sun",
    "kickoff": "4:25 PM",
    "away": "LV",
    "home": "SF",
    "poolPick": "SF",
    "poolLine": -10.5,
    "mikeVibe": "SF -10.5",
    "poolFavorite": "SF",
    "poolSpread": 10.5,
    "watch": "Priority exact-line audit: large spread, quarterback status and San Francisco availability.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Audit exact ARI +11.5 prices and both teams' final quarterback/skill-player reports.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
  },
  {
    "day": "Sun",
    "kickoff": "8:20 PM",
    "away": "TB",
    "home": "CHI",
    "poolPick": "CHI",
    "poolLine": -6.5,
    "mikeVibe": "CHI -6.5",
    "poolFavorite": "CHI",
    "poolSpread": 6.5,
    "watch": "Priority exact-line audit: compare TB +6.5 and CHI -6.5 at independent books.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
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
    "watch": "Monitor Minnesota quarterback Kyler Murray's status, exact MIN +3.5 prices and Monday weather.",
    "marketLabel": "Full exact-line market audit pending; no live quote or measured edge claimed.",
    "marketTotal": null,
    "confidence": 1,
    "signal": "NO MEASURED EDGE · PROVISIONAL TIE CHOICE",
    "rationale": "Provisional FFCC tie choice mirrors the captured vibe only until fresh two-sided pricing at the exact frozen spread and official injury reports are audited. This is not a verified edge and not a submitted pick."
  }
];
