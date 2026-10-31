"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { VERIFIED_WAIVER_OFFERS } from "@/data/waiver-offer-evidence";

type Player = {
  key: string; name: string; position: string; slot: string;
  status: string; team: string; percentOwned: number | null;
  seasonPoints: number | null; availability: string;
};
type Team = {
  key: string; name: string; rank: number | null; wins: number | null;
  losses: number | null; ties: number | null; pointsFor: number | null;
};
type Note = { priority: "urgent" | "review" | "info"; title: string; detail: string };
type Transaction = {
  key: string; type: string; status: string; timestamp: number | null;
  teamKey: string; teamName: string; teamsInvolved: string[];
  players: { name: string; action: string; teamName: string }[];
  isWaiver: boolean; bid: number | null;
};
type League = {
  id: string; short: string; name: string; week: number; myTeam: Team | null;
  standings: Team[]; starters: Player[]; bench: Player[]; ir: Player[];
  available: Record<string, Player[]>; notes: Note[];
  recentTransactions: Transaction[];
  rosterCount: number; errors: string[]; source: string;
};
type Scout = { ok: boolean; fetchedAt: string; leagues: League[]; caveat: string; error?: string };
type MoveFilter = "all" | "waiver" | "adds" | "drops" | "trade";

const section: React.CSSProperties = {
  background: "rgba(13,24,34,.9)", border: "1px solid rgba(255,255,255,.09)",
  borderRadius: 18, padding: 20, marginTop: 16,
};
const muted: React.CSSProperties = { color: "#93a4b4", fontSize: 13, lineHeight: 1.5 };
const button: React.CSSProperties = {
  cursor: "pointer", border: "1px solid rgba(97,226,168,.45)",
  background: "rgba(97,226,168,.1)", color: "#bcebd5",
  borderRadius: 10, padding: "9px 12px", fontWeight: 750,
};
const line: React.CSSProperties = {
  padding: "11px 0", borderTop: "1px solid rgba(255,255,255,.07)",
};
const eyebrow: React.CSSProperties = {
  fontSize: 11, color: "#74d9ae", fontWeight: 800, letterSpacing: ".07em",
};
const prettyDate = (timestamp: number | null) => timestamp
  ? new Date(timestamp * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric" })
  : "";
const nameKey = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
const isSuccessful = (t: Transaction) => !["failed", "unsuccessful", "rejected", "cancelled"].includes(t.status);
const prettyType = (t: Transaction) => t.type.includes("trade") ? "Trade" :
  t.isWaiver ? "Waiver" : t.type === "add/drop" ? "Add / drop" :
  t.type === "add" ? "Added" : t.type === "drop" ? "Dropped" : "Move";

function readableMove(transaction: Transaction) {
  return transaction.players.map((p) =>
    (p.action === "add" ? "+ " : p.action === "drop" ? "− " : "• ") + p.name +
    (transaction.type.includes("trade") && p.teamName !== "Team not identified" ? " → " + p.teamName : "")
  ).join("  ·  ");
}
function availableDropPlayer(drop: Player | undefined) {
  return drop ? [drop.position, drop.status].filter(Boolean).join(" · ") : "";
}

export default function YahooLeagueScout({ leagueKey, title }: { leagueKey: "BM" | "LL"; title: string }) {
  const [data, setData] = useState<Scout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [moveFilter, setMoveFilter] = useState<MoveFilter>(leagueKey === "BM" ? "waiver" : "all");
  const [managerFilter, setManagerFilter] = useState("");
  const [expanded, setExpanded] = useState(false);
  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/yahoo/scout?league=" + leagueKey.toLowerCase(), { cache: "no-store" });
      const payload = await response.json() as Scout;
      if (!response.ok || !payload.ok) throw new Error(payload.error || "Yahoo scouting request failed");
      setData(payload);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load Yahoo data");
    } finally { setLoading(false); }
  }, [leagueKey]);
  useEffect(() => { void load(); }, [load]);

  const league = data?.leagues[0];
  const transactions = useMemo(() => league?.recentTransactions || [], [league]);
  const evidence = VERIFIED_WAIVER_OFFERS[leagueKey];
  const available = Object.values(league?.available || {}).flat();
  const availableByName = new Map(available.map((p) => [nameKey(p.name), p]));
  const recentDrops = transactions.flatMap((t) =>
    t.players.filter((p) => p.action === "drop").map((p) => ({
      player: availableByName.get(nameKey(p.name)),
      name: p.name, from: p.teamName !== "Team not identified" ? p.teamName : t.teamName,
      timestamp: t.timestamp,
    }))
  ).filter((drop) => Boolean(drop.player))
    .filter((drop, index, rows) => rows.findIndex((other) => nameKey(other.name) === nameKey(drop.name)) === index)
    .slice(0, 4);

  const activity = new Map<string, number>();
  transactions.forEach((t) => {
    const teamNames = t.type.includes("trade") ? t.teamsInvolved : [t.teamName];
    teamNames.filter((name) => name && name !== "Team not identified").forEach((name) =>
      activity.set(name, (activity.get(name) || 0) + 1));
  });
  const activeManagers = [...activity.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

  // In the waiver tab, source-verified website offers replace the same winning
  // pickup from the API rather than appearing a second time.
  const isVerifiedWin = (t: Transaction) => {
    if (!t.isWaiver || !t.timestamp) return false;
    const ymd = new Date(t.timestamp * 1000).toISOString().slice(0, 10);
    return evidence.some((offer) =>
      Math.abs(Date.parse(offer.date) - Date.parse(ymd)) <= 86_400_000 &&
      t.players.some((p) => p.action === "add" &&
        (nameKey(p.name) === nameKey(offer.player) || nameKey(p.name).includes(nameKey(offer.player))))
    );
  };
  const visibleTransactions = transactions.filter((t) =>
    (moveFilter === "all" ||
      (moveFilter === "waiver" && t.isWaiver && isSuccessful(t) && !isVerifiedWin(t)) ||
      (moveFilter === "adds" && t.players.some((p) => p.action === "add")) ||
      (moveFilter === "drops" && t.players.some((p) => p.action === "drop")) ||
      (moveFilter === "trade" && t.type.includes("trade"))) &&
    (!managerFilter || t.teamsInvolved.includes(managerFilter) || t.teamName === managerFilter)
  );
  const visibleOffers = moveFilter === "waiver" ? evidence.filter((offer) =>
    !managerFilter || offer.winner === managerFilter ||
    offer.unsuccessful.some((loser) => loser.team === managerFilter)
  ) : [];
  const losingClaims = evidence.reduce((sum, offer) => sum + offer.unsuccessful.length, 0);
  const losingByManager = new Map<string, { count: number; positions: string[] }>();
  evidence.forEach((offer) => offer.unsuccessful.forEach((loser) => {
    const record = losingByManager.get(loser.team) || { count: 0, positions: [] };
    record.count += 1;
    record.positions.push(offer.position);
    losingByManager.set(loser.team, record);
  }));
  const frequentClaimants = [...losingByManager.entries()].sort((a, b) => b[1].count - a[1].count);
  const biggestLoser = frequentClaimants[0];
  const yahooOffersUrl = "https://football.fantasysports.yahoo.com/f1/" +
    (leagueKey === "BM" ? "890742" : "864304") + "/transactions?transactionsfilter=waiver";

  return (
    <main><div className="shell page-shell">
      <header className="page-hero">
        <div className="eyebrow">YAHOO LIVE · READ ONLY</div>
        <h1>{title} Intelligence</h1>
        <p className="hero-copy">Decision signals and what other managers are doing—no duplicate Yahoo roster or standings page.</p>
      </header>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <button style={button} onClick={() => void load()} disabled={loading}>{loading ? "Checking Yahoo…" : "↻ Refresh intelligence"}</button>
        {league ? <span style={muted}>{league.myTeam?.name || league.name} · Week {league.week}</span> : null}
      </div>
      {data ? <p style={muted}>Yahoo API checked {new Date(data.fetchedAt).toLocaleString()} · Advice only; no moves made.</p> : null}
      {error ? <section style={{ ...section, borderColor: "#d98a7a" }}><strong>Yahoo scout needs attention</strong><p>{error}</p><Link href="/settings">Check Yahoo connection</Link></section> : null}
      {loading && !data ? <section style={section}>Loading decision signals and league activity…</section> : null}
      {data && league ? <>
        {league.errors.length ? <section style={{ ...section, borderColor: "#b77453" }}><strong>Partial Yahoo data</strong><p style={muted}>Some signals may be missing: {league.errors.join(" • ")}</p></section> : null}

        <section style={section}>
          <div style={eyebrow}>WHAT WARRANTS ATTENTION</div>
          <h2 style={{ marginTop: 8 }}>Decision queue</h2>
          {league.notes.filter((n) => n.priority !== "info").length
            ? league.notes.filter((n) => n.priority !== "info").map((n, i) => (
              <div key={i} style={line}>
                <strong style={{ color: n.priority === "urgent" ? "#ffb0a0" : "#f0bb5f" }}>{n.priority === "urgent" ? "ACT" : "REVIEW"} · {n.title}</strong>
                <p style={{ ...muted, margin: "5px 0 0" }}>{n.detail}</p>
              </div>
            ))
            : <p style={muted}>No immediate roster risk flagged by these checks. Matchup and player-value research still matter.</p>}
        </section>

        {recentDrops.length ? <section style={section}>
          <div style={eyebrow}>RESEARCH LEADS · STILL AVAILABLE</div>
          <h2 style={{ marginTop: 8 }}>Interesting recent drops to review</h2>
          <p style={muted}>Recently dropped and found in the sampled Yahoo free-agent pool; not automatic pickup recommendations.</p>
          {recentDrops.map((drop) => (
            <div key={drop.name} style={line}>
              <strong>{drop.name}</strong>
              <div style={muted}>Dropped by {drop.from} · {availableDropPlayer(drop.player)}{drop.timestamp ? " · " + prettyDate(drop.timestamp) : ""}</div>
            </div>
          ))}
        </section> : null}

        <section style={section}>
          <div style={eyebrow}>OPPONENT INTELLIGENCE</div>
          <h2 style={{ marginTop: 8 }}>League moves & waiver offers</h2>
          {biggestLoser ? <p style={{ ...muted, margin: "8px 0", color: "#d5e5ef" }}>
            <strong>Waiver signal:</strong> {biggestLoser[0]} submitted {biggestLoser[1].count} unsuccessful claims in the verified Sep 16–Oct 28 screenshot ({biggestLoser[1].positions.join(", ")}).
          </p> : null}
          {frequentClaimants.length && moveFilter === "waiver" ? <div style={{ margin: "10px 0" }}>
            <p style={{ ...muted, margin: "0 0 7px" }}>Most persistent losing claimants in the historical sample (tap to filter):</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {frequentClaimants.slice(0, 5).map(([name, stats]) => (
                <button type="button" key={name}
                  onClick={() => setManagerFilter(managerFilter === name ? "" : name)}
                  style={{ ...button, padding: "6px 9px", fontSize: 12,
                    background: managerFilter === name ? "rgba(97,226,168,.27)" : "transparent" }}>
                  {name} · {stats.count}
                </button>
              ))}
            </div>
          </div> : null}
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", margin: "14px 0 10px" }}>
            {([
              ["all", "All moves"], ["waiver", "Waiver offers"], ["adds", "Adds"],
              ["drops", "Drops"], ["trade", "Trades"],
            ] as const).map(([value, label]) => (
              <button key={value} type="button" onClick={() => { setMoveFilter(value); setExpanded(false); }}
                aria-pressed={moveFilter === value}
                style={{ ...button, padding: "7px 10px", fontSize: 12,
                  background: moveFilter === value ? "rgba(97,226,168,.28)" : "transparent" }}>
                {label}{value === "waiver" && evidence.length ? " · " + evidence.length : ""}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            {activeManagers.length ? <p style={{ ...muted, margin: "0 0 8px" }}>
              Active managers: {activeManagers.slice(0, 3).map(([name, count], i) => (
                <span key={name}>
                  {i ? " · " : ""}
                  <button type="button" onClick={() => setManagerFilter(managerFilter === name ? "" : name)}
                    style={{ background: "none", color: managerFilter === name ? "#74d9ae" : "#c7dae7", border: 0,
                      textDecoration: "underline", cursor: "pointer", font: "inherit", padding: 0 }}>
                    {name} ({count})
                  </button>
                </span>
              ))}
            </p> : <span />}
            {managerFilter ? <button type="button" onClick={() => setManagerFilter("")}
              style={{ ...button, padding: "5px 8px", fontSize: 11 }}>Clear: {managerFilter} ×</button> : null}
          </div>

          {moveFilter === "waiver" ? <>
            <p style={muted}>
              {evidence.length ? evidence.length + " screenshot-verified winning claims, " + losingClaims + " documented losing attempts (Sep 16–Oct 28). " : ""}
              More recent winners come from the live API; that feed doesn&apos;t provide the identities of competing unsuccessful claims.
            </p>
            {(expanded ? visibleOffers : visibleOffers.slice(0, 5)).map((offer) => (
              <div key={offer.id} style={line}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <strong>{offer.player} <span style={muted}>{offer.nflTeam} · {offer.position}</span></strong>
                  <span style={muted}>{new Date(offer.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                </div>
                <div style={{ fontSize: 13, marginTop: 5 }}><strong style={{ color: "#bcebd5" }}>Won:</strong> {offer.winner} <span style={muted}>(priority {offer.winningPriority})</span></div>
                <div style={{ ...muted, marginTop: 4 }}>
                  <strong style={{ color: "#f0bb5f" }}>Also claimed (lower priority):</strong>{" "}
                  {offer.unsuccessful.map((loser) => loser.team + " (#" + loser.priority + ")").join(" · ")}
                </div>
              </div>
            ))}
            {visibleTransactions.slice(0, expanded ? undefined : 8).map((t, i) => (
              <div key={t.key || "waiver-live-" + i} style={line}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                  <strong>{t.players.filter((p) => p.action === "add").map((p) => p.name).join(", ") || "Waiver acquisition"}</strong>
                  <span style={muted}>{prettyDate(t.timestamp)}</span>
                </div>
                <div style={muted}>Won by {t.teamName}{t.bid !== null ? " · $" + t.bid + " FAAB" : ""} · Other claimants not supplied by API</div>
              </div>
            ))}
            {!visibleOffers.length && !visibleTransactions.length ? <p style={muted}>No matching verified offers or recent completed waiver claims.</p> : null}
            <p style={{ ...muted, borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 10, marginTop: 12 }}>
              <strong>Data source:</strong> Sep 16–Oct 28 offer details were transcribed from your Yahoo website screenshot, not refreshed automatically. Yahoo&apos;s documented transactions API does not expose league-wide failed competing claims.{" "}
              <a href={yahooOffersUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#a4e7cc" }}>Open latest waiver offers on Yahoo Web ↗</a>
            </p>
          </> : <>
            {visibleTransactions.slice(0, expanded ? undefined : 14).map((t, i) => (
              <div key={t.key || "transaction-" + i} style={{ ...line, fontSize: 13 }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "space-between" }}>
                  <strong>{t.teamName}</strong>
                  <span style={muted}>{prettyType(t)}{t.timestamp ? " · " + prettyDate(t.timestamp) : ""}{t.bid !== null ? " · $" + t.bid + " FAAB" : ""}</span>
                </div>
                <div style={{ ...muted, marginTop: 4 }}>{readableMove(t) || "Player detail unavailable"}</div>
              </div>
            ))}
            {!visibleTransactions.length ? <p style={muted}>No transactions match these filters.</p> : null}
          </>}
          {(moveFilter === "waiver"
            ? visibleTransactions.length > 8 || visibleOffers.length > 5
            : visibleTransactions.length > 14
          ) ? <button type="button" onClick={() => setExpanded(!expanded)}
            style={{ ...button, marginTop: 12, padding: "7px 10px", fontSize: 12 }}>
            {expanded ? "Show fewer" : "Show all matching moves"}
          </button> : null}
        </section>
        <p style={{ ...muted, marginTop: 16 }}>Yahoo data is read-only. FFCC never places claims, trades, or lineup changes.</p>
      </> : null}
    </div></main>
  );
}
