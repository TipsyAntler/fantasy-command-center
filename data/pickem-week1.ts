export type Week1PoolGame = {
  day: string;
  kickoff: string;
  away: string;
  home: string;
  poolPick: string;
  poolLine: number;
  poolFavorite: string;
  poolSpread: number;
  marketLabel: string;
  marketTotal: number;
  confidence: 1 | 2 | 3 | 4 | 5;
  signal: string;
  rationale: string;
  watch: string;
};

export const week1PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week1PoolStatus = "POOL LINES FROZEN LATE MON 9/7 · WEEK 1 SKIPS WED/THU";
export const week1MarketAsOf = "Sep 9 · CBS Sports live reference";

export const week1PoolGames: Week1PoolGame[] = [
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN",
    poolPick: "TB", poolLine: 3.5, poolFavorite: "CIN", poolSpread: 3.5,
    marketLabel: "CIN -3.5", marketTotal: 51.5, confidence: 2,
    signal: "Pool and live market agree at 3.5; the hook makes Tampa the ATS lean.",
    rationale: "Cincinnati is the more likely straight-up winner, but this contest is against the spread. Tampa +3.5 captures the key field-goal margin in the highest-total neighborhood on the board, so the dog is slightly more attractive than laying the hook.",
    watch: "If the live market pushes Cincinnati materially beyond -3.5, Tampa's frozen +3.5 becomes less attractive; if it drops toward -3, Tampa gains value."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NO", home: "DET",
    poolPick: "NO", poolLine: 7.5, poolFavorite: "DET", poolSpread: 7.5,
    marketLabel: "DET -6.5", marketTotal: 49.5, confidence: 5,
    signal: "The pool gives New Orleans +7.5 while the live market is +6.5 — a full point plus the key-number hook.",
    rationale: "This is exactly why the frozen pool line matters. Detroit can be the obvious straight-up side while New Orleans is still the better ATS pick. Getting +7.5 instead of the market's +6.5 is meaningful because 7 is one of the NFL's most important final margins.",
    watch: "Any major Saints injury news that justifies Detroit moving well beyond -7.5 would reduce this edge."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN",
    poolPick: "TEN", poolLine: -1.5, poolFavorite: "TEN", poolSpread: 1.5,
    marketLabel: "TEN -2.5", marketTotal: 39.5, confidence: 4,
    signal: "New stale-line value: the pool only asks Tennessee to lay -1.5 while the live market is -2.5.",
    rationale: "This is still a low-total game, but the frozen number has improved materially relative to the market. Tennessee -1.5 avoids the key-number pressure of laying a field goal and now has a full point of stale-line value on the preferred side.",
    watch: "Quarterback or offensive-line news can still move a game priced this tightly; a live reversal back through TEN -1.5 would erase the edge."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND",
    poolPick: "IND", poolLine: 3.5, poolFavorite: "BAL", poolSpread: 3.5,
    marketLabel: "BAL -3.5", marketTotal: 48.5, confidence: 2,
    signal: "Home dog gets the hook above the key number 3.",
    rationale: "Baltimore is the stronger straight-up team, but Indianapolis +3.5 captures the most common NFL scoring margin. With the market still sitting on the same number, there is no stale-line bonus — just a thin price-based dog lean.",
    watch: "If respected market action drives Baltimore through -4, reassess whether the move reflects meaningful new information."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT",
    poolPick: "ATL", poolLine: 3.5, poolFavorite: "PIT", poolSpread: 3.5,
    marketLabel: "PIT -3", marketTotal: 41.5, confidence: 4,
    signal: "The pool gives Atlanta +3.5 while the live market is +3 — valuable protection through the key number 3.",
    rationale: "In a lower-scoring game each point is more valuable. Pittsburgh may win, but Atlanta +3.5 survives a field-goal loss while the current market only gives +3. The frozen hook is meaningful enough to strengthen the Falcons ATS lean.",
    watch: "A meaningful injury or market move beyond PIT -4.5 would be the main reason to revisit."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -2.5", marketTotal: 45.5, confidence: 3,
    signal: "The earlier stale-line edge has disappeared; the pool and live market now match at Chicago -2.5.",
    rationale: "Chicago remains the preferred side because -2.5 stays below the key number 3, but this is no longer a market-arbitrage position. A three-point Bears win still covers, yet the recommendation now rests more on matchup quality than on line value.",
    watch: "If the broader market reverses below CHI -2.5, reconsider; if it pushes through -3, the frozen pool number becomes valuable again."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX",
    poolPick: "JAX", poolLine: -7.5, poolFavorite: "JAX", poolSpread: 7.5,
    marketLabel: "JAX -7.5", marketTotal: 40.5, confidence: 4,
    signal: "The earlier full-point stale-line edge has disappeared; pool and live market now match at Jacksonville -7.5.",
    rationale: "Jacksonville remains one of the stronger Week 1 favorites, but this is no longer a price advantage relative to the live market. Laying more than a touchdown still carries backdoor risk, so confidence drops slightly even though the side remains unchanged.",
    watch: "If Cleveland gets major positive quarterback/offensive-line news, lower confidence; if the market returns to JAX -8 or worse, the frozen -7.5 regains value."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU",
    poolPick: "HOU", poolLine: 1.5, poolFavorite: "BUF", poolSpread: 1.5,
    marketLabel: "BUF -1.5", marketTotal: 44.5, confidence: 3,
    signal: "Pool and current market match, so the decision rests on sharp-market and matchup signals.",
    rationale: "This game is effectively a coin flip. Houston remains the lean because the market has shown periods of respected Texans support despite Buffalo's public appeal, and getting +1.5 at home preserves the small upset cushion.",
    watch: "Because this is so tight, any late QB/OL news or a directional move through pick'em matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV",
    poolPick: "MIA", poolLine: 3.5, poolFavorite: "LV", poolSpread: 3.5,
    marketLabel: "LV -3.5", marketTotal: 40.5, confidence: 3,
    signal: "Key-number hook in a low-total game.",
    rationale: "Las Vegas is favored, but Miami +3.5 is the more useful ATS number. In a low-total game, a one-score outcome is more likely to keep the underdog live, and the half-point above 3 matters.",
    watch: "Quarterback news is the dominant late-week variable."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN",
    poolPick: "MIN", poolLine: -1.5, poolFavorite: "MIN", poolSpread: 1.5,
    marketLabel: "MIN -1.5", marketTotal: 44.5, confidence: 4,
    signal: "Market-flip / sharp-support profile remains the reason to back Minnesota.",
    rationale: "This game moved from Green Bay being favored earlier in the cycle to Minnesota -1.5. In a near pick'em, a full favorite flip is meaningful market information. The pool number still matches the current reference, so Minnesota remains the side.",
    watch: "Any move back toward Green Bay favorite status or significant injury news would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI",
    poolPick: "PHI", poolLine: -4.5, poolFavorite: "PHI", poolSpread: 4.5,
    marketLabel: "PHI -4.5", marketTotal: 44.5, confidence: 4,
    signal: "The earlier one-point stale-line edge has disappeared; the pool and live market now match at Philadelphia -4.5.",
    rationale: "Philadelphia remains one of the cleaner favorite positions on the board, but the market has moved back to the frozen pool number. The Eagles recommendation remains intact; it simply no longer carries the extra point of stale-line value seen earlier in the week.",
    watch: "A move back toward PHI -5.5 would restore stale-line value; a reversal toward -3 would weaken the case. Major Washington or Philadelphia OL/QB news also matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC",
    poolPick: "ARI", poolLine: 10.5, poolFavorite: "LAC", poolSpread: 10.5,
    marketLabel: "LAC -10.5", marketTotal: 46.5, confidence: 4,
    signal: "The earlier stale-line edge has disappeared; the pool and live market now both give Arizona +10.5.",
    rationale: "Arizona still gets the valuable hook above key number 10, so the Cardinals remain the ATS lean despite the Chargers being the much safer straight-up team. This is now a key-number position rather than a stale-line arbitrage play.",
    watch: "Major Arizona injury news or a live market surge through LAC -11 would materially weaken this; a drop back below -10 would restore clear stale-line value."
  },
  {
    day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG",
    poolPick: "DAL", poolLine: -2.5, poolFavorite: "DAL", poolSpread: 2.5,
    marketLabel: "DAL -2.5", marketTotal: 48.5, confidence: 3,
    signal: "Favorite remains below key number 3.",
    rationale: "At -2.5, Dallas covers with a standard field-goal win. The pool and current market agree, so this is not a stale-line play; it is simply the preferable side of the most important NFL key number.",
    watch: "Malik Nabers availability and any move of the market through Dallas -3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC",
    poolPick: "DEN", poolLine: 3.5, poolFavorite: "KC", poolSpread: 3.5,
    marketLabel: "KC -2.5", marketTotal: 43.5, confidence: 5,
    signal: "Best key-number discrepancy on the card: Denver +3.5 versus a live market at +2.5.",
    rationale: "The frozen pool gives Denver an entire point more than the current market and moves us from below 3 to above it. That is a major ATS advantage because a three-point Chiefs win becomes a Denver cover in the pool. This is exactly the kind of line discrepancy FFCC should prioritize.",
    watch: "Mahomes mobility, KC offensive-line health, and whether the live market returns to KC -3.5."
  }
];

export const week1Tiebreaker = {
  matchup: "DEN @ KC",
  label: "Total points scored in the final game of the week",
  currentMarketTotal: 43.5,
  earlyFfccTarget: 43,
  note: "Early target only. Re-run the score/total model before the Sunday 10 AM PT pool deadline."
};
