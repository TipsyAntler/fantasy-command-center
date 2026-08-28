# Trade Intelligence Roadmap

Activate after Yahoo Fantasy Sports API approval.

## Goal

Make FFCC better at proposing trades that real league-mates may actually accept, not merely trades that look fair on a generic value chart.

## Track every league transaction

For each connected league, store normalized trade history with:

- date and week
- owners/teams involved
- players and picks/assets exchanged
- each player's position, role and contemporaneous market value
- roster construction before and after the trade
- standings / contention context at the time

## Build owner trading profiles

Learn league-specific behavior over time, including:

- who trades frequently vs. rarely
- preferred positions and roster archetypes
- whether an owner tends to buy stars or depth
- willingness to consolidate multiple players for one elite player
- willingness to take injured/upside players
- tendencies to value name recognition, youth, recent performance, positional scarcity, favorite teams, etc. when evidence supports it
- typical timing: early season, after losses, around byes, near playoffs, etc.
- repeat trading partners
- observed overpay/underpay patterns relative to market value

Do not infer a preference from one transaction alone. Surface confidence and supporting examples.

## Offer construction

When evaluating a target player, FFCC should combine:

1. generic/market trade value
2. both rosters' actual needs and surplus
3. league scoring/settings
4. standings/playoff context
5. the target owner's observed trade behavior and player valuation patterns
6. recent accepted trades in the same league

Output a small offer ladder:

- **Opening offer** — credible without unnecessarily bidding against ourselves
- **Likely accept zone** — best estimate from owner behavior + roster needs
- **Walk-away price** — point where the deal stops helping us

Include why the offer may appeal to that specific owner and alternative constructions using players they historically appear to value.

## Useful views

- League trade activity leaderboard
- Owner trade profile / tendencies
- Recent accepted trades with value-at-the-time context
- Trade target finder based on mutual roster fit
- Suggested viable offers for a selected player
- Confidence level based on amount and recency of owner-specific evidence

## Guardrails

- Treat owner preferences as probabilistic, evidence-based tendencies, not facts.
- Separate league-specific evidence from generic market value.
- Do not auto-submit or accept trades; Yahoo integration remains read-only.
