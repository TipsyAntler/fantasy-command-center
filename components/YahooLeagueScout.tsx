"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

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

const section: React.CSSProperties = {
  background: "rgba(13,24,34,.9)", border: "1px solid rgba(255,255,255,.09)",
  borderRadius: 18, padding: 20, marginTop: 16,
};
const muted: React.CSSProperties = { color: "#93a4b4", fontSize: 13, lineHeight: 1.55 };
const button: React.CSSProperties = {
  cursor: "pointer", border: "1px solid rgba(97,226,168,.45)",
  background: "rgba(97,226,168,.1)", color: "#bcebd5",
  borderRadius: 10, padding: "10px 14px", fontWeight: 750,
};
const line: React.CSSProperties = {
  padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.07)",
};
const emphasis: React.CSSProperties = { fontSize: 11, color: "#74d9ae", fontWeight: 800, letterSpacing: ".06em" };
const dateText = (value: number | null) => value ? new Date(value * 1000).toLocaleDateString() : "";
function prettyType(type: string) {
  return ({ "add/drop": "Added / dropped", add: "Added", drop: "Dropped", trade: "Trade", waiver: "Waiver claim" } as Record<string, string>)[type] || (type ? type.replace(/_/g, " ") : "League move");
}
function readableMove(transaction: Transaction) {
  return transaction.players.map((p) =>
    (p.action === "add" ? "+ " : p.action === "drop" ? "− " : "• ") + p.name +
    (transaction.type.includes("trade") && p.teamName !== "Team not identified" ? " → " + p.teamName : "")
  ).join("   ·   ");
}

export default function YahooLeagueScout({ leagueKey, title }: { leagueKey: "BM" | "LL"; title: string }) {
  const [data, setData] = useState<Scout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [moveFilter, setMoveFilter] = useState<"all" | "waiver" | "trade" | "drops">("all");
  const [managerFilter, setManagerFilter] = useState("");
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
  const transactions = league?.recentTransactions || [];
  const available = Object.values(league?.available || {}).flat();
  const availableByName = new Map(available.map((player) => [player.name.toLowerCase(), player]));
  const recentDrops = transactions.flatMap((t) =>
    t.players.filter((p) => p.action === "drop").map((p) => ({
      player: availableByName.get(p.name.toLowerCase()),
      name: p.name, from: p.teamName !== "Team not identified" ? p.teamName : t.teamName,
      timestamp: t.timestamp,
    }))
  ).filter((drop) => Boolean(drop.player))
    .filter((drop, index, rows) => rows.findIndex((other) => other.name.toLowerCase() === drop.name.toLowerCase()) === index)
    .slice(0, 5);

  const movement = new Map<string, number>();
  transactions.forEach((t) => {
    const names = t.type.includes("trade") ? t.teamsInvolved : [t.teamName];
    names.filter((name) => name && name !== "Team not identified").forEach((name) =>
      movement.set(name, (movement.get(name) || 0) + 1));
  });
  const activeManagers = [...movement.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const waiverWins = transactions.filter((t) => t.isWaiver && !["failed", "unsuccessful", "rejected", "cancelled"].includes(t.status)).slice(0, 8);
  const unsuccessful = transactions.filter((t) => ["failed", "unsuccessful", "rejected"].includes(t.status) && t.isWaiver);
  const visibleTransactions = transactions.filter((t) =>
    (moveFilter === "all" || (moveFilter === "waiver" && t.isWaiver) ||
      (moveFilter === "trade" && t.type.includes("trade")) ||
      (moveFilter === "drops" && t.players.some((p) => p.action === "drop"))) &&
    (!managerFilter || t.teamsInvolved.includes(managerFilter) || t.teamName === managerFilter)
  );

  return (
    <main><div className="shell page-shell">
      <header className="page-hero">
        <div className="eyebrow">YAHOO LIVE · READ ONLY</div>
        <h1>{title} Intelligence</h1>
        <p className="hero-copy">Decisions, opponent behavior and waiver-market clues—not a second copy of your Yahoo roster. All advice is league-specific; FFCC never submits transactions.</p>
      </header>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <button style={button} onClick={() => void load()} disabled={loading}>{loading ? "Checking Yahoo…" : "↻ Refresh intelligence"}</button>
        {league ? <span style={muted}>{league.myTeam?.name || league.name} · Week {league.week}</span> : null}
      </div>
      {data ? <p style={muted}>Checked {new Date(data.fetchedAt).toLocaleString()} · Yahoo API · No moves made</p> : null}
      {error ? <section style={{ ...section, borderColor: "#d98a7a" }}><strong>Yahoo scout needs attention</strong><p>{error}</p><Link href="/settings">Check Yahoo connection</Link></section> : null}
      {loading && !data ? <section style={section}>Loading decision flags and league transaction intelligence…</section> : null}
      {data && league ? <>
        {league.errors.length ? <section style={{ ...section, borderColor: "#b77453" }}><strong>Partial Yahoo data</strong><p style={muted}>Some signals may be missing: {league.errors.join(" • ")}</p></section> : null}

        <section style={section}>
          <div style={emphasis}>WHAT WARRANTS YOUR ATTENTION</div>
          <h2 style={{ marginTop: 8 }}>Decision queue</h2>
          <p style={muted}>Only identifiable roster risks, not a weekly recitation of your lineup.</p>
          {league.notes.filter((n) => n.priority !== "info").length
            ? league.notes.filter((n) => n.priority !== "info").map((n, i) => (
              <div key={i} style={line}>
                <strong style={{ color: n.priority === "urgent" ? "#ffb0a0" : "#f0bb5f" }}>{n.priority === "urgent" ? "ACT" : "REVIEW"} · {n.title}</strong>
                <p style={{ ...muted, margin: "5px 0 0" }}>{n.detail}</p>
              </div>
            ))
            : <p style={muted}>Nothing urgent in the current injury/depth checks. That is not a projection or an all-clear on matchups; FFCC will surface concrete changes when detected.</p>}
        </section>

        <section style={section}>
          <div style={emphasis}>RESEARCH SHORTCUT</div>
          <h2 style={{ marginTop: 8 }}>Fresh drops still available</h2>
          <p style={muted}>Players recently dropped by league-mates who also appear in Yahoo&apos;s currently sampled free-agent pool. Research leads, <strong>not automatic add recommendations</strong>.</p>
          {recentDrops.length ? recentDrops.map((drop, i) => (
            <div key={drop.name + i} style={line}>
              <strong>{drop.name}</strong>
              <div style={muted}>{drop.player?.position || "Position unknown"} · Dropped by {drop.from}{drop.timestamp ? " · " + dateText(drop.timestamp) : ""}
                {drop.player?.status ? " · " + drop.player.status : ""}</div>
            </div>
          )) : <p style={muted}>No recent drops matched the sampled available-player pool. This does not mean no one interesting was dropped.</p>}
        </section>

        <section style={section}>
          <div style={emphasis}>WAIVER MARKET</div>
          <h2 style={{ marginTop: 8 }}>Who won recent claims</h2>
          <p style={muted}>Completed waiver acquisitions identified from Yahoo&apos;s transaction data. Where Yahoo supplies a FAAB amount, it is displayed.</p>
          {waiverWins.length ? waiverWins.map((t, i) => (
            <div key={t.key || "win-" + i} style={line}>
              <strong>{t.teamName}</strong>
              <div style={muted}>{t.players.filter((p) => p.action === "add").map((p) => p.name).join(", ") || readableMove(t)}
                {t.bid !== null ? " · $" + t.bid + " bid" : ""}
                {t.timestamp ? " · " + dateText(t.timestamp) : ""}</div>
            </div>
          )) : <p style={muted}>No confirmed waiver wins identified in this sample. Other adds are listed in league activity below.</p>}
          {unsuccessful.length ? <>
            <h3 style={{ marginTop: 20 }}>Reported unsuccessful claims</h3>
            {unsuccessful.map((t, i) => <p key={t.key || "miss-" + i} style={muted}>{t.teamName} · {readableMove(t)} · {t.status} (failure reason not verified)</p>)}
          </> : null}
          <p style={{ ...muted, marginTop: 16, borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 12 }}>
            <strong>Limit of the Yahoo feed:</strong> completed league transactions generally do not reveal other managers&apos; failed claims, losing bids, or the exact priority tiebreak. FFCC will not label someone a losing claimant without evidence. Successful claims can still reveal who is chasing each position.
          </p>
        </section>

        <section style={section}>
          <div style={emphasis}>OWNER BEHAVIOR</div>
          <h2 style={{ marginTop: 8 }}>Most active managers</h2>
          <p style={muted}>Observed activity only within the latest {transactions.length} completed transactions—not a season-long ranking or evidence that an owner is willing to trade.</p>
          {activeManagers.length ? activeManagers.map(([name, count]) => (
            <button key={name} type="button" onClick={() => setManagerFilter(managerFilter === name ? "" : name)}
              title="Filter recent transactions by this manager"
              style={{ ...line, display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center",
                width: "100%", background: managerFilter === name ? "rgba(97,226,168,.08)" : "transparent",
                color: "inherit", borderLeft: 0, borderRight: 0, borderBottom: 0, cursor: "pointer", textAlign: "left" }}>
              <strong>{name}{name === league.myTeam?.name ? " (you)" : ""}{managerFilter === name ? " · selected" : ""}</strong>
              <span style={muted}>{count} recorded {count === 1 ? "move" : "moves"}</span>
            </button>
          )) : <p style={muted}>No attributable owner activity returned yet.</p>}
          <p style={muted}>Use this with the transaction history below to spot owners repeatedly churning positions, adding depth or cutting interesting players.</p>
        </section>

        <section style={section}>
          <div style={emphasis}>LEAGUE INTELLIGENCE</div>
          <h2 style={{ marginTop: 8 }}>Recent transactions</h2>
          <p style={muted}>Each move includes the fantasy team behind it, with add/drop direction and available details. Tap a manager above or filter by move type to narrow your research.</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "12px 0" }}>
            {(["all", "waiver", "trade", "drops"] as const).map((filter) => (
              <button key={filter} type="button" onClick={() => setMoveFilter(filter)}
                aria-pressed={moveFilter === filter}
                style={{ ...button, padding: "6px 10px", fontSize: 12,
                  background: moveFilter === filter ? "rgba(97,226,168,.28)" : "transparent" }}>
                {filter === "all" ? "All moves" : filter === "waiver" ? "Waivers" : filter === "trade" ? "Trades" : "Drops"}
              </button>
            ))}
            {managerFilter ? <button type="button" onClick={() => setManagerFilter("")} style={{ ...button, padding: "6px 10px", fontSize: 12 }}>Clear: {managerFilter} ×</button> : null}
          </div>
          {visibleTransactions.length ? visibleTransactions.map((t, i) => (
            <div key={t.key || "transaction-" + i} style={line}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <strong>{t.teamName}</strong>
                <span style={muted}>{prettyType(t.type)}{t.isWaiver ? " · waiver" : ""}{t.timestamp ? " · " + dateText(t.timestamp) : ""}</span>
              </div>
              <div style={{ ...muted, marginTop: 5 }}>{readableMove(t) || "Player detail unavailable"}{t.bid !== null ? " · $" + t.bid + " FAAB" : ""}</div>
            </div>
          )) : <p style={muted}>{transactions.length ? "No matching transactions in this sample." : "No league transactions returned."}</p>}
        </section>
        <p style={{ ...muted, marginTop: 20 }}>{data.caveat}</p>
      </> : null}
    </div></main>
  );
}
