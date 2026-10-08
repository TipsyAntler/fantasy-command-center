import styles from "./survivor.module.css";
import planStyles from "./survivor-plan.module.css";
import { getSurvivorSnapshot } from "@/lib/google-survivor";
import { survivorWeekPlan } from "@/data/survivor-plan";

export const dynamic = "force-dynamic";

export default async function SurvivorPage({ searchParams }: { searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const params = searchParams ? await searchParams : {};
  const googleStatus = typeof params.google === "string" ? params.google : undefined;
  const googleMessage = typeof params.message === "string" ? params.message : undefined;
  // Only advance this board when a fresh, audited plan is published.
  const week = survivorWeekPlan.week;
  const snapshot = await getSurvivorSnapshot(week);
  const googleHealthy = snapshot.connected && !snapshot.error;
  const alive = snapshot.entries.filter(entry => entry.alive);
  const active = alive.find(entry => /Mike Tridente 3$/i.test(entry.name)) || alive[0];
  const activeNumber = active?.name.match(/(\d+)$/)?.[1];
  const recommendation = survivorWeekPlan.entries.find(entry => String(entry.entryNumber) === activeNumber && entry.team !== "ELIMINATED");
  const officialPick = active?.currentPick;
  const alreadyUsed = Boolean(recommendation && active?.usedTeams.some(pick => pick.team === recommendation.team && pick.week < week));
  const submittedPct = snapshot.aliveEntries ? Math.round(snapshot.submitted / snapshot.aliveEntries * 100) : 0;
  const leaders = snapshot.ownership.slice(0, 5);
  const maxCount = Math.max(1, ...leaders.map(item => item.count));
  const otherCount = Math.max(0, snapshot.submitted - leaders.reduce((sum, item) => sum + item.count, 0));
  const currentWeekPicks = active?.usedTeams.filter(pick => pick.week < week) || [];

  return <main><div className="shell page-shell">
    <header className="page-hero">
      <div className="eyebrow">SURVIVOR · WEEK {week}</div>
      <h1>Survivor Lab</h1>
      <p className="hero-copy">Your pick and the pool, without the noise.</p>
    </header>

    <section className={styles.survivorSummary} aria-label="Your survivor recommendation">
      <div className={styles.summaryTop}>
        <span className="panel-kicker">YOUR SURVIVING ENTRY {activeNumber ? "· #" + activeNumber : ""}</span>
        <span className={survivorWeekPlan.status === "final" ? styles.finalTag : styles.directionalTag}>
          {survivorWeekPlan.status === "final" ? "FINAL" : "DIRECTIONAL"}
        </span>
      </div>
      {active && recommendation ? <>
        <div className={styles.pickHero}>
          <div>
            <div className={styles.pickLabel}>FFCC recommended pick</div>
            <div className={styles.pickTeam}>{recommendation.team}</div>
          </div>
          <div className={styles.pickMeta}>
            <span>Official Week {week} pick</span>
            <strong>{officialPick || "Not visible yet"}</strong>
            <small>{officialPick === recommendation.team ? "✓ Matches recommendation" : officialPick ? "Different from FFCC pick" : "Awaiting commissioner sheet"}</small>
          </div>
        </div>
        {alreadyUsed ? <p className={styles.warningText}>This team was used earlier in this entry. Do not submit a duplicate.</p> : null}
        {recommendation.alternate && !officialPick ? <p className={styles.pickNote}>Alternative: {recommendation.alternate}</p> : null}
        <p className={styles.historyLine}>Previously used: {currentWeekPicks.length ? currentWeekPicks.map(pick => pick.team + " W" + pick.week).join(" · ") : "None"}</p>
      </> : <p className={styles.emptyState}>{alive.length ? "A current recommendation is being audited." : "No surviving entry is visible in the commissioner sheet."}</p>}
    </section>

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

    <details className={styles.auditDetails}>
      <summary>Strategy notes &amp; audit details</summary>
      <div className={styles.auditBody}>
        <p>{survivorWeekPlan.summary}</p>
        <p className={styles.auditDate}>Updated {survivorWeekPlan.asOf}</p>
        {survivorWeekPlan.inputs.map(input => <p key={input.label}><strong>{input.label}:</strong> {input.detail}</p>)}
      </div>
    </details>
  </div></main>;
}
