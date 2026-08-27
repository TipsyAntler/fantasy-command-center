import Brief from "@/components/Brief";
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

function seasonType(value?: string) {
  if (!value) return "NFL";
  if (value === "pre") return "Preseason";
  if (value === "regular") return "Regular season";
  if (value === "post") return "Postseason";
  return value;
}

function TrendList({ rows, empty }: {
  rows: Array<{ player_id: string; count: number; player?: SleeperPlayer; heatingUp?: boolean }>;
  empty: string;
}) {
  if (!rows.length) return <div className="empty">{empty}</div>;

  return (
    <div className="player-list">
      {rows.map((row, index) => (
        <div className="player-row" key={row.player_id}>
          <div className="rank">{index + 1}</div>
          <div className="player-copy">
            <div className="player-name-line">
              <strong>{nameOf(row.player)}</strong>
              {row.heatingUp ? <span className="heat-pill">Heating up</span> : null}
            </div>
            <span className="meta">
              {positionOf(row.player)} · {teamOf(row.player)}
              {row.player?.injury_status ? ` · ${row.player.injury_status}` : ""}
            </span>
          </div>
          <div className="count">
            <strong>{row.count.toLocaleString()}</strong>
            <span>moves</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  const data = await getDashboardData();
  const updated = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(data.fetchedAt));

  const week = data.state?.display_week ?? data.state?.week;

  return (
    <main>
      <div className="shell">
        <header className="hero">
          <div>
            <div className="eyebrow">2026 · Personal Fantasy Operations</div>
            <h1>Fantasy Command Center</h1>
            <p className="hero-copy">One place for the signals worth noticing before your league mates notice them.</p>
          </div>
          <div className="live-badge"><span className="live-dot" /> Live public data</div>
        </header>

        <Brief adds={data.adds} drops={data.drops} injuries={data.injuries} />

        <section className="status-grid">
          <article className="status-card">
            <div className="status-label">NFL NOW</div>
            <div className="status-value">{week ? `Week ${week}` : "Preseason"}</div>
            <div className="status-note">{seasonType(data.state?.season_type)} · {data.state?.season || "2026"}</div>
          </article>
          <article className="status-card yahoo-card">
            <div className="status-label">YAHOO LEAGUES</div>
            <div className="status-value">Access pending</div>
            <div className="status-note">API application submitted · read-only integration queued</div>
          </article>
          <article className="status-card">
            <div className="status-label">LAST REFRESH</div>
            <div className="status-value">{updated}</div>
            <div className="status-note">Movement signals refresh about every 5 minutes</div>
          </article>
        </section>

        <section className="section-heading">
          <div><div className="eyebrow">WAIVER RADAR</div><h2>What fantasy players are doing right now</h2></div>
          <span className="source-tag">Powered by Sleeper trending data</span>
        </section>

        <section className="two-column">
          <article className="panel featured-panel">
            <div className="panel-head"><div><span className="panel-kicker">ADD VELOCITY</span><h3>Trending Adds</h3></div><div className="panel-note">Past 24 hours</div></div>
            <p className="panel-explainer">“Heating up” flags players whose recent 4-hour add pace is meaningfully faster than their full-day pace.</p>
            <TrendList rows={data.adds.slice(0, 12)} empty="No trending-add data available right now." />
          </article>

          <article className="panel">
            <div className="panel-head"><div><span className="panel-kicker">ROSTER PRESSURE</span><h3>Trending Drops</h3></div><div className="panel-note">Past 24 hours</div></div>
            <p className="panel-explainer">Useful for catching panic drops, roster churn, and players who may suddenly become available.</p>
            <TrendList rows={data.drops.slice(0, 10)} empty="No trending-drop data available right now." />
          </article>
        </section>

        <section className="section-heading second-heading">
          <div><div className="eyebrow">PLAYER AVAILABILITY</div><h2>Injury & practice radar</h2></div>
        </section>

        <section className="panel injury-panel">
          {data.injuries.length ? (
            <div className="injury-grid">
              {data.injuries.map((player) => (
                <div className="injury-card" key={player.player_id || nameOf(player)}>
                  <div className="injury-top"><strong>{nameOf(player)}</strong><span className="position-pill">{positionOf(player)}</span></div>
                  <div className="meta">{teamOf(player)}</div>
                  <div className="injury-status">{player.injury_status || "Practice report"}</div>
                  {player.practice_participation ? <div className="practice">Practice: {player.practice_participation}</div> : null}
                </div>
              ))}
            </div>
          ) : <div className="empty">No injury/practice data available right now.</div>}
        </section>

        <section className="roadmap">
          <div className="roadmap-copy">
            <div className="eyebrow">BUILD PLAN</div>
            <h2>The league-specific layer comes next.</h2>
            <p>Yahoo approval unlocks your exact scoring systems, rosters, opponents, free agents, standings, matchups and transactions. Until then, the Draft and Leagues tabs let us build the personalization layer manually.</p>
          </div>
          <div className="roadmap-list">
            <div><span>01</span><strong>League profiles</strong><small>Manual now · Yahoo-powered later</small></div>
            <div><span>02</span><strong>Draft board</strong><small>League-adjusted rankings and roster construction</small></div>
            <div><span>03</span><strong>Personal waiver board</strong><small>Availability + roster need + FAAB</small></div>
            <div><span>04</span><strong>Survivor lab</strong><small>V1per41 + Vegas + future-value cross-check</small></div>
          </div>
        </section>

        <footer><span>Fantasy Command Center · private personal project</span><span>Public movement data via Sleeper API</span></footer>
      </div>
    </main>
  );
}
