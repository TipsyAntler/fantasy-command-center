import { yahooFantasyRequest, type YahooSession } from "@/lib/yahoo";

type Json = Record<string, unknown>;
type Player = {
  key: string; name: string; position: string; slot: string;
  status: string; team: string; percentOwned: number | null;
  seasonPoints: number | null; availability: string;
};
export const LEAGUES = [
  { id: "470.l.890742", short: "BM", expectedTeam: "Bowers' Castle" },
  { id: "470.l.864304", short: "LL", expectedTeam: "LaPorta Potty" },
];
const obj = (v: unknown): Json => v && typeof v === "object" && !Array.isArray(v) ? v as Json : {};
const str = (v: unknown): string => v === undefined || v === null || v === false ? "" : String(v);
const num = (v: unknown): number | null => v !== undefined && v !== null && v !== false && v !== "" && Number.isFinite(Number(v)) ? Number(v) : null;

function find(node: unknown, key: string, depth = 0): unknown {
  if (!node || typeof node !== "object" || depth > 18) return undefined;
  const item = node as Json;
  if (Object.prototype.hasOwnProperty.call(item, key)) return item[key];
  for (const value of Object.values(item)) {
    const found = find(value, key, depth + 1);
    if (found !== undefined) return found;
  }
  return undefined;
}
function entries(node: unknown, collectionKey: string, itemKey: string): unknown[] {
  const collection = obj(find(node, collectionKey));
  return Object.entries(collection)
    .filter(([key]) => /^\d+$/.test(key))
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([, value]) => obj(value)[itemKey])
    .filter(Boolean);
}
function parsePlayer(node: unknown, availability = ""): Player {
  const nameValue = find(node, "name");
  const name = typeof nameValue === "string" ? nameValue : str(obj(nameValue).full);
  const slotValue = find(node, "selected_position");
  const slot = str(find(slotValue, "position"));
  const percent = find(node, "percent_owned");
  const pointValue = find(node, "player_points");
  return {
    key: str(find(node, "player_key")),
    name: name || "Unknown player",
    position: str(find(node, "display_position") || find(node, "primary_position")),
    slot, status: str(find(node, "status")),
    team: str(find(node, "editorial_team_abbr")),
    percentOwned: num(find(percent, "value")),
    seasonPoints: num(find(pointValue, "total")),
    availability,
  };
}
function parseTeam(node: unknown) {
  const standing = find(node, "team_standings");
  const totals = find(standing, "outcome_totals");
  return {
    key: str(find(node, "team_key")),
    name: str(find(node, "name")),
    owned: str(find(node, "is_owned_by_current_login")) === "1",
    rank: num(find(standing, "rank")),
    wins: num(find(totals, "wins")),
    losses: num(find(totals, "losses")),
    ties: num(find(totals, "ties")),
    pointsFor: num(find(standing, "points_for")),
    pointsAgainst: num(find(standing, "points_against")),
  };
}
function parseTransactions(node: unknown) {
  return entries(node, "transactions", "transaction").slice(0, 12).map((item) => ({
    type: str(find(item, "type")),
    timestamp: num(find(item, "timestamp")),
    players: entries(item, "players", "player").map((player) => parsePlayer(player).name).filter((name) => name !== "Unknown player").slice(0, 5),
  }));
}
function makeNotes(starters: Player[], bench: Player[], ir: Player[], available: Record<string, Player[]>) {
  const notes: { priority: "urgent" | "review" | "info"; title: string; detail: string }[] = [];
  const trouble = new Set(["O", "OUT", "D", "DOUBTFUL", "IR", "PUP", "SUSP", "NA"]);
  for (const p of starters) {
    if (trouble.has(p.status.toUpperCase())) {
      const replacements = bench.filter((b) => b.position.split(",").some((pos) => p.position.includes(pos))).map((b) => b.name);
      notes.push({
        priority: "urgent", title: p.name + " is in a starting slot (" + p.status + ")",
        detail: replacements.length ? "Review bench alternatives: " + replacements.join(", ") : "Verify availability and check eligible free agents.",
      });
    } else if (["Q", "QUESTIONABLE"].includes(p.status.toUpperCase())) {
      notes.push({ priority: "review", title: "Monitor " + p.name + " (questionable)", detail: "Check the official injury report before lineup lock." });
    }
  }
  const rb = starters.concat(bench).filter((p) => p.position.includes("RB") && !trouble.has(p.status.toUpperCase()));
  if (rb.length < 4) notes.push({ priority: "review", title: "Running-back depth looks thin", detail: "Only " + rb.length + " available RBs are on the active roster. Compare Yahoo's available RBs before making a move." });
  for (const pos of ["RB", "WR", "TE"]) {
    const pool = available[pos] || [];
    if (pool.length) {
      notes.push({
        priority: "info", title: pos + " waiver watch: " + pool.slice(0, 3).map((p) => p.name).join(", "),
        detail: "Available in this specific league, sorted by Yahoo's overall rank. These are candidates to evaluate, not automatic adds.",
      });
    }
  }
  if (ir.length) notes.push({ priority: "info", title: ir.length + " player(s) in IR slots", detail: ir.map((p) => p.name + (p.status ? " (" + p.status + ")" : "")).join(", ") + ". Check return-to-play and roster eligibility." });
  return notes;
}
export async function getLeague(id: string, short: string, expectedTeam: string, session: YahooSession, origin: string) {
  const paths = [
    ["teams", "league/" + id + "/teams"],
    ["standings", "league/" + id + "/standings"],
    ["transactions", "league/" + id + "/transactions;count=15"],
    ["settings", "league/" + id + "/settings"],
    ...["RB", "WR", "TE", "QB"].map((position) => ["available_" + position, "league/" + id + "/players;status=A;position=" + position + ";sort=OR;count=25"]),
  ];
  const responses = await Promise.allSettled(paths.map(([, path]) => yahooFantasyRequest(path, session, origin)));
  const data: Record<string, unknown> = {};
  const errors: string[] = [];
  responses.forEach((result, index) => {
    if (result.status === "fulfilled") data[paths[index][0]] = result.value.data;
    else errors.push(paths[index][0] + ": " + (result.reason instanceof Error ? result.reason.message : "Request failed"));
  });
  const teams = entries(data.teams, "teams", "team").map(parseTeam);
  const standings = entries(data.standings, "teams", "team").map(parseTeam).sort((a, b) => (a.rank || 999) - (b.rank || 999));
  const team = teams.find((row) => row.owned) ||
    teams.find((row) => row.name.toLowerCase() === expectedTeam.toLowerCase()) ||
    standings.find((row) => row.name.toLowerCase() === expectedTeam.toLowerCase());
  // /teams does not contain standings; combine by stable Yahoo team key.
  const rankRow = standings.find((row) => row.key === team?.key) ||
    standings.find((row) => row.name.toLowerCase() === expectedTeam.toLowerCase());
  const me = team ? { ...team,
    rank: rankRow?.rank ?? team.rank,
    wins: rankRow?.wins ?? team.wins,
    losses: rankRow?.losses ?? team.losses,
    ties: rankRow?.ties ?? team.ties,
    pointsFor: rankRow?.pointsFor ?? team.pointsFor,
    pointsAgainst: rankRow?.pointsAgainst ?? team.pointsAgainst,
  } : rankRow;
  const rosterResult = me?.key
    ? await yahooFantasyRequest("team/" + me.key + "/roster", session, origin).then((r) => r.data).catch((error: unknown) => {
      errors.push("roster: " + (error instanceof Error ? error.message : "Request failed"));
      return null;
    })
    : null;
  if (!me) errors.push("Could not identify your team in the Yahoo league response");
  const roster = entries(rosterResult, "players", "player").map((player) => parsePlayer(player));
  const starters = roster.filter((p) => p.slot && !["BN", "IR", "IR+", "NA", "IL"].includes(p.slot));
  const bench = roster.filter((p) => p.slot === "BN");
  const ir = roster.filter((p) => ["IR", "IR+", "NA", "IL"].includes(p.slot));
  if (roster.length && !starters.length) errors.push("Yahoo roster positions were not parsed; lineup recommendations are withheld");
  const available: Record<string, Player[]> = {};
  for (const pos of ["RB", "WR", "TE", "QB"]) {
    available[pos] = entries(data["available_" + pos], "players", "player")
      .map((player) => parsePlayer(player, "Available"))
      .filter((p) => p.name !== "Unknown player").slice(0, 20);
  }
  const meta = find(data.teams, "league") || find(data.standings, "league");
  return {
    id, short, name: str(find(meta, "name")) || (short === "BM" ? "FF Big Money" : "Legendary LeBlanc"),
    week: num(find(meta, "current_week")) || 8,
    myTeam: me || null, standings, starters, bench, ir,
    available, recentTransactions: parseTransactions(data.transactions),
    notes: makeNotes(starters, bench, ir, available),
    rosterCount: roster.length, errors,
    source: "Yahoo Fantasy Sports API • read-only • live on refresh",
  };
}

export type YahooLeagueScout = Awaited<ReturnType<typeof getLeague>>;
