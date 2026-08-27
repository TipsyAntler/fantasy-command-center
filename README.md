# Fantasy Command Center

Fantasy Command Center is a private, single-user, non-commercial analytics and decision-support project for my personal Yahoo Fantasy Sports leagues.

## Purpose

The project is designed to authenticate my own Yahoo account through OAuth and retrieve read-only Yahoo Fantasy Sports data for leagues and teams that I am authorized to access.

The data used may include:

- league settings and scoring configuration
- teams and rosters
- player availability and status
- weekly matchups
- standings
- transactions
- draft and roster metadata
- other league information needed for personal fantasy analysis

## Intended use

Retrieved data will be used locally to create structured league snapshots for personal analysis, including:

- draft preparation
- waiver-wire evaluation
- trade analysis
- lineup decisions
- roster construction
- opponent analysis
- season-long performance tracking

## Scope and privacy

This is a single-user personal project. It is not a public fantasy service and is not intended for commercial use.

- Yahoo Fantasy Sports API access will be read-only.
- The project will not make automated roster or transaction changes.
- Yahoo Fantasy Sports data will not be resold or redistributed.
- OAuth credentials, access tokens, refresh tokens, and private league data will remain local and will not be committed to this public repository.
- Only data associated with my own authenticated Yahoo account and leagues I am authorized to access will be retrieved.

## Current status

Initial project setup for the 2026 Yahoo Fantasy Football season. Yahoo Fantasy Sports API access is being requested. No Yahoo Fantasy Sports data or authentication credentials are included in this repository.

## Planned project structure

```text
fantasy-command-center/
├── src/             # API client and snapshot-generation code
├── data/            # Local league snapshots (gitignored)
├── .env             # Local credentials and tokens (gitignored)
├── .env.example     # Safe variable-name template
└── README.md
```

## Disclaimer

This is an independent personal project and is not affiliated with, endorsed by, or sponsored by Yahoo or Yahoo Fantasy Sports.
