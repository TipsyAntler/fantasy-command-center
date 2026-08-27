export default function PickemPage() {
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">PICK&apos;EM OPERATIONS</div>
          <h1>Pick&apos;em Room</h1>
          <p className="hero-copy">Weekly confidence, upset risk and game-by-game decision support. The private SZN pool connection can come later; the useful part starts with the slate itself.</p>
        </header>

        <section className="feature-grid">
          <article className="panel feature-card">
            <span className="panel-kicker">WEEKLY BOARD</span>
            <h3>Game confidence</h3>
            <p>Every matchup will get a straight-up lean, confidence tier and a short explanation of what could flip the pick.</p>
            <span className="coming-pill">Slate feed next</span>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">LOCKS</span>
            <h3>Highest conviction</h3>
            <p>Separate true high-confidence plays from games where the market only looks decisive on the surface.</p>
            <span className="coming-pill">Model layer next</span>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">UPSET RADAR</span>
            <h3>Where to be careful</h3>
            <p>Flag injuries, line movement, matchup mismatches and public overconfidence before picks lock.</p>
            <span className="coming-pill">Intel layer next</span>
          </article>
        </section>

        <section className="roadmap compact-roadmap">
          <div className="roadmap-copy">
            <div className="eyebrow">THE PLAN</div>
            <h2>Useful even without a private SZN connection.</h2>
            <p>This room will become the place to review the full NFL slate, confidence levels and late-week changes. If we later find a clean way to read your SZN results or submitted picks, we can layer that in without redesigning the page.</p>
          </div>
          <div className="roadmap-list">
            <div><span>01</span><strong>Game-by-game picks</strong><small>Winner + confidence + rationale</small></div>
            <div><span>02</span><strong>Late-week changes</strong><small>Injuries + line movement + weather</small></div>
            <div><span>03</span><strong>Season tracking</strong><small>Accuracy by confidence tier</small></div>
          </div>
        </section>
      </div>
    </main>
  );
}
