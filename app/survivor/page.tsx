import AtAGlance from "@/components/AtAGlance";
import styles from "./survivor.module.css";
import planStyles from "./survivor-plan.module.css";
import { getDashboardData } from "@/lib/sleeper";
import { getSurvivorSnapshot } from "@/lib/google-survivor";
import { earlySurvivorShortlist, week1MarketAsOf } from "@/data/week1";
import { survivorWeekPlan } from "@/data/survivor-plan";

export const dynamic = "force-dynamic";

const placeholderEntries = ["Mike Tridente 1", "Mike Tridente 2", "Mike Tridente 3", "Mike Tridente 4"];

const viperWeek1 = {
  pick: "LAC",
  opponent: "ARI",
  winWeek: 81,
  winOut: 0.70,
  expectedWins: 13.69,
  alternative: "JAX",
  alternativeWinWeek: 75,
  twoWeekPrimary: 57.0,
  twoWeekAlternative: 56.2,
};

function displayEntryName(name: string) {
  const match = name.match(/(\d+)$/);
  return match ? `Entry ${match[1]}` : name;
}

function entryNumber(name: string, index: number): 1 | 2 | 3 | 4 {
  const match = name.match(/(\d+)$/);
  const parsed = match ? Number(match[1]) : index + 1;
  if (parsed === 1 || parsed === 2 || parsed === 3 || parsed === 4) return parsed;
  return (Math.min(4, Math.max(1, index + 1))) as 1 | 2 | 3 | 4;
}

function inputStateClass(state: "loaded" | "live" | "pending") {
  if (state === "loaded") return planStyles.inputLoaded;
  if (state === "live") return planStyles.inputLive;
  return planStyles.inputPending;
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
  const earlyLockWeek = currentWeek === 1;
  const snapshot = await getSurvivorSnapshot(currentWeek);
  const entries = snapshot.entries.length
    ? snapshot.entries
    : placeholderEntries.map((name) => ({ name, alive: true, usedTeams: [] as Array<{ team: string; week: number }>, currentPick: undefined }));
  const ownership = snapshot.ownership.slice(0, 4);
  const myEntries = entries.slice(0, 4);
  const myAlive = myEntries.filter((entry) => entry.alive).length;
  const submittedPct = snapshot.aliveEntries ? (snapshot.submitted / snapshot.aliveEntries) * 100 : 0;
  const topOwnership = ownership[0];
  const googleHealthy = snapshot.connected && !snapshot.error;
  const safestMarket = earlySurvivorShortlist[0];
  const activePlan = survivorWeekPlan.week === currentWeek ? survivorWeekPlan : null;
  const planIsFinal = activePlan?.status === "final";

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">POOL STRATEGY · WEEK {currentWeek}</div>
          <h1>Survivor Lab</h1>
          <p className="hero-copy">
            {earlyLockWeek
              ? "V1per41's Week 1 model is now loaded. Coordinate all four entries around current survival probability, future value, actual pool ownership and late injury/market information — not this week's spread alone."
              : "Four entries, one coordinated strategy. Survive first; use ownership, diversification and future value only when the tradeoff earns it."}
          </p>
        </header>

        <AtAGlance items={[
          { label: "Your entries alive", value: `${myAlive} / 4`, note: myAlive === 4 ? "Full portfolio still alive" : `${4 - myAlive} entry${4 - myAlive === 1 ? "" : "ies"} eliminated`, tone: myAlive === 4 ? "good" : "warn" },
          { label: "Pool submitted", value: snapshot.connected ? `${submittedPct.toFixed(0)}%` : "—", note: snapshot.connected ? `${snapshot.submitted} of ${snapshot.aliveEntries || "—"} live entries have a Week ${currentWeek} pick visible` : "Connect Google for live submission pace", tone: "accent" },
          { label: activePlan ? "Portfolio status" : "Portfolio plan", value: activePlan ? (planIsFinal ? "FINAL" : "DIRECTIONAL") : "PENDING", note: activePlan ? activePlan.headline : `Week ${currentWeek} entry assignments have not been loaded yet`, tone: planIsFinal ? "good" : "warn" },
          { label: "Commissioner sheet", value: googleHealthy ? "LIVE" : "Offline", note: googleHealthy ? "Read-only Google sync is active" : "Reconnect to restore live pool intelligence", tone: googleHealthy ? "good" : "warn" },
        ]} />

        {googleHealthy ? (
          <section className={`${styles.poolStatus} ${styles.poolStatusCompact}`}>
            <div className={styles.compactConnection}>
              <span className={styles.dot} />
              <strong>Google Sheet · LIVE</strong>
              <span>{snapshot.aliveEntries || "—"} alive</span>
              <span>·</span>
              <span>{snapshot.submitted} Week {currentWeek} picks visible</span>
            </div>
            <a className={styles.compactDisconnect} href="/api/google/disconnect">Disconnect</a>
          </section>
        ) : (
          <section className={styles.poolStatus}>
            <div className={styles.statusMain}>
              <span className="panel-kicker">COMMISSIONER SHEET</span>
              <strong>{snapshot.connected ? "Google reconnect needed" : "Connect your Google access"}</strong>
              <p>{snapshot.connected ? "The Google authorization exists, but the sheet could not be read. Reconnect to restore live pool intelligence." : "Authorize the app with the same Google account that can already view the Suicide Pool 2026 sheet. The app requests read-only Google Sheets access and cannot edit the pool."}</p>
              {googleStatus === "error" ? <p className={styles.errorText}>Google connection error: {googleMessage || "OAuth setup failed."}</p> : null}
              {snapshot.error ? <p className={styles.errorText}>Sheet read error: {snapshot.error}</p> : null}
            </div>
            <div className={styles.connectionActions}>
              <div className={styles.statusChip}><span className={styles.dotOff} />{snapshot.connected ? "Reconnect needed" : "Not connected"}</div>
              <a className={styles.connectButton} href="/api/google/connect">{snapshot.connected ? "Reconnect Google" : "Connect Google"}</a>
            </div>
          </section>
        )}

        {activePlan ? (
          <section className={`${planStyles.planPanel} ${planIsFinal ? planStyles.planFinal : planStyles.planDirectional}`}>
            <div className={planStyles.planHeader}>
              <div>
                <div className={planStyles.planKicker}>CURRENT FOUR-ENTRY PLAN · WEEK {currentWeek}</div>
                <h2>{activePlan.headline}</h2>
                <p className={planStyles.planSummary}>{activePlan.summary}</p>
              </div>
              <div className={planStyles.planStatus}>
                <span className={planStyles.statusDot} />
                {planIsFinal ? "FINAL · READY TO SUBMIT" : "DIRECTIONAL · DO NOT LOCK YET"}
              </div>
            </div>

            <div className={planStyles.planGrid}>
              {myEntries.map((entry, index) => {
                const number = entryNumber(entry.name, index);
                const recommendation = activePlan.entries.find((item) => item.entryNumber === number);
                if (!recommendation) return null;
                const duplicate = entry.usedTeams.some((item) => item.team === recommendation.team && item.week < currentWeek);
                const submitted = entry.currentPick;
                const submittedMatches = submitted === recommendation.team;

                return (
                  <article className={planStyles.planEntry} key={`plan-${entry.name}`}>
                    <div className={planStyles.planEntryTop}>
                      <div className={planStyles.entryLabel}>Entry {number}</div>
                      <span className={planStyles.confidence}>{recommendation.confidence} confidence</span>
                    </div>
                    <div className={planStyles.planTeam}>{recommendation.team}</div>
                    <div className={planStyles.planMeta}>Alternate: {recommendation.alternate || "—"}</div>
                    <p className={planStyles.planReason}>{recommendation.rationale}</p>
                    <div className={planStyles.planFlags}>
                      {!entry.alive ? <span className={planStyles.planOut}>ENTRY OUT</span> : null}
                      {entry.alive && duplicate ? <span className={planStyles.planConflict}>BLOCKED · TEAM ALREADY USED</span> : null}
                      {entry.alive && !duplicate ? <span className={planStyles.planCheck}>NO DUPLICATE ✓</span> : null}
                      {submitted && submittedMatches ? <span className={planStyles.planSubmitted}>SUBMITTED ✓</span> : null}
                      {submitted && !submittedMatches ? <span className={planStyles.planConflict}>SUBMITTED: {submitted}</span> : null}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={planStyles.planInputs}>
              {activePlan.inputs.map((input) => (
                <span className={`${planStyles.inputChip} ${inputStateClass(input.state)}`} title={input.detail} key={input.label}>
                  <strong>{input.label}</strong> · {input.state.toUpperCase()}
                </span>
              ))}
              <span className={planStyles.planAsOf}>Updated {activePlan.asOf}</span>
            </div>
          </section>
        ) : (
          <section className={planStyles.stalePanel}>
            <strong>Week {currentWeek} portfolio plan not loaded yet.</strong>
            <p>The previous week&apos;s recommendations are intentionally hidden rather than carried forward. A fresh four-entry plan must account for each entry&apos;s used-team history before it appears here.</p>
          </section>
        )}

        <section className={styles.entryGrid}>
          {myEntries.map((entry) => (
            <article className={styles.entryCard} key={entry.name}>
              <div className={styles.entryTop}>
                <div><span className="panel-kicker">{entry.name}</span><h3>{displayEntryName(entry.name)}</h3></div>
                <span className={entry.alive ? styles.alive : styles.out}>{entry.alive ? "Alive" : "Out"}</span>
              </div>
              <div className={styles.entryFacts}>
                <div><span>Used teams</span><strong>{entry.usedTeams.length ? entry.usedTeams.map((item) => `${item.team} W${item.week}`).join(" · ") : "None yet"}</strong></div>
                <div><span>Official Week {currentWeek} pick</span><strong>{entry.currentPick || "Not visible yet"}</strong></div>
              </div>
            </article>
          ))}
        </section>

        {earlyLockWeek ? (
          <section className={styles.ownershipPanel}>
            <div className={styles.panelHeader}>
              <div><span className="panel-kicker">WEEK 1 SAFETY BOARD · MARKET ONLY</span><h3>Useful input — not the four-entry recommendation</h3></div>
              <span className={styles.pending}>{week1MarketAsOf}</span>
            </div>
            <div className={styles.ownershipGrid}>
              {earlySurvivorShortlist.map((game, index) => (
                <div key={game.favorite}>
                  <span>#{index + 1} market favorite</span>
                  <strong>{game.favorite} -{game.spread}</strong>
                  <small>{game.away} @ {game.home} · {game.day}</small>
                </div>
              ))}
            </div>
            <p className="panel-explainer">PROVISIONAL MARKET SIGNAL ONLY. The yellow/green portfolio board above is the source of truth for our actual entry-by-entry working plan. This market list never becomes a recommendation by itself.</p>
          </section>
        ) : null}

        <section className="section-heading second-heading">
          <div><div className="eyebrow">{earlyLockWeek ? "WEEK 1 DECISION MODEL" : "LOCKED PROCESS"}</div><h2>{earlyLockWeek ? "Survive now without wasting the season" : "Protect each entry's future path"}</h2></div>
          <span className="source-tag">Actual pool ownership beats generic ownership</span>
        </section>

        <section className={styles.timeline}>
          <article>
            <span className={styles.step}>01</span>
            <div><div className="panel-kicker">MODEL BACKBONE</div><h3>V1per + full-season value</h3><p>V1per ranks LAC first at 81% this week and 0.70% to win out, with JAX the only close conventional alternative at 75% this week and 0.68% to win out.</p></div>
          </article>
          <article>
            <span className={styles.step}>02</span>
            <div><div className="panel-kicker">FUTURE-VALUE CHECK</div><h3>Compare the path, not just Week 1</h3><p>V1per&apos;s direct comparison gives LAC→TB a 57.0% chance to survive the first two weeks versus 56.2% for JAX→LAC. That small edge is why LAC remains the mathematical default even after accounting for future use.</p></div>
          </article>
          <article className={styles.friday}>
            <span className={styles.step}>03</span>
            <div><div className="panel-kicker">PORTFOLIO + OWNERSHIP</div><h3>Assign the four entries deliberately</h3><p>Track every entry independently so no team can be reused on that entry. Ownership, final injury news and market movement determine whether the yellow working split changes before it turns green.</p></div>
          </article>
        </section>

        <section className={styles.ownershipPanel}>
          <div className={styles.panelHeader}>
            <div><span className="panel-kicker">{earlyLockWeek ? "LIVE POOL OWNERSHIP" : "CURRENT OWNERSHIP SNAPSHOT"}</span><h3>What submitted entries are actually picking</h3></div>
            <span className={styles.pending}>{snapshot.connected ? `${snapshot.submitted} Week ${currentWeek} picks visible` : "Connect Google to calculate"}</span>
          </div>
          <div className={styles.ownershipGrid}>
            {ownership.length ? ownership.map((item) => (
              <div key={item.team}><span>{item.team}</span><strong>{item.pct.toFixed(1)}%</strong><small>{item.count} submitted {item.count === 1 ? "entry" : "entries"}</small></div>
            )) : ["Top pick", "Second pick", "Third pick", "All others"].map((label) => (
              <div key={label}><span>{label}</span><strong>—</strong><small>pool share</small></div>
            ))}
          </div>
          <p className="panel-explainer">Ownership is a tiebreaker, not the objective. We do not take bad teams merely to be different. The valuable spots are where a less-popular option has nearly the same survival probability, preserves premium future value, or efficiently diversifies the four-entry portfolio.</p>
        </section>

        <section className={styles.modelGrid}>
          <article className="panel feature-card"><span className="panel-kicker">BACKBONE · LIVE</span><h3>V1per41</h3><p>Week 1 post loaded: LAC 81% this week / 0.70% win-out; JAX 75% / 0.68%. V1per says these are the only two conventional teams he would seriously consider.</p></article>
          <article className="panel feature-card"><span className="panel-kicker">SAFETY</span><h3>Market + news</h3><p>Moneyline/spread strength, line movement, injuries and meaningful late information. These can adjust the model read but are not a substitute for season-long value.</p></article>
          <article className="panel feature-card"><span className="panel-kicker">POOL EDGE</span><h3>Live ownership</h3><p>The commissioner sheet gives us this pool&apos;s real submitted-pick distribution before lock.</p></article>
          <article className="panel feature-card"><span className="panel-kicker">PORTFOLIO</span><h3>Four-entry coordination</h3><p>Every entry carries its own used-team history. Repeating a team across different entries can be correct; repeating one within the same entry is automatically flagged.</p></article>
        </section>

        <section className="panel survivor-template">
          <div className="panel-head"><div><span className="panel-kicker">WEEKLY DECISION CARD</span><h3>{planIsFinal ? "Final entry portfolio" : "Current working recommendation"}</h3></div></div>
          <div className="decision-grid">
            <div><span>V1per pick</span><strong>{earlyLockWeek ? `${viperWeek1.pick} over ${viperWeek1.opponent} · ${viperWeek1.winWeek}%` : "—"}</strong></div>
            <div><span>V1per alternative</span><strong>{earlyLockWeek ? `${viperWeek1.alternative} · ${viperWeek1.alternativeWinWeek}%` : "—"}</strong></div>
            <div><span>Actual pool popularity</span><strong>{ownership[0] ? `${ownership[0].team} · ${ownership[0].pct.toFixed(1)}%` : "Not meaningful yet"}</strong></div>
            <div><span>2-week future-value test</span><strong>{earlyLockWeek ? `LAC→TB ${viperWeek1.twoWeekPrimary.toFixed(1)}% · JAX→LAC ${viperWeek1.twoWeekAlternative.toFixed(1)}%` : "—"}</strong></div>
            <div className="span-2"><span>Four-entry plan</span><strong>{activePlan ? `${planIsFinal ? "FINAL" : "DIRECTIONAL"}: ${activePlan.entries.map((entry) => `E${entry.entryNumber} ${entry.team}`).join(" · ")}` : `Waiting for Week ${currentWeek} decision inputs`}</strong></div>
          </div>
          <p className="panel-explainer">Yellow means the portfolio is a working recommendation and can still move. Green means the four picks have passed the final model, ownership, injury, market and duplicate-history checks and are ready to submit.</p>
        </section>
      </div>
    </main>
  );
}
