import PlayerContext from "@/components/PlayerContext";
import { getDashboardData, SleeperPlayer } from "@/lib/sleeper";

export const revalidate = 300;

function nameOf(player?: SleeperPlayer) {
  if (!player) return "Unknown player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "Unknown player";
}

export default async function WaiversPage() {
  const data = await getDashboardData();
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">ROSTER MOVEMENT</div>
          <h1>Waiver Room</h1>
          <p className="hero-copy">Public movement now. League-specific availability, roster fit and FAAB recommendations after Yahoo connects.</p>
        </header>

        <section className="two-column">
          <article className="panel">
            <div className="panel-head"><div><span className="panel-kicker">ADD MARKET</span><h3>Most added</h3></div><div className="panel-note">24h</div></div>
            <div className="player-list">
              {data.adds.slice(0, 15).map((row, index) => (
                <div className="player-row" key={row.player_id}>
                  <span className="rank">{index + 1}</span>
                  <div className="player-copy">
                    <div className="player-name-line"><strong>{nameOf(row.player)}</strong>{row.heatingUp ? <span className="heat-pill">Heating up</span> : null}</div>
                    <div className="meta">{row.player?.position || "—"} · {row.player?.team || "FA"}</div>
                    <PlayerContext player={row.player} kind="add" count={row.count} heatingUp={row.heatingUp} compact />
                  </div>
                  <div className="count"><strong>{row.count.toLocaleString()}</strong><span>adds</span></div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-head"><div><span className="panel-kicker">DROP MARKET</span><h3>Most dropped</h3></div><div className="panel-note">24h</div></div>
            <div className="player-list">
              {data.drops.slice(0, 15).map((row, index) => (
                <div className="player-row" key={row.player_id}>
                  <span className="rank">{index + 1}</span>
                  <div className="player-copy">
                    <strong>{nameOf(row.player)}</strong>
                    <div className="meta">{row.player?.position || "—"} · {row.player?.team || "FA"}</div>
                    <PlayerContext player={row.player} kind="drop" count={row.count} compact />
                  </div>
                  <div className="count"><strong>{row.count.toLocaleString()}</strong><span>drops</span></div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="roadmap compact-roadmap">
          <div className="roadmap-copy"><div className="eyebrow">YAHOO UNLOCK</div><h2>What this becomes</h2><p>For each league: filter to actual free agents, score every add against your roster, show the best cut, suggest FAAB, and identify defensive pickups against upcoming opponents.</p></div>
          <div className="roadmap-list">
            <div><span>01</span><strong>Available in your league?</strong><small>Yahoo free-agent state</small></div>
            <div><span>02</span><strong>Who do you cut?</strong><small>Replacement and roster-value check</small></div>
            <div><span>03</span><strong>What do you bid?</strong><small>League-spending behavior + urgency</small></div>
          </div>
        </section>
      </div>
    </main>
  );
}
