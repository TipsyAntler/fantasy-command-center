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
export const week1MarketAsOf = "Sep 12 · Saturday 4:18 PM ET market/news recheck";

export const week1PoolGames: Week1PoolGame[] = [
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN",
    poolPick: "TB", poolLine: 3.5, poolFavorite: "CIN", poolSpread: 3.5,
    marketLabel: "CIN -3.5 to -4", marketTotal: 50.5, confidence: 2,
    signal: "Pool +3.5 remains playable; some books have moved Cincinnati to -4, but the broader market has not created a side-flip signal.",
    rationale: "Cincinnati is the more likely straight-up winner, but this contest is against the spread. Tampa +3.5 captures the key field-goal margin, so the dog remains the slight ATS lean despite some Saturday books dealing Cincinnati -4.",
    watch: "If the live market pushes Cincinnati materially beyond -4 because of new Tampa-negative information, reassess the frozen +3.5."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NO", home: "DET",
    poolPick: "NO", poolLine: 7.5, poolFavorite: "DET", poolSpread: 7.5,
    marketLabel: "DET -6.5 to -7", marketTotal: 49.5, confidence: 5,
    signal: "New Orleans still owns frozen-line value across key number 7: pool +7.5 versus live DET -6.5/-7.",
    rationale: "The market is sitting around the touchdown while the pool still gives New Orleans +7.5. That creates a particularly valuable stale-line position across key number 7: a seven-point Lions win covers for New Orleans in the pool but pushes or loses at the current sportsbook number. Alvin Kamara is questionable but practiced fully Friday, while Detroit enters nearly fully healthy. The Saints remain one of the strongest price-driven holds on the card.",
    watch: "Kamara's Sunday status or a live market surge through DET -7.5 would erase the key-number advantage and force a reassessment."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN",
    poolPick: "TEN", poolLine: -1.5, poolFavorite: "TEN", poolSpread: 1.5,
    marketLabel: "TEN -1.5", marketTotal: 38.5, confidence: 4,
    signal: "Tennessee's frozen -1.5 remains aligned with the live market.",
    rationale: "Tennessee remains the matchup lean and the frozen -1.5 is still a fair price relative to the Saturday market.",
    watch: "A reversal to pick'em or Jets favorite would be the trigger to revisit Tennessee."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND",
    poolPick: "IND", poolLine: 3.5, poolFavorite: "BAL", poolSpread: 3.5,
    marketLabel: "BAL -3.5", marketTotal: 47.5, confidence: 3,
    signal: "Pool and live market are both on Baltimore -3.5; Indianapolis keeps the hook but no extra stale-line value.",
    rationale: "Baltimore is the stronger straight-up team, but Indianapolis +3.5 still captures the most common NFL scoring margin. With the live market matching the frozen pool number, this remains a matchup-driven dog lean rather than a stale-line play.",
    watch: "If the market pushes through BAL -4, determine whether meaningful Ravens-positive news caused the move."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT",
    poolPick: "PIT", poolLine: -3.5, poolFavorite: "PIT", poolSpread: 3.5,
    marketLabel: "PIT -5.5 to -6 after Tua ruled out", marketTotal: 41.5, confidence: 5,
    signal: "ACTIONABLE CHANGE HOLDS: PIT -3.5 over ATL +3.5. Tua Tagovailoa is OUT, Michael Penix Jr. is unavailable, Cooper Rush starts, and the live market remains roughly PIT -5.5/-6.",
    rationale: "Atlanta will start Cooper Rush with Tua Tagovailoa ruled out and Michael Penix Jr. still unavailable. The market response continues to confirm the quarterback downgrade: Pittsburgh is broadly priced around -5.5 to -6 while the pool remains frozen at -3.5. That gives Pittsburgh roughly two to two-and-a-half points of stale-line value.",
    watch: "Only an unexpected quarterback-status reversal or a sharp broad market collapse back toward PIT -3 would justify revisiting Atlanta."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR",
    poolPick: "CHI", poolLine: -2.5, poolFavorite: "CHI", poolSpread: 2.5,
    marketLabel: "CHI -2.5 to -3", marketTotal: 47.5, confidence: 5,
    signal: "Chicago's frozen -2.5 remains favorable wherever the live market is -3 and still sits on the preferred side of key number 3.",
    rationale: "The pool only asks Chicago to win by a field goal. Saturday consensus has eased slightly from Friday but remains around -2.5 to -3, so the frozen number is still at least fair and better wherever books deal -3.",
    watch: "A live reversal below CHI -2.5 would weaken the signal; major Bears QB/OL news would also warrant a recheck."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX",
    poolPick: "JAX", poolLine: -7.5, poolFavorite: "JAX", poolSpread: 7.5,
    marketLabel: "JAX -8.5 to -9.5", marketTotal: 39.5, confidence: 5,
    signal: "Jacksonville's frozen -7.5 now carries roughly one to two points of stale-line value versus the Saturday live market.",
    rationale: "Jacksonville remains one of the strongest Week 1 favorites, and the live market has strengthened into roughly the -8.5 to -9.5 range while the pool remains locked at -7.5. That preserves meaningful price advantage to the submitted Jaguars side.",
    watch: "If Cleveland gets major positive quarterback/offensive-line news or the market falls back to JAX -7.5 or below, the stale-line edge disappears."
  },
  {
    day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU",
    poolPick: "HOU", poolLine: 1.5, poolFavorite: "BUF", poolSpread: 1.5,
    marketLabel: "BUF -1.5", marketTotal: 44.5, confidence: 4,
    signal: "Houston's frozen +1.5 remains aligned with the current market and is still viable in a near coin-flip game.",
    rationale: "This remains close to a coin flip. Houston's pool +1.5 matches the current consensus and there is no material reason to abandon the submitted side.",
    watch: "Because this is tight, any late QB/OL news or a stronger directional move toward Buffalo matters."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV",
    poolPick: "MIA", poolLine: 3.5, poolFavorite: "LV", poolSpread: 3.5,
    marketLabel: "LV -3 to -3.5", marketTotal: 40.5, confidence: 4,
    signal: "Miami's frozen +3.5 remains at least as good as the live market; Brock Bowers is officially OUT.",
    rationale: "Brock Bowers' Week 1 absence still helps Miami by removing Las Vegas' top pass-game weapon. The Saturday market remains around Raiders -3 to -3.5, leaving the submitted Miami side viable at the hook.",
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
    signal: "Philadelphia's frozen -4.5 is now roughly one to one-and-a-half points better than the live market.",
    rationale: "Philadelphia remains the preferred side based on the underlying matchup and trench advantage, and the current live line remains beyond the frozen pool price. Washington's active roster is medically cleared, but that has not prevented the market from pricing Philadelphia more strongly.",
    watch: "Major Washington or Philadelphia OL/QB news could still change the recommendation."
  },
  {
    day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC",
    poolPick: "ARI", poolLine: 10.5, poolFavorite: "LAC", poolSpread: 10.5,
    marketLabel: "LAC -9.5", marketTotal: 47.5, confidence: 5,
    signal: "Arizona's frozen +10.5 owns a full point of stale-line value versus live +9.5 and crosses key number 10.",
    rationale: "The Chargers remain the much safer straight-up team, but this pool is ATS. Arizona's frozen +10.5 is a full point better than the consensus -9.5 reference and crosses key number 10, so a ten-point Chargers win covers for Arizona in the pool but loses at the live sportsbook number.",
    watch: "Major Arizona injury news or a live market surge back through LAC -10.5 would reduce the advantage; Tuli Tuipulotu is questionable for the Chargers but does not change the pick."
  },
  {
    day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG",
    poolPick: "DAL", poolLine: -2.5, poolFavorite: "DAL", poolSpread: 2.5,
    marketLabel: "DAL -2.5 to -3", marketTotal: 48.5, confidence: 4,
    signal: "Dallas' frozen -2.5 remains at least as good as the live market and is better wherever books deal -3.",
    rationale: "Dallas remains the preferred side. The pool number stays on the favorable side of key number 3 versus books dealing Cowboys -3. Malik Nabers remains questionable, which is additional Dallas-positive context but not enough by itself to change the recommendation because Dallas was already the pick.",
    watch: "Malik Nabers' final active/inactive status and whether consensus pushes beyond Dallas -3."
  },
  {
    day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC",
    poolPick: "DEN", poolLine: 3.5, poolFavorite: "KC", poolSpread: 3.5,
    marketLabel: "KC -2.5", marketTotal: 43.5, confidence: 5,
    signal: "Denver's frozen +3.5 remains better than the live +2.5 market across key number 3, and Kansas City will be without starting LT Josh Simmons.",
    rationale: "The pool gives Denver +3.5 while the current market has Kansas City around -2.5, preserving excellent stale-line value across key number 3. Kansas City's final Saturday report also ruled starting left tackle Josh Simmons out. Chris Jones missed Saturday's practice with a calf issue, but Andy Reid called it precautionary and Jones carries no game designation, so the defensive-star uncertainty no longer needs to be priced as a likely absence.",
    watch: "Mahomes' first regular-season game back from the knee injury, Kansas City's replacement plan at left tackle, and any Sunday/Monday move back through KC -3.5. Chris Jones is cleared to play."
  }
];

export const week1Tiebreaker = {
  matchup: "DEN @ KC",
  label: "Total points scored in the final game of the week",
  currentMarketTotal: 43.5,
  earlyFfccTarget: 43,
  note: "Saturday afternoon market remains around 43.5. Keep 43 as the current FFCC target and re-run the score/total model before the Sunday 10 AM PT pool deadline."
};