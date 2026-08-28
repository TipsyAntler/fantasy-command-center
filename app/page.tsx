import Link from "next/link";
import { getDashboardData, SleeperPlayer } from "@/lib/sleeper";

export const revalidate = 300;

function nameOf(player?: SleeperPlayer) {
  if (!player) return "Unknown player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "Unknown player";
}

function positionOf(player?: SleeperPlayer) {
  return player?.position || player?.fantasy_positions?.[0] || "—";
}

function teamOf(player?: SleeperPlayer) {
  return player?.team || "FA";
}

export default async function Home() {
  const data = await getDashboardData();
  const week = data.state?.display_week ?? data.state?.week;
  const hot = data.adds.find((row) => row.heatingUp) || data.adds[0];
  const secondHot = data.adds.find((row) => row.player_id !== hot?.player_id) || data.adds[1];
  const topDrop = data.drops[0];
  const injury = data.injuries[0];
  const injury2 = data.injuries[1];
  const refreshed = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date(data.fetchedAt));

  const waiverRows = data.adds.slice(0, 5);

  return (
    <main>
      <div className="shell command-dashboard">
        <header className="command-topbar">
          <div>
            <div className="command-kicker">HOME DASHBOARD</div>
            <h1 className="command-title">Good afternoon, Mike.</h1>
            <p className="command-subtitle">Here&apos;s the football intelligence worth knowing right now.</p>
          </div>
          <div className="command-actions">
            <div className="command-chip">{week ? `Week ${week}` : "2026 Preseason"}</div>
            <Link href="#brief" className="command-button">Mike&apos;s Brief</Link>
          </div>
        </header>

        <section className="kpi-grid" aria-label="Command center status">
          <Link href="/leagues" className="kpi-link" aria-label="Open My Leagues">
            <article className="kpi-card">
              <div className="kpi-label">Fantasy Record</div>
              <div className="kpi-value">—</div>
              <div className="kpi-note">Yahoo sync pending</div>
            </article>
          </Link>
          <Link href="/survivor" className="kpi-link" aria-label="Open Survivor Lab">
            <article className="kpi-card">
              <div className="kpi-label">Survivor Entries</div>
              <div className="kpi-value good">4</div>
              <div className="kpi-note">Four-entry strategy ready</div>
              <div className="kpi-mini">FRIDAY EDGE</div>
            </article>
          </Link>
          <Link href="/leagues" className="kpi-link" aria-label="Open league start sit analysis">
            <article className="kpi-card">
              <div className="kpi-label">Start / Sit Accuracy</div>
              <div className="kpi-value">—</div>
              <div className="kpi-note">Tracks after league sync</div>
            </article>
          </Link>
          <Link href="/waivers" className="kpi-link" aria-label="Open injury and waiver intelligence">
            <article className="kpi-card">
              <div className="kpi-label">Live Injury Flags</div>
              <div className="kpi-value">{data.injuries.length}</div>
              <div className="kpi-note">Fantasy-relevant status radar</div>
            </article>
          </Link>
          <Link href="/waivers" className="kpi-link" aria-label="Open latest football intelligence">
            <article className="kpi-card">
              <div className="kpi-label">Last Intelligence Refresh</div>
              <div className="kpi-value good">{refreshed}</div>
              <div className="kpi-note">Public signals refresh ~5 min</div>
            </article>
          </Link>
        </section>

        <section className="command-grid">
          <article className="command-card brief-hero" id="brief">
            <div className="command-card-head"><strong>Mike&apos;s Brief</strong><span>Right now</span></div>
            <div className="command-body">
              <div className="quote">“</div>
              <div className="brief-line">
                {hot ? `${nameOf(hot.player)} is the first player I&apos;d investigate.` : "No major add spike is dominating the market right now."}
              </div>
              <p className="brief-copy">
                {hot?.heatingUp
                  ? `His recent add pace is accelerating versus the full-day trend. That is a signal, not a recommendation — the next step is news, role and your actual league availability.`
                  : `The public add market is active, but nothing currently deserves an automatic move without league context.`}
              </p>
              {injury ? <p><strong>{nameOf(injury)}</strong> also carries a {injury.injury_status || "practice"} flag worth monitoring.</p> : null}
              <Link href="/waivers" className="command-link">Open Waiver Room →</Link>
            </div>
          </article>

          <article className="command-card">
            <div className="command-card-head"><strong>Weekly Edge Gauge</strong><span>League model</span></div>
            <div className="command-body">
              <div className="gauge-wrap">
                <div>
                  <div className="gauge"><div className="gauge-ring" /></div>
                  <div className="gauge-value">—</div>
                  <div className="gauge-label">Yahoo matchup probability unlock</div>
                </div>
              </div>
            </div>
          </article>

          <article className="command-card">
            <div className="command-card-head"><strong>Your Teams</strong><span>Yahoo pending</span></div>
            <div className="team-list">
              <div className="team-line"><strong>League 1</strong><span>Roster + matchup</span><span className="team-rank">—</span></div>
              <div className="team-line"><strong>League 2</strong><span>Roster + matchup</span><span className="team-rank">—</span></div>
              <div className="team-line"><strong>League 3</strong><span>Roster + matchup</span><span className="team-rank">—</span></div>
              <div className="team-line"><strong>Manual profiles</strong><span>Available now</span><span className="team-rank">✓</span></div>
            </div>
            <div className="command-body"><Link href="/leagues" className="command-link">View My Leagues →</Link></div>
          </article>

          <article className="command-card">
            <div className="command-card-head"><strong>League Intel Feed</strong><span>Live signals</span></div>
            <div className="intel-list">
              {hot ? <div className="intel-line"><div className="intel-icon">↑</div><div><strong>{nameOf(hot.player)}</strong><small>{hot.heatingUp ? "Add velocity is accelerating." : `Among the most-added players: ${hot.count.toLocaleString()} moves.`}</small></div></div> : null}
              {injury ? <div className="intel-line"><div className="intel-icon">+</div><div><strong>{nameOf(injury)}</strong><small>{injury.injury_status || "Status flag"}{injury.practice_participation ? ` · ${injury.practice_participation}` : ""}</small></div></div> : null}
              {topDrop ? <div className="intel-line"><div className="intel-icon">↓</div><div><strong>{nameOf(topDrop.player)}</strong><small>{topDrop.count.toLocaleString()} drop moves in the current window.</small></div></div> : null}
              {injury2 ? <div className="intel-line"><div className="intel-icon">!</div><div><strong>{nameOf(injury2)}</strong><small>{injury2.injury_status || "Practice status"} deserves a second look.</small></div></div> : null}
            </div>
            <div className="command-body"><Link href="/waivers" className="command-link">View All Intel →</Link></div>
          </article>
        </section>

        <section className="dashboard-lower">
          <article className="snapshot-card">
            <div className="snapshot-head"><div><div className="title">Survivor Lab</div><div className="sub">Eliminate risk. Maximize survival.</div></div><Link href="/survivor" className="command-link">Open Lab →</Link></div>
            <div className="snapshot-body survivor-preview">
              <div className="entry-stack">
                {[1,2,3,4].map((entry) => (
                  <div className="entry-mini" key={entry}><strong>Entry {entry}</strong><span>Week 1 shortlist pending</span><em>ALIVE · READY</em></div>
                ))}
              </div>
              <div>
                <div className="command-kicker" style={{marginBottom: 10}}>FRIDAY OWNERSHIP SNAPSHOT</div>
                <div className="ownership-bars">
                  {["Top choice", "Second choice", "Leverage option", "Field"].map((label, index) => (
                    <div className="ownership-row" key={label}><span>{label}</span><div className="bar-track"><div className="bar-fill" style={{width: `${[0,0,0,0][index]}%`}} /></div><strong>—</strong></div>
                  ))}
                </div>
                <p>Once the pool begins submitting picks, Friday ownership becomes a live decision input alongside win probability, future value and the V1per41 cross-check.</p>
                <Link href="/survivor" className="command-link">Review survivor strategy →</Link>
              </div>
            </div>
          </article>

          <article className="snapshot-card">
            <div className="snapshot-head"><div><div className="title">Waiver Room</div><div className="sub">Find value. Beat the market.</div></div><Link href="/waivers" className="command-link">Open Room →</Link></div>
            <div className="snapshot-body waiver-preview">
              <div className="waiver-headrow"><span>Player</span><span>Pos</span><span>Trend</span><span>Moves</span><span>Why here</span><span>Action</span></div>
              {waiverRows.map((row, index) => (
                <div className="waiver-mini" key={row.player_id}>
                  <strong>{nameOf(row.player)}</strong>
                  <span>{positionOf(row.player)} · {teamOf(row.player)}</span>
                  <span className={row.heatingUp ? "trend-up" : ""}>{row.heatingUp ? "↑ Hot" : "Active"}</span>
                  <span>{row.count.toLocaleString()}</span>
                  <span>{row.player?.injury_status ? `${row.player.injury_status} flag` : index === 0 ? "Add leader" : "Market movement"}</span>
                  <span className="action-pill">Check</span>
                </div>
              ))}
              {!waiverRows.length ? <div className="empty">No public waiver movement is available right now.</div> : null}
            </div>
          </article>
        </section>

        <section className="dashboard-lower">
          <article className="snapshot-card">
            <div className="snapshot-head"><div><div className="title">Pick&apos;em</div><div className="sub">Confidence board + upset radar</div></div><Link href="/pickem" className="command-link">Open Pick&apos;em →</Link></div>
            <div className="snapshot-body"><p>The game-by-game board is staged and ready for the weekly slate feed. This will stay decision-focused even if the private SZN pool itself remains separate.</p></div>
          </article>
          <article className="snapshot-card">
            <div className="snapshot-head"><div><div className="title">Data Connections</div><div className="sub">Personalization status</div></div></div>
            <div className="snapshot-body">
              <div className="team-list">
                <div className="team-line"><strong>Sleeper public signals</strong><span>Movement + player status</span><span className="team-rank">LIVE</span></div>
                <div className="team-line"><strong>Yahoo Fantasy</strong><span>Application submitted</span><span>WAIT</span></div>
                <div className="team-line"><strong>Survivor Google Sheet</strong><span>OAuth bridge needed</span><span>PLAN</span></div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
