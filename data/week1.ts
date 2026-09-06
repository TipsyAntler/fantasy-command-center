export type Week1Game = {
  day: string;
  kickoff: string;
  away: string;
  home: string;
  favorite: string;
  spread: number;
  total: number;
};

export const week1MarketAsOf = "Sep 4 · BetMGM market snapshot via Yahoo Sports";

export const week1Games: Week1Game[] = [
  { day: "Wed 9/9", kickoff: "8:20 PM", away: "NE", home: "SEA", favorite: "SEA", spread: 3.5, total: 44.5 },
  { day: "Thu 9/10", kickoff: "8:35 PM", away: "SF", home: "LAR", favorite: "LAR", spread: 3.5, total: 48.5 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "TB", home: "CIN", favorite: "CIN", spread: 4, total: 50.5 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "ATL", home: "PIT", favorite: "PIT", spread: 3, total: 42 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "BUF", home: "HOU", favorite: "HOU", spread: 1, total: 44.5 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "BAL", home: "IND", favorite: "BAL", spread: 3.5, total: 48 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "CLE", home: "JAX", favorite: "JAX", spread: 8, total: 40.5 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "NYJ", home: "TEN", favorite: "TEN", spread: 1.5, total: 39.5 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "NO", home: "DET", favorite: "DET", spread: 7, total: 50 },
  { day: "Sun 9/13", kickoff: "1:00 PM", away: "CHI", home: "CAR", favorite: "CHI", spread: 3, total: 47.5 },
  { day: "Sun 9/13", kickoff: "4:25 PM", away: "MIA", home: "LV", favorite: "LV", spread: 3.5, total: 40.5 },
  { day: "Sun 9/13", kickoff: "4:25 PM", away: "ARI", home: "LAC", favorite: "LAC", spread: 10.5, total: 47 },
  { day: "Sun 9/13", kickoff: "4:25 PM", away: "WAS", home: "PHI", favorite: "PHI", spread: 5, total: 45.5 },
  { day: "Sun 9/13", kickoff: "4:25 PM", away: "GB", home: "MIN", favorite: "MIN", spread: 1.5, total: 45.5 },
  { day: "Sun 9/13", kickoff: "8:20 PM", away: "DAL", home: "NYG", favorite: "DAL", spread: 3, total: 48.5 },
  { day: "Mon 9/14", kickoff: "8:15 PM", away: "DEN", home: "KC", favorite: "KC", spread: 2.5, total: 43.5 },
];

export const earlySurvivorShortlist = [...week1Games]
  .sort((a, b) => b.spread - a.spread)
  .slice(0, 4);

export function confidenceForSpread(spread: number) {
  if (spread >= 7) return "High";
  if (spread >= 3.5) return "Solid";
  if (spread <= 1.5) return "Toss-up";
  return "Lean";
}
