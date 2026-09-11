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
export const week1MarketAsOf = "Sep 11 · Friday 1:40 PM ET market/news recheck";

export const week1PoolGames: Week1PoolGame[] = [
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN",
    poolPick: "TB", poolLine: 3.5, poolFavorite: "CIN", poolSpread: 3.5,
    marketLabel: "CIN -3.5", marketTotal: 51.5, confidence: 2,
    signal: "Pool and live market agree at 3.5; the hook makes Tampa the ATS lean.",
    rationale: "Cincinnati is the more likely straight-up winner, but this contest is against the spread. Tampa +3.5 captures the key field-goal margin, so the dog is slightly more attractive than laying the hook.",
    watch: "If the live market pushes Cincinnati materially beyond -3.5, Tampa's frozen +3.5 becomes less attractive; if it drops toward -3, Tampa gains value."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NO", home: "DET",
    poolPick: "NO", poolLine: 7.5, poolFavorite: "DET", poolSpread: 7.5,
    marketLabel: "DET -7", marketTotal: 49, confidence: 5,
    signal: "New Orleans still owns frozen-line value across key number 7: pool +7.5 versus live DET -7.",
    rationale: "The market is sitting on the touchdown while the pool still gives New Orleans +7.5. That creates a particularly valuable stale-line position across key number 7: a seven-point Lions win covers for New Orleans in the pool but pushes at the current sportsbook number. The Saints remain one of the strongest price-driven holds on the card.",
    watch: "Major Saints injury news or a live market surge through DET -7.5 would erase the key-number advantage and force a reassessment."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN",
    poolPick: "TEN", poolLine: -1.5, poolFavorite: "TEN", poolSpread: 1.5,
    marketLabel: "TEN -2", marketTotal: 40, confidence: 4,
    signal: "Tennessee's frozen -1.5 is now a half-point better than the live -2 market.",
    rationale: "Tennessee remains the matchup lean and the live market has moved back toward the Titans. The frozen -1.5 is now modestly better than the current -2 reference, which restores a small price edge to the submitted Tennessee side.",
    watch: "A reversal to pick'em or Jets favorite would be the trigger to revisit Tennessee."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND",
    poolPick: "IND", poolLine: 3.5, poolFavorite: "BAL", poolSpread: 3.5,
    marketLabel: "BAL -3.5", marketTotal: 48, confidence: 3,
    signal: "Pool and live market are both on Baltimore -3.5; Indianapolis keeps the hook but no longer has extra stale-line value.",
    rationale: "Baltimore is the stronger straight-up team, but Indianapolis +3.5 still captures the most common NFL scoring margin. With the live market now matching the frozen pool number, this is a matchup-driven dog lean rather than a stale-line play.",
    watch: "If the market pushes through BAL -4, determine whether meaningful Ravens-positive news caused the move."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT",
    poolPick: "PIT", poolLine: -3.5, poolFavorite: "PIT", poolSpread: 3.5,
    marketLabel: "PIT -4.5 consensus · some books -3.5", marketTotal: 41.5, confidence: 5,
    signal: "ACTIONABLE FLIP: PIT -3.5. Tua Tagovailoa and Michael Penix Jr. are both inactive, and the live market has moved through the frozen pool number.",
    rationale: "Atlanta is now expected to start Cooper Rush with both Tua Tagovailoa and Michael Penix Jr. inactive. That is a material quarterback downgrade, and current consensus is broadly around Pittsburgh -4.5 while the pool only asks PIT -3.5. The frozen Steelers side therefore owns both the injury-driven matchup edge and roughly a point of stale-line value.",
    watch: "Only an unexpected quarterback-status reversal or a broad market collapse back to PIT -3 or lower would justify revisiting Atlanta."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -3", marketTotal: 46, confidence: 5,
    signal: "Chicago's frozen -2.5 remains better than the live -3 market and crosses key number 3.",
    rationale: "The pool only asks Chicago to win by a field goal while the current market is on -3. A three-point Bears win covers in the pool but pushes at the sportsbook number. Chicago remains one of the strongest frozen-price positions on the card.",
    watch: "A live reversal below CHI -2.5 would weaken the signal; major Bears QB/OL news would also warrant a recheck."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX",
    poolPick: "JAX", poolLine: -7.5, poolFavorite: "JAX", poolSpread: 7.5,
    marketLabel: "JAX -8.5", marketTotal: 40.5, confidence: 5,
    signal: "Jacksonville's frozen -7.5 has regained a full point of stale-line value versus the live -8.5 market.",
    rationale: "Jacksonville remains one of the strongest Week 1 favorites, and the live market has moved back out to roughly -8.5 while the pool remains locked at -7.5. That restores a meaningful full-point price advantage to the submitted Jaguars side.",
    watch: "If Cleveland gets major positive quarterback/offensive-line news or the market falls back to JAX -7.5 or below, the stale-line edge disappears."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU",
    poolPick: "HOU", poolLine: 1.5, poolFavorite: "BUF", poolSpread: 1.5,
    marketLabel: "PK", marketTotal: 44.5, confidence: 4,
    signal: "Houston's frozen +1.5 now beats a live pick'em market.",
    rationale: "This remains close to a coin flip, but Houston owns a meaningful frozen-line benefit because the pool gives +1.5 while the current market is pick'em. That strengthens the Texans side without requiring a matchup change.",
    watch: "Because this is so tight, any late QB/OL news or a directional move to Buffalo favorite status matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV",
    poolPick: "MIA", poolLine: 3.5, poolFavorite: "LV", poolSpread: 3.5,
    marketLabel: "LV -3.5", marketTotal: 40.5, confidence: 4,
    signal: "Miami's frozen +3.5 now matches the live market; Brock Bowers remains out.",
    rationale: "Brock Bowers' Week 1 absence still helps Miami by removing Las Vegas' top pass-game weapon. The current market is back to Raiders -3.5, so the extra stale-line edge is gone, but the submitted Miami side remains viable at the hook.",
    watch: "A move through LV -4 would be a reason to reassess whether new Raiders-positive information is being priced in."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN",
    poolPick: "MIN", poolLine: -1.5, poolFavorite: "MIN", poolSpread: 1.5,
    marketLabel: "MIN -1", marketTotal: 45, confidence: 3,
    signal: "Minnesota remains the market favorite, but the frozen -1.5 is now half a point worse than the live -1.",
    rationale: "This remains a near pick'em divisional game. The Vikings recommendation is still the matchup and home-field lean, but the live market now offers Minnesota -1 while the pool requires -1.5, so there is no price edge.",
    watch: "Any broad move toward Green Bay favorite status or significant injury news would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI",
    poolPick: "PHI", poolLine: -4.5, poolFavorite: "PHI", poolSpread: 4.5,
    marketLabel: "PHI -4.5", marketTotal: 47, confidence: 4,
    signal: "The earlier Philadelphia stale-line edge has faded; pool and live market are back together at -4.5.",
    rationale: "Philadelphia remains the preferred side based on the underlying matchup and trench advantage, but the current market has returned to the exact frozen pool number. This is now a matchup-driven pick rather than a price-driven one.",
    watch: "Major Washington or Philadelphia OL/QB news could change the recommendation."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC",
    poolPick: "ARI", poolLine: 10.5, poolFavorite: "LAC", poolSpread: 10.5,
    marketLabel: "LAC -9.5", marketTotal: 47.5, confidence: 5,
    signal: "Arizona's frozen +10.5 now owns a full point of stale-line value versus live +9.5 and crosses key number 10.",
    rationale: "The Chargers remain the much safer straight-up team, but this pool is ATS. Arizona's frozen +10.5 is now a full point better than the consensus -9.5 reference and crosses key number 10, so a ten-point Chargers win covers for Arizona in the pool but loses at the live sportsbook number.",
    watch: "Major Arizona injury news or a live market surge back through LAC -10.5 would reduce the advantage; continued movement toward LAC -9 strengthens it."
  },
  {
    day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG",
    poolPick: "DAL", poolLine: -2.5, poolFavorite: "DAL", poolSpread: 2.5,
    marketLabel: "DAL -3", marketTotal: 48.5, confidence: 4,
    signal: "Dallas' frozen -2.5 beats the live -3 market across key number 3.",
    rationale: "Dallas remains the preferred side and the current market is Cowboys -3 while the pool stays -2.5. A three-point Dallas win covers in the pool but pushes at the live number, preserving a useful key-number edge.",
    watch: "Malik Nabers' final game status and whether consensus pushes beyond Dallas -3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC",
    poolPick: "DEN", poolLine: 3.5, poolFavorite: "KC", poolSpread: 3.5,
    marketLabel: "KC -3", marketTotal: 43.5, confidence: 5,
    signal: "Denver's frozen +3.5 remains better than the live +3 market across key number 3.",
    rationale: "The pool gives Denver +3.5 while the current market has Kansas City around -3. That remains an excellent stale-line position across the NFL's most important key number: a three-point Chiefs win covers for Denver in the pool while pushing at the live market number.",
    watch: "Mahomes mobility, KC offensive-line health, and whether the live market moves back through KC -3.5."
  }
];

export const week1Tiebreaker = {
  matchup: "DEN @ KC",
  label: "Total points scored in the final game of the week",
  currentMarketTotal: 43.5,
  earlyFfccTarget: 43,
  note: "Friday market remains around 43.5. Keep 43 as the current FFCC target and re-run the score/total model before the Sunday 10 AM PT pool deadline."
};
