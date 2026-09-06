import Link from "next/link";
import { LocalGreeting, LocalRefreshTime } from "@/components/LocalDashboardTime";
import { getDashboardData, getRosterWatch, SleeperPlayer } from "@/lib/sleeper";
import { manualLeagues, rosterPlayerNames } from "@/data/manual-leagues";
import { earlySurvivorShortlist, week1MarketAsOf } from "@/data/week1";

export const revalidate = 300;

function nameOf(player?: SleeperPlayer) {
  if (!player) return "Unknown player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "Unknown player";
}

function positionOf(player?: SleeperPlayer) {
  return player?.position || player?.fantasy_positions?.[0] || "-";
}

function teamOf(player?: SleeperPlayer) {
  return player?.team || "FA";
}

export default async function Home() {
  const [data, rosterWatch] = await Promise.all([
    getDashboardData(),
    getRosterWatch(rosterPlayerNames),
  ]);
  const week = data.state?.display_week ?? data.state?.week;
  const hot = data.adds.find((row) => row.heatingUp) || data.adds[0];
  const topDrop = data.drops[0];
  const waiverRows = data.adds.slice(0, 5);
  const rosterFlags = rosterWatch.filter((row) => row.flagged);
  const primaryFlag = rosterFlags[0];
  const safestEarly = earlySurvivorShortlist[0];

  return (
    <main>
      <div className="shell command-dashboard">
        <header className="command-topbar">
          <div>
            <div className="command-kicker">HOME DASHBOARD</div>
            <h1 className="command-title"><LocalGreeting /></h1>
            <p className="command-subtitle">Your actual rosters are loaded. Week 1 intelligence is live while Yahoo approval is pending.</p>
          </div>
          <div className="command-actions">
            <div className="command-chip">{week ? `Week ${week}` : "Week 1 launch"}</div>
            <Link href="#brief" className="command-button">Mike&apos;s Brief</Link>
            <Link href="/settings" className="settings-button" aria-label="Open settings" title="Settings"><span aria-hidden="true">⚙</span></Link>
          </div>
        </header>

        <section className="kpi-grid" aria-label="Command center status">
          <Link href="/leagues" className="kpi-link" aria-label="Open My Leagues">
            <article className="kpi-card"><div className="kpi-label">Fantasy Teams Loaded</div><div className="kpi-value good">{manualLeagues.length}</div><div className="kpi-note">BM + Legendary LeBlanc manual snapshots</div></article>
          </Link>
          <Link href="/survivor" className="kpi-link" aria-label="Open Survivor Lab">
            <article className="kpi-card"><div className="kpi-label">Survivor Entries</div><div className="kpi-value good">4</div><div className="kpi-note">Week 1 begins Wednesday night</div><div className="kpi-mini">Early lock week</div></article>
          </Link>
          <Link href="/pickem" className="kpi-link" aria-label="Open Week 1 pickem board">
            <article className="kpi-card"><div className="kpi-label">Pick&apos;em Slate</div><div className="kpi-value">16</div><div className="kpi-note">Early market board is loaded now</div></article>
          </Link>
          <Link href="/leagues" className="kpi-link" aria-label="Open roster status monitoring">
            <article className="kpi-card"><div className="kpi-label">Your Roster Flags</div><div className="kpi-value">{rosterFlags.length}</div><div className="kpi-note">Sleeper injury + practice status across BM and LL</div></article>
          </Link>
          <Link href="/waivers" className="kpi-link" aria-label="Open latest football intelligence">
            <article className="kpi-card"><div className="kpi-label">Last Intelligence Refresh</div><div className="kpi-value good refresh-time"><LocalRefreshTime iso={data.fetchedAt} /></div><div className="kpi-note">Public signals refresh about every 5 min</div></article>
          </Link>
        </section>

        <section className="command-grid">
          <article className="command-card brief-hero" id="brief">
            <div className="command-card-head"><strong>Mike&apos;s Brief</strong><span>Week 1 launch</span></div>
            <div className="command-body">
              <div className="brief-line">
                {primaryFlag
                  ? `${primaryFlag.requestedName} is the first roster status to check.`
                  : hot
                    ? `${nameOf(hot.player)} is the first public-market player I'd investigate.`
                    : "No roster status is demanding an immediate move right now."}
              </div>
              <p className="brief-copy">
                {primaryFlag
                  ? `${primaryFlag.player?.injury_status || primaryFlag.player?.practice_participation || primaryFlag.player?.status || "Status flag"} is showing in the live Sleeper player feed. Treat it as an alert to investigate, not an automatic lineup decision.`
                  : "The app is now watching your actual BM and LL players instead of a generic league placeholder."}
              </p>
              <p><strong>Week 1 timing:</strong> New England at Seattle opens the season Wednesday night, so Survivor and Pick&apos;em need an earlier decision cycle than a normal week.</p>
              <Link href="/leagues" className="command-link">Open roster command view &rarr;</Link>
            </div>
          </article>

          <article className="command-card">
            <div className="command-card-head"><strong>Early Survivor Board</strong><span>{week1MarketAsOf}</span></div>
            <div className="team-list">
              {earlySurvivorShortlist.map((game, index) => (
                <div className="team-line" key={`${game.away}-${game.home}`}>
                  <strong>{index + 1}. {game.favorite}</strong>
                  <span>{game.away} @ {game.home}</span>
                  <span className="team-rank">-{game.spread}</span>
                </div>
              ))}
            </div>
            <div className="command-body"><Link href="/survivor" className="command-link">Open early Survivor analysis &rarr;</Link></div>
          </article>

          <article className="command-card">
            <div className="command-card-head"><strong>Your Teams</strong><span>Manual rosters live</span></div>
            <div className="team-list">
              {manualLeagues.map((league) => (
                <div className="team-line" key={league.key}>
                  <strong>{league.teamName}</strong>
                  <span>{league.key.toUpperCase()} · {league.roster.length} active + {league.ir.length} IR</span>
                  <span className="team-rank">LIVE</span>
                </div>
              ))}
              <div className="team-line"><strong>Yahoo Fantasy</strong><span>API approval pending</span><span>WAIT</span></div>
              <div className="team-line"><strong>Public status feed</strong><span>Roster-aware Sleeper scan</span><span className="team-rank">LIVE</span></div>
            </div>
            <div className="command-body"><Link href="/leagues" className="command-link">View rosters &rarr;</Link></div>
          </article>

          <article className="command-card">
            <div className="command-card-head"><strong>League Intel Feed</strong><span>Your players first</span></div>
            <div className="intel-list">
              {rosterFlags.slice(0, 2).map((row) => (
                <div className="intel-line" key={row.requestedName}>
                  <div className="intel-icon">!</div>
                  <div><strong>{row.requestedName}</strong><small>{row.player?.injury_status || row.player?.practice_participation || row.player?.status || "Roster status flag"}{row.player?.team ? ` · ${row.player.team}` : ""}</small></div>
                </div>
              ))}
              {hot ? <div className="intel-line"><div className="intel-icon">+</div><div><strong>{nameOf(hot.player)}</strong><small>{hot.heatingUp ? "Add velocity is accelerating." : `Among the most-added players: ${hot.count.toLocaleString()} moves.`}</small></div></div> : null}
              {topDrop ? <div className="intel-line"><div className="intel-icon">-</div><div><strong>{nameOf(topDrop.player)}</strong><small>{topDrop.count.toLocaleString()} drop moves in the current window.</small></div></div> : null}
              {!rosterFlags.length && !hot && !topDrop ? <div className="empty">No major live signals right now.</div> : null}
            </div>
            <div className="command-body"><Link href="/waivers" className="command-link">View all public movement &rarr;</Link></div>
          </article>
        </section>

        <section className="dashboard-lower">
          <article className="snapshot-card">
            <div className="snapshot-head"><div><div className="title">Survivor Lab</div><div className="sub">Week 1 starts early · do not wait for Friday</div></div><Link href="/survivor" className="command-link">Open Lab &rarr;</Link></div>
            <div className="snapshot-body survivor-preview">
              <div className="entry-stack">{[1,2,3,4].map((entry) => (<div className="entry-mini" key={entry}><strong>Entry {entry}</strong><span>Early shortlist active</span><em>ALIVE | READY</em></div>))}</div>
              <div><div className="command-kicker" style={{marginBottom: 10}}>EARLY MARKET SHORTLIST</div><div className="ownership-bars">{earlySurvivorShortlist.map((game) => (<div className="ownership-row" key={game.favorite}><span>{game.favorite}</span><div className="bar-track"><div className="bar-fill" style={{width: `${Math.min(100, game.spread * 8)}%`}} /></div><strong>-{game.spread}</strong></div>))}</div><p>These are market-strength placeholders, not final picks. V1per41, injuries, future value and your actual pool ownership still get the final say.</p><Link href="/survivor" className="command-link">Review survivor strategy &rarr;</Link></div>
            </div>
          </article>

          <article className="snapshot-card"><div className="snapshot-head"><div><div className="title">Waiver Room</div><div className="sub">Find value. Beat the market.</div></div><Link href="/waivers" className="command-link">Open Room &rarr;</Link></div><div className="snapshot-body waiver-preview"><div className="waiver-headrow"><span>Player</span><span>Pos</span><span>Trend</span><span>Moves</span><span>Why here</span><span>Action</span></div>{waiverRows.map((row, index) => (<div className="waiver-mini" key={row.player_id}><strong>{nameOf(row.player)}</strong><span>{positionOf(row.player)} | {teamOf(row.player)}</span><span className={row.heatingUp ? "trend-up" : ""}>{row.heatingUp ? "Hot" : "Active"}</span><span>{row.count.toLocaleString()}</span><span>{row.player?.injury_status ? `${row.player.injury_status} flag` : index === 0 ? "Add leader" : "Market movement"}</span><span className="action-pill">Check</span></div>))}{!waiverRows.length ? <div className="empty">No public waiver movement is available right now.</div> : null}</div></article>
        </section>

        <section className="dashboard-lower">
          <article className="snapshot-card"><div className="snapshot-head"><div><div className="title">Pick&apos;em</div><div className="sub">Week 1 board is live now</div></div><Link href="/pickem" className="command-link">Open Pick&apos;em &rarr;</Link></div><div className="snapshot-body"><p>The full 16-game Week 1 market board is loaded with early straight-up leans and confidence tiers. The first game is Wednesday, so the late-week review moves up this week.</p></div></article>
          <article className="snapshot-card"><div className="snapshot-head"><div><div className="title">Data Connections</div><div className="sub">Personalization status</div></div></div><div className="snapshot-body"><div className="team-list"><div className="team-line"><strong>Sleeper public signals</strong><span>Roster status + movement</span><span className="team-rank">LIVE</span></div><div className="team-line"><strong>Manual BM + LL rosters</strong><span>Loaded while Yahoo is pending</span><span className="team-rank">LIVE</span></div><div className="team-line"><strong>Yahoo Fantasy</strong><span>Application submitted</span><span>WAIT</span></div><div className="team-line"><strong>Survivor Google Sheet</strong><span>Read-only pool intelligence</span><span className="team-rank">LIVE</span></div></div></div></article>
        </section>
      </div>
    </main>
  );
}
