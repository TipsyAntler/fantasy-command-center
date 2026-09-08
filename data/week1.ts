export type Week1Game = {
  day: string;
  kickoff: string;
  away: string;
  home: string;
  favorite: string;
  spread: number;
  total: number;
  atsPick: string;
  atsLine: number;
  atsConfidence: 1 | 2 | 3 | 4 | 5;
  signal: string;
  rationale: string;
  watch: string;
};

export const week1MarketAsOf = "Sep 8 · current consensus market reference";
export const week1PickemStatus = "EARLY BOARD · FINALIZE AGAINST YOUR POOL LINE";

export const week1Games: Week1Game[] = [
  {
    day: "Wed 9/9", kickoff: "8:20 PM", away: "NE", home: "SEA", favorite: "SEA", spread: 3.5, total: 44.5,
    atsPick: "SEA", atsLine: -3.5, atsConfidence: 4,
    signal: "Stale-line upside if the pool stays SEA -3.5; parts of the live market have moved higher.",
    rationale: "Seattle is the preferred side at -3.5. The defending champs have the stronger defensive baseline, the game is at Lumen Field, and the market has shown support above the pool-reference number. The hook matters: -3.5 is less attractive than -3, but it is still preferable if books are dealing -4 or -4.5 by lock.",
    watch: "TreVeyon Henderson / New England offense news and any pool line of SEA -4.5 or worse."
  },
  {
    day: "Thu 9/10", kickoff: "8:35 PM", away: "SF", home: "LAR", favorite: "LAR", spread: 3.5, total: 47.5,
    atsPick: "SF", atsLine: 3.5, atsConfidence: 2,
    signal: "Key-number hook plus unusual Australia travel creates a deliberately cautious dog lean.",
    rationale: "The Rams may be the better straight-up team, but ATS the 49ers become interesting once they are getting more than a field goal. San Francisco also arrived in Melbourne earlier, while Los Angeles chose a much later travel schedule. This is exactly the type of game where the pool number can change the answer.",
    watch: "If your pool has LAR -2.5 instead of -3.5, the FFCC lean can flip to Los Angeles."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR", favorite: "CHI", spread: 2.5, total: 46.5,
    atsPick: "CHI", atsLine: -2.5, atsConfidence: 3,
    signal: "Favorite stays below the key number of 3.",
    rationale: "Chicago only needs to win by a field goal at this number, which is materially different from laying -3 or -3.5. The market and several early expert boards prefer the Bears, and the sub-3 spread preserves value.",
    watch: "Any move through -3 is meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN", favorite: "CIN", spread: 3.5, total: 50.5,
    atsPick: "TB", atsLine: 3.5, atsConfidence: 2,
    signal: "Take the hook in a projected high-scoring game.",
    rationale: "Cincinnati is the more likely straight-up winner, but Tampa getting +3.5 is more valuable in an ATS pool than simply following the favorite. A high total creates more paths to a one-score result and a late backdoor cover. This is a thin edge, not a conviction fade of Cincinnati.",
    watch: "If the pool gives only TB +3 or Cincinnati falls below -3, reassess."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND", favorite: "BAL", spread: 3.5, total: 47.5,
    atsPick: "IND", atsLine: 3.5, atsConfidence: 2,
    signal: "Home dog gets the key-number hook despite Baltimore's stronger straight-up profile.",
    rationale: "Baltimore is the better team and deserves to be favored, but forcing every-game ATS picks means price matters more than team quality. Indianapolis +3.5 captures the most common NFL margin and current spread-side pricing is close to a coin flip.",
    watch: "At IND +3 or lower, the value erodes quickly and Baltimore becomes more attractive."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU", favorite: "BUF", spread: 1.5, total: 44.5,
    atsPick: "HOU", atsLine: 1.5, atsConfidence: 4,
    signal: "Strong reverse-line/sharp-money signal toward Houston.",
    rationale: "Buffalo has drawn heavy public support, yet the market moved from Bills -1.5 toward -1 rather than away from the public side. VSiN flagged that as respected Houston money. In a near pick'em, that market disagreement is more useful than brand-name preference.",
    watch: "Keep Houston if your pool still offers +1.5; that is better than the live market."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NO", home: "DET", favorite: "DET", spread: 6.5, total: 49.5,
    atsPick: "NO", atsLine: 6.5, atsConfidence: 4,
    signal: "Sharp line freeze / reverse movement against a heavily public Lions side.",
    rationale: "Detroit is a strong straight-up favorite, but the ATS market is giving a different message: public support has piled onto the Lions while the number has refused to climb and some shops have moved toward New Orleans. That is a classic spot to take the points rather than the obvious team.",
    watch: "NO +7 is even better; NO +6 is meaningfully worse."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN", favorite: "TEN", spread: 1.5, total: 39.5,
    atsPick: "TEN", atsLine: -1.5, atsConfidence: 2,
    signal: "Small home favorite in the lowest-total neighborhood on the board.",
    rationale: "There is not much separation here, but Tennessee's home field and offensive ceiling give it the slight edge. With the spread below three, the Titans can win a close game and still cover. This is one of the lowest-confidence forced picks of the week.",
    watch: "Any quarterback/offensive-line news can flip a game priced this tightly."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX", favorite: "JAX", spread: 7.5, total: 40.5,
    atsPick: "JAX", atsLine: -7.5, atsConfidence: 4,
    signal: "Multiple model/expert sources identify Jacksonville as a top Week 1 side.",
    rationale: "Laying more than seven is normally uncomfortable, but Jacksonville is one of the few Week 1 favorites where matchup, market strength and expert/model support line up. Cleveland is priced near the bottom of the league and the low total raises the value of a defense-driven favorite if Jacksonville controls the game.",
    watch: "JAX -7 is much better than -7.5; at -8.5 or worse confidence drops."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT", favorite: "PIT", spread: 3.5, total: 42.5,
    atsPick: "ATL", atsLine: 3.5, atsConfidence: 3,
    signal: "Low-total dog gets the hook above three.",
    rationale: "Pittsburgh may win the game, but in a projected lower-scoring matchup each point is more valuable. Atlanta +3.5 captures the field-goal margin, which is enough to prefer the underdog in a forced ATS pool unless late information materially widens the matchup gap.",
    watch: "If the pool has ATL +3 only, this becomes close to a true coin flip."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI", favorite: "PHI", spread: 5.5, total: 44.5,
    atsPick: "PHI", atsLine: -5.5, atsConfidence: 4,
    signal: "Model/expert agreement without laying a full touchdown.",
    rationale: "Philadelphia is one of the cleaner favorite positions on the board: home field, a meaningful talent edge, and a spread that remains below seven. Multiple Week 1 model/expert previews have highlighted the Eagles as a preferred side.",
    watch: "A move to PHI -7 would materially reduce the edge."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN", favorite: "MIN", spread: 1.5, total: 45.5,
    atsPick: "MIN", atsLine: -1.5, atsConfidence: 4,
    signal: "One of the strongest sharp reverse-line moves of Week 1.",
    rationale: "Green Bay opened as the favorite and drew the majority of public spread bets, yet the market flipped all the way to Minnesota -1.5. VSiN also reported a low-bet/high-dollar split on the Vikings. In a near pick'em, that is exactly the type of information FFCC should respect.",
    watch: "Green Bay injury news and any move through MIN -3."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC", favorite: "LAC", spread: 9.5, total: 47.5,
    atsPick: "ARI", atsLine: 9.5, atsConfidence: 3,
    signal: "Week 1 uncertainty plus a near-double-digit cushion.",
    rationale: "The Chargers are the safest straight-up team on the slate, but that does not automatically make them the best ATS pick. Arizona is being given a large margin in the most uncertain week of the season, and multiple expert previews have preferred the points once this spread reached double-digit territory.",
    watch: "ARI +10 or better strengthens the pick; +8.5 or lower weakens it."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV", favorite: "LV", spread: 3.5, total: 40.5,
    atsPick: "MIA", atsLine: 3.5, atsConfidence: 3,
    signal: "Key-number hook plus Las Vegas quarterback uncertainty.",
    rationale: "The Raiders are favored but enter Week 1 with Kirk Cousins under center and a low projected total. Covers' early matchup analysis also leans Miami to keep this game close. In that environment, +3.5 is the more attractive side.",
    watch: "Quarterback news is the dominant input here."
  },
  {
    day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG", favorite: "DAL", spread: 2.5, total: 48.5,
    atsPick: "DAL", atsLine: -2.5, atsConfidence: 3,
    signal: "Favorite stays below three in a divisional game.",
    rationale: "The Giants are live at home, but the pool math favors Dallas if the number remains -2.5 because a three-point Cowboys win still cashes. This is intentionally not a fandom pick; if the number moves to Dallas -3.5, the Giants become much more interesting.",
    watch: "Malik Nabers availability and the exact side of the key number 3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC", favorite: "KC", spread: 2.5, total: 43.5,
    atsPick: "DEN", atsLine: 2.5, atsConfidence: 3,
    signal: "Elite Denver pass rush against a returning Mahomes and a banged-up KC line.",
    rationale: "Kansas City is the more likely straight-up winner, but Patrick Mahomes is returning from a major knee injury and the Chiefs have offensive-line questions. Covers' early spread analysis also prefers Denver +2.5. The matchup profile makes the points more valuable than the logo on the other side.",
    watch: "Mahomes mobility/practice reports and KC offensive-line health."
  }
];

export const earlySurvivorShortlist = [...week1Games]
  .sort((a, b) => b.spread - a.spread)
  .slice(0, 4);

export function confidenceForSpread(spread: number) {
  if (spread >= 7) return "High";
  if (spread >= 3.5) return "Solid";
  if (spread <= 1.5) return "Toss-up";
  return "Lean";
}
