import Link from "next/link";
import PushAlerts from "@/components/PushAlerts";
import {
  hasYahooConnection,
  yahooCredentialsConfigured,
  yahooFantasyEnabled,
} from "@/lib/yahoo";

export const dynamic = "force-dynamic";

export default async function SettingsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = searchParams ? await searchParams : {};
  const yahooStatus = typeof params.yahoo === "string" ? params.yahoo : undefined;
  const yahooMessage = typeof params.message === "string" ? params.message : undefined;

  const yahooConnected = await hasYahooConnection();
  const yahooConfigured = yahooCredentialsConfigured();
  const yahooEnabled = yahooFantasyEnabled();
  const yahooLabel = yahooConnected
    ? "LIVE"
    : yahooEnabled && yahooConfigured
      ? "READY"
      : yahooEnabled
        ? "NEEDS CREDS"
        : "PROVISIONING";

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
            <div className="panel-head">
              <div><span className="panel-kicker">YAHOO</span><h3>League intelligence</h3></div>
              <span className="source-tag">{yahooLabel}</span>
            </div>
            {yahooConnected ? (
              <p>Yahoo OAuth is connected. The league probe is ready to read your 2026 football leagues and the next layer can replace manual roster snapshots with league-aware Yahoo data.</p>
            ) : yahooEnabled && yahooConfigured ? (
              <p>Yahoo provisioning is enabled and the server credentials are configured. Connect your Yahoo account to activate the read-only league sync.</p>
            ) : yahooEnabled ? (
              <p>Yahoo provisioning is enabled, but the server still needs the private OAuth credentials and token-encryption secret before connection can begin.</p>
            ) : (
              <p>The Yahoo OAuth plumbing is installed and intentionally gated off while Yahoo finishes Fantasy Sports provisioning. Once access is live, add the private server credentials, flip the enable flag, and connect without another code deploy.</p>
            )}
            {yahooStatus === "connected" ? <p><strong>Yahoo connected successfully.</strong></p> : null}
            {yahooStatus === "disconnected" ? <p>Yahoo connection cleared.</p> : null}
            {yahooStatus === "error" ? <p>Yahoo connection error: {yahooMessage || "OAuth setup failed."}</p> : null}
            <div className="settings-foot">
              {yahooConnected ? (
                <>
                  <a href="/api/yahoo/leagues" className="command-link">Test 2026 league sync →</a>
                  <span> · </span>
                  <a href="/api/yahoo/disconnect" className="command-link">Disconnect Yahoo</a>
                </>
              ) : yahooEnabled && yahooConfigured ? (
                <a href="/api/yahoo/connect" className="command-link">Connect Yahoo →</a>
              ) : (
                <span>OAuth callback ready at /api/yahoo/callback</span>
              )}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
