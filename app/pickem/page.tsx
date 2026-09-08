import AtAGlance from "@/components/AtAGlance";
import { week1Games, week1MarketAsOf, week1PickemStatus } from "@/data/week1";
import styles from "./pickem.module.css";

function lineLabel(team: string, line: number) {
  return `${team} ${line > 0 ? "+" : ""}${line}`;
}

export default function PickemPage() {
  const strong = week1Games.filter((game) => game.atsConfidence >= 4);
  const thin = week1Games.filter((game) => game.atsConfidence <= 2);

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">PICK&apos;EM OPERATIONS · WEEK 1 · AGAINST THE SPREAD</div>
          <h1>Pick&apos;em Room</h1>
          <p className="hero-copy">
            Every game gets a side. FFCC starts with the number, compares your pool line with the live market, then layers sharp movement, injuries, matchup data, expert/model consensus and pool strategy on top.
          </p>
        </header>

        <AtAGlance items={[
          { label: "ATS picks loaded", value: `${week1Games.length} / 16`, note: "Every Week 1 game has an FFCC side", tone: "accent" },
          { label: "Strongest early edges", value: `${strong.length}`, note: strong.map((game) => lineLabel(game.atsPick, game.atsLine)).join(" · "), tone: "good" },
          { label: "Thin / coin-flip picks", value: `${thin.length}`, note: thin.map((game) => `${game.away}/${game.home}`).join(" · "), tone: "warn" },
          { label: "First lock", value: "Wed 8:20", note: "NE @ SEA means Week 1 must be finalized early" },
        ]} />

        <div className={styles.topNote}>
          <strong>{week1PickemStatus}.</strong> The board below uses the current betting market as the reference number. In an ATS pool, your pool&apos;s exact frozen spread is the single most important input: a move across 3, 7 or 10 can change the recommended side even when nothing about the teams changed.
        </div>

        <section className="section-heading">
          <div>
            <div className="eyebrow">FFCC WEEK 1 CARD</div>
            <h2>Picks first. Tap any game for the why.</h2>
          </div>
          <span className="source-tag">{week1MarketAsOf}</span>
        </section>

        <section className={styles.board} aria-label="Week 1 ATS picks">
          {week1Games.map((game) => (
            <details className={styles.gameCard} key={`${game.away}-${game.home}`}>
              <summary className={styles.gameSummary}>
                <div className={styles.time}>
                  <strong>{game.day}</strong>
                  <span>{game.kickoff} ET</span>
                </div>
                <div className={styles.matchup}>
                  <strong>{game.away} @ {game.home}</strong>
                  <span>Market: {game.favorite} -{game.spread} · O/U {game.total}</span>
                </div>
                <div className={styles.pick}>
                  <strong>{lineLabel(game.atsPick, game.atsLine)}</strong>
                  <span>FFCC PICK</span>
                </div>
                <div className={styles.confidence} aria-label={`${game.atsConfidence} of 5 confidence`}>
                  <span>Confidence {game.atsConfidence}/5</span>
                  <div className={styles.dots}>
                    {[1,2,3,4,5].map((dot) => <i key={dot} className={dot <= game.atsConfidence ? styles.dotOn : styles.dot} />)}
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
          ))}
        </section>

        <section className="section-heading second-heading">
          <div>
            <div className="eyebrow">THE FFCC ATS ENGINE</div>
            <h2>How the weekly recommendation is built</h2>
          </div>
          <span className="source-tag">Market first · opinions second</span>
        </section>

        <section className={styles.methodGrid}>
          <article className={styles.methodCard}>
            <span className={styles.weight}>35% · NUMBER VALUE</span>
            <strong>Pool line vs live market</strong>
            <p>Compare the frozen pool spread with current consensus books. Stale-line value gets priority, especially when movement crosses the NFL&apos;s key margins of 3, 7 or 10.</p>
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
            <p>Review reputable betting analysts and simulation/model outputs every week. Consensus validates an edge; it does not replace the number or become a popularity vote.</p>
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
            <h2>Research early. Freeze late enough to use the information.</h2>
            <p>FFCC builds the board as soon as lines are available, then does the real final audit after the midweek injury and market information arrives. Weird Wednesday games automatically move the deadline forward.</p>
          </div>
          <div className="roadmap-list">
            <div><span>01</span><strong>Monday / Tuesday</strong><small>Load pool lines + opening market + first expert/model sweep</small></div>
            <div><span>02</span><strong>Wednesday</strong><small>Final full-slate injury, market, weather and sharp-money audit</small></div>
            <div><span>03</span><strong>Special schedules</strong><small>If the NFL plays Wednesday, finalize Tuesday instead</small></div>
          </div>
        </section>
      </div>
    </main>
  );
}
