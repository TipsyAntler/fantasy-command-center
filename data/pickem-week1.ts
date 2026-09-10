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
export const week1MarketAsOf = "Sep 10 · Thursday 2:40 PM ET market refs";

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
    signal: "New Orleans now owns a full-point frozen-line advantage across key number 7: pool +7.5 versus live DET -6.5.",
    rationale: "The market has moved below the touchdown while the pool still gives New Orleans +7.5. That creates a particularly valuable stale-line position across key number 7: a seven-point Lions win covers for New Orleans in the pool but loses at the current sportsbook number. The Saints remain one of the strongest price-driven holds on the card.",
    watch: "Major Saints injury news or a live market surge back through DET -7.5 would erase the key-number advantage and force a reassessment."
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
    marketLabel: "PIT -3.5", marketTotal: 42.5, confidence: 3,
    signal: "Pool and consensus market both give Atlanta +3.5; the useful hook above 3 remains the case for the dog.",
    rationale: "Atlanta still gets the useful half-point above 3. The Falcons remain the ATS lean because +3.5 protects a field-goal loss, though this is a matchup and key-number position rather than a stale-line arbitrage spot.",
    watch: "A meaningful injury or market move beyond PIT -4.5 would be the main reason to revisit."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -3.5", marketTotal: 47.5, confidence: 5,
    signal: "Chicago's frozen -2.5 is now a full point better than the live -3.5 market and crosses key number 3.",
    rationale: "The pool only asks Chicago to win by a field goal while the current market asks bettors to lay -3.5. Crossing the NFL's most important key number creates a major stale-line benefit: a three-point Bears win covers in the pool but loses at the current sportsbook number. Chicago remains one of the strongest frozen-price positions on the card.",
    watch: "A live reversal back below CHI -2.5 would weaken the signal; major Bears QB/OL news would also warrant a recheck."
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
    marketLabel: "LV -3.5", marketTotal: 40.5, confidence: 4,
    signal: "Bowers remains out and consensus is LV -3.5, matching the frozen spread rather than creating a stale-line edge.",
    rationale: "Brock Bowers' expected Week 1 absence still helps the Miami case by removing Las Vegas' top pass-game weapon. The market currently matches the frozen pool spread at LV -3.5. Miami +3.5 remains the preferred ATS side because it protects a field-goal loss and the injury context still leans its way, but this is not a market-arbitrage spot.",
    watch: "If the market falls back to LV -3, Miami regains meaningful key-number stale-line value. A move through LV -4 would instead be a reason to reassess whether new Raiders-positive information is being priced in."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN",
    poolPick: "MIN", poolLine: -1.5, poolFavorite: "MIN", poolSpread: 1.5,
    marketLabel: "MIN -1.5", marketTotal: 46.5, confidence: 4,
    signal: "Minnesota remains a small home favorite and the frozen pool line matches current consensus.",
    rationale: "This remains a near pick'em divisional game, with Minnesota still favored by roughly 1.5 at the broader market. There is no stale-line edge at the moment, so the Vikings recommendation rests on the matchup and home-field lean rather than price arbitrage.",
    watch: "Any move toward Green Bay favorite status or significant injury news would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI",
    poolPick: "PHI", poolLine: -4.5, poolFavorite: "PHI", poolSpread: 4.5,
    marketLabel: "PHI -4.5", marketTotal: 44.5, confidence: 4,
    signal: "The earlier stale-line bonus has disappeared; the frozen pool spread and current market now match at Philadelphia -4.5.",
    rationale: "Philadelphia remains the preferred side based on the underlying matchup and trench advantage, but the market has moved back to the same -4.5 number used by the pool. That removes the full-point price cushion FFCC had earlier, so confidence drops slightly while the pick itself remains intact.",
    watch: "A renewed move toward PHI -5 or -5.5 would restore stale-line value; major Washington or Philadelphia OL/QB news could also change the recommendation."
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
    signal: "The short-lived key-number price edge has disappeared; pool and current market now match at Dallas -2.5.",
    rationale: "Dallas remains the slight ATS lean at a number below the key field goal, but the current market has moved back to the same -2.5 as the pool. Malik Nabers practiced fully Wednesday and looks increasingly likely to play, so there is no reason to upgrade Dallas beyond a moderate-confidence matchup lean.",
    watch: "Malik Nabers' final game status and whether consensus pushes through Dallas -3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC",
    poolPick: "DEN", poolLine: 3.5, poolFavorite: "KC", poolSpread: 3.5,
    marketLabel: "KC -2.5", marketTotal: 43.5, confidence: 5,
    signal: "Denver's frozen +3.5 now sits a full point above the live KC -2.5 market and keeps the valuable hook over key number 3.",
    rationale: "The pool gives Denver +3.5 while current sportsbook/consensus references have Kansas City around -2.5. That is a full point of stale-line value across the NFL's most important key number: a three-point Chiefs win covers for Denver in the pool while losing for Denver at the live market number. Mahomes is expected to start, but the favorable frozen price keeps Denver one of the strongest ATS positions on the card.",
    watch: "Mahomes mobility, KC offensive-line health, and whether the live market moves back through KC -3 or -3.5."
  }
];

export const week1Tiebreaker = {
  matchup: "DEN @ KC",
  label: "Total points scored in the final game of the week",
  currentMarketTotal: 43.5,
  earlyFfccTarget: 43,
  note: "Early target only. Re-run the score/total model before the Sunday 10 AM PT pool deadline."
};
