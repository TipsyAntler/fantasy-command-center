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
export const week1MarketAsOf = "Sep 10 · Thursday 7:30 PM ET market refs";

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
    marketLabel: "DET -7", marketTotal: 50, confidence: 5,
    signal: "New Orleans still owns frozen-line value across key number 7: pool +7.5 versus live DET -7.",
    rationale: "The market is sitting on the touchdown while the pool still gives New Orleans +7.5. That creates a particularly valuable stale-line position across key number 7: a seven-point Lions win covers for New Orleans in the pool but pushes at the current sportsbook number. The Saints remain one of the strongest price-driven holds on the card.",
    watch: "Major Saints injury news or a live market surge through DET -7.5 would erase the key-number advantage and force a reassessment."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN",
    poolPick: "TEN", poolLine: -1.5, poolFavorite: "TEN", poolSpread: 1.5,
    marketLabel: "TEN -1.5 consensus · some books PK", marketTotal: 39, confidence: 3,
    signal: "The market is split from Tennessee -1.5 down to pick'em; the frozen -1.5 is no longer a price edge.",
    rationale: "Tennessee remains the matchup lean and most consensus books still sit around -1.5, but some current boards have reached pick'em. That makes this a weaker hold than earlier in the week because the pool price is no better than the market and may be as much as 1.5 points worse at isolated books.",
    watch: "A broad consensus move to pick'em or Jets favorite would be the trigger to revisit Tennessee."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND",
    poolPick: "IND", poolLine: 3.5, poolFavorite: "BAL", poolSpread: 3.5,
    marketLabel: "BAL -3", marketTotal: 48, confidence: 3,
    signal: "Indianapolis now gets a useful frozen half-point across key number 3: pool +3.5 versus live +3.",
    rationale: "Baltimore is the stronger straight-up team, but Indianapolis +3.5 captures the most common NFL scoring margin while the live market has shortened to Ravens -3. That gives the frozen Colts side a modest but meaningful stale-line benefit.",
    watch: "If the market returns through BAL -3.5 or -4, determine whether meaningful Ravens-positive news caused the reversal."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT",
    poolPick: "PIT", poolLine: -3.5, poolFavorite: "PIT", poolSpread: 3.5,
    marketLabel: "PIT -4.5", marketTotal: 41.5, confidence: 5,
    signal: "CHANGED: Flip from ATL +3.5 to PIT -3.5. Tua Tagovailoa injured his oblique Thursday and the live market has moved to Pittsburgh -4.5.",
    rationale: "The pool's frozen Pittsburgh -3.5 is now a full point better than the current market after Tua Tagovailoa left Thursday practice with an oblique injury and Cooper Rush took the first-team reps. With Michael Penix Jr. not expected to be active, the downside if Tua cannot play is material. The combination of quarterback uncertainty and a market move through -4 makes Pittsburgh -3.5 the better expected-value side now.",
    watch: "Friday's official Tua status is still important. A full recovery plus a sharp market reversal back toward PIT -3 could reopen the Atlanta case, but absent that, Pittsburgh is the recommendation."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -3", marketTotal: 47, confidence: 5,
    signal: "Chicago's frozen -2.5 remains better than the live -3 market and crosses key number 3.",
    rationale: "The pool only asks Chicago to win by a field goal while the current market is on -3. A three-point Bears win covers in the pool but pushes at the sportsbook number. Chicago remains one of the strongest frozen-price positions on the card.",
    watch: "A live reversal below CHI -2.5 would weaken the signal; major Bears QB/OL news would also warrant a recheck."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX",
    poolPick: "JAX", poolLine: -7.5, poolFavorite: "JAX", poolSpread: 7.5,
    marketLabel: "JAX -9", marketTotal: 40, confidence: 5,
    signal: "Jacksonville's frozen -7.5 is now roughly 1.5 points better than the live -9 market.",
    rationale: "Jacksonville remains one of the strongest Week 1 favorites and now carries substantial frozen-line value. Laying more than a touchdown always brings backdoor risk, but getting -7.5 instead of roughly -9 materially improves the price on the preferred side.",
    watch: "If Cleveland gets major positive quarterback/offensive-line news, lower confidence; if the market falls back to JAX -7.5 or below, the stale-line advantage disappears."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU",
    poolPick: "HOU", poolLine: 1.5, poolFavorite: "BUF", poolSpread: 1.5,
    marketLabel: "BUF -1 to PK", marketTotal: 45, confidence: 4,
    signal: "Houston's frozen +1.5 is now better than a live market ranging from BUF -1 to pick'em.",
    rationale: "This remains close to a coin flip, but Houston now owns a modest stale-line benefit because the frozen pool gives +1.5 while current books are generally around Buffalo -1 or pick'em. That strengthens the Texans side without requiring a matchup change.",
    watch: "Because this is so tight, any late QB/OL news or a directional move to Houston favorite status matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV",
    poolPick: "MIA", poolLine: 3.5, poolFavorite: "LV", poolSpread: 3.5,
    marketLabel: "LV -3", marketTotal: 40, confidence: 5,
    signal: "Miami's frozen +3.5 now beats the live +3 market across key number 3, with Brock Bowers out.",
    rationale: "Brock Bowers' Week 1 absence still helps Miami by removing Las Vegas' top pass-game weapon. The live market has softened to Raiders -3 while the pool still gives Miami +3.5, creating a valuable half-point across the key field-goal margin.",
    watch: "A move through LV -4 would be a reason to reassess whether new Raiders-positive information is being priced in."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN",
    poolPick: "MIN", poolLine: -1.5, poolFavorite: "MIN", poolSpread: 1.5,
    marketLabel: "MIN -1 to -1.5", marketTotal: 46, confidence: 4,
    signal: "Minnesota remains the market favorite; the frozen -1.5 is close to consensus with some -1 available.",
    rationale: "This remains a near pick'em divisional game, with Minnesota still favored around 1 to 1.5 across current books. There is little stale-line value, so the Vikings recommendation rests on the matchup and home-field lean.",
    watch: "Any broad move toward Green Bay favorite status or significant injury news would be meaningful."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI",
    poolPick: "PHI", poolLine: -4.5, poolFavorite: "PHI", poolSpread: 4.5,
    marketLabel: "PHI -5.5", marketTotal: 44, confidence: 5,
    signal: "Philadelphia's frozen -4.5 has regained a full point of stale-line value versus live -5.5.",
    rationale: "Philadelphia remains the preferred side based on the underlying matchup and trench advantage, and the current market has moved to Eagles -5.5 while the pool remains -4.5. That restores a meaningful full-point cushion to the frozen price.",
    watch: "Major Washington or Philadelphia OL/QB news could change the recommendation; otherwise the current move supports the Eagles."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC",
    poolPick: "ARI", poolLine: 10.5, poolFavorite: "LAC", poolSpread: 10.5,
    marketLabel: "LAC -9.5", marketTotal: 47.5, confidence: 5,
    signal: "Arizona retains a major stale-line advantage: pool +10.5 versus live +9.5, crossing key number 10.",
    rationale: "The Chargers remain the much safer straight-up team, but this pool is ATS. Arizona's frozen +10.5 is a full point better than the current sportsbook line and crosses key number 10, so a ten-point Chargers win covers for the Cardinals in the pool but loses at the current market number.",
    watch: "Major Arizona injury news or a live market surge through LAC -10.5 would reduce the advantage; continued movement toward LAC -9 strengthens it."
  },
  {
    day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG",
    poolPick: "DAL", poolLine: -2.5, poolFavorite: "DAL", poolSpread: 2.5,
    marketLabel: "DAL -3", marketTotal: 48, confidence: 4,
    signal: "Dallas' frozen -2.5 now beats the live -3 market across key number 3.",
    rationale: "Dallas remains the preferred side and the current market has nudged to Cowboys -3 while the pool stays -2.5. A three-point Dallas win covers in the pool but pushes at the live number, restoring a useful key-number edge.",
    watch: "Malik Nabers' final game status and whether consensus pushes beyond Dallas -3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC",
    poolPick: "DEN", poolLine: 3.5, poolFavorite: "KC", poolSpread: 3.5,
    marketLabel: "KC -2", marketTotal: 43.5, confidence: 5,
    signal: "Denver's frozen +3.5 is now roughly 1.5 points better than the live KC -2 market and crosses key number 3.",
    rationale: "The pool gives Denver +3.5 while the current market has Kansas City around -2. That is an excellent stale-line position across the NFL's most important key number: a three-point Chiefs win covers for Denver in the pool while losing for Denver at the live market number.",
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
