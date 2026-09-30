export type Week4PickemAuditEntry = {
  auditedAt: string;
  matchup: string;
  frozenLine: string;
  previousSide: string;
  newSide: string;
  evidenceLabel: string;
  source: string;
  pairedPrices: { bookSample: number; favoritePrice: number; underdogPrice: number }[];
  devigConsensus: number;
  explanation: string;
  result?: string;
};

export const week4PickemAudits: Week4PickemAuditEntry[] = [
  {
    auditedAt: "2026-09-30 08:43 ET",
    matchup: "JAX @ CIN",
    frozenLine: "CIN -2.5 / JAX +2.5",
    previousSide: "JAX +2.5",
    newSide: "CIN -2.5",
    evidenceLabel: "small exact-line price lean",
    source: "VegasInsider multi-book board, retrieved Sep 30, 2026 at 8:43 AM ET; opening/article snapshots excluded from the calculation.",
    pairedPrices: [
      { bookSample: 1, favoritePrice: -110, underdogPrice: -103 },
      { bookSample: 2, favoritePrice: -112, underdogPrice: -105 },
      { bookSample: 3, favoritePrice: -110, underdogPrice: -110 },
      { bookSample: 4, favoritePrice: -113, underdogPrice: -108 },
      { bookSample: 5, favoritePrice: -110, underdogPrice: -110 },
      { bookSample: 6, favoritePrice: -113, underdogPrice: -108 },
      { bookSample: 7, favoritePrice: -118, underdogPrice: -103 },
      { bookSample: 8, favoritePrice: -115, underdogPrice: -105 },
    ],
    devigConsensus: 0.5067,
    explanation: "All eight comparable exact-line pairs were balanced or shaded toward Cincinnati. Proportional de-vig produces a median 50.66% and mean 50.67% Cincinnati cover estimate. That is enough to replace the prior transparent tie choice, but not enough for elevated confidence.",
  },
];
