# Fantasy Command Center

Fantasy Command Center is a private, single-user, non-commercial fantasy football analytics and decision-support project.

## Current status

**Version 0 is now a working Next.js web-app scaffold.** While Yahoo Fantasy Sports API access is under review, the dashboard uses public, read-only NFL/fantasy signals so the application can be built and deployed before Yahoo credentials exist.

Current live-data layer:

- current NFL season/week state
- fantasy-player add trends
- fantasy-player drop trends
- add-velocity signals (short-window movement vs. 24-hour movement)
- active injury/practice status for fantasy-relevant players
- Google-connected Survivor pool intelligence
- iPhone/Home Screen notification permission + service-worker plumbing

Public movement/player metadata is currently sourced from the read-only Sleeper API with attribution. Yahoo data is not being proxied through Sleeper.

## Yahoo integration

The project is designed to authenticate my own Yahoo account through OAuth and retrieve read-only Yahoo Fantasy Sports data for leagues and teams that I am authorized to access after Yahoo approves API access.

The Yahoo layer is intended to include:

- league settings and scoring configuration
- teams and rosters
- player availability
- weekly matchups
- standings
- transactions
- draft and roster metadata
- other league information needed for personal fantasy analysis

That data will enable personalized draft preparation, waiver-wire evaluation, trade analysis, lineup decisions, roster construction, opponent analysis, and season-long performance tracking.

### Yahoo approval-day checklist

When Yahoo API access is approved, connect the following before considering the integration complete:

- Yahoo OAuth + refresh-token storage
- per-league scoring, roster and standings sync
- player availability / free-agent state per league
- transaction and drop monitoring
- roster-value comparison for each potential add
- injury-handcuff logic (starter downgrade/injury → identify next-man-up → check actual availability)
- valuable-drop alerts (player dropped → compare with current roster → recommend claim/add only when it clears threshold)
- league-aware waiver alerts using news/injuries + public add velocity + actual Yahoo availability
- deep links from notifications into the relevant league/player/waiver decision
- persistent push-subscription storage and VAPID-backed background push sender
- a frequent external watcher/scheduler so alerts can run while FFCC is closed
- alert thresholds/cooldowns so notifications remain high-value instead of noisy

## Roadmap

1. Deploy the public-data dashboard as a persistent web app.
2. Add a Yahoo OAuth connection when API access is approved.
3. Add a league switcher so every league retains its own scoring/settings context.
4. Build personalized waiver, lineup, opponent and trade views.
5. Add a Survivor Lab that cross-checks external research with win probability, expected popularity and future-value considerations.
6. Add a concise daily/throughout-the-day command brief highlighting only meaningful changes.
7. Activate league-aware background push alerts for high-value waiver/injury/drop events.

## Scope and privacy

This is a single-user personal project. It is not a public fantasy service and is not intended for commercial use.

- Yahoo Fantasy Sports API access will be read-only.
- The project will not make automated Yahoo roster or transaction changes.
- Yahoo Fantasy Sports data will not be resold or redistributed.
- OAuth credentials, access tokens, refresh tokens, push private keys, and private league data will not be committed to this public repository.
- Only data associated with my own authenticated Yahoo account and leagues I am authorized to access will be retrieved.

## Tech

- Next.js 16
- React
- TypeScript
- server-side cached data fetching
- service worker + Web Notifications / Push plumbing
- Sleeper read-only API for the current public-data layer
- Yahoo Fantasy Sports API planned after approval

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Private configuration

`.env`, Yahoo OAuth credentials/tokens, push private keys, league snapshots and generated private exports are gitignored. `.env.example` contains safe variable names only.

## Disclaimer

This is an independent personal project and is not affiliated with, endorsed by, or sponsored by Yahoo, Yahoo Fantasy Sports, Sleeper, or the NFL.
