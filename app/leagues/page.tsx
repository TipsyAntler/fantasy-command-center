import Link from "next/link";
import AtAGlance from "@/components/AtAGlance";
import { hasYahooConnection } from "@/lib/yahoo";
import LeagueSettingsForm from "./LeagueSettingsForm";
import { getRosterWatch } from "@/lib/sleeper";
import { manualLeagues, rosterPlayerNames } from "@/data/manual-leagues";

export const dynamic = "force-dynamic";

export default async function LeaguesPage() {
  const [rosterWatch, yahooConnected] = await Promise.all([getRosterWatch(rosterPlayerNames), hasYahooConnection()]);
  const flags = rosterWatch.filter((row) => row.flagged);
  const flagByName = new Map(flags.map((row) => [row.requestedName, row]));

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">LEAGUE CONTROL · LIVE YAHOO</div>
          <h1>My Leagues</h1>
          <p className="hero-copy">Yahoo is now available for live rosters, standings and league-specific waiver candidates. The older roster snapshots remain below as a historical fallback.</p>
        </header>

        <AtAGlance items={[
          { label: "Teams loaded", value: `${manualLeagues.length}`, note: "BM + Legendary LeBlanc", tone: "good" },
          { label: "Roster status flags", value: `${flags.length}`, note: "Injury, practice or roster-status signals from Sleeper", tone: flags.length ? "warn" : "good" },
          { label: "Yahoo connection", value: yahooConnected ? "LIVE" : "Connect", note: yahooConnected ? "Open Yahoo Scout for current league data" : "Connect Yahoo in Settings", tone: yahooConnected ? "good" : "warn" },
          { label: "Public refresh", value: "~5 min", note: "Dashboard movement; player map cached per Sleeper guidance", tone: "accent" },
        ]} />

        <section className="panel" style={{ padding: 22, marginBottom: 20, borderColor: "rgba(97,226,168,.3)" }}><div className="eyebrow">NEW • YAHOO LIVE</div><h2>League Scout</h2><p>Actual Yahoo rosters, league standings, available players and recent moves, refreshed on demand. Use this instead of the historical snapshots below.</p><Link href="/yahoo" className="command-link">Open Yahoo League Scout →</Link></section>

        <section className="feature-grid">
          {manualLeagues.map((league) => {
            const starters = league.roster.filter((player) => player.slot !== "BN");
            const bench = league.roster.filter((player) => player.slot === "BN");
            const leagueFlags = [...league.roster, ...league.ir].filter((player) => flagByName.has(player.name));

            return (
              <article className="panel feature-card" key={league.key}>
                <span className="panel-kicker">{league.key.toUpperCase()} · {league.snapshotLabel}</span>
                <h3>{league.teamName}</h3>
                <p>{league.leagueName} · {league.format}</p>
                <p><strong>Starters:</strong> {starters.map((player) => `${player.slot} ${player.name}`).join(" · ")}</p>
                <p><strong>Bench:</strong> {bench.map((player) => player.name).join(" · ")}</p>
                {league.ir.length ? <p><strong>IR:</strong> {league.ir.map((player) => player.name).join(" · ")}</p> : null}
                <div className="team-list">
                  {leagueFlags.length ? leagueFlags.map((player) => {
                    const row = flagByName.get(player.name);
                    return <div className="team-line" key={player.name}><strong>{player.name}</strong><span>{row?.player?.injury_status || row?.player?.practice_participation || row?.player?.status || "Status flag"}</span><span className="team-rank">WATCH</span></div>;
                  }) : <div className="team-line"><strong>No live roster flags</strong><span>Sleeper status feed</span><span className="team-rank">CLEAR</span></div>}
                </div>
              </article>
            );
          })}
        </section>

        <section className="section-heading second-heading">
          <div><div className="eyebrow">MANUAL OVERRIDES</div><h2>Historical manual league settings</h2></div>
          <span className="source-tag">Yahoo Scout now provides the live data</span>
        </section>

        <LeagueSettingsForm />
      </div>
    </main>
  );
}
