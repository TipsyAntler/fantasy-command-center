import PushAlerts from "@/components/PushAlerts";

export default function AlertsPage() {
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">REAL-TIME INTELLIGENCE</div>
          <h1>Smart Alerts</h1>
          <p className="hero-copy">
            FFCC alerts are designed for high-value, time-sensitive fantasy decisions — not generic news spam. Enable this device now; league-aware triggers plug in when Yahoo access is approved.
          </p>
        </header>

        <PushAlerts />

        <section className="alert-roadmap">
          <article className="panel feature-card">
            <span className="panel-kicker">INJURY HANDCUFFS</span>
            <h3>Starter goes down → check the backup</h3>
            <p>When a meaningful injury or practice downgrade hits, FFCC will check whether the next-man-up is available in each connected league before alerting.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">VALUABLE DROPS</span>
            <h3>Someone drops a player you should own</h3>
            <p>League transactions will be compared with your roster, scoring and bench value so the alert can recommend an actual claim or add.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">MARKET SPIKES</span>
            <h3>Catch real role changes early</h3>
            <p>Public add velocity, injuries and news can create a candidate alert; Yahoo availability is the final filter before FFCC interrupts you.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">DEEP LINKS</span>
            <h3>Tap the alert → open the decision</h3>
            <p>Notifications are structured to open the relevant waiver, player or league view instead of dumping you on the homepage.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
