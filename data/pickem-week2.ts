export type Week2PoolGame = {
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

export const week2Number = 2;
export const week2PoolName = "The SZN · NFL Super Pick'em · NFL-575";
export const week2PoolStatus = "POOL LINES FROZEN · EXACT WEEK 2 LINES CAPTURED FROM THE SZN";
export const week2MarketAsOf = "Sep 15 · provisional Week 2 board · live market monitored continuously";

export const week2PoolGames: Week2PoolGame[] = [
  { day:"Sun", kickoff:"1:00 PM", away:"DET", home:"BUF", poolPick:"DET", poolLine:4.5, poolFavorite:"BUF", poolSpread:4.5, marketLabel:"BUF ~-4.5", marketTotal:49.5, confidence:3, signal:"Near-market number; take the points in a competitive matchup.", rationale:"No meaningful stale-line edge yet. Detroit +4.5 is the provisional matchup lean while we wait for late-week injury and market confirmation.", watch:"A Buffalo-positive move through -5.5 or major Detroit injury news." },
  { day:"Sun", kickoff:"1:00 PM", away:"CAR", home:"ATL", poolPick:"ATL", poolLine:1.5, poolFavorite:"CAR", poolSpread:1.5, marketLabel:"CAR ~-1.5 to -2.5", marketTotal:43.5, confidence:4, signal:"STale-line value: the market flipped through pick'em after the pool froze.", rationale:"Atlanta +1.5 is materially better than the current market price despite the Falcons' quarterback uncertainty. The number movement makes the frozen dog price valuable.", watch:"Atlanta quarterback news severe enough to push the live market materially beyond CAR -3." },
  { day:"Sun", kickoff:"1:00 PM", away:"MIN", home:"CHI", poolPick:"MIN", poolLine:5.5, poolFavorite:"CHI", poolSpread:5.5, marketLabel:"CHI ~-5.5", marketTotal:44.5, confidence:3, signal:"No major stale-line edge; dog lean at more than a field goal.", rationale:"Minnesota +5.5 is provisional while the market remains close to the frozen number.", watch:"QB/OL news or a move through CHI -6.5." },
  { day:"Sun", kickoff:"1:00 PM", away:"PHI", home:"TEN", poolPick:"TEN", poolLine:7.5, poolFavorite:"PHI", poolSpread:7.5, marketLabel:"PHI ~-7", marketTotal:45.5, confidence:4, signal:"Pool gives TEN +7.5 while the market is around +7, crossing key number 7.", rationale:"The hook above seven is meaningful ATS value, and Philadelphia's offensive-line injury picture adds support to taking Tennessee at the frozen number.", watch:"A market surge through PHI -7.5 on credible new information." },
  { day:"Sun", kickoff:"1:00 PM", away:"PIT", home:"NE", poolPick:"PIT", poolLine:5.5, poolFavorite:"NE", poolSpread:5.5, marketLabel:"NE ~-5", marketTotal:42.5, confidence:4, signal:"Small stale-line edge to Pittsburgh at +5.5.", rationale:"The pool is giving roughly a half-point more than the live market. Take the extra cushion while monitoring New England's injury returns.", watch:"A broad move toward NE -6 or major Pittsburgh injury news." },
  { day:"Sun", kickoff:"1:00 PM", away:"GB", home:"NYJ", poolPick:"GB", poolLine:-4.5, poolFavorite:"GB", poolSpread:4.5, marketLabel:"GB ~-4.5", marketTotal:42.5, confidence:3, signal:"Frozen and live pricing are broadly aligned.", rationale:"Green Bay remains the provisional matchup side without a meaningful stale-line advantage.", watch:"Any quarterback or offensive-line downgrade for Green Bay." },
  { day:"Sun", kickoff:"1:00 PM", away:"CLE", home:"TB", poolPick:"TB", poolLine:-8.5, poolFavorite:"TB", poolSpread:8.5, marketLabel:"TB ~-8.5", marketTotal:41.5, confidence:4, signal:"Market continues to support Tampa as a substantial favorite.", rationale:"The pool line is close to market, so this is primarily a matchup-strength recommendation rather than stale-line value.", watch:"Tampa injury cluster or meaningful market retreat below -7.5." },
  { day:"Sun", kickoff:"1:00 PM", away:"NO", home:"BAL", poolPick:"BAL", poolLine:-8.5, poolFavorite:"BAL", poolSpread:8.5, marketLabel:"BAL ~-8.5", marketTotal:44.5, confidence:4, signal:"Baltimore remains one of the week's strongest favorites.", rationale:"No large price edge, but Baltimore's matchup profile keeps the Ravens as the provisional ATS side.", watch:"Ravens QB/OL news or market retreat through -7." },
  { day:"Sun", kickoff:"1:00 PM", away:"CIN", home:"HOU", poolPick:"CIN", poolLine:3.5, poolFavorite:"HOU", poolSpread:3.5, marketLabel:"HOU ~-3.5", marketTotal:46.5, confidence:3, signal:"Key-number hook makes the dog playable.", rationale:"Cincinnati +3.5 captures the field-goal margin in a game currently priced close to the pool number.", watch:"Quarterback news or a move through HOU -4." },
  { day:"Sun", kickoff:"4:05 PM", away:"JAX", home:"DEN", poolPick:"JAX", poolLine:2.5, poolFavorite:"DEN", poolSpread:2.5, marketLabel:"DEN ~-2.5", marketTotal:43.5, confidence:2, signal:"Near coin flip at the frozen number.", rationale:"Jacksonville +2.5 is a thin provisional dog lean; this is one of the board's lower-confidence games.", watch:"Any move through DEN -3 is important because it crosses the key field-goal number." },
  { day:"Sun", kickoff:"4:05 PM", away:"LV", home:"LAC", poolPick:"LV", poolLine:7.5, poolFavorite:"LAC", poolSpread:7.5, marketLabel:"LAC ~-6.5", marketTotal:44.5, confidence:4, signal:"Pool gives LV +7.5 while live pricing is around +6.5, crossing key number 7.", rationale:"The full point of stale-line value and protection above seven make Las Vegas the preferred ATS side even though the Chargers remain the safer straight-up team.", watch:"A live move back through LAC -7.5 on new information." },
  { day:"Sun", kickoff:"4:25 PM", away:"WAS", home:"DAL", poolPick:"WAS", poolLine:3.5, poolFavorite:"DAL", poolSpread:3.5, marketLabel:"DAL ~-3.5", marketTotal:47.5, confidence:3, signal:"Dog gets the hook above the key field-goal margin.", rationale:"Washington +3.5 is the provisional side while the market remains close to the frozen line.", watch:"Major Washington injury news or Dallas moving beyond -4." },
  { day:"Sun", kickoff:"4:25 PM", away:"SEA", home:"ARI", poolPick:"ARI", poolLine:4.5, poolFavorite:"SEA", poolSpread:4.5, marketLabel:"SEA ~-4.5", marketTotal:43.5, confidence:4, signal:"Seattle quarterback uncertainty materially reduced its market advantage.", rationale:"With Seattle's quarterback situation changing the matchup, Arizona +4.5 is preferred at the frozen number rather than laying points with the favorite.", watch:"A Seattle QB-status reversal and corresponding market move." },
  { day:"Sun", kickoff:"4:25 PM", away:"MIA", home:"SF", poolPick:"MIA", poolLine:13.5, poolFavorite:"SF", poolSpread:13.5, marketLabel:"SF ~-12.5", marketTotal:43.5, confidence:4, signal:"Pool gives Miami roughly a point more than the live market.", rationale:"San Francisco is the week's safest straight-up favorite, but ATS the pool asks SF to cover a worse number. Miami +13.5 is the value side.", watch:"A live surge through SF -13.5 tied to meaningful Miami-negative news." },
  { day:"Sun", kickoff:"8:20 PM", away:"IND", home:"KC", poolPick:"IND", poolLine:6.5, poolFavorite:"KC", poolSpread:6.5, marketLabel:"KC ~-6.5", marketTotal:46.5, confidence:2, signal:"Near-market number; dog lean below a touchdown.", rationale:"Indianapolis +6.5 is provisional in a low-edge game while the market remains aligned.", watch:"A move through KC -7 would materially improve the frozen Colts number." },
  { day:"Mon", kickoff:"8:15 PM", away:"NYG", home:"LAR", poolPick:"NYG", poolLine:7.5, poolFavorite:"LAR", poolSpread:7.5, marketLabel:"LAR ~-7.5", marketTotal:48.5, confidence:3, signal:"Take the hook above seven while the market remains near the frozen line.", rationale:"The Giants +7.5 capture the key touchdown margin. This remains provisional pending the final Monday injury and market audit.", watch:"A market move materially below LAR -7 would strengthen NYG; above -8.5 would require reassessment." },
];

export const week2Tiebreaker = {
  matchup: "NYG @ LAR",
  label: "Total points scored in the final game of the week",
  currentMarketTotal: 48.5,
  earlyFfccTarget: 48,
  note: "Early target is 48, anchored to the current market total around 48–48.5. Recheck before the final editable deadline."
};