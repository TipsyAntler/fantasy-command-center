import AtAGlance from "@/components/AtAGlance";
import LeagueSettingsForm from "./LeagueSettingsForm";
import { getRosterWatch } from "@/lib/sleeper";
import { manualLeagues, rosterPlayerNames } from "@/data/manual-leagues";

export const revalidate = 300;

export default async function LeaguesPage() {
  const rosterWatch = await getRosterWatch(rosterPlayerNames);
  const flags = rosterWatch.filter((row) => row.flagged);
  const flagByName = new Map(flags.map((row) => [row.requestedName, row]));

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">LEAGUE CONTROL · WEEK 1</div>
          <h1>My Leagues</h1>
          <p className="hero-copy">The useful part does not have to wait for Yahoo. Your current BM and Legendary LeBlanc rosters are loaded manually and cross-checked against Sleeper&apos;s public player-status feed.</p>
        </header>

        <AtAGlance items={[
          { label: "Teams loaded", value: `${manualLeagues.length}`, note: "BM + Legendary LeBlanc", tone: "good" },
          { label: "Roster status flags", value: `${flags.length}`, note: "Injury, practice or roster-status signals from Sleeper", tone: flags.length ? "warn" : "good" },
          { label: "Yahoo connection", value: "Pending", note: "Approval will replace the manual layer with live league data", tone: "warn" },
          { label: "Public refresh", value: "~5 min", note: "Dashboard movement; player map cached per Sleeper guidance", tone: "accent" },
        ]} />

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
          <div><div className="eyebrow">MANUAL OVERRIDES</div><h2>League settings while Yahoo is pending</h2></div>
          <span className="source-tag">Yahoo sync will supersede these later</span>
        </section>

        <LeagueSettingsForm />
      </div>
    </main>
  );
}
