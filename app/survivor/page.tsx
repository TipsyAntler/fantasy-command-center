import styles from "./survivor.module.css";

const entries = ["Entry 1", "Entry 2", "Entry 3", "Entry 4"];

export default function SurvivorPage() {
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">POOL STRATEGY</div>
          <h1>Survivor Lab</h1>
          <p className="hero-copy">
            Four entries, one shared strategy: maximize survival first, then use pool ownership, diversification and future value when the tradeoff is actually worth it.
          </p>
        </header>

        <section className={styles.poolStatus}>
          <div className={styles.statusMain}>
            <span className="panel-kicker">2026 POOL</span>
            <strong>4 entries tracked</strong>
            <p>
              The commissioner sheet is our source of truth for alive status, prior picks and the field&apos;s submitted picks.
            </p>
          </div>
          <div className={styles.statusChip}>
            <span className={styles.dot} /> Google Sheet workflow ready
          </div>
        </section>

        <section className={styles.entryGrid}>
          {entries.map((entry) => (
            <article className={styles.entryCard} key={entry}>
              <div className={styles.entryTop}>
                <div>
                  <span className="panel-kicker">ACTIVE ENTRY</span>
                  <h3>{entry}</h3>
                </div>
                <span className={styles.alive}>Alive</span>
              </div>
              <div className={styles.entryFacts}>
                <div><span>Used teams</span><strong>—</strong></div>
                <div><span>This week</span><strong>Shortlist pending</strong></div>
              </div>
            </article>
          ))}
        </section>

        <section className="section-heading second-heading">
          <div>
            <div className="eyebrow">LOCKED PROCESS</div>
            <h2>Use Friday as an information edge</h2>
          </div>
          <span className="source-tag">Deadline strategy is part of the model</span>
        </section>

        <section className={styles.timeline}>
          <article>
            <span className={styles.step}>01</span>
            <div>
              <div className="panel-kicker">EARLY WEEK</div>
              <h3>Build the shortlist</h3>
              <p>
                Start with V1per41, market-implied win probability, matchup quality, injuries and future schedule value. Identify the best 3–5 candidates without forcing a pick too early.
              </p>
            </div>
          </article>
          <article>
            <span className={styles.step}>02</span>
            <div>
              <div className="panel-kicker">THURSDAY</div>
              <h3>Narrow each entry</h3>
              <p>
                Decide which teams make sense for each of the four entries. Preserve optionality unless a Thursday game or major news forces an earlier decision.
              </p>
            </div>
          </article>
          <article className={styles.friday}>
            <span className={styles.step}>03</span>
            <div>
              <div className="panel-kicker">FRIDAY · NEAR DEADLINE</div>
              <h3>Read the actual pool</h3>
              <p>
                Refresh the commissioner sheet, calculate the field&apos;s submitted-pick distribution, then decide whether to eat the chalk, diversify entries or take a small survival-probability haircut for meaningful leverage.
              </p>
            </div>
          </article>
        </section>

        <section className={styles.ownershipPanel}>
          <div className={styles.panelHeader}>
            <div>
              <span className="panel-kicker">FRIDAY OWNERSHIP SNAPSHOT</span>
              <h3>What the field is actually doing</h3>
            </div>
            <span className={styles.pending}>Live sheet calculation coming next</span>
          </div>

          <div className={styles.ownershipGrid}>
            {["Top pick", "Second pick", "Third pick", "All others"].map((label) => (
              <div key={label}>
                <span>{label}</span>
                <strong>—</strong>
                <small>pool share</small>
              </div>
            ))}
          </div>

          <p className="panel-explainer">
            Ownership is a tiebreaker, not the objective. We do not take bad teams merely to be different. The useful spots are where a slightly less popular option has nearly the same chance to survive, preserves a premium future team, or lets the four entries cover different failure paths efficiently.
          </p>
        </section>

        <section className={styles.modelGrid}>
          <article className="panel feature-card">
            <span className="panel-kicker">BACKBONE</span>
            <h3>V1per41</h3>
            <p>Use the weekly Reddit analysis as the season-long mathematical backbone, then audit the recommendation against the current week.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">SAFETY</span>
            <h3>Market + news</h3>
            <p>Compare moneyline-implied win probability, late line movement, injuries and anything that changes the favorite&apos;s true risk.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">POOL EDGE</span>
            <h3>Ownership + leverage</h3>
            <p>Use the real Friday pick distribution from this specific pool instead of generic public ownership estimates whenever possible.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">PORTFOLIO</span>
            <h3>Four-entry coordination</h3>
            <p>Judge the entries together. Sometimes repeating the safest team is correct; sometimes intelligent diversification improves the chance that at least one entry survives chaos.</p>
          </article>
        </section>

        <section className="panel survivor-template">
          <div className="panel-head">
            <div>
              <span className="panel-kicker">WEEKLY DECISION CARD</span>
              <h3>Final Friday output</h3>
            </div>
          </div>
          <div className="decision-grid">
            <div><span>V1per pick</span><strong>—</strong></div>
            <div><span>Best win probability</span><strong>—</strong></div>
            <div><span>Actual pool popularity</span><strong>—</strong></div>
            <div><span>Future value</span><strong>—</strong></div>
            <div className="span-2"><span>Four-entry plan</span><strong>Waiting for Week 1 inputs</strong></div>
          </div>
          <p className="panel-explainer">
            Default principle: survive. Deviate from the safest path only when the ownership, diversification or future-value benefit is large enough to justify the added elimination risk.
          </p>
        </section>
      </div>
    </main>
  );
}
