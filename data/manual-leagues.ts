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

export const manualLeagues: ManualLeague[] = [
  {
    key: "bm",
    leagueName: "NFL FF BIG Money League - S8",
    leagueId: "890742",
    teamName: "Bower's Castle",
    snapshotLabel: "Manual snapshot updated Sep 23 from latest Week 3 Yahoo screenshots",
    format: "12 teams · Half PPR · 3 WR + FLEX · no kicker",
    roster: [
      { name: "C.J. Stroud", position: "QB", slot: "QB" },
      { name: "Tony Pollard", position: "RB", slot: "RB" },
      { name: "TreVeyon Henderson", position: "RB", slot: "RB" },
      { name: "Tee Higgins", position: "WR", slot: "WR" },
      { name: "Chris Olave", position: "WR", slot: "WR" },
      { name: "Jaxon Smith-Njigba", position: "WR", slot: "WR" },
      { name: "Brock Bowers", position: "TE", slot: "TE" },
      { name: "Blake Corum", position: "RB", slot: "FLEX" },
      { name: "Patriots", position: "DEF", slot: "DEF" },
      { name: "Dallas Goedert", position: "TE", slot: "BN" },
      { name: "Rashod Bateman", position: "WR", slot: "BN" },
      { name: "Brian Robinson Jr.", position: "RB", slot: "BN" },
      { name: "Dontayvion Wicks", position: "WR", slot: "BN" },
      { name: "Emanuel Wilson", position: "RB", slot: "BN" },
      { name: "Jauan Jennings", position: "WR", slot: "BN" },
    ],
    ir: [
      { name: "Jayden Daniels", position: "QB", slot: "IR" },
    ],
  },
  {
    key: "ll",
    leagueName: "Legendary LeBlanc League",
    leagueId: "864304",
    teamName: "LaPorta Potty",
    snapshotLabel: "Manual snapshot updated Sep 23 from latest Week 3 Yahoo screenshots",
    format: "10 teams · Half PPR · 2 WR + FLEX · K + DEF",
    roster: [
      { name: "Brock Purdy", position: "QB", slot: "QB" },
      { name: "Omarion Hampton", position: "RB", slot: "RB" },
      { name: "Breece Hall", position: "RB", slot: "RB" },
      { name: "Amon-Ra St. Brown", position: "WR", slot: "WR" },
      { name: "Emeka Egbuka", position: "WR", slot: "WR" },
      { name: "Sam LaPorta", position: "TE", slot: "TE" },
      { name: "Davante Adams", position: "WR", slot: "FLEX" },
      { name: "Harrison Mevis", position: "K", slot: "K" },
      { name: "Jaguars", position: "DEF", slot: "DEF" },
      { name: "DK Metcalf", position: "WR", slot: "BN" },
      { name: "RJ Harvey", position: "RB", slot: "BN" },
      { name: "Kyle Monangai", position: "RB", slot: "BN" },
      { name: "Khalil Shakir", position: "WR", slot: "BN" },
      { name: "Tyler Allgeier", position: "RB", slot: "BN" },
      { name: "Kaelon Black", position: "RB", slot: "BN" },
    ],
    ir: [
      { name: "James Conner", position: "RB", slot: "IR" },
      { name: "Isiah Pacheco", position: "RB", slot: "IR" },
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
