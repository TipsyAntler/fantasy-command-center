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
    teamName: "Bowers' Castle",
    snapshotLabel: "Oct 18 Yahoo Week 6 screenshots · visible starters, bench and Christian Kirk IR confirmed",
    format: "12 teams · Half PPR · 3 WR + FLEX · no kicker",
    roster: [
      { name: "Jayden Daniels", position: "QB", slot: "QB" },
      { name: "Tony Pollard", position: "RB", slot: "RB" },
      { name: "Tyler Allgeier", position: "RB", slot: "RB" },
      { name: "Chris Olave", position: "WR", slot: "WR" },
      { name: "Jaxon Smith-Njigba", position: "WR", slot: "WR" },
      { name: "Omar Cooper Jr.", position: "WR", slot: "WR" },
      { name: "Brock Bowers", position: "TE", slot: "TE" },
      { name: "MarShawn Lloyd", position: "RB", slot: "FLEX" },
      { name: "Ravens", position: "DEF", slot: "DEF" },
      { name: "Dallas Goedert", position: "TE", slot: "BN" },
      { name: "Dontayvion Wicks", position: "WR", slot: "BN" },
      { name: "Blake Corum", position: "RB", slot: "BN" },
      { name: "TreVeyon Henderson", position: "RB", slot: "BN" },
      { name: "Tee Higgins", position: "WR", slot: "BN" },
      { name: "Brian Robinson Jr.", position: "RB", slot: "BN" },
    ],
    // IR slot confirmed in Oct 18 Yahoo screenshot.
    ir: [{ name: "Christian Kirk", position: "WR", slot: "IR" }],
  },
  {
    key: "ll",
    leagueName: "Legendary LeBlanc League",
    leagueId: "864304",
    teamName: "LaPorta Potty",
    snapshotLabel: "Oct 18 Yahoo Week 6 screenshots · Higbee starts at TE; visible starters, bench and IR confirmed",
    format: "12 teams per Yahoo Week 6 screenshot · Half PPR · 2 WR + FLEX · K + DEF",
    roster: [
      { name: "Brock Purdy", position: "QB", slot: "QB" },
      { name: "Omarion Hampton", position: "RB", slot: "RB" },
      { name: "Tyler Allgeier", position: "RB", slot: "RB" },
      { name: "Emeka Egbuka", position: "WR", slot: "WR" },
      { name: "DK Metcalf", position: "WR", slot: "WR" },
      { name: "Tyler Higbee", position: "TE", slot: "TE" },
      { name: "Davante Adams", position: "WR", slot: "FLEX" },
      { name: "Matt Gay", position: "K", slot: "K" },
      { name: "Colts", position: "DEF", slot: "DEF" },
      { name: "Kimani Vidal", position: "RB", slot: "BN" },
      { name: "Sam LaPorta", position: "TE", slot: "BN" },
      { name: "Ollie Gordon II", position: "RB", slot: "BN" },
      { name: "Amon-Ra St. Brown", position: "WR", slot: "BN" },
      { name: "RJ Harvey", position: "RB", slot: "BN" },
      { name: "Kendrick Bourne", position: "WR", slot: "BN" },
    ],
    ir: [
      { name: "Breece Hall", position: "RB", slot: "IR" },
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
