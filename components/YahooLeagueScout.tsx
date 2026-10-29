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
type League = {
  id: string; short: string; name: string; week: number; myTeam: Team | null;
  standings: Team[]; starters: Player[]; bench: Player[]; ir: Player[];
  available: Record<string, Player[]>; notes: Note[];
  recentTransactions: { type: string; timestamp: number | null; players: string[] }[];
  rosterCount: number; errors: string[]; source: string;
};
type Scout = { ok: boolean; fetchedAt: string; leagues: League[]; caveat: string; error?: string };

const section: React.CSSProperties = {
  background: "rgba(13,24,34,.9)", border: "1px solid rgba(255,255,255,.09)",
  borderRadius: 18, padding: 20, marginTop: 16,
};
const muted: React.CSSProperties = { color: "#93a4b4", fontSize: 13, lineHeight: 1.5 };
const pill: React.CSSProperties = {
  border: "1px solid rgba(97,226,168,.28)", borderRadius: 999,
  padding: "7px 12px", fontSize: 12, fontWeight: 750,
};
const button: React.CSSProperties = {
  cursor: "pointer", border: "1px solid rgba(97,226,168,.45)",
  background: "rgba(97,226,168,.1)", color: "#bcebd5",
  borderRadius: 10, padding: "10px 14px", fontWeight: 750,
};
function statusText(player: Player) {
  return [player.position, player.team, player.status && "STATUS " + player.status].filter(Boolean).join(" · ");
}
function PlayerList({ title, players, showSlot = false }: { title: string; players: Player[]; showSlot?: boolean }) {
  return (
    <section style={section}>
      <h3>{title} <span style={muted}>({players.length})</span></h3>
      {players.length ? (
        <div style={{ display: "grid", gap: 0, marginTop: 14 }}>
          {players.map((p, i) => (
            <div key={p.key || p.name + i} style={{ padding: "11px 0", borderTop: "1px solid rgba(255,255,255,.07)", display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
              <div><strong>{showSlot ? p.slot + " · " : ""}{p.name}</strong><div style={muted}>{statusText(p)}</div></div>
              {p.seasonPoints !== null ? <span style={muted}>{p.seasonPoints.toFixed(1)} season pts</span> : null}
            </div>
          ))}
        </div>
      ) : <p style={muted}>No players returned for this section.</p>}
    </section>
  );
}
export default function YahooLeagueScout({ leagueKey, title }: { leagueKey: "BM" | "LL"; title: string }) {
  const [data, setData] = useState<Scout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
  return (
    <main><div className="shell page-shell">
      <header className="page-hero">
        <div className="eyebrow">YAHOO LIVE • READ ONLY</div>
        <h1>{title}</h1>
        <p className="hero-copy">Live roster, standings, actionable injury flags and recent moves for this league only. Waiver recommendations appear only when there is a compelling reason to consider a move. FFCC never changes your Yahoo team.</p>
      </header>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <button style={button} onClick={() => void load()} disabled={loading}>{loading ? "Checking Yahoo…" : "↻ Refresh Yahoo"}</button>
      </div>
      {data ? <p style={muted}>Last fetched {new Date(data.fetchedAt).toLocaleString()} · Yahoo API · Read-only, advice only. No Yahoo changes.</p> : null}
      {error ? <section style={{ ...section, borderColor: "#d98a7a" }}><strong>Yahoo scout needs attention</strong><p>{error}</p><Link href="/settings">Check Yahoo connection</Link></section> : null}
      {loading && !data ? <section style={section}>Fetching rosters, league standings and waiver pools from Yahoo. This can take a few seconds…</section> : null}
      {data && league ? <>
        <section style={section}>
          <div className="eyebrow">{league.short} · WEEK {league.week}</div>
          <h2>{league.myTeam?.name || league.name}</h2>
          <p style={muted}>{league.name} · {league.rosterCount} players returned · {league.myTeam?.rank ? "#" + league.myTeam.rank + " of " + league.standings.length : "Rank unavailable"} · {league.myTeam?.wins ?? "?"}-{league.myTeam?.losses ?? "?"}</p>
          {league.errors.length ? <p style={{ color: "#ffb0a0", fontSize: 12 }}>Some Yahoo sections could not load: {league.errors.join(" • ")}</p> : null}
        </section>
        <section style={section}>
          <h3>Decision queue</h3>
          <p style={muted}>Only issues that may warrant a decision. Generic top-ranked free agents are intentionally excluded.</p>
          {league.notes.length ? league.notes.map((n, i) => <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,.07)", padding: "13px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ ...pill, color: n.priority === "urgent" ? "#ffb0a0" : n.priority === "review" ? "#f0bb5f" : "#bcebd5" }}>{n.priority.toUpperCase()}</span>
              <strong>{n.title}</strong>
            </div><p style={{ ...muted, margin: "6px 0 0" }}>{n.detail}</p>
          </div>) : <p style={muted}>No immediate flags detected in the parsed roster. Still review matchups and injury news before kickoff.</p>}
        </section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,330px),1fr))", gap: 14 }}>
          <PlayerList title="Starting lineup" players={league.starters} showSlot />
          <PlayerList title="Bench" players={league.bench} />
        </div>
        {league.ir.length ? <PlayerList title="IR / inactive slots" players={league.ir} /> : null}
        <section style={section}>
          <h3>Waiver recommendations</h3>
          <p style={muted}>No pickup is being recommended from Yahoo rankings alone. FFCC still checks the available player pool in this league for meaningful upgrades, but will only flag a name when there is a specific, defensible reason to pursue him.</p>
        </section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: 14 }}>
          <section style={section}><h3>Standings</h3>{league.standings.map((t, i) => <div key={t.key || i} style={{ padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", justifyContent: "space-between", gap: 10, fontSize: 13 }}>
            <strong>{t.rank || i + 1}. {t.name}</strong><span style={muted}>{t.wins ?? "?"}-{t.losses ?? "?"}</span>
          </div>)}</section>
          <section style={section}><h3>Recent league activity</h3>{league.recentTransactions.length ? league.recentTransactions.map((t, i) => <div key={i} style={{ padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,.06)", fontSize: 13 }}>
            <strong>{t.type || "Move"}</strong><div style={muted}>{t.players.join(" · ") || "Player details unavailable"}{t.timestamp ? " · " + new Date(t.timestamp * 1000).toLocaleDateString() : ""}</div>
          </div>) : <p style={muted}>No transactions returned.</p>}</section>
        </div>
        <p style={{ ...muted, marginTop: 20 }}>{data.caveat}</p>
      </> : null}
    </div></main>
  );
}
