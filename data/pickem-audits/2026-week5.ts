export const week5PickemAudit = {
  week: 5,
  pool: "The SZN NFL Super Pick'em · NFL-575",
  asOf: "2026-10-11T08:22:00-04:00",
  games: [
    {
      matchup: "TB @ DAL",
      frozenLine: "TB +10.5",
      originalRecommendation: "TB +10.5",
      finalRecommendation: "TB +10.5",
      mikeSubmittedSide: "unconfirmed",
      closingMarket: "DAL -8.5 to -9.5",
      evidenceLabel: "frozen-number advantage with uncalibrated size",
      result: "TB 24, DAL 16",
      recommendationOutcome: "win",
      changeFlag: false,
      rationale: "The frozen pool line remained one to two points better than the final pregame market. Tampa won outright, so the FFCC recommendation covered. Mike's actual submitted side was not confirmed and is not inferred."
    },
    {
      matchup: "PHI @ JAX",
      frozenLine: "JAX -7.5 / PHI +7.5",
      originalRecommendation: "PHI +7.5",
      finalRecommendation: "JAX -7.5",
      mikeSubmittedSide: "unconfirmed",
      closingMarket: "Final pregame snapshot Oct 11 8:22 AM ET: JAX -7.5 roughly -114 to -120 versus PHI +7.5 even to -106; several books JAX -8",
      evidenceLabel: "small exact-line price lean",
      result: "pending",
      recommendationOutcome: "pending",
      changeFlag: true,
      rationale: "The final pregame exact-line board showed JAX -7.5 around -114 to -120 versus PHI +7.5 from even to -106, with several books already at Jacksonville -8. Philadelphia confirmed Saquon Barkley, DeVonta Smith, Drew Kendall, Hollywood Brown and Marcus Epps inactive, then also ruled Jonathan Greenard out after his pregame workout. The frozen -7.5 retained a small market price lean. This changes FFCC advice only and does not assume Mike's submitted side."
    }
  ]
};
