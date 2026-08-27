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
        <LeagueSettingsForm />
      </div>
    </main>
  );
}
