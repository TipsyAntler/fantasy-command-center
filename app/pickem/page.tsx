import AtAGlance from "@/components/AtAGlance";
import {
  week1MarketAsOf,
  week1PoolGames,
  week1PoolName,
  week1PoolStatus,
  week1Tiebreaker,
} from "@/data/pickem-week1";
import styles from "./pickem.module.css";

function lineLabel(team: string, line: number) {
  return `${team} ${line > 0 ? "+" : ""}${line}`;
}

export default function PickemPage() {
  const strong = week1PoolGames.filter((game) => game.confidence >= 4);
  const thin = week1PoolGames.filter((game) => game.confidence <= 2);

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">PICK&apos;EM OPERATIONS · WEEK 1 · AGAINST THE SPREAD</div>
          <h1>Pick&apos;em Room</h1>
          <p className="hero-copy">
            Every required game gets a side. FFCC uses your pool&apos;s frozen number as the real scoring line, then compares it with the live market and layers sharp movement, injuries, matchup data, expert/model consensus and pool strategy on top.
          </p>
        </header>

        <AtAGlance items={[
          { label: "Pool picks loaded", value: `${week1PoolGames.length} / 14`, note: "Week 1 skips the Wednesday and Thursday games", tone: "accent" },
          { label: "Strongest current edges", value: `${strong.length}`, note: strong.map((game) => lineLabel(game.poolPick, game.poolLine)).join(" · "), tone: "good" },
          { label: "Thin / coin-flip picks", value: `${thin.length}`, note: thin.map((game) => `${game.away}/${game.home}`).join(" · "), tone: "warn" },
          { label: "MNF tiebreaker", value: `${week1Tiebreaker.earlyFfccTarget}`, note: `${week1Tiebreaker.matchup} · live total ${week1Tiebreaker.currentMarketTotal} · early target only` },
        ]} />

        <div className={styles.topNote}>
          <strong>{week1PoolStatus}.</strong> These are the exact Week 1 spreads shown in your {week1PoolName} interface. Because the pool freezes its line when picks open and does not move it afterward, FFCC treats later market movement as potential stale-line value rather than replacing the pool number.
        </div>

        <section className="section-heading">
          <div>
            <div className="eyebrow">FFCC WEEK 1 CARD</div>
            <h2>Picks first. Tap any game for the why.</h2>
          </div>
          <span className="source-tag">{week1MarketAsOf}</span>
        </section>

        <section className={styles.board} aria-label="Week 1 ATS picks">
          {week1PoolGames.map((game) => {
            const changed = game.signal.startsWith("CHANGED:");
            const gameId = `${game.away}-${game.home}`.toLowerCase();
            return (
              <details id={gameId} className={`${styles.gameCard} ${changed ? styles.gameCardChanged : ""}`} key={`${game.away}-${game.home}`} open={changed || undefined}>
                <summary className={styles.gameSummary}>
                  <div className={styles.time}>
                    <strong>{game.day}</strong>
                    <span>{game.kickoff} ET</span>
                  </div>
                  <div className={styles.matchup}>
                    <strong>{game.away} @ {game.home}</strong>
                    <span>Pool: {game.poolFavorite} -{game.poolSpread} · Live: {game.marketLabel} · O/U {game.marketTotal}</span>
                    {changed ? <span className={styles.changedBadge}>PICK CHANGED</span> : null}
                  </div>
                  <div className={styles.pick}>
                    <strong>{lineLabel(game.poolPick, game.poolLine)}</strong>
                    <span>{changed ? "NEW FFCC PICK" : "FFCC PICK"}</span>
                  </div>
                  <div className={styles.confidence} aria-label={`${game.confidence} of 5 confidence`}>
                    <span>Confidence {game.confidence}/5</span>
                    <div className={styles.dots}>
                      {[1,2,3,4,5].map((dot) => <i key={dot} className={dot <= game.confidence ? styles.dotOn : styles.dot} />)}
                    </div>
                  </div>
                  <div className={styles.chevron} aria-hidden="true">⌄</div>
                </summary>
                <div className={styles.detail}>
                  <div>
                    <div className={styles.detailLabel}>WHY THIS SIDE</div>
                    <p>{game.rationale}</p>
                  </div>
                  <div>
                    <div className={styles.detailLabel}>PRIMARY SIGNAL</div>
                    <p className={styles.signal}>{game.signal}</p>
                  </div>
                  <div>
                    <div className={styles.detailLabel}>WHAT COULD FLIP IT</div>
                    <p className={styles.watch}>{game.watch}</p>
                  </div>
                </div>
              </details>
            );
          })}
        </section>

        <section className="panel survivor-template second-heading">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">WEEKLY TIEBREAKER</span>
              <h3>{week1Tiebreaker.matchup} total points</h3>
            </div>
            <span className="saved-pill">Early FFCC target: {week1Tiebreaker.earlyFfccTarget}</span>
          </div>
          <div className="decision-grid">
            <div><span>Pool asks</span><strong>{week1Tiebreaker.label}</strong></div>
            <div><span>Current market total</span><strong>{week1Tiebreaker.currentMarketTotal}</strong></div>
            <div className="span-2"><span>FFCC process</span><strong>{week1Tiebreaker.note}</strong></div>
          </div>
          <p className="panel-explainer">The tiebreaker is not an afterthought: the weekly payout uses the closest Monday-night total-points prediction. FFCC will run a final expected-score/market-total check before the pool&apos;s Sunday deadline and can shade away from an obvious round-number cluster only when the underlying projection supports it.</p>
        </section>

        <section className="section-heading second-heading">
          <div>
            <div className="eyebrow">THE FFCC ATS ENGINE</div>
            <h2>How the weekly recommendation is built</h2>
          </div>
          <span className="source-tag">Pool line first · market second</span>
        </section>

        <section className={styles.methodGrid}>
          <article className={styles.methodCard}>
            <span className={styles.weight}>35% · NUMBER VALUE</span>
            <strong>Frozen pool line vs live market</strong>
            <p>The pool&apos;s number determines wins and losses. Later market movement creates information value, especially when the frozen line leaves us on the favorable side of the NFL&apos;s key margins of 3, 7 or 10.</p>
          </article>
          <article className={styles.methodCard}>
            <span className={styles.weight}>20% · MARKET SIGNAL</span>
            <strong>Sharp movement + splits</strong>
            <p>Track opening-to-current movement, reverse-line moves, line freezes and credible bet-vs-money discrepancies. Public popularity alone is not treated as proof.</p>
          </article>
          <article className={styles.methodCard}>
            <span className={styles.weight}>20% · AVAILABILITY</span>
            <strong>QB, OL, injuries, weather</strong>
            <p>Quarterbacks and offensive lines carry extra weight, followed by cluster injuries in the secondary and skill groups. Weather matters when it can alter scoring or variance.</p>
          </article>
          <article className={styles.methodCard}>
            <span className={styles.weight}>15% · FOOTBALL MATCHUP</span>
            <strong>Power + scheme + situation</strong>
            <p>Use efficiency, pressure/protection, explosive-play profiles, travel/rest and matchup-specific strengths. Early-season uncertainty lowers confidence rather than creating fake precision.</p>
          </article>
          <article className={styles.methodCard}>
            <span className={styles.weight}>10% · EXTERNAL AUDIT</span>
            <strong>Expert + model consensus</strong>
            <p>Review reputable betting analysts and simulation/model outputs every week. Consensus validates an edge; it does not replace the pool number or become a popularity vote.</p>
          </article>
          <article className={styles.methodCard}>
            <span className={styles.weight}>POOL OVERLAY</span>
            <strong>Season equity + weekly bonus</strong>
            <p>Default to maximum expected correct picks for the season-long top-10 race. On true 50/50 games, selective contrarian leverage can be used when it improves weekly-bonus upside at little expected-win cost.</p>
          </article>
        </section>

        <section className="roadmap compact-roadmap">
          <div className="roadmap-copy">
            <div className="eyebrow">WEEKLY CADENCE</div>
            <h2>Capture the pool line Monday. Exploit what changes afterward.</h2>
            <p>Your pool spreads are set when picks open late Monday night and do not change. FFCC&apos;s job is therefore to preserve those exact numbers, monitor the live market all week, and identify where the frozen line becomes better or worse than what bettors can currently get.</p>
          </div>
          <div className="roadmap-list">
            <div><span>01</span><strong>Late Monday / Tuesday</strong><small>Capture exact SZN pool lines + opening market + first expert/model sweep</small></div>
            <div><span>02</span><strong>Tuesday → Sunday</strong><small>Track line movement, injuries, weather and stale-line value</small></div>
            <div><span>03</span><strong>Before lock</strong><small>Finalize all sides + MNF total-points tiebreaker</small></div>
          </div>
        </section>
      </div>
    </main>
  );
}
