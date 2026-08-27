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
      ? "The important part is the acceleration: his recent four-hour add rate is running well ahead of his full-day pace, which can be an early sign that a new report, role change or manager reaction is spreading."
      : "That does not automatically make him a good pickup, but it is a useful market signal that fantasy managers are reacting to something.";
    const watch = status
      ? `He also carries a ${status} status, so the reason for the movement may be tied to availability or changing expectations.`
      : `Next step is to pair the movement with role, depth-chart and recent-news context before treating it as actionable.`;
    return [movement, pace, watch];
  }

  if (kind === "drop") {
    const movement = count
      ? `${name} has been dropped ${count.toLocaleString()} times across Sleeper leagues in the current 24-hour window.`
      : `${name} is seeing notable drop volume across Sleeper leagues.`;
    const caution = "Drops are especially worth checking for overreaction: injury scares, depth-chart news, bye-week churn and shallow-league roster pressure can all create value that the raw drop count misses.";
    const watch = status
      ? `Current status flag: ${status}${practice ? `; practice participation is listed as ${practice}` : ""}.`
      : `Current player metadata lists him as a ${position} for ${team}.`;
    return [movement, caution, watch];
  }

  if (kind === "injury") {
    const current = `${name} currently carries ${status ? `a ${status} designation` : "an active practice/status flag"}${practice ? ` with practice participation listed as ${practice}` : ""}.`;
    const implication = "The fantasy effect depends on whether this changes expected snaps, role or game availability; the designation alone is a flag to investigate, not a start/sit verdict.";
    const watch = `We will eventually attach the latest sourced news and a league-specific outlook here so the note can distinguish routine maintenance from something that materially changes value.`;
    return [current, implication, watch];
  }

  return [
    `${name} is appearing here because of current fantasy-market activity rather than a ranking judgment.`,
    `The app will combine this signal with recent news, role changes, projections and your league context as those data layers come online.`,
  ];
}

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
    <details className={`player-context${compact ? " compact" : ""}`}>
      <summary>
        <span>Context</span>
        <span className="context-plus" aria-hidden="true">+</span>
      </summary>
      <div className="context-body">
        {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <div className="context-source">Current note is signal-derived from Sleeper player/status and add/drop data. Recent-news sourcing will be added separately.</div>
      </div>
    </details>
  );
}
