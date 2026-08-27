"use client";

import { FormEvent, useEffect, useState } from "react";

type LeagueSettings = {
  name: string;
  teams: string;
  scoring: string;
  qb: string;
  rb: string;
  wr: string;
  te: string;
  flex: string;
  superflex: string;
  bench: string;
  waivers: string;
  budget: string;
  notes: string;
};

const empty: LeagueSettings = {
  name: "",
  teams: "12",
  scoring: "Half PPR",
  qb: "1",
  rb: "2",
  wr: "2",
  te: "1",
  flex: "1",
  superflex: "0",
  bench: "6",
  waivers: "FAAB",
  budget: "100",
  notes: "",
};

const STORAGE_KEY = "fcc-manual-leagues-v1";

export default function LeagueSettingsForm() {
  const [leagues, setLeagues] = useState<LeagueSettings[]>([]);
  const [form, setForm] = useState<LeagueSettings>(empty);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setLeagues(JSON.parse(raw)); } catch { /* ignore invalid local data */ }
    }
  }, []);

  function persist(next: LeagueSettings[]) {
    setLeagues(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim()) return;
    persist([...leagues, { ...form, name: form.name.trim() }]);
    setForm(empty);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  function remove(index: number) {
    persist(leagues.filter((_, i) => i !== index));
  }

  return (
    <div className="league-builder">
      <form className="settings-form panel" onSubmit={submit}>
        <div className="panel-head">
          <div><span className="panel-kicker">MANUAL PROFILE</span><h3>Add a league</h3></div>
          {saved ? <span className="saved-pill">Saved locally</span> : null}
        </div>
        <p className="panel-explainer">This lives only in this browser on this device. Nothing is committed to GitHub. Yahoo will replace the manual setup once API access arrives.</p>

        <div className="form-grid">
          <label className="span-2">League name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Beer League" required /></label>
          <label>Teams<input inputMode="numeric" value={form.teams} onChange={(e) => setForm({ ...form, teams: e.target.value })} /></label>
          <label>Scoring<select value={form.scoring} onChange={(e) => setForm({ ...form, scoring: e.target.value })}><option>Standard</option><option>Half PPR</option><option>Full PPR</option></select></label>
          <label>QB<input inputMode="numeric" value={form.qb} onChange={(e) => setForm({ ...form, qb: e.target.value })} /></label>
          <label>RB<input inputMode="numeric" value={form.rb} onChange={(e) => setForm({ ...form, rb: e.target.value })} /></label>
          <label>WR<input inputMode="numeric" value={form.wr} onChange={(e) => setForm({ ...form, wr: e.target.value })} /></label>
          <label>TE<input inputMode="numeric" value={form.te} onChange={(e) => setForm({ ...form, te: e.target.value })} /></label>
          <label>Flex<input inputMode="numeric" value={form.flex} onChange={(e) => setForm({ ...form, flex: e.target.value })} /></label>
          <label>Superflex<input inputMode="numeric" value={form.superflex} onChange={(e) => setForm({ ...form, superflex: e.target.value })} /></label>
          <label>Bench<input inputMode="numeric" value={form.bench} onChange={(e) => setForm({ ...form, bench: e.target.value })} /></label>
          <label>Waivers<select value={form.waivers} onChange={(e) => setForm({ ...form, waivers: e.target.value })}><option>FAAB</option><option>Rolling priority</option><option>Weekly reset</option><option>Free agents</option></select></label>
          <label>FAAB budget<input inputMode="numeric" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} disabled={form.waivers !== "FAAB"} /></label>
          <label className="span-2">Anything weird about this league?<textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Bonuses, keepers, position limits, trade quirks, etc." /></label>
        </div>
        <button className="primary-button" type="submit">Save league profile</button>
      </form>

      <div className="saved-leagues">
        <div className="section-heading compact"><div><div className="eyebrow">SAVED ON THIS DEVICE</div><h2>Your league profiles</h2></div></div>
        {leagues.length ? leagues.map((league, index) => (
          <article className="league-card" key={`${league.name}-${index}`}>
            <div><div className="league-title">{league.name}</div><div className="meta">{league.teams} teams · {league.scoring} · {league.waivers}{league.waivers === "FAAB" ? ` $${league.budget}` : ""}</div></div>
            <div className="roster-string">{league.qb}QB · {league.rb}RB · {league.wr}WR · {league.te}TE · {league.flex}FLEX{league.superflex !== "0" ? ` · ${league.superflex}SF` : ""} · {league.bench} bench</div>
            {league.notes ? <p>{league.notes}</p> : null}
            <button className="text-button" onClick={() => remove(index)} type="button">Remove</button>
          </article>
        )) : <div className="panel empty">No manual league profiles yet.</div>}
      </div>
    </div>
  );
}
