import AtAGlance from "@/components/AtAGlance";
import { confidenceForSpread, week1Games, week1MarketAsOf } from "@/data/week1";

export default function PickemPage() {
  const highConfidence = week1Games.filter((game) => game.spread >= 7);
  const tossups = week1Games.filter((game) => game.spread <= 1.5);

  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">PICK&apos;EM OPERATIONS · WEEK 1</div>
          <h1>Pick&apos;em Room</h1>
          <p className="hero-copy">The first real slate is here. These are early straight-up market leans, not frozen picks: injuries and line movement still get another audit before each game locks.</p>
        </header>

        <AtAGlance items={[
          { label: "Week 1 games", value: `${week1Games.length}`, note: "Wednesday through Monday", tone: "accent" },
          { label: "High-confidence market leans", value: `${highConfidence.length}`, note: highConfidence.map((game) => game.favorite).join(" · "), tone: "good" },
          { label: "Toss-up radar", value: `${tossups.length}`, note: tossups.map((game) => `${game.away}/${game.home}`).join(" · "), tone: "warn" },
          { label: "First lock", value: "Wed 8:20", note: "NE at SEA — Week 1 requires an earlier review cycle" },
        ]} />

        <section className="section-heading">
          <div><div className="eyebrow">EARLY WEEK 1 BOARD</div><h2>Market favorite = provisional straight-up pick</h2></div>
          <span className="source-tag">{week1MarketAsOf}</span>
        </section>

        <section className="panel signal-table">
          {week1Games.map((game) => {
            const confidence = confidenceForSpread(game.spread);
            return (
              <div className="signal-row" key={`${game.away}-${game.home}`}>
                <div><strong>{game.day}</strong><div className="meta">{game.kickoff} ET</div></div>
                <div><strong>{game.away} @ {game.home}</strong><div className="meta">O/U {game.total}</div></div>
                <div className="signal-value"><strong>{game.favorite} -{game.spread}</strong><span>market</span></div>
                <div className="signal-value"><strong>{game.favorite}</strong><span>{confidence}</span></div>
              </div>
            );
          })}
        </section>

        <section className="feature-grid second-heading">
          <article className="panel feature-card">
            <span className="panel-kicker">HIGHEST CONFIDENCE</span>
            <h3>{highConfidence.map((game) => game.favorite).join(" · ")}</h3>
            <p>These are the only Week 1 teams currently favored by at least a touchdown in this snapshot. They form the top of both the straight-up board and the early Survivor conversation.</p>
            <span className="saved-pill">Recheck before lock</span>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">UPSET RADAR</span>
            <h3>{tossups.map((game) => `${game.away}/${game.home}`).join(" · ")}</h3>
            <p>One- to 1.5-point markets are effectively coin-flip territory. These should get the most attention from practice reports, quarterback news and meaningful market movement.</p>
            <span className="coming-pill">Low conviction</span>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">SPECIAL WEEK 1 TIMING</span>
            <h3>Wednesday changes the cadence</h3>
            <p>Do the first serious audit Tuesday, then refresh Wednesday before New England-Seattle. Thursday&apos;s Australia game gets its own second check before the Sunday slate.</p>
            <span className="saved-pill">Early lock week</span>
          </article>
        </section>

        <section className="roadmap compact-roadmap">
          <div className="roadmap-copy">
            <div className="eyebrow">HOW THIS GETS SHARPER</div>
            <h2>Start with the market. Let information earn the flips.</h2>
            <p>The current favorite is the default straight-up lean. We only change it when injuries, depth-chart news, major line movement, weather or matchup information creates a real reason to disagree. That keeps the board disciplined instead of turning every game into a hot take.</p>
          </div>
          <div className="roadmap-list">
            <div><span>01</span><strong>Now</strong><small>Load all 16 market leans</small></div>
            <div><span>02</span><strong>Tue / Wed</strong><small>Opening-game injury + line audit</small></div>
            <div><span>03</span><strong>Weekend</strong><small>Refresh the remaining slate before lock</small></div>
          </div>
        </section>
      </div>
    </main>
  );
}
