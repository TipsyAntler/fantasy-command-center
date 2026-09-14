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
export const week1MarketAsOf = "Sep 14 · Monday 5:32 PM ET pre-MNF recheck";

export const week1PoolGames: Week1PoolGame[] = [
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN",
    poolPick: "TB", poolLine: 3.5, poolFavorite: "CIN", poolSpread: 3.5,
    marketLabel: "CIN -3.5 to -4", marketTotal: 50.5, confidence: 2,
    signal: "Pool +3.5 remains playable; the Sunday inactive list did not create a material side-flip signal.",
    rationale: "Cincinnati is the more likely straight-up winner, but this contest is against the spread. Tampa +3.5 captures the key field-goal margin. Tampa is without Jalen McMillan and several depth/line pieces, but those absences were not enough to move the recommendation off the frozen +3.5.",
    watch: "Only a material pre-kick market surge beyond Cincinnati -4 tied to new Tampa-negative information would justify revisiting."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NO", home: "DET",
    poolPick: "NO", poolLine: 7.5, poolFavorite: "DET", poolSpread: 7.5,
    marketLabel: "DET -6.5", marketTotal: 49.5, confidence: 4,
    signal: "HOLD NO +7.5: Alvin Kamara is officially inactive, but the frozen pool line still owns value across key number 7 versus a live market around DET -6.5.",
    rationale: "Kamara's absence is a real downgrade for New Orleans and lowers confidence from the earlier board, but it has not erased the price advantage. The pool still gives the Saints +7.5 while the live market is around Detroit -6.5, so a seven-point Lions win still covers New Orleans in the pool while beating current sportsbook bettors. Detroit's inactive list is largely defensive/depth oriented.",
    watch: "If the market surges through DET -7.5 before kickoff, the stale-line edge is gone and the Saints side should be reassessed immediately."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN",
    poolPick: "TEN", poolLine: -1.5, poolFavorite: "TEN", poolSpread: 1.5,
    marketLabel: "TEN -1.5", marketTotal: 38.5, confidence: 4,
    signal: "Tennessee's frozen -1.5 remains aligned with the live market; the Jets' inactive list does not materially change the matchup.",
    rationale: "Tennessee remains the matchup lean and the frozen -1.5 is still a fair price. Breece Hall is active; no late inactive created a reason to abandon the submitted Titans side.",
    watch: "A reversal to pick'em or Jets favorite would be the trigger to revisit Tennessee."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND",
    poolPick: "IND", poolLine: 3.5, poolFavorite: "BAL", poolSpread: 3.5,
    marketLabel: "BAL -3.5", marketTotal: 47.5, confidence: 3,
    signal: "Pool and live market remain around Baltimore -3.5; the late inactive lists do not create a clear side-flip signal.",
    rationale: "Baltimore is the stronger straight-up team, but Indianapolis +3.5 still captures the most common NFL scoring margin. With the live market matching the frozen pool number, this remains a matchup-driven dog lean rather than a stale-line play.",
    watch: "If the market pushes through BAL -4 because of meaningful new Ravens-positive information, reassess."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT",
    poolPick: "PIT", poolLine: -3.5, poolFavorite: "PIT", poolSpread: 3.5,
    marketLabel: "PIT roughly -6 to -6.5", marketTotal: 41.5, confidence: 5,
    signal: "ACTIONABLE CHANGE STILL HOLDS: PIT -3.5 over ATL +3.5. Cooper Rush starts for Atlanta; Pittsburgh CB Joey Porter Jr. is now officially inactive, but that does not erase the quarterback-driven stale-line edge.",
    rationale: "Atlanta's quarterback downgrade from Tua Tagovailoa/Michael Penix Jr. to Cooper Rush remains the dominant signal, and the live market is still materially beyond the frozen PIT -3.5. Joey Porter Jr.'s absence helps Atlanta's passing matchup somewhat, but not enough to offset roughly two-plus points of stale-line value.",
    watch: "Only an unexpected quarterback-status reversal or a broad market collapse back toward PIT -3 would justify revisiting Atlanta."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -2.5 to -3", marketTotal: 47.5, confidence: 5,
    signal: "Chicago's frozen -2.5 remains favorable wherever the live market is -3 and still sits on the preferred side of key number 3.",
    rationale: "The pool only asks Chicago to win by a field goal. Sunday pricing remains around -2.5 to -3, so the frozen number is still at least fair and better wherever books deal -3.",
    watch: "A live reversal below CHI -2.5 or major late Bears QB/OL news would warrant a recheck."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX",
    poolPick: "JAX", poolLine: -7.5, poolFavorite: "JAX", poolSpread: 7.5,
    marketLabel: "JAX -8.5", marketTotal: 40.5, confidence: 5,
    signal: "Jacksonville's frozen -7.5 still carries about a point of stale-line value versus the Sunday market.",
    rationale: "Jacksonville remains one of the strongest Week 1 favorites. The Sunday market is around -8.5 while the pool remains locked at -7.5, preserving meaningful price advantage to the submitted Jaguars side. The final inactive list did not create a major Jaguars offensive downgrade.",
    watch: "If the market falls back to JAX -7.5 or below, the stale-line edge disappears, though it would not automatically flip the matchup lean."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU",
    poolPick: "HOU", poolLine: 1.5, poolFavorite: "BUF", poolSpread: 1.5,
    marketLabel: "BUF -1.5", marketTotal: 44.5, confidence: 4,
    signal: "Houston's frozen +1.5 remains aligned with the current market and is still viable in a near coin-flip game.",
    rationale: "This remains close to a coin flip. Houston's pool +1.5 matches the current consensus and neither side's inactive list created a material reason to abandon the submitted Texans side.",
    watch: "Because this is tight, any late QB/OL news or a stronger directional move toward Buffalo matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV",
    poolPick: "MIA", poolLine: 3.5, poolFavorite: "LV", poolSpread: 3.5,
    marketLabel: "LV -3 to -3.5", marketTotal: 40.5, confidence: 4,
    signal: "Miami's frozen +3.5 remains at least as good as the live market; Brock Bowers is officially OUT.",
    rationale: "Brock Bowers' Week 1 absence still helps Miami by removing Las Vegas' top pass-game weapon. The market remains around Raiders -3 to -3.5, leaving the submitted Miami side viable at the hook.",
    watch: "A move through LV -4 would be a reason to reassess whether new Raiders-positive information is being priced in."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN",
    poolPick: "MIN", poolLine: -1.5, poolFavorite: "MIN", poolSpread: 1.5,
    marketLabel: "MIN -1.5", marketTotal: 46.5, confidence: 3,
    signal: "Minnesota remains a slight favorite; frozen and live pricing are essentially aligned.",
    rationale: "This remains a near pick'em divisional game. The Vikings recommendation is still the matchup and home-field lean, but there is no meaningful stale-line edge at the current market.",
    watch: "Any broad move toward Green Bay favorite status or significant injury news would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI",
    poolPick: "PHI", poolLine: -4.5, poolFavorite: "PHI", poolSpread: 4.5,
    marketLabel: "PHI -5.5 to -6", marketTotal: 44.5, confidence: 4,
    signal: "Philadelphia's frozen -4.5 remains roughly one to one-and-a-half points better than the live market.",
    rationale: "Philadelphia remains the preferred side based on the underlying matchup and trench advantage, and the current live line remains beyond the frozen pool price.",
    watch: "Major Washington or Philadelphia OL/QB news could still change the recommendation."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC",
    poolPick: "ARI", poolLine: 10.5, poolFavorite: "LAC", poolSpread: 10.5,
    marketLabel: "LAC -9.5 to -10", marketTotal: 47.5, confidence: 5,
    signal: "Arizona's frozen +10.5 retains stale-line value and stays on the favorable side of key number 10.",
    rationale: "The Chargers remain the much safer straight-up team, but this pool is ATS. Arizona's frozen +10.5 remains better than the live market and crosses key number 10, so a ten-point Chargers win covers for Arizona in the pool while losing or pushing at common live numbers.",
    watch: "Major Arizona injury news or a live market surge through LAC -10.5 would reduce the advantage."
  },
  {
    day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG",
    poolPick: "DAL", poolLine: -2.5, poolFavorite: "DAL", poolSpread: 2.5,
    marketLabel: "DAL -2.5 to -3", marketTotal: 48.5, confidence: 4,
    signal: "Dallas' frozen -2.5 remains at least as good as the live market and is better wherever books deal -3.",
    rationale: "Dallas remains the preferred side. The pool number stays on the favorable side of key number 3 versus books dealing Cowboys -3.",
    watch: "Malik Nabers' final active/inactive status and whether consensus pushes beyond Dallas -3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC",
    poolPick: "DEN", poolLine: 3.5, poolFavorite: "KC", poolSpread: 3.5,
    marketLabel: "KC -2.5", marketTotal: 43.5, confidence: 5,
    signal: "HOLD DEN +3.5: Monday pricing has moved back toward Kansas City at roughly -2.5, but the frozen pool line still gives Denver a full point of stale-line value and, importantly, protection through key number 3. Kansas City will also be without starting LT Josh Simmons.",
    rationale: "The pool gives Denver +3.5 while current Monday pricing is around Kansas City -2.5. The edge is smaller than when the market briefly sat near KC -1.5, but the frozen number still crosses the key field-goal margin: a three-point Chiefs win covers Denver in the pool. Kansas City's final injury report ruled starting left tackle Josh Simmons out; the recommendation remains Denver.",
    watch: "Mahomes' first regular-season game back from the knee injury and any late move through KC -3. If the market reaches KC -3.5 or beyond on credible new information, reassess before lock."
  }
];

export const week1Tiebreaker = {
  matchup: "DEN @ KC",
  label: "Total points scored in the final game of the week",
  currentMarketTotal: 43.5,
  earlyFfccTarget: 43,
  note: "Monday 5:32 PM ET recheck still has the market total around 43.5. Keep 43 as the FFCC tiebreaker target unless a late pre-kick total move materially changes the model."
};