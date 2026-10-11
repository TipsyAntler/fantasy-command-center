export const week5PickemAudit = {
  week: 5,
  pool: "The SZN NFL Super Pick'em · NFL-575",
  asOf: "2026-10-11T05:40:00-04:00",
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
      closingMarket: "Pending; Oct 11 5:40 AM ET exact-line consensus JAX -7.5 with JAX roughly -112 to -115 and PHI -105 to -109",
      evidenceLabel: "small exact-line price lean",
      result: "pending",
      recommendationOutcome: "pending",
      changeFlag: true,
      rationale: "Fresh exact-line prices showed FanDuel JAX -114 / PHI -106, a comparable multi-book range of roughly JAX -112 to -115 versus PHI -105 to -109, and DraftKings JAX -108. The initial frozen-number advantage had disappeared, and the current exact-line consensus modestly favored Jacksonville after Philadelphia's major offensive losses. This changes FFCC advice only and does not assume Mike's submitted side."
    }
  ]
};
