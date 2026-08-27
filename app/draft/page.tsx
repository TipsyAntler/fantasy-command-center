import Link from "next/link";
import AtAGlance from "@/components/AtAGlance";
import PlayerContext from "@/components/PlayerContext";
import { getDashboardData, SleeperPlayer } from "@/lib/sleeper";

export const revalidate = 300;

function nameOf(player?: SleeperPlayer) {
  if (!player) return "Unknown player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "Unknown player";
}

export default async function DraftPage() {
  const data = await getDashboardData();
  const risers = data.adds.filter((row) => row.heatingUp).slice(0, 8);
  const fallback = data.adds.slice(0, 8);
  const rows = risers.length >= 4 ? risers : fallback;
  const topMover = rows[0];

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">DRAFT OPERATIONS</div>
          <h1>Draft Room</h1>
          <p className="hero-copy">The future home of your custom board, tiers, roster construction and on-the-clock recommendations.</p>
        </header>

        <AtAGlance items={[
          { label: "Draft board", value: "Building", note: "Custom rankings unlock as league context fills in", tone: "accent" },
          { label: "Market movers", value: `${rows.length}`, note: "Players drawing notable add attention right now" },
          { label: "Top mover", value: topMover ? nameOf(topMover.player) : "—", note: topMover ? `${topMover.count.toLocaleString()} adds in the last 24h` : "Waiting for movement data", tone: "good" },
          { label: "Yahoo draft sync", value: "Pending", note: "Live draft state arrives after Yahoo approval", tone: "warn" },
        ]} />

        <section className="feature-grid">
          <article className="panel feature-card">
            <span className="panel-kicker">STEP 1</span><h3>Choose a league</h3>
            <p>Rankings need to know whether we are drafting 10-team full PPR, 12-team half PPR, superflex, weird bonuses, and so on.</p>
            <Link className="inline-action" href="/leagues">Add league settings →</Link>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">STEP 2</span><h3>Build the board</h3>
            <p>Next we will combine consensus/ADP with league value, tiers, positional scarcity and your preferred risk profile.</p>
            <span className="coming-pill">Next build</span>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">DRAFT DAY</span><h3>On-the-clock mode</h3>
            <p>Yahoo integration will let this react to who is gone, your roster and what is likely to survive until your next pick.</p>
            <span className="coming-pill">Yahoo unlock</span>
          </article>
        </section>

        <section className="section-heading second-heading">
          <div><div className="eyebrow">EARLY MARKET SIGNAL</div><h2>Players drawing fantasy-manager attention</h2></div>
          <span className="source-tag">Not rankings — movement only</span>
        </section>
        <section className="panel signal-table">
          {rows.map((row, index) => (
            <div className="signal-row" key={row.player_id}>
              <span className="rank">{index + 1}</span>
              <div className="player-copy">
                <strong>{nameOf(row.player)}</strong>
                <div className="meta">{row.player?.position || "—"} · {row.player?.team || "FA"}</div>
                <PlayerContext player={row.player} kind="add" count={row.count} heatingUp={row.heatingUp} compact />
              </div>
              <div className="signal-value"><strong>{row.count.toLocaleString()}</strong><span>24h adds</span></div>
              <span className={row.heatingUp ? "heat-pill" : "muted-pill"}>{row.heatingUp ? "Heating up" : "Active"}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
