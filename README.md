# Fantasy Command Center

Fantasy Command Center is a private, single-user, non-commercial fantasy football analytics and decision-support project.

## Current status

**Version 0 is a working Next.js web app.** Yahoo has approved the Fantasy API request and the app is waiting for final Fantasy Sports provisioning. The Yahoo OAuth and read-only league-sync plumbing is already deployed behind an environment gate so activation does not require another code deploy.

Current live-data layer:

- current NFL season/week state
- fantasy-player add trends
- fantasy-player drop trends
- add-velocity signals (short-window movement vs. 24-hour movement)
- active injury/practice status for fantasy-relevant players
- Google-connected Survivor pool intelligence
- iPhone/Home Screen notification permission + service-worker plumbing
- Yahoo OAuth connect/callback/disconnect routes, encrypted token-cookie handling and a 2026 football-league sync probe, gated until provisioning is complete

Public movement/player metadata is currently sourced from the read-only Sleeper API with attribution. Yahoo data is not being proxied through Sleeper.

## Yahoo integration

The app authenticates the owner's Yahoo account through Yahoo's server-side OAuth authorization-code flow. OAuth credentials and tokens remain server-side/private; refresh tokens are stored inside an AES-256-GCM encrypted httpOnly cookie and refreshed access tokens are rotated through server routes.

Once Yahoo Fantasy Sports provisioning is confirmed, activation is:

1. Register `https://fantasy-command-center-omega.vercel.app/api/yahoo/callback` as the Yahoo redirect URI.
2. Add `YAHOO_CLIENT_ID`, `YAHOO_CLIENT_SECRET`, and a long random `YAHOO_TOKEN_SECRET` to the server environment.
3. Set `YAHOO_REDIRECT_URI=https://fantasy-command-center-omega.vercel.app/api/yahoo/callback`.
4. Set `YAHOO_FANTASY_ENABLED=true`.
5. Open Settings → Yahoo and connect the Yahoo account.
6. Run the 2026 league-sync probe before replacing manual league data.

No Yahoo credential, access token, refresh token, or private league payload belongs in this repository.

The Yahoo layer is intended to include:

- league settings and scoring configuration
- teams and rosters
- player availability
- weekly matchups
- standings
- transactions
- draft and roster metadata
- other league information needed for personal fantasy analysis

That data will enable personalized waiver-wire evaluation, trade analysis, lineup decisions, roster construction, opponent analysis, and season-long performance tracking.

### Yahoo activation checklist

After the initial league probe succeeds, connect the following before considering the integration complete:

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

1. Keep the public-data dashboard live while Yahoo provisioning finishes.
2. Activate the already-deployed Yahoo OAuth connection and validate the 2026 league probe.
3. Replace manual roster snapshots with Yahoo league-aware sync and add a league switcher.
4. Build personalized waiver, lineup, opponent and trade views from Yahoo availability/settings.
5. Continue Survivor Lab cross-checking external research with win probability, ownership and future value.
6. Keep concise command briefs focused on meaningful changes.
7. Activate league-aware background push alerts for high-value waiver/injury/drop events.

## Scope and privacy

This is a single-user personal project. It is not a public fantasy service and is not intended for commercial use.

- Yahoo Fantasy Sports API access will be read-only.
- The project will not make automated Yahoo roster or transaction changes.
- Yahoo Fantasy Sports data will not be resold or redistributed.
- OAuth credentials, access tokens, refresh tokens, push private keys, and private league data will not be committed to this public repository.
- Only data associated with the owner's authenticated Yahoo account and leagues they are authorized to access will be retrieved.

## Tech

- Next.js 16
- React
- TypeScript
- server-side cached data fetching
- service worker + Web Notifications / Push plumbing
- Sleeper read-only API for the current public-data layer
- Yahoo OAuth 2.0 / Fantasy Sports API integration staged behind an environment gate

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
