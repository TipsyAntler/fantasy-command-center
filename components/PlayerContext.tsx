import type { CSSProperties } from "react";
import type { SleeperPlayer } from "@/lib/sleeper";

type ContextKind = "add" | "drop" | "injury" | "market";

function nameOf(player?: SleeperPlayer) {
  if (!player) return "This player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "This player";
}

function buildBlurb({
  player,
  kind,
  count,
  heatingUp,
}: {
  player?: SleeperPlayer;
  kind: ContextKind;
  count?: number;
  heatingUp?: boolean;
}) {
  const name = nameOf(player);
  const team = player?.team || "free-agent status";
  const position = player?.position || player?.fantasy_positions?.[0] || "player";
  const status = player?.injury_status;
  const practice = player?.practice_participation;

  if (kind === "add") {
    const movement = count
      ? `${name} has been added ${count.toLocaleString()} times across Sleeper leagues in the current 24-hour window.`
      : `${name} is drawing meaningful add activity across Sleeper leagues.`;
    const pace = heatingUp
      ? "The important part is the acceleration: the recent four-hour add rate is running well ahead of the full-day pace, which can be an early sign that a new report, role change or manager reaction is spreading."
      : "That does not automatically make this a good pickup, but it is a useful market signal that fantasy managers are reacting to something.";
    const watch = status
      ? `There is also a ${status} status flag, so the movement may be tied to availability or changing expectations.`
      : "Next step is to pair the movement with role, depth-chart and recent-news context before treating it as actionable.";
    return [movement, pace, watch];
  }

  if (kind === "drop") {
    const movement = count
      ? `${name} has been dropped ${count.toLocaleString()} times across Sleeper leagues in the current 24-hour window.`
      : `${name} is seeing notable drop volume across Sleeper leagues.`;
    const caution = "Drops are especially worth checking for overreaction: injury scares, depth-chart news, bye-week churn and shallow-league roster pressure can all create value that the raw drop count misses.";
    const watch = status
      ? `Current status flag: ${status}${practice ? `; practice participation is listed as ${practice}` : ""}.`
      : `Current player metadata lists this as a ${position} for ${team}.`;
    return [movement, caution, watch];
  }

  if (kind === "injury") {
    const current = `${name} currently carries ${status ? `a ${status} designation` : "an active practice/status flag"}${practice ? ` with practice participation listed as ${practice}` : ""}.`;
    const implication = "The fantasy effect depends on whether this changes expected snaps, role or game availability; the designation alone is a flag to investigate, not a start/sit verdict.";
    const watch = "We will attach the latest sourced news and a league-specific outlook here so the note can distinguish routine maintenance from something that materially changes value.";
    return [current, implication, watch];
  }

  return [
    `${name} is appearing here because of current fantasy-market activity rather than a ranking judgment.`,
    "The app will combine this signal with recent news, role changes, projections and your league context as those data layers come online.",
  ];
}

const detailsStyle: CSSProperties = {
  marginTop: 7,
  maxWidth: 620,
};

const summaryStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  cursor: "pointer",
  color: "#93a4b4",
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: ".04em",
  listStyle: "none",
  userSelect: "none",
};

const plusStyle: CSSProperties = {
  display: "inline-grid",
  placeItems: "center",
  width: 15,
  height: 15,
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 5,
  color: "#61e2a8",
  fontSize: 11,
  lineHeight: 1,
};

const bodyStyle: CSSProperties = {
  marginTop: 8,
  padding: "10px 11px",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 10,
  background: "rgba(7,16,24,.48)",
};

const paragraphStyle: CSSProperties = {
  margin: "0 0 6px",
  color: "#aab8c4",
  fontSize: 10,
  lineHeight: 1.5,
};

const sourceStyle: CSSProperties = {
  marginTop: 8,
  paddingTop: 7,
  borderTop: "1px solid rgba(255,255,255,.06)",
  color: "#617486",
  fontSize: 9,
  lineHeight: 1.45,
};

export default function PlayerContext({
  player,
  kind,
  count,
  heatingUp,
  compact = false,
}: {
  player?: SleeperPlayer;
  kind: ContextKind;
  count?: number;
  heatingUp?: boolean;
  compact?: boolean;
}) {
  const paragraphs = buildBlurb({ player, kind, count, heatingUp });

  return (
    <details style={{ ...detailsStyle, marginTop: compact ? 5 : 9 }}>
      <summary style={summaryStyle}>
        <span>Context</span>
        <span style={plusStyle} aria-hidden="true">+</span>
      </summary>
      <div style={bodyStyle}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} style={{ ...paragraphStyle, marginBottom: index === paragraphs.length - 1 ? 0 : 6 }}>{paragraph}</p>
        ))}
        <div style={sourceStyle}>Current note is signal-derived from Sleeper player/status and add/drop data. Recent-news sourcing will be added separately.</div>
      </div>
    </details>
  );
}
