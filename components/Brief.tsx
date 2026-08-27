import type { HydratedTrend, SleeperPlayer } from "@/lib/sleeper";

function nameOf(player?: SleeperPlayer) {
  if (!player) return "Unknown player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "Unknown player";
}

export default function Brief({
  adds,
  drops,
  injuries,
}: {
  adds: HydratedTrend[];
  drops: HydratedTrend[];
  injuries: SleeperPlayer[];
}) {
  const hot = adds.find((row) => row.heatingUp) || adds[0];
  const drop = drops[0];
  const injury = injuries[0];

  const items = [
    hot
      ? {
          tone: "watch",
          label: "WATCH",
          title: `${nameOf(hot.player)} is drawing add traffic`,
          detail: hot.heatingUp
            ? "His recent add pace is accelerating versus the full-day pace."
            : "He is among the most-added fantasy players over the past 24 hours.",
        }
      : null,
    injury
      ? {
          tone: "injury",
          label: "STATUS",
          title: `${nameOf(injury)} carries an active status flag`,
          detail: [injury.injury_status, injury.practice_participation ? `practice: ${injury.practice_participation}` : null]
            .filter(Boolean)
            .join(" · "),
        }
      : null,
    drop
      ? {
          tone: "market",
          label: "MARKET",
          title: `${nameOf(drop.player)} is seeing meaningful drop volume`,
          detail: "Worth monitoring for panic-drop value once league-specific availability is connected.",
        }
      : null,
  ].filter(Boolean) as Array<{ tone: string; label: string; title: string; detail: string }>;

  return (
    <section className="brief-card">
      <div className="brief-head">
        <div>
          <div className="eyebrow">MIKE&apos;S BRIEF</div>
          <h2>What deserves your attention right now</h2>
        </div>
        <span className="brief-state">Public-data edition</span>
      </div>
      <div className="brief-items">
        {items.length ? items.map((item, index) => (
          <div className="brief-item" key={`${item.label}-${index}`}>
            <span className={`brief-icon ${item.tone}`}>{index + 1}</span>
            <div>
              <div className="brief-label">{item.label}</div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </div>
          </div>
        )) : <div className="empty">No meaningful public signals available right now.</div>}
      </div>
      <div className="brief-footer">
        Yahoo will turn this from league-agnostic signal detection into specific actions for each of your leagues.
      </div>
    </section>
  );
}
