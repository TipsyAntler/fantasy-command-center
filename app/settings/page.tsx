import Link from "next/link";
import PushAlerts from "@/components/PushAlerts";

export default function SettingsPage() {
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero settings-hero">
          <div className="eyebrow">PERSONAL COMMAND</div>
          <h1>Settings</h1>
          <p className="hero-copy">Quiet controls for the things you set once and only revisit when needed.</p>
        </header>

        <section className="settings-grid">
          <article className="panel settings-card">
            <div className="panel-head">
              <div>
                <span className="panel-kicker">NOTIFICATIONS</span>
                <h3>Smart Alerts</h3>
              </div>
              <span className="source-tag">Device setup</span>
            </div>
            <PushAlerts />
            <div className="settings-foot"><Link href="/alerts" className="command-link">Open alert details →</Link></div>
          </article>

          <article className="panel settings-card">
            <div className="panel-head"><div><span className="panel-kicker">TIME & DISPLAY</span><h3>Eastern Time</h3></div></div>
            <p>Dashboard timestamps and greetings use America/New_York so they stay aligned with Maine through EST and EDT automatically.</p>
          </article>

          <article className="panel settings-card">
            <div className="panel-head"><div><span className="panel-kicker">YAHOO</span><h3>League intelligence</h3></div><span className="source-tag">Pending approval</span></div>
            <p>League-specific rosters, transactions, trade behavior, player availability, waiver alerts and deep links activate when Yahoo access is approved.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
