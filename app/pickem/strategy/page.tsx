import Link from "next/link";
import { pickemVibePolicy, pickemVibeWeeks } from "@/data/pickem-vibes";
const sections = [
  {
    "title": "The objective",
    "paragraphs": [
      "Maximize expected correct ATS picks over the season. With one point per correct pick, expected total equals the sum of each selection's cover probability. Choose the higher probability at each frozen pool spread. This also maximizes expected weekly correct picks; it does not necessarily maximize the probability of taking a weekly prize. Do not sacrifice season expectation to chase unpopular picks or catch the leader in September.",
      "Winning the contest and maximizing total correct are related but distinct goals. Late-season strategic differences can matter for prize equity; adopt that separate objective only if Mike requests it. Survivor remains a different optimization problem involving outright wins, remaining teams and future opportunities."
    ]
  },
  {
    "title": "The evidence and its limits",
    "paragraphs": [
      "Historical forecasting research by Song, Boulier and Stekler (2007) compared expert judgments, statistical models and betting lines. The betting market outperformed the other groups in winner forecasting, and neither experts nor models profitably beat the line in that sample. This is old evidence supporting a strong market baseline, not proof that today's prices are perfect or that all modern models fail.",
      "FFCC also checked nflverse regular-season schedules for 2015–2025: 2,895 completed games with a listed spread. Excluding pick'ems and pushes, favorites went 1,369–1,449 (48.6%). Home underdogs went 545–540 (50.2%). Teams whose preceding regular-season game that season was a loss by at least 17 points went 339–325 (51.1%), with 12 pushes excluded. The approximate 95% Wilson interval for that last rate is 47.3–54.8%. A blowout-loss proxy cannot measure motivation, but these results do not establish an automatic bounceback cover advantage.",
      "These are descriptive checks using the dataset's recorded spreads, not a backtest of this pool's Monday frozen lines or proof that FFCC can beat the market. Team-game observations can be dependent; the interval is a simple binomial approximation. No threshold search or optimized betting system was fitted."
    ]
  },
  {
    "title": "The process adopted now",
    "paragraphs": [
      "Preserve the pool spread permanently. Capture source, season, matchup and observation time for all market quotes. Prefer multiple independent books at similar times, using the median of de-vigged probabilities at the exact pool spread. Retrieve alternate-spread prices when the standard market line differs. A dated article or an old quote must be labeled as such; never manufacture a simultaneous consensus.",
      "For negative American odds -a, implied probability is a/(a+100); for positive +a, it is 100/(a+100). Divide each side's implied probability by the sum of both sides to remove the margin proportionally. This is an approximation to market belief, not a calibrated guarantee. At whole-number spreads, the resulting two-way probability is conditional on no push; do not ignore push mass when translating to a half-point pool line.",
      "A crossing of 3 or 7 can matter more than a similar move elsewhere. However, a better line alone does not quantify the advantage, and the juice at that line matters. Never treat a win moneyline or a model's straight-up win probability as its ATS cover probability.",
      "Review official injuries, quarterback/line availability, weather, rest and matchup efficiency for material changes. Avoid counting the same injury twice if already reflected in prices. Independent models can challenge the baseline, but an override needs a documented same-line projection and out-of-sample evidence. Do not assign arbitrary market/model/expert blend weights.",
      "When the best reviewed source is exactly balanced and no validated independent signal exists, keep the existing provisional side and label it 'No measured edge.' That tie policy does not claim predictive skill. Missing a required pick is worse than admitting that a game is essentially undecided."
    ]
  },
  {
    "title": "Experts and models to review",
    "paragraphs": [
      "Aaron Schatz and Mike Tanier / FTN: efficiency, opponent adjustment and injury/matchup interpretation. FTN's DAVE framework tempers early-season results with preseason expectations. Use this as a disciplined diagnostic, not a license to copy a pick or assume a published ranking equals a cover projection.",
      "PoolGenius / TeamRankings: contest-specific strategy and frozen-line comparisons. Its distinction between scoring well and maximizing contest-winning probability is useful. Subscriber prize claims are not an independently audited ATS accuracy record; no paid subscription or paid Week 4 picks were used here.",
      "ESPN FPI: a secondary team-strength/projection check when an accessible, current forecast exists. Some versions incorporate betting information, so it is not necessarily independent confirmation of the market. No FPI-derived ATS advantage was verified in this Week 4 audit.",
      "Pickwatch: use ATS records, exact quoted lines and all-picks histories to evaluate a stable panel. Case Keefer and Mario Mergola are candidates for review, not declared champions. Do not select this week's hottest expert after seeing the results. I did not verify a current, independently audited multi-season leaderboard establishing a best expert; no expert receives an automatic override.",
      "Before adding expert weight, collect preferably several seasons and hundreds of timestamped picks at comparable lines, separate all-picks from selectively advertised best bets, and test on later unseen games. Shrink small-sample records toward 50%. Track improvement over the same market baseline, not merely a headline win percentage. Conflicting or unverifiable self-reported records are insufficient."
    ]
  },
  {
    "title": "What changed in Week 4",
    "paragraphs": [
      "The operative source is the reviewed FanDuel Research Week 4 article, observed during the September 29 night ET review. Its per-quote timestamp is unavailable. Earlier VegasInsider/bet365 observations were cross-checks only; inconsistently embedded tables were excluded. This is a provisional single-source market card, not a verified live multi-book consensus.",
      "Pittsburgh -2.5 replaces Cleveland +2.5, and Houston -2.5 replaces Dallas +2.5. These are small exact-line price leans, not major new information. The prior vague model-support claims for Cleveland/Dallas were removed. Every frozen spread remains unchanged.",
      "Keep NE +7.5, LAR -2.5, DEN +3.5, LAC +7.5 and ATL +3.5 as qualitative number advantages. Keep NYJ +3.5, GB -3.5, MIN -10.5, KC -4.5 and DET -3.5 as small price leans. WAS +3.5, JAX +2.5, ARI -1.5 and BAL -11.5 remain provisional choices with no measured edge. High-confidence stars were replaced by evidence labels.",
      "Green Bay and Minnesota no longer show a universal full-point advantage in the operative snapshot. Buffalo, San Francisco and Seattle can win while New England, Denver and Los Angeles still cover our frozen lines. Philadelphia's motivation does not independently establish that the Eagles are the better ATS side.",
      "Monday's ATL–NO total reference is 48.5. Keep 49 provisionally; 48 and 49 are equally close, and a market total alone does not prove which integer is optimal. Confirm the pool's precise tiebreak scoring and submission deadline."
    ]
  },
  {
    "title": "Weekly execution and evaluation",
    "paragraphs": [
      "Load all required picks early, then refresh quotes before each actual editable deadline. Verify whether the pool locks the full card Thursday or each game separately; do not assume Monday edits remain open. Review official final reports and inactives while edits are permitted. A small price twitch should not generate repeated flips.",
      "Preserve an audit trail: pool line, source quotes, prior and revised pick, rationale, model availability, actual submission if confirmed, and eventual ATS result. The Week 4 review snapshot is saved in the repository. FFCC recommendations must not be confused with Mike's entered picks; this update did not submit changes to The SZN.",
      "Evaluate season and rolling performance against the original card and the market baseline at the same pool lines. If numerical forecasts become available, assess calibration and Brier/log loss as well as accuracy. Never promote a new method because of one good Sunday. There is no validated 55–60% FFCC success-rate claim.",
      "Track Mike's pregame instinct/submitted side as a separate diagnostic whenever he expresses one before results. Pay special attention to games where Mike and FFCC disagree. Do not let that instinct silently alter the market-first recommendation yet; preserve an independent record so we can test whether the signal is real rather than hindsight. Week 4 is aggregate-only because every game-level vibe was not prospectively logged. Beginning Week 5, log disagreements before kickoff and review the first prospective sample after Week 7.",
      "The existing FFCC Weekly Watch will use this policy for future reviews. Genuine pick changes retain the app's breaking-news and push-alert mechanism. The board remains provisional until a final evidence and deadline check."
    ]
  }
];
const sources = [["Forecasting study","https://www.sciencedirect.com/science/article/pii/S0169207007000672"],["PoolGenius pool-strategy article","https://www.fantasylabs.com/articles/nfl-pool-strategy-2026-how-to-make-smarter-survivor-and-pickem-picks/"],["nflverse schedule data","https://github.com/nflverse/nfldata/blob/master/data/games.csv"],["FTN DAVE example (historical, 2024)","https://ftnfantasy.com/nfl/week-4-dvoa-undefeated-vikings-to-no-1"],["Pickwatch","https://pickwatch.com/about-us"],["FanDuel Week 4 market snapshot","https://www.fanduel.com/research/nfl-week-4-schedule-odds-for-every-game"]];
export default function StrategyPage() { return <main><div className="shell page-shell"><header className="page-hero"><div className="eyebrow">PICK'EM RESEARCH · SEPTEMBER 29, 2026</div><h1>More correct picks over the season.</h1><p className="hero-copy">A market-first process, honest uncertainty and an auditable record.</p><Link href="/pickem">← Week 4 card</Link></header>{sections.map(section => <section className="panel survivor-template second-heading" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(p => <p key={p} className="panel-explainer">{p}</p>)}</section>)}<section className="panel survivor-template second-heading"><h2>Mike vs. FFCC tracker</h2><p>{pickemVibePolicy.principle}</p><p><strong>Review checkpoint:</strong> after Week {pickemVibePolicy.reviewAfterWeek}. That review is exploratory, not permission to overfit a few Sundays.</p><div className="decision-grid">{pickemVibeWeeks.map(week => <div key={week.week}><span>Week {week.week} · {week.status}</span><strong>Mike {week.mikeCorrect}/{week.gamesDecided} · FFCC {week.ffccCorrect}/{week.gamesDecided}</strong><small>{week.note}</small></div>)}</div><p><strong>What we will compare:</strong> {pickemVibePolicy.metrics.join(" · ")}</p><p className="panel-explainer">{pickemVibePolicy.guardrail}</p></section><section className="panel survivor-template second-heading"><h2>Sources reviewed</h2><ul>{sources.map(([label,href])=><li key={href}><a href={href}>{label}</a></li>)}</ul></section></div></main>; }
