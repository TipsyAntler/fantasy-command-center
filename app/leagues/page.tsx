import AtAGlance from "@/components/AtAGlance";
import LeagueSettingsForm from "./LeagueSettingsForm";

export default function LeaguesPage() {
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">LEAGUE CONTROL</div>
          <h1>My Leagues</h1>
          <p className="hero-copy">Build the league-specific context now. Yahoo will eventually populate these automatically.</p>
        </header>

        <AtAGlance items={[
          { label: "Yahoo connection", value: "Pending", note: "Approval will replace manual profiles with live league data", tone: "warn" },
          { label: "League profiles", value: "Local", note: "Manual settings stay on this device for now", tone: "accent" },
          { label: "Roster sync", value: "—", note: "Real rosters, opponents and transactions arrive with Yahoo" },
          { label: "Personal advice", value: "Building", note: "Scoring and roster context will drive every recommendation", tone: "good" },
        ]} />

        <LeagueSettingsForm />
      </div>
    </main>
  );
}
