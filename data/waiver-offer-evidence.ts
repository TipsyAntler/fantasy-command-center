/**
 * Screenshot-verified historical Yahoo Fantasy desktop Waiver Offers.
 * Big Money and Legendary LeBlanc 2026 waiver offers from Sep 16 to Oct 28.
 * Sources: user-provided Yahoo desktop Waiver Offers screenshots, Oct 30, 2026.
 * This file is not live Yahoo API data and does not refresh automatically.
 * Preserve source distinction from live completed transactions.
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
  "BM": [
    {
      "id": "bm-20261028-commanders",
      "date": "2026-10-28",
      "player": "Commanders",
      "nflTeam": "WAS",
      "position": "DEF",
      "winner": "kushlifeDFS",
      "winningPriority": 6,
      "unsuccessful": [
        {
          "team": "I'm Your Huckleberry",
          "priority": 9
        }
      ]
    },
    {
      "id": "bm-20261028-bengals",
      "date": "2026-10-28",
      "player": "Bengals",
      "nflTeam": "CIN",
      "position": "DEF",
      "winner": "Do I Make You Randy?",
      "winningPriority": 4,
      "unsuccessful": [
        {
          "team": "I'm Your Huckleberry",
          "priority": 10
        }
      ]
    },
    {
      "id": "bm-20261028-caleb-douglas",
      "date": "2026-10-28",
      "player": "Caleb Douglas",
      "nflTeam": "MIA",
      "position": "WR",
      "winner": "Russini's Baby Daddy",
      "winningPriority": 3,
      "unsuccessful": [
        {
          "team": "I'm Your Huckleberry",
          "priority": 11
        }
      ]
    },
    {
      "id": "bm-20261021-jaylin-noel",
      "date": "2026-10-21",
      "player": "Jaylin Noel",
      "nflTeam": "HOU",
      "position": "WR",
      "winner": "kushlifeDFS",
      "winningPriority": 3,
      "unsuccessful": [
        {
          "team": "Do I Make You Randy?",
          "priority": 7
        },
        {
          "team": "The Wet Darts",
          "priority": 8
        },
        {
          "team": "I'm Your Huckleberry",
          "priority": 10
        }
      ]
    },
    {
      "id": "bm-20261021-tyrone-tracy-jr",
      "date": "2026-10-21",
      "player": "Tyrone Tracy Jr.",
      "nflTeam": "NYG",
      "position": "RB",
      "winner": "The Money Team $200 12T",
      "winningPriority": 3,
      "unsuccessful": [
        {
          "team": "The Wet Darts",
          "priority": 9
        }
      ]
    },
    {
      "id": "bm-20261014-germie-bernard",
      "date": "2026-10-14",
      "player": "Germie Bernard",
      "nflTeam": "PIT",
      "position": "WR",
      "winner": "I'm Your Huckleberry",
      "winningPriority": 10,
      "unsuccessful": [
        {
          "team": "The Price Is Wrong",
          "priority": 12
        }
      ]
    },
    {
      "id": "bm-20261014-dameon-pierce",
      "date": "2026-10-14",
      "player": "Dameon Pierce",
      "nflTeam": "PHI",
      "position": "RB",
      "winner": "The Price Is Wrong",
      "winningPriority": 8,
      "unsuccessful": [
        {
          "team": "Bowers' Castle",
          "priority": 9
        }
      ]
    },
    {
      "id": "bm-20261014-patriots",
      "date": "2026-10-14",
      "player": "Patriots",
      "nflTeam": "NE",
      "position": "DEF",
      "winner": "I'm Your Huckleberry",
      "winningPriority": 7,
      "unsuccessful": [
        {
          "team": "The Wet Darts",
          "priority": 8
        }
      ]
    },
    {
      "id": "bm-20261014-xavier-worthy",
      "date": "2026-10-14",
      "player": "Xavier Worthy",
      "nflTeam": "KC",
      "position": "WR",
      "winner": "The Price Is Wrong",
      "winningPriority": 4,
      "unsuccessful": [
        {
          "team": "Do I Make You Randy?",
          "priority": 6
        },
        {
          "team": "I'm Your Huckleberry",
          "priority": 10
        }
      ]
    },
    {
      "id": "bm-20261007-keon-coleman",
      "date": "2026-10-07",
      "player": "Keon Coleman",
      "nflTeam": "BUF",
      "position": "WR",
      "winner": "Russini's Baby Daddy",
      "winningPriority": 6,
      "unsuccessful": [
        {
          "team": "Bowers' Castle",
          "priority": 7
        }
      ]
    },
    {
      "id": "bm-20261007-will-shipley",
      "date": "2026-10-07",
      "player": "Will Shipley",
      "nflTeam": "PHI",
      "position": "RB",
      "winner": "The Money Team $200 12T",
      "winningPriority": 4,
      "unsuccessful": [
        {
          "team": "Russini's Baby Daddy",
          "priority": 8
        },
        {
          "team": "Bowers' Castle",
          "priority": 9
        },
        {
          "team": "I'm Your Huckleberry",
          "priority": 12
        }
      ]
    },
    {
      "id": "bm-20260930-steelers",
      "date": "2026-09-30",
      "player": "Steelers",
      "nflTeam": "PIT",
      "position": "DEF",
      "winner": "I'm Your Huckleberry",
      "winningPriority": 4,
      "unsuccessful": [
        {
          "team": "The Wet Darts",
          "priority": 11
        }
      ]
    },
    {
      "id": "bm-20260930-jaylen-wright",
      "date": "2026-09-30",
      "player": "Jaylen Wright",
      "nflTeam": "MIA",
      "position": "RB",
      "winner": "Bowers' Castle",
      "winningPriority": 4,
      "unsuccessful": [
        {
          "team": "The Wet Darts",
          "priority": 5
        },
        {
          "team": "2-Min Drill Rix027",
          "priority": 9
        },
        {
          "team": "The Price Is Wrong",
          "priority": 10
        }
      ]
    },
    {
      "id": "bm-20260930-kalif-raymond",
      "date": "2026-09-30",
      "player": "Kalif Raymond",
      "nflTeam": "CHI",
      "position": "WR",
      "winner": "Russini's Baby Daddy",
      "winningPriority": 3,
      "unsuccessful": [
        {
          "team": "The Wet Darts",
          "priority": 6
        },
        {
          "team": "I'm Your Huckleberry",
          "priority": 8
        }
      ]
    },
    {
      "id": "bm-20260930-ollie-gordon-ii",
      "date": "2026-09-30",
      "player": "Ollie Gordon II",
      "nflTeam": "MIA",
      "position": "RB",
      "winner": "kushlifeDFS",
      "winningPriority": 1,
      "unsuccessful": [
        {
          "team": "Jew lives matter",
          "priority": 5
        },
        {
          "team": "Bowers' Castle",
          "priority": 6
        },
        {
          "team": "The Wet Darts",
          "priority": 7
        },
        {
          "team": "Do I Make You Randy?",
          "priority": 8
        },
        {
          "team": "I'm Your Huckleberry",
          "priority": 9
        },
        {
          "team": "The Price Is Wrong",
          "priority": 12
        }
      ]
    },
    {
      "id": "bm-20260925-alvin-kamara",
      "date": "2026-09-25",
      "player": "Alvin Kamara",
      "nflTeam": "NO",
      "position": "RB",
      "winner": "2-Min Drill Rix027",
      "winningPriority": 3,
      "unsuccessful": [
        {
          "team": "The Price Is Wrong",
          "priority": 5
        },
        {
          "team": "I'm Your Huckleberry",
          "priority": 11
        }
      ]
    },
    {
      "id": "bm-20260923-emanuel-wilson",
      "date": "2026-09-23",
      "player": "Emanuel Wilson",
      "nflTeam": "SEA",
      "position": "RB",
      "winner": "Bowers' Castle",
      "winningPriority": 5,
      "unsuccessful": [
        {
          "team": "Jew lives matter",
          "priority": 12
        }
      ]
    },
    {
      "id": "bm-20260916-buccaneers",
      "date": "2026-09-16",
      "player": "Buccaneers",
      "nflTeam": "TB",
      "position": "DEF",
      "winner": "Do I Make You Randy?",
      "winningPriority": 7,
      "unsuccessful": [
        {
          "team": "I'm Your Huckleberry",
          "priority": 8
        }
      ]
    }
  ],
  "LL": [
  {
    "id": "ll-20261028-jaguars",
    "date": "2026-10-28",
    "player": "Jaguars",
    "nflTeam": "JAX",
    "position": "DEF",
    "winner": "Sunday Scaries",
    "winningPriority": 5,
    "unsuccessful": [
      {
        "team": "AJ Brown Baggin",
        "priority": 11
      }
    ]
  },
  {
    "id": "ll-20261021-omar-cooper-jr",
    "date": "2026-10-21",
    "player": "Omar Cooper Jr.",
    "nflTeam": "NYJ",
    "position": "WR",
    "winner": "LaPorta Potty",
    "winningPriority": 9,
    "unsuccessful": [
      {
        "team": "Likely a Swiftie",
        "priority": 11
      }
    ]
  },
  {
    "id": "ll-20261021-tyrone-tracy-jr",
    "date": "2026-10-21",
    "player": "Tyrone Tracy Jr.",
    "nflTeam": "NYG",
    "position": "RB",
    "winner": "Likely a Swiftie",
    "winningPriority": 9,
    "unsuccessful": [
      {
        "team": "AJ Brown Baggin",
        "priority": 10
      }
    ]
  },
  {
    "id": "ll-20261021-demario-douglas",
    "date": "2026-10-21",
    "player": "DeMario Douglas",
    "nflTeam": "NE",
    "position": "WR",
    "winner": "Super Bowl Cut",
    "winningPriority": 9,
    "unsuccessful": [
      {
        "team": "AJ Brown Baggin",
        "priority": 11
      }
    ]
  },
  {
    "id": "ll-20261007-will-shipley",
    "date": "2026-10-07",
    "player": "Will Shipley",
    "nflTeam": "PHI",
    "position": "RB",
    "winner": "LaPorta Potty",
    "winningPriority": 10,
    "unsuccessful": [
      {
        "team": "Likely a Swiftie",
        "priority": 12
      }
    ]
  },
  {
    "id": "ll-20260930-jaylen-wright",
    "date": "2026-09-30",
    "player": "Jaylen Wright",
    "nflTeam": "MIA",
    "position": "RB",
    "winner": "Likely a Swiftie",
    "winningPriority": 5,
    "unsuccessful": [
      {
        "team": "LaPorta Potty",
        "priority": 11
      }
    ]
  },
  {
    "id": "ll-20260930-will-reichard",
    "date": "2026-09-30",
    "player": "Will Reichard",
    "nflTeam": "MIN",
    "position": "K",
    "winner": "AJ Brown Baggin",
    "winningPriority": 5,
    "unsuccessful": [
      {
        "team": "Everybody Hurts",
        "priority": 9
      }
    ]
  },
  {
    "id": "ll-20260930-ollie-gordon-ii",
    "date": "2026-09-30",
    "player": "Ollie Gordon II",
    "nflTeam": "MIA",
    "position": "RB",
    "winner": "LaPorta Potty",
    "winningPriority": 4,
    "unsuccessful": [
      {
        "team": "AJ Brown Baggin",
        "priority": 6
      },
      {
        "team": "Likely a Swiftie",
        "priority": 7
      }
    ]
  },
  {
    "id": "ll-20260923-harrison-butker",
    "date": "2026-09-23",
    "player": "Harrison Butker",
    "nflTeam": "KC",
    "position": "K",
    "winner": "AJ Brown Baggin",
    "winningPriority": 11,
    "unsuccessful": [
      {
        "team": "Likely a Swiftie",
        "priority": 12
      }
    ]
  },
  {
    "id": "ll-20260923-tre-tucker",
    "date": "2026-09-23",
    "player": "Tre Tucker",
    "nflTeam": "LV",
    "position": "WR",
    "winner": "First Down and Goal",
    "winningPriority": 3,
    "unsuccessful": [
      {
        "team": "Likely a Swiftie",
        "priority": 12
      }
    ]
  },
  {
    "id": "ll-20260916-kaelon-black",
    "date": "2026-09-16",
    "player": "Kaelon Black",
    "nflTeam": "SF",
    "position": "RB",
    "winner": "LaPorta Potty",
    "winningPriority": 4,
    "unsuccessful": [
      {
        "team": "Likely a Swiftie",
        "priority": 12
      }
    ]
  }
]
};
