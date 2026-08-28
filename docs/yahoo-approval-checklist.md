# Yahoo Approval Checklist

When Yahoo Fantasy Sports API access is approved:

## League connection
- Connect Yahoo OAuth and secure refresh-token storage.
- Sync every authorized league's settings, scoring, teams, rosters, standings, matchups, player availability, transactions and draft metadata.
- Preserve league-specific context rather than blending leagues together.

## Smart alerts
- Persist Web Push subscriptions and watcher state.
- Add VAPID-backed background push sender.
- Add frequent watcher/scheduler on a free tier where practical.
- Injury-handcuff alerts: starter injury/practice downgrade -> identify next-man-up -> check actual league availability -> compare against roster/drop options -> alert only if actionable.
- Valuable-drop alerts: monitor league drops -> compare dropped player against roster/needs -> notify when claim/add clears value threshold.
- Market-spike alerts: combine public add velocity/news/injuries with actual Yahoo availability.
- Deep-link alerts to FFCC decision pages and, when reliable, the relevant Yahoo league/player page.
- Add deduplication, cooldowns, thresholds and quiet-hours logic.

## Trade intelligence
- Track every completed trade by league, owner, date/week, assets exchanged and roster context.
- Identify active vs. reluctant trading owners.
- Build evidence-based owner trade profiles: positions/players they tend to value, consolidation vs. depth preference, injury/upside tolerance, timing patterns and repeat partners.
- Compare accepted trades to contemporaneous market value so owner-specific tendencies are separated from generic value.
- Build trade-target finder based on mutual roster fit.
- Generate an offer ladder for a target: opening offer, likely-accept zone and walk-away price.
- Explain why a particular construction may appeal to that specific owner and show confidence based on amount/recency of evidence.

## Guardrails
- Yahoo integration remains read-only. FFCC recommends moves and links out; it does not execute roster transactions or trades automatically.
- Treat manager-value tendencies as probabilistic and evidence-based, not facts.
