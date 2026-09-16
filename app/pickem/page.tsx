import AtAGlance from "@/components/AtAGlance";
import { getDashboardData } from "@/lib/sleeper";
import {
  week2MarketAsOf,
  week2Number,
  week2PoolGames,
  week2PoolName,
  week2PoolStatus,
  week2Tiebreaker,
} from "@/data/pickem-week2";
import styles from "./pickem.module.css";

export const dynamic = "force-dynamic";

function lineLabel(team: string, line: number) {
  return `${team} ${line > 0 ? "+" : ""}${line}`;
}

export default async function PickemPage() {
  const dashboard = await getDashboardData();
  const rawWeek = Number(dashboard.state?.display_week ?? dashboard.state?.week ?? week2Number);
  const currentWeek = Number.isFinite(rawWeek) && rawWeek > 0 ? rawWeek : week2Number;
  const boardIsCurrent = currentWeek === week2Number;
  const games = boardIsCurrent ? week2PoolGames : [];
  const strong = games.filter((game) => game.confidence >= 4);
  const thin = games.filter((game) => game.confidence <= 2);

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">PICK&apos;EM OPERATIONS · WEEK {currentWeek} · AGAINST THE SPREAD</div>
          <h1>Pick&apos;em Room</h1>
          <p className="hero-copy">Every required game gets a side. FFCC uses the pool&apos;s frozen number as the scoring line, then compares it with the live market, injuries, matchup data and model signals.</p>
        </header>

        {!boardIsCurrent ? (
          <section className="panel survivor-template">
            <div className="panel-head"><div><span className="panel-kicker">CURRENT WEEK SAFETY</span><h3>Week {currentWeek} board not loaded yet</h3></div><span className="saved-pill">NO STALE PICKS SHOWN</span></div>
            <p className="panel-explainer">FFCC intentionally hides the previous week rather than carrying stale ATS picks forward. Load the exact Week {currentWeek} SZN frozen lines to activate the new card.</p>
          </section>
        ) : (
          <>
            <AtAGlance items={[
              { label: "Pool picks loaded", value: `${games.length} / 16`, note: `Exact Week ${currentWeek} frozen lines captured`, tone: "accent" },
              { label: "Strongest current edges", value: `${strong.length}`, note: strong.map((game) => lineLabel(game.poolPick, game.poolLine)).join(" · "), tone: "good" },
              { label: "Thin / coin-flip picks", value: `${thin.length}`, note: thin.map((game) => `${game.away}/${game.home}`).join(" · "), tone: "warn" },
              { label: "MNF tiebreaker", value: `${week2Tiebreaker.earlyFfccTarget}`, note: `${week2Tiebreaker.matchup} · live total ${week2Tiebreaker.currentMarketTotal} · early target` },
            ]} />

            <div className={styles.topNote}><strong>{week2PoolStatus}.</strong> These are the exact Week {currentWeek} spreads from your {week2PoolName} screenshots. Later market movement is stale-line information; it never replaces the frozen pool number.</div>

            <section className="section-heading">
              <div><div className="eyebrow">FFCC WEEK {currentWeek} CARD</div><h2>Provisional picks. Tap any game for the why.</h2></div>
              <span className="source-tag">{week2MarketAsOf}</span>
            </section>

            <section className={styles.board} aria-label={`Week ${currentWeek} ATS picks`}>
              {games.map((game) => {
                const changed = game.signal.startsWith("CHANGED:");
                const gameId = `${game.away}-${game.home}`.toLowerCase();
                return (
                  <details id={gameId} className={`${styles.gameCard} ${changed ? styles.gameCardChanged : ""}`} key={`${game.away}-${game.home}`} open={changed || undefined}>
                    <summary className={styles.gameSummary}>
                      <div className={styles.time}><strong>{game.day}</strong><span>{game.kickoff} ET</span></div>
                      <div className={styles.matchup}><strong>{game.away} @ {game.home}</strong><span>Pool: {game.poolFavorite} -{game.poolSpread} · Live: {game.marketLabel} · O/U {game.marketTotal}</span>{changed ? <span className={styles.changedBadge}>PICK CHANGED</span> : null}</div>
                      <div className={styles.pick}><strong>{lineLabel(game.poolPick, game.poolLine)}</strong><span>{changed ? "NEW FFCC PICK" : "FFCC PICK"}</span></div>
                      <div className={styles.confidence} aria-label={`${game.confidence} of 5 confidence`}><span>Confidence {game.confidence}/5</span><div className={styles.dots}>{[1,2,3,4,5].map((dot) => <i key={dot} className={dot <= game.confidence ? styles.dotOn : styles.dot} />)}</div></div>
                      <div className={styles.chevron} aria-hidden="true">⌄</div>
                    </summary>
                    <div className={styles.detail}><div><div className={styles.detailLabel}>WHY THIS SIDE</div><p>{game.rationale}</p></div><div><div className={styles.detailLabel}>PRIMARY SIGNAL</div><p className={styles.signal}>{game.signal}</p></div><div><div className={styles.detailLabel}>WHAT COULD FLIP IT</div><p className={styles.watch}>{game.watch}</p></div></div>
                  </details>
                );
              })}
            </section>

            <section className="panel survivor-template second-heading">
              <div className="panel-head"><div><span className="panel-kicker">WEEK {currentWeek} TIEBREAKER</span><h3>{week2Tiebreaker.matchup} total points</h3></div><span className="saved-pill">Early FFCC target: {week2Tiebreaker.earlyFfccTarget}</span></div>
              <div className="decision-grid"><div><span>Pool asks</span><strong>{week2Tiebreaker.label}</strong></div><div><span>Current market total</span><strong>{week2Tiebreaker.currentMarketTotal}</strong></div><div className="span-2"><span>FFCC process</span><strong>{week2Tiebreaker.note}</strong></div></div>
            </section>
          </>
        )}

        <section className="roadmap compact-roadmap second-heading">
          <div className="roadmap-copy"><div className="eyebrow">WEEKLY CADENCE</div><h2>Current week only.</h2><p>FFCC will never intentionally carry the prior week&apos;s card forward. If the NFL week advances before the next frozen pool lines are loaded, the old board is hidden and the current week is shown as pending.</p></div>
          <div className="roadmap-list"><div><span>01</span><strong>Late Monday / Tuesday</strong><small>Capture exact SZN frozen lines</small></div><div><span>02</span><strong>All week</strong><small>Track market, injuries and stale-line value</small></div><div><span>03</span><strong>Before lock</strong><small>Finalize sides + tiebreaker</small></div></div>
        </section>
      </div>
    </main>
  );
}
