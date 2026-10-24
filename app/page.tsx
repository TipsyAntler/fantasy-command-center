import Link from "next/link";
import DismissibleFlipBanner from "@/components/DismissibleFlipBanner";
import { LocalGreeting, LocalRefreshTime } from "@/components/LocalDashboardTime";
import { getDashboardData, getRosterWatch, getPlanningWeek } from "@/lib/sleeper";
import { getSurvivorSnapshot } from "@/lib/google-survivor";
import { manualLeagues, rosterPlayerNames } from "@/data/manual-leagues";
import { week7Number, week7PoolGames, week7Tiebreaker, week7Standing } from "@/data/pickem-week7";
import { actionableAlerts, isActionableBreakingAlert } from "@/data/actionable-alerts";
import styles from "./home.module.css";

export const dynamic = "force-dynamic";

function rosterStatus(row: Awaited<ReturnType<typeof getRosterWatch>>[number]) {
  return row.player?.injury_status || row.player?.practice_participation || row.player?.status || "status flag";
}

export default async function Home() {
  const data = await getDashboardData();
  const week = getPlanningWeek(data.state, week7Number, "2026-10-20T04:00:00-04:00");
  const [rosterWatch, survivor] = await Promise.all([
    getRosterWatch(rosterPlayerNames),
    getSurvivorSnapshot(week),
  ]);

  const leagueFlags = Object.fromEntries(
    manualLeagues.map((league) => {
      const names = new Set([...league.roster, ...league.ir].map((player) => player.name));
      return [league.key, rosterWatch.filter((row) => row.flagged && names.has(row.requestedName))];
    }),
  ) as Record<"bm" | "ll", Awaited<ReturnType<typeof getRosterWatch>>>;

  const bmFlag = leagueFlags.bm[0];
  const llFlag = leagueFlags.ll[0];
  const survivorHealthy = survivor.connected && !survivor.error;
  const sleeperHealthy = !data.errors.players && !data.errors.trends;
  const strongestPoolEdges = week7PoolGames.filter((game) => game.signal.startsWith("FROZEN-NUMBER ADVANTAGE")).length;
  const pickemFlipAlerts = actionableAlerts.filter(
    (alert) => isActionableBreakingAlert(alert) && alert.category === "Pick'em" && alert.headline.includes("FLIP") && alert.id.startsWith(`2026-w${week7Number}-`),
  );
  const pickemFlipGames = week7PoolGames.filter((game) =>
    pickemFlipAlerts.some((alert) => alert.href === `/pickem#${`${game.away}-${game.home}`.toLowerCase()}`),
  );
  const pickemFlipSummary = pickemFlipGames
    .map((game) => `${game.poolPick} ${game.poolLine > 0 ? "+" : ""}${game.poolLine}`)
    .join(" · ");

  return (
    <main>
      <div className={`shell ${styles.homeShell}`}>
        <header className={styles.homeTopbar}>
          <div>
            <div className="command-kicker">FFCC · WEEK {week}</div>
            <h1 className={styles.homeTitle}><LocalGreeting /></h1>
            <p className={styles.homeSubtitle}>What needs your attention right now.</p>
          </div>
          <div className={styles.homeMeta}>
            <div className={styles.metaChip}>Week {week}</div>
            <div className={styles.refreshChip}>Updated <strong><LocalRefreshTime iso={data.fetchedAt} /></strong></div>
            <Link href="/settings" className="settings-button" aria-label="Open settings" title="Settings"><span aria-hidden="true">⚙</span></Link>
          </div>
        </header>

        {pickemFlipAlerts.length > 0 ? (
          <DismissibleFlipBanner ids={pickemFlipAlerts.map((alert) => alert.id + ":" + (alert.pushRevision || ""))} summary={pickemFlipSummary} />
        ) : null}

        <div className={styles.focusLabel}>Your command board</div>
        <section className={styles.focusGrid} aria-label="Top actionable takeaways">
          <Link href="/leagues" className={styles.focusCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardKicker}>BIG MONEY · BOWER&apos;S CASTLE</span>
              <span className={`${styles.cardState} ${bmFlag ? styles.cardStateWarn : ""}`}>{bmFlag ? "Watch" : "Clear"}</span>
            </div>
            <h2>Bower&apos;s Castle</h2>
            <p className={styles.actionHeadline}>
              {bmFlag ? `${bmFlag.requestedName} is the first roster item to verify.` : "No urgent roster action. Keep the RB room under the microscope."}
            </p>
            <p className={styles.actionNote}>
              {bmFlag ? `${rosterStatus(bmFlag)} is showing in the live player feed. Check the league view before making any lineup or trade move.` : "Your WR/TE core gives you room to stay patient rather than force a preseason trade."}
            </p>
            <div className={styles.cardFoot}><span>Open league view</span><span>→</span></div>
          </Link>

          <Link href="/leagues" className={styles.focusCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardKicker}>LEGENDARY LEBLANC · LAPORTA POTTY</span>
              <span className={`${styles.cardState} ${llFlag ? styles.cardStateWarn : ""}`}>{llFlag ? "Watch" : "Clear"}</span>
            </div>
            <h2>LaPorta Potty</h2>
            <p className={styles.actionHeadline}>
              {llFlag ? `${llFlag.requestedName} is the main thing to monitor.` : "No forced move. Let the roster advantage come to you."}
            </p>
            <p className={styles.actionNote}>
              {llFlag ? `${rosterStatus(llFlag)} is showing in the live player feed; the rest of the roster can stay patient.` : "This team is built to absorb uncertainty. Use waivers or trades only when they create a real starting-lineup upgrade."}
            </p>
            <div className={styles.cardFoot}><span>Open league view</span><span>→</span></div>
          </Link>

          <Link href="/survivor" className={styles.focusCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardKicker}>SURVIVOR</span>
              <span className={styles.cardState}>{survivorHealthy ? `${survivor.aliveEntries} alive` : "Check feed"}</span>
            </div>
            <h2>Survivor Lab</h2>
            <p className={styles.actionHeadline}>{survivorHealthy ? `${survivor.aliveEntries} entries remain · ${survivor.submitted} Week ${survivor.ownershipWeek || week} picks visible.` : "Pool data needs a refresh."}</p>
            <p className={styles.actionNote}>{survivorHealthy ? `${survivor.ownershipWeek !== week ? `Week ${week} picks pending. Latest available: Week ${survivor.ownershipWeek}. ` : ""}Most popular pick: ${survivor.ownership[0]?.team || "Not posted yet"}. Open the pool distribution chart for the full breakdown.` : "Reconnect Google for the latest pool standings and pick distribution."}</p>
            <div className={styles.cardFoot}><span>Open Survivor Lab</span><span>→</span></div>
          </Link>

          <Link href="/pickem" className={styles.focusCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardKicker}>THE SZN · ATS PICK&apos;EM</span>
              <span className={`${styles.cardState} ${pickemFlipAlerts.length ? styles.cardStateWarn : ""}`}>{pickemFlipAlerts.length ? `${pickemFlipAlerts.length} flips` : `${week7PoolGames.length} picks loaded`}</span>
            </div>
            <h2>Pick&apos;em Room</h2>
            <p className={styles.actionHeadline}>{pickemFlipAlerts.length ? `FFCC changed ${pickemFlipSummary}.` : "Get the card in early, then only revisit meaningful movers."}</p>
            <p className={styles.actionNote}>
              Week {week7Number} lines are loaded. You are #{week7Standing.rank} with {week7Standing.correct} correct; {strongestPoolEdges} picks have a frozen-number advantage. Mike&apos;s SZN card is not automatically updated. Monday-night tiebreaker target: {week7Tiebreaker.earlyFfccTarget}.
            </p>
            <div className={styles.cardFoot}><span>Review ATS card</span><span>→</span></div>
          </Link>
        </section>

        <section className={styles.connections} aria-label="Data connections">
          <div className={styles.connectionsHead}>
            <div><div className="command-kicker">SYSTEM STATUS</div><h2>Data connections</h2></div>
            <p>Only the feeds that power FFCC.</p>
          </div>
          <div className={styles.connectionPanel}>
            <div className={styles.connectionItem}>
              <strong>Sleeper public signals</strong>
              <small>Roster status + player movement</small>
              <span className={`${styles.connectionStatus} ${!sleeperHealthy ? styles.connectionStatusWarn : ""}`}>{sleeperHealthy ? "LIVE" : "DEGRADED"}</span>
            </div>
            <div className={styles.connectionItem}>
              <strong>BM + LL rosters</strong>
              <small>Manual snapshots while Yahoo provisioning finishes</small>
              <span className={styles.connectionStatus}>LIVE</span>
            </div>
            <div className={styles.connectionItem}>
              <strong>Survivor Google Sheet</strong>
              <small>Read-only pool intelligence</small>
              <span className={`${styles.connectionStatus} ${!survivorHealthy ? styles.connectionStatusWarn : ""}`}>{survivorHealthy ? "LIVE" : "CHECK"}</span>
            </div>
            <div className={styles.connectionItem}>
              <strong>Yahoo Fantasy</strong>
              <small>OAuth + automatic league sync plumbing installed</small>
              <span className={`${styles.connectionStatus} ${styles.connectionStatusWarn}`}>PROVISIONING</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}