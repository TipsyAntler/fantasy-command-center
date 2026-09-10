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
export const week1MarketAsOf = "Sep 10 · latest FanDuel refs incl. post-Bowers LV/MIA move";

export const week1PoolGames: Week1PoolGame[] = [
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN",
    poolPick: "TB", poolLine: 3.5, poolFavorite: "CIN", poolSpread: 3.5,
    marketLabel: "CIN -3.5", marketTotal: 50.5, confidence: 2,
    signal: "Pool and live market agree at 3.5; the hook makes Tampa the ATS lean.",
    rationale: "Cincinnati is the more likely straight-up winner, but this contest is against the spread. Tampa +3.5 captures the key field-goal margin, so the dog is slightly more attractive than laying the hook.",
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
    marketLabel: "TEN -1.5", marketTotal: 38.5, confidence: 3,
    signal: "The earlier stale-line edge has disappeared; the pool and live market now match at Tennessee -1.5.",
    rationale: "Tennessee remains a reasonable lean in the lowest-total neighborhood on the board, and -1.5 stays comfortably below the key number 3. But the prior full-point price advantage is gone, so this is now a matchup opinion rather than a stale-line play.",
    watch: "Quarterback or offensive-line news can still move a game priced this tightly; a live reversal toward the Jets would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND",
    poolPick: "IND", poolLine: 3.5, poolFavorite: "BAL", poolSpread: 3.5,
    marketLabel: "BAL -3.5", marketTotal: 47.5, confidence: 2,
    signal: "Home dog gets the hook above the key number 3.",
    rationale: "Baltimore is the stronger straight-up team, but Indianapolis +3.5 captures the most common NFL scoring margin. With the market still sitting on the same number, there is no stale-line bonus — just a thin price-based dog lean.",
    watch: "If respected market action drives Baltimore through -4, reassess whether the move reflects meaningful new information."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT",
    poolPick: "ATL", poolLine: 3.5, poolFavorite: "PIT", poolSpread: 3.5,
    marketLabel: "PIT -3.5", marketTotal: 41.5, confidence: 3,
    signal: "The earlier stale-line hook has disappeared; pool and live market now both give Atlanta +3.5.",
    rationale: "Atlanta still gets the useful half-point above 3 in a lower-total game, but the live market has caught up to the frozen number. The Falcons remain the ATS lean because +3.5 protects a field-goal loss, though this is no longer a market-arbitrage position.",
    watch: "A meaningful injury or market move beyond PIT -4.5 would be the main reason to revisit."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -3", marketTotal: 47.5, confidence: 5,
    signal: "Strong key-number price: the pool only asks Chicago to lay -2.5 while the live market is -3.",
    rationale: "The frozen -2.5 lets Chicago cover with a three-point win while the current market would only push. That half-point is unusually valuable because 3 is the NFL's most important final margin, so Chicago remains one of the better price positions on the card.",
    watch: "A live reversal below CHI -2.5 would weaken the signal; major Bears QB/OL news would also warrant a recheck."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX",
    poolPick: "JAX", poolLine: -7.5, poolFavorite: "JAX", poolSpread: 7.5,
    marketLabel: "JAX -8.5", marketTotal: 40.5, confidence: 5,
    signal: "The stale-line edge is back: Jacksonville is -8.5 live while the pool only requires -7.5.",
    rationale: "Jacksonville remains one of the strongest Week 1 favorites and now again carries a full point of frozen-line value. Laying more than a touchdown always brings backdoor risk, but getting -7.5 instead of -8.5 materially improves the price on the preferred side.",
    watch: "If Cleveland gets major positive quarterback/offensive-line news, lower confidence; if the market falls back to JAX -7.5 or below, the stale-line advantage disappears."
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
    marketLabel: "LV -3", marketTotal: 40.5, confidence: 5,
    signal: "Post-Bowers upgrade: the frozen pool gives Miami +3.5 while the live line has moved to LV -3, capturing the key number 3.",
    rationale: "Brock Bowers underwent a meniscus trim Tuesday and is expected to miss Week 1, removing Las Vegas' top pass-game weapon. The market reacted from roughly LV -3.5 to -3 while the pool stays frozen at MIA +3.5. That half-point is especially valuable because a three-point Raiders win becomes a Miami cover in the pool, and the injury news independently supports the same side.",
    watch: "If Bowers' status unexpectedly changes or the market pushes back through LV -3.5, reassess. Otherwise Miami +3.5 is now one of the strongest frozen-line positions on the card."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN",
    poolPick: "MIN", poolLine: -1.5, poolFavorite: "MIN", poolSpread: 1.5,
    marketLabel: "MIN -1.5", marketTotal: 46.5, confidence: 4,
    signal: "Market-flip / sharp-support profile remains the reason to back Minnesota.",
    rationale: "This game moved from Green Bay being favored earlier in the cycle to Minnesota -1.5. In a near pick'em, a full favorite flip is meaningful market information. The pool number still matches the current reference, so Minnesota remains the side.",
    watch: "Any move back toward Green Bay favorite status or significant injury news would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI",
    poolPick: "PHI", poolLine: -4.5, poolFavorite: "PHI", poolSpread: 4.5,
    marketLabel: "PHI -5.5", marketTotal: 44.5, confidence: 5,
    signal: "The stale-line edge has returned: Philadelphia is -5.5 live while the pool only requires -4.5.",
    rationale: "Philadelphia remains one of the cleaner favorite positions on the board and now again carries a full point of favorable frozen-line value. The market asks bettors to lay -5.5 while the pool only asks -4.5, strengthening an Eagles side we already preferred.",
    watch: "A reversal toward PHI -4.5 or lower would remove the stale-line bonus. Major Washington or Philadelphia OL/QB news also matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC",
    poolPick: "ARI", poolLine: 10.5, poolFavorite: "LAC", poolSpread: 10.5,
    marketLabel: "LAC -9.5", marketTotal: 47.5, confidence: 5,
    signal: "Major stale-line upgrade: the pool gives Arizona +10.5 while the live market is +9.5, crossing key number 10.",
    rationale: "The Chargers remain the much safer straight-up team, but this pool is ATS. Arizona's frozen +10.5 is now a full point better than market and crosses key number 10, so a ten-point Chargers win covers for the Cardinals in the pool but loses at the current sportsbook number.",
    watch: "Major Arizona injury news or a live market surge back through LAC -10.5 would reduce the advantage; continued movement toward LAC -9 strengthens it."
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
