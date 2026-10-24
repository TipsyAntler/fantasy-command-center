import styles from "./survivor.module.css";
import { getSurvivorSnapshot } from "@/lib/google-survivor";

export const dynamic = "force-dynamic";

export default async function SurvivorPage({ searchParams }: { searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const params = searchParams ? await searchParams : {};
  const googleStatus = typeof params.google === "string" ? params.google : undefined;
  const googleMessage = typeof params.message === "string" ? params.message : undefined;
  const week = Math.max(1, Math.min(18, 8 + Math.floor((Date.now() - Date.parse("2026-10-20T04:00:00Z")) / (7 * 24 * 60 * 60 * 1000))));
  const snapshot = await getSurvivorSnapshot(week);
  const googleHealthy = snapshot.connected && !snapshot.error;
  const submittedPct = snapshot.aliveEntries ? Math.round(snapshot.submitted / snapshot.aliveEntries * 100) : 0;
  const leaders = snapshot.ownership.slice(0, 5);
  const maxCount = Math.max(1, ...leaders.map(item => item.count));
  const otherCount = Math.max(0, snapshot.submitted - leaders.reduce((sum, item) => sum + item.count, 0));

  return <main><div className="shell page-shell">
    <header className="page-hero">
      <div className="eyebrow">SURVIVOR · WEEK {week}</div>
      <h1>Survivor Lab</h1>
      <p className="hero-copy">Live pool standings and pick distribution from the commissioner sheet.</p>
    </header>

    <section className={styles.ownershipPanel} aria-label="Pool pick ownership">
      <div className={styles.panelHeader}>
        <div><span className="panel-kicker">LIVE COMMISSIONER SHEET · WEEK {week}</span><h2>What the pool is picking</h2></div>
        <span className={googleHealthy ? styles.liveChip : styles.offlineChip}>{googleHealthy ? "● LIVE" : "OFFLINE"}</span>
      </div>
      <div className={styles.poolMetrics}>
        <div><strong>{snapshot.aliveEntries || "—"}</strong><span>Pool entries alive</span></div>
        <div><strong>{snapshot.submitted}</strong><span>Picks visible</span></div>
        <div><strong>{googleHealthy ? submittedPct + "%" : "—"}</strong><span>Of live entries submitted</span></div>
      </div>
      <div className={styles.submissionTrack} role="progressbar" aria-label="Pool picks submitted" aria-valuemin={0} aria-valuemax={100} aria-valuenow={submittedPct}>
        <div style={{ width: submittedPct + "%" }} />
      </div>
      {googleHealthy && leaders.length ? <>
        <div className={styles.chartHeading}><strong>Top 5 teams</strong><span>Share of submitted picks</span></div>
        <div className={styles.ownershipBars}>
          {leaders.map((item, index) => <div className={styles.barRow} key={item.team}>
            <span className={styles.barRank}>{index + 1}</span>
            <strong className={styles.barTeam}>{item.team}</strong>
            <div className={styles.barTrack}><div className={styles.barFill} style={{ width: item.count / maxCount * 100 + "%" }} /></div>
            <strong className={styles.barPct}>{item.pct.toFixed(1)}%</strong>
            <span className={styles.barCount}>{item.count}</span>
          </div>)}
        </div>
        {otherCount > 0 ? <p className={styles.otherPicks}>Other teams: {otherCount} picks ({(otherCount / snapshot.submitted * 100).toFixed(1)}%)</p> : null}
        <p className={styles.dataNote}>Percentages are among submitted picks, not all {snapshot.aliveEntries} surviving entries. Ownership can change until the pool locks.</p>
      </> : <p className={styles.emptyState}>{googleHealthy ? "No Week " + week + " picks visible yet. The chart will populate as the pool submits." : "Reconnect Google to see live pool picks."}</p>}
    </section>

    {!googleHealthy ? <section className={styles.poolStatus}>
      <div className={styles.statusMain}><strong>Google Sheet connection</strong><p>{snapshot.error || (googleStatus === "error" ? googleMessage : "") || "Connect your read-only commissioner sheet to see live ownership."}</p></div>
      <a className={styles.connectButton} href="/api/google/connect">{snapshot.connected ? "Reconnect Google" : "Connect Google"}</a>
    </section> : <div className={styles.connectionFooter}><span>Google Sheet connected · read-only</span><a href="/api/google/disconnect">Disconnect</a></div>}

  </div></main>;
}
