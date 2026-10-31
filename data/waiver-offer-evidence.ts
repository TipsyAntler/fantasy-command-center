/**
 * Historical waiver-offer evidence transcribed from a user-supplied screenshot
 * of Yahoo Fantasy's desktop "Waiver Offers" tab on 2026-10-30.
 *
 * This is NOT a live API response. The Yahoo Fantasy documented league
 * transactions endpoint supplies completed moves, not the full set of losing
 * claims shown in Yahoo's website. Keep provenance visible in the UI.
 */
export type VerifiedWaiverOffer = {
  id: string;
  date: string;
  player: string;
  nflTeam: string;
  position: string;
  winner: string;
  winningPriority: number;
  unsuccessful: { team: string; priority: number }[];
};

export const VERIFIED_WAIVER_OFFERS: Record<"BM" | "LL", VerifiedWaiverOffer[]> = {
  BM: [
    {
      id: "bm-20261028-commanders", date: "2026-10-28", player: "Commanders",
      nflTeam: "WAS", position: "DEF", winner: "kushlifeDFS", winningPriority: 6,
      unsuccessful: [{ team: "I'm Your Huckleberry", priority: 9 }],
    },
    {
      id: "bm-20261028-bengals", date: "2026-10-28", player: "Bengals",
      nflTeam: "CIN", position: "DEF", winner: "Do I Make You Randy?", winningPriority: 4,
      unsuccessful: [{ team: "I'm Your Huckleberry", priority: 10 }],
    },
    {
      id: "bm-20261028-caleb-douglas", date: "2026-10-28", player: "Caleb Douglas",
      nflTeam: "MIA", position: "WR", winner: "Russini's Baby Daddy", winningPriority: 3,
      unsuccessful: [{ team: "I'm Your Huckleberry", priority: 11 }],
    },
    {
      id: "bm-20261021-jaylin-noel", date: "2026-10-21", player: "Jaylin Noel",
      nflTeam: "HOU", position: "WR", winner: "kushlifeDFS", winningPriority: 3,
      unsuccessful: [
        { team: "Do I Make You Randy?", priority: 7 },
        { team: "The Wet Darts", priority: 8 },
        { team: "I'm Your Huckleberry", priority: 10 },
      ],
    },
    {
      id: "bm-20261021-tyrone-tracy", date: "2026-10-21", player: "Tyrone Tracy Jr.",
      nflTeam: "NYG", position: "RB", winner: "The Money Team $200 12T", winningPriority: 3,
      unsuccessful: [{ team: "The Wet Darts", priority: 9 }],
    },
  ],
  LL: [],
};
