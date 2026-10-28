export type ManualRosterPlayer = {
  name: string;
  position: string;
  slot?: string;
};

export type ManualLeague = {
  key: "bm" | "ll";
  leagueName: string;
  leagueId: string;
  teamName: string;
  snapshotLabel: string;
  format: string;
  roster: ManualRosterPlayer[];
  ir: ManualRosterPlayer[];
};

// Yahoo Week 8 "Starting Rosters" PDFs provided Oct 28, 2026 at 11:35–11:36 AM ET.
// These are provisional Yahoo lineup slots, not a confirmation that lineups are locked.
// The accompanying standings screenshots are Oct 28 post-waiver snapshots.
export const manualLeagues: ManualLeague[] = [
  {
    key: "bm",
    leagueName: "NFL FF BIG Money League - S8",
    leagueId: "890742",
    teamName: "Bowers' Castle",
    snapshotLabel: "Oct 28, 2026 Yahoo Week 8 post-waiver roster (11:35 AM ET); 3-4, 6th of 12; vs Do I Make You Randy?; Kyler Murray dropped for Bam Knight; lineup slots provisional",
    format: "12 teams · Half PPR · 3 WR + FLEX · no kicker",
    roster: [
      { name: "Jayden Daniels", position: "QB", slot: "QB" },
      { name: "Tony Pollard", position: "RB", slot: "RB" },
      { name: "Blake Corum", position: "RB", slot: "RB" },
      { name: "Jaxon Smith-Njigba", position: "WR", slot: "WR" },
      { name: "Omar Cooper Jr.", position: "WR", slot: "WR" },
      { name: "Tee Higgins", position: "WR", slot: "WR" },
      { name: "Brock Bowers", position: "TE", slot: "TE" },
      { name: "TreVeyon Henderson", position: "RB", slot: "FLEX" },
      { name: "Titans", position: "DEF", slot: "DEF" },
      { name: "Christian Kirk", position: "WR", slot: "BN" },
      { name: "Tyler Allgeier", position: "RB", slot: "BN" },
      { name: "Chris Olave", position: "WR", slot: "BN" },
      { name: "Dallas Goedert", position: "TE", slot: "BN" },
      { name: "Kimani Vidal", position: "RB", slot: "BN" },
      { name: "Bam Knight", position: "RB", slot: "BN" },
    ],
    ir: [{ name: "Brian Robinson Jr.", position: "RB", slot: "IR" }],
  },
  {
    key: "ll",
    leagueName: "Legendary LeBlanc League",
    leagueId: "864304",
    teamName: "LaPorta Potty",
    snapshotLabel: "Oct 28, 2026 Yahoo Week 8 post-waiver roster (11:36 AM ET); 1-6, 12th of 12; vs SC Wolfbirds; lineup slots provisional",
    format: "12 teams · Half PPR · 2 WR + FLEX · K + DEF",
    roster: [
      { name: "Brock Purdy", position: "QB", slot: "QB" },
      { name: "Ollie Gordon II", position: "RB", slot: "RB" },
      { name: "Omarion Hampton", position: "RB", slot: "RB" },
      { name: "Omar Cooper Jr.", position: "WR", slot: "WR" },
      { name: "DK Metcalf", position: "WR", slot: "WR" },
      { name: "Sam LaPorta", position: "TE", slot: "TE" },
      { name: "Amon-Ra St. Brown", position: "WR", slot: "FLEX" },
      { name: "Matt Gay", position: "K", slot: "K" },
      { name: "Titans", position: "DEF", slot: "DEF" },
      { name: "Tyler Allgeier", position: "RB", slot: "BN" },
      { name: "Emeka Egbuka", position: "WR", slot: "BN" },
      { name: "RJ Harvey", position: "RB", slot: "BN" },
      { name: "Kendrick Bourne", position: "WR", slot: "BN" },
      { name: "Breece Hall", position: "RB", slot: "BN" },
      { name: "Seth McGowan", position: "RB", slot: "BN" },
    ],
    ir: [
      { name: "Davante Adams", position: "WR", slot: "IR" },
      { name: "Kyle Monangai", position: "RB", slot: "IR" },
    ],
  },
];

export const rosterPlayerNames = Array.from(
  new Set(
    manualLeagues.flatMap((league) =>
      [...league.roster, ...league.ir]
        .filter((player) => !["DEF", "K"].includes(player.position))
        .map((player) => player.name),
    ),
  ),
);
