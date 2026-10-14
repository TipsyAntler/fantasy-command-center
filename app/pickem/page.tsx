import AtAGlance from "@/components/AtAGlance";
import {
  week6MarketAsOf as week5MarketAsOf,
  week6Number as week5Number,
  week6PoolGames as week5PoolGames,
  week6PoolName as week5PoolName,
  week6PoolStatus as week5PoolStatus,
  week6Tiebreaker as week5Tiebreaker,
  week6Standing as week5Standing,
} from "@/data/pickem-week6";
import styles from "./pickem.module.css";

export const dynamic = "force-dynamic";

function lineLabel(team: string, line: number) {
  return `${team} ${line > 0 ? "+" : ""}${line}`;
}


const confidenceLevels = {
  1: { score: 1, label: "Toss-up" },
  2: { score: 3, label: "Slight lean" },
  3: { score: 5, label: "Modest lean" },
  4: { score: 8, label: "Strong lean" },
  5: { score: 10, label: "Strongest confidence" },
} as const;

// Ordinal assessment of the evidence, never a percentage chance of covering.
function ConfidenceMeter({ evidence }: { evidence: keyof typeof confidenceLevels }) {
  const { score, label } = confidenceLevels[evidence];
  return (
    <div className={styles.confidence}>
      <div className={styles.meterHeading}><strong>{score}/10</strong><span>{label}</span></div>
      <div className={styles.meterBars} role="meter" aria-label="FFCC pick confidence"
        aria-valuemin={1} aria-valuemax={10} aria-valuenow={score}
        aria-valuetext={`${score} out of 10, ${label}; qualitative rating, not a cover probability`}>
        {Array.from({ length: 10 }, (_, index) => (
          <i key={index} aria-hidden="true" className={`${styles.meterBar} ${index < score ? styles.meterBarOn : ""}`} />
        ))}
      </div>
    </div>
  );
}

export default async function PickemPage() {
  const currentWeek = week5Number; // Audited week advances only when a new exact-line card is published.
  const boardIsCurrent = currentWeek === week5Number;
  const games = boardIsCurrent ? week5PoolGames : [];
  const strong = games.filter((game) => game.confidence >= 3);

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
              { label: "Season standing", value: `#${week5Standing.rank}`, note: `${week5Standing.correct} correct · leader ${week5Standing.leaderCorrect}`, tone: "accent" },
              { label: "Pool picks loaded", value: `${games.length} / 14`, note: `User screenshot · Mike vibes logged separately`, tone: "accent" },
              { label: "Frozen-number advantages", value: `${strong.length}`, note: strong.map((game) => lineLabel(game.poolPick, game.poolLine)).join(" · "), tone: "good" },
              { label: "MNF tiebreaker", value: `${week5Tiebreaker.earlyFfccTarget}`, note: `${week5Tiebreaker.matchup} · live total ${week5Tiebreaker.currentMarketTotal} · early target` },
            ]} />

            <div className={styles.topNote}><strong>{week5PoolStatus}.</strong> These are the exact Week {currentWeek} spreads from your {week5PoolName} screenshots. Later market movement is stale-line information; it never replaces the frozen pool number.</div>

            <section className="panel survivor-template second-heading"><h3>Season-total strategy</h3><p>Maximize expected correct picks at the exact frozen spread. Start with two-sided market prices, remove the margin, and use verified models and news as checks. Current evidence is modest: no pick has a calibrated high-confidence rating.</p><p><a href="/pickem/strategy">Read the research, expert review policy and weekly process →</a></p><p><a href="https://edraft.com/nfl/schedule/week-6">Week 6 spread comparison: eDraft</a>. Week 6 comparison uses a dated aggregated eDraft snapshot, not independent two-sided prices at every exact pool line. This board is provisional.</p></section>

            <section className="section-heading">
              <div><div className="eyebrow">FFCC WEEK {currentWeek} CARD</div><h2>Early provisional FFCC picks. Tap any game for the why.</h2></div>
              <span className="source-tag">{week5MarketAsOf}</span>
            </section>

            <p className={styles.meterLegend}><strong>Week 6 status:</strong> All frozen SZN lines and Mike’s 14 highlighted selections are captured from screenshots. FFCC picks are separate, provisional market-number leans pending fresh two-sided exact-line pricing and injury checks. The screenshots do not independently confirm a completed submission or tiebreaker entry. <strong>Confidence:</strong> 1/red = toss-up · 2–3 slight lean · 4–6 modest lean · 7–9 strong · 10/green = strongest confidence. Confidence in our edge, not a win percentage. Current picks range from 1–5 because the evidence is modest.</p>

            <section className={styles.board} aria-label={`Week ${currentWeek} ATS picks`}>
              {games.map((game) => {
                const changed = game.signal.startsWith("CHANGED:");
                const gameId = `${game.away}-${game.home}`.toLowerCase();
                return (
                  <details id={gameId} className={`${styles.gameCard} ${changed ? styles.gameCardChanged : ""}`} key={`${game.away}-${game.home}`} open={changed || undefined}>
                    <summary className={styles.gameSummary}>
                      <div className={styles.time}><strong>{game.day}</strong><span>{game.kickoff} ET</span></div>
                      <div className={styles.matchup}><strong>{game.away} @ {game.home}</strong><span className={styles.marketMeta}>Pool: {game.poolFavorite} -{game.poolSpread} · Market snapshot: {game.marketLabel} · O/U {game.marketTotal}</span><span className={styles.vibeMeta}>Mike’s highlighted SZN selection: {game.mikeVibe} · 14/14 selections visible (submission not independently confirmed)</span>{changed ? <span className={styles.changedBadge}>PICK CHANGED</span> : null}</div>
                      <div className={styles.pick}><strong>{lineLabel(game.poolPick, game.poolLine)}</strong><span>{changed ? "NEW FFCC PICK" : "FFCC PICK"}</span></div>
                      <ConfidenceMeter evidence={game.confidence} />
                      <div className={styles.chevron} aria-hidden="true">⌄</div>
                    </summary>
                    <div className={styles.detail}><div><div className={styles.detailLabel}>WHY THIS SIDE</div><p>{game.rationale}</p></div><div><div className={styles.detailLabel}>PRIMARY SIGNAL</div><p className={styles.signal}>{game.signal}</p></div><div><div className={styles.detailLabel}>WHAT COULD FLIP IT</div><p className={styles.watch}>{game.watch}</p></div></div>
                  </details>
                );
              })}
            </section>

            <section className="panel survivor-template second-heading">
              <div className="panel-head"><div><span className="panel-kicker">WEEK {currentWeek} TIEBREAKER</span><h3>{week5Tiebreaker.matchup} total points</h3></div><span className="saved-pill">Provisional FFCC total: {week5Tiebreaker.earlyFfccTarget}</span></div>
              <div className="decision-grid"><div><span>Pool asks</span><strong>{week5Tiebreaker.label}</strong></div><div><span>Current market total</span><strong>{week5Tiebreaker.currentMarketTotal}</strong></div><div className="span-2"><span>FFCC process</span><strong>{week5Tiebreaker.note}</strong></div></div>
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
