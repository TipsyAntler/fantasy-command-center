const SLEEPER_BASE = "https://api.sleeper.app/v1";

export type NflState = {
  week?: number;
  display_week?: number;
  season?: string;
  season_type?: string;
  season_start_date?: string;
  leg?: number;
};

export type SleeperPlayer = {
  player_id?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  team?: string | null;
  position?: string | null;
  fantasy_positions?: string[] | null;
  injury_status?: string | null;
  practice_participation?: string | null;
  depth_chart_order?: number | null;
  search_rank?: number | null;
  status?: string | null;
};

export type TrendRow = {
  player_id: string;
  count: number;
};

export type HydratedTrend = TrendRow & {
  player?: SleeperPlayer;
  shortRate?: number;
  longRate?: number;
  heatingUp?: boolean;
};

async function sleeperFetch<T>(path: string, revalidate: number): Promise<T> {
  const response = await fetch(`${SLEEPER_BASE}${path}`, {
    next: { revalidate },
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Sleeper API ${response.status}: ${path}`);
  }

  return response.json() as Promise<T>;
}

export function getNflState() {
  return sleeperFetch<NflState>("/state/nfl", 300);
}

export function getTrending(type: "add" | "drop", hours: number, limit: number) {
  return sleeperFetch<TrendRow[]>(
    `/players/nfl/trending/${type}?lookback_hours=${hours}&limit=${limit}`,
    300,
  );
}

export function getPlayers() {
  // Sleeper asks that the full player map not be fetched more than once per day.
  return sleeperFetch<Record<string, SleeperPlayer>>("/players/nfl?active=true", 86400);
}

function playerName(player?: SleeperPlayer) {
  if (!player) return "Unknown player";
  return player.full_name || [player.first_name, player.last_name].filter(Boolean).join(" ") || "Unknown player";
}

export async function getDashboardData() {
  const [stateResult, add4Result, add24Result, drop24Result, playersResult] =
    await Promise.allSettled([
      getNflState(),
      getTrending("add", 4, 30),
      getTrending("add", 24, 30),
      getTrending("drop", 24, 20),
      getPlayers(),
    ]);

  const state = stateResult.status === "fulfilled" ? stateResult.value : null;
  const add4 = add4Result.status === "fulfilled" ? add4Result.value : [];
  const add24 = add24Result.status === "fulfilled" ? add24Result.value : [];
  const drop24 = drop24Result.status === "fulfilled" ? drop24Result.value : [];
  const players = playersResult.status === "fulfilled" ? playersResult.value : {};

  const add4Map = new Map(add4.map((row) => [row.player_id, row.count]));

  const adds: HydratedTrend[] = add24.map((row) => {
    const shortCount = add4Map.get(row.player_id) || 0;
    const shortRate = shortCount / 4;
    const longRate = row.count / 24;
    return {
      ...row,
      player: players[row.player_id],
      shortRate,
      longRate,
      heatingUp: row.count >= 8 && shortRate > longRate * 1.45,
    };
  });

  const drops: HydratedTrend[] = drop24.map((row) => ({
    ...row,
    player: players[row.player_id],
  }));

  const fantasyPositions = new Set(["QB", "RB", "WR", "TE"]);
  const injuries = Object.values(players)
    .filter((player) => {
      const positions = player.fantasy_positions || (player.position ? [player.position] : []);
      const fantasyRelevant = positions.some((position) => fantasyPositions.has(position));
      return fantasyRelevant && Boolean(player.injury_status || player.practice_participation);
    })
    .sort((a, b) => (a.search_rank ?? 99999) - (b.search_rank ?? 99999))
    .slice(0, 18);

  return {
    state,
    adds,
    drops,
    injuries,
    fetchedAt: new Date().toISOString(),
    errors: {
      state: stateResult.status === "rejected",
      trends: add24Result.status === "rejected" || drop24Result.status === "rejected",
      players: playersResult.status === "rejected",
    },
    helpers: { playerName },
  };
}
