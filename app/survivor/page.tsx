import styles from "./survivor.module.css";
import { getDashboardData } from "@/lib/sleeper";
import { getSurvivorSnapshot } from "@/lib/google-survivor";

export const dynamic = "force-dynamic";

const placeholderEntries = ["Mike Tridente 1", "Mike Tridente 2", "Mike Tridente 3", "Mike Tridente 4"];

function displayEntryName(name: string) {
  const match = name.match(/(\d+)$/);
  return match ? `Entry ${match[1]}` : name;
}

export default async function SurvivorPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = searchParams ? await searchParams : {};
  const googleStatus = typeof params.google === "string" ? params.google : undefined;
  const googleMessage = typeof params.message === "string" ? params.message : undefined;

  const dashboard = await getDashboardData();
  const rawWeek = Number(dashboard.state?.display_week ?? dashboard.state?.week ?? 1);
  const currentWeek = Number.isFinite(rawWeek) && rawWeek > 0 ? rawWeek : 1;
  const snapshot = await getSurvivorSnapshot(currentWeek);
  const entries = snapshot.entries.length
    ? snapshot.entries
    : placeholderEntries.map((name) => ({ name, alive: true, usedTeams: [] as Array<{ team: string; week: number }>, currentPick: undefined }));
  const ownership = snapshot.ownership.slice(0, 4);

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">POOL STRATEGY · WEEK {currentWeek}</div>
          <h1>Survivor Lab</h1>
          <p className="hero-copy">
            Four entries, one coordinated strategy. Survive first; use Friday ownership, diversification and future value only when the tradeoff earns it.
          </p>
        </header>

        <section className={styles.poolStatus}>
          <div className={styles.statusMain}>
            <span className="panel-kicker">COMMISSIONER SHEET</span>
            <strong>{snapshot.connected ? "Google connected" : "Connect your Google access"}</strong>
            <p>
              {snapshot.connected
                ? `Read-only access is active. ${snapshot.aliveEntries || "—"} pool entries are currently marked alive; ${snapshot.submitted} have a Week ${currentWeek} pick visible in the sheet.`
                : "Authorize the app with the same Google account that can already view the Suicide Pool 2026 sheet. The app requests read-only Google Sheets access and cannot edit the pool."}
            </p>
            {googleStatus === "error" ? (
              <p className={styles.errorText}>Google connection error: {googleMessage || "OAuth setup failed."}</p>
            ) : null}
            {snapshot.error ? <p className={styles.errorText}>Sheet read error: {snapshot.error}</p> : null}
          </div>
          <div className={styles.connectionActions}>
            <div className={styles.statusChip}>
              <span className={snapshot.connected && !snapshot.error ? styles.dot : styles.dotOff} />
              {snapshot.connected && !snapshot.error ? "Live sheet access" : snapshot.connected ? "Reconnect needed" : "Not connected"}
            </div>
            {snapshot.connected ? (
              <a className={styles.secondaryButton} href="/api/google/disconnect">Disconnect</a>
            ) : (
              <a className={styles.connectButton} href="/api/google/connect">Connect Google</a>
            )}
          </div>
        </section>

        <section className={styles.entryGrid}>
          {entries.slice(0, 4).map((entry) => (
            <article className={styles.entryCard} key={entry.name}>
              <div className={styles.entryTop}>
                <div>
                  <span className="panel-kicker">{entry.name}</span>
                  <h3>{displayEntryName(entry.name)}</h3>
                </div>
                <span className={entry.alive ? styles.alive : styles.out}>{entry.alive ? "Alive" : "Out"}</span>
              </div>
              <div className={styles.entryFacts}>
                <div>
                  <span>Used teams</span>
                  <strong>{entry.usedTeams.length ? entry.usedTeams.map((item) => `${item.team} W${item.week}`).join(" · ") : "None yet"}</strong>
                </div>
                <div>
                  <span>Week {currentWeek}</span>
                  <strong>{entry.currentPick || "Not visible yet"}</strong>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="section-heading second-heading">
          <div>
            <div className="eyebrow">LOCKED PROCESS</div>
            <h2>Use Friday as an information edge</h2>
          </div>
          <span className="source-tag">Actual pool ownership beats generic ownership</span>
        </section>

        <section className={styles.timeline}>
          <article>
            <span className={styles.step}>01</span>
            <div>
              <div className="panel-kicker">EARLY WEEK</div>
              <h3>Build the shortlist</h3>
              <p>Start with V1per41, market-implied win probability, injuries, matchup quality and future schedule value. Keep 3–5 viable teams alive.</p>
            </div>
          </article>
          <article>
            <span className={styles.step}>02</span>
            <div>
              <div className="panel-kicker">THURSDAY</div>
              <h3>Narrow all four entries</h3>
              <p>Coordinate the portfolio instead of choosing each entry in isolation. Preserve optionality unless a Thursday game or major news forces action.</p>
            </div>
          </article>
          <article className={styles.friday}>
            <span className={styles.step}>03</span>
            <div>
              <div className="panel-kicker">FRIDAY · NEAR DEADLINE</div>
              <h3>Read the actual pool</h3>
              <p>Refresh this page near the deadline. The live commissioner sheet becomes the ownership model: eat the chalk, diversify, or take leverage only when the risk/reward earns it.</p>
            </div>
          </article>
        </section>

        <section className={styles.ownershipPanel}>
          <div className={styles.panelHeader}>
            <div>
              <span className="panel-kicker">FRIDAY OWNERSHIP SNAPSHOT</span>
              <h3>What submitted entries are actually picking</h3>
            </div>
            <span className={styles.pending}>{snapshot.connected ? `${snapshot.submitted} Week ${currentWeek} picks visible` : "Connect Google to calculate"}</span>
          </div>

          <div className={styles.ownershipGrid}>
            {ownership.length ? ownership.map((item) => (
              <div key={item.team}>
                <span>{item.team}</span>
                <strong>{item.pct.toFixed(1)}%</strong>
                <small>{item.count} submitted {item.count === 1 ? "entry" : "entries"}</small>
              </div>
            )) : ["Top pick", "Second pick", "Third pick", "All others"].map((label) => (
              <div key={label}>
                <span>{label}</span>
                <strong>—</strong>
                <small>pool share</small>
              </div>
            ))}
          </div>

          <p className="panel-explainer">
            Ownership is a tiebreaker, not the objective. We do not take bad teams merely to be different. The valuable spots are where a less-popular option has nearly the same survival probability, preserves premium future value, or efficiently diversifies the four-entry portfolio.
          </p>
        </section>

        <section className={styles.modelGrid}>
          <article className="panel feature-card"><span className="panel-kicker">BACKBONE</span><h3>V1per41</h3><p>Season-long mathematical backbone, then independently audited against the current week.</p></article>
          <article className="panel feature-card"><span className="panel-kicker">SAFETY</span><h3>Market + news</h3><p>Moneyline-implied win probability, line movement, injuries and meaningful late information.</p></article>
          <article className="panel feature-card"><span className="panel-kicker">POOL EDGE</span><h3>Live ownership</h3><p>The commissioner sheet gives us this pool&apos;s real submitted-pick distribution before Friday lock.</p></article>
          <article className="panel feature-card"><span className="panel-kicker">PORTFOLIO</span><h3>Four-entry coordination</h3><p>Repeating the safest team can be correct. Diversification is used deliberately, not automatically.</p></article>
        </section>

        <section className="panel survivor-template">
          <div className="panel-head"><div><span className="panel-kicker">WEEKLY DECISION CARD</span><h3>Final Friday output</h3></div></div>
          <div className="decision-grid">
            <div><span>V1per pick</span><strong>—</strong></div>
            <div><span>Best win probability</span><strong>—</strong></div>
            <div><span>Actual pool popularity</span><strong>{ownership[0] ? `${ownership[0].team} · ${ownership[0].pct.toFixed(1)}%` : "—"}</strong></div>
            <div><span>Future value</span><strong>—</strong></div>
            <div className="span-2"><span>Four-entry plan</span><strong>Waiting for Week {currentWeek} decision inputs</strong></div>
          </div>
          <p className="panel-explainer">Default principle: survive. Deviate from the safest path only when ownership, diversification or future-value benefit justifies the additional elimination risk.</p>
        </section>
      </div>
    </main>
  );
}
