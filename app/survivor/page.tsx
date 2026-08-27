export default function SurvivorPage() {
  return (
    <main>
      <div className="shell page-shell">
        <header className="page-hero">
          <div className="eyebrow">POOL STRATEGY</div>
          <h1>Survivor Lab</h1>
          <p className="hero-copy">A weekly cross-check layer for V1per41, market win probability, expected popularity and future team value.</p>
        </header>

        <section className="feature-grid survivor-grid">
          <article className="panel feature-card">
            <span className="panel-kicker">MODEL 1</span><h3>V1per41</h3>
            <p>Use the weekly Reddit recommendation as the mathematical backbone rather than trying to out-vibe a season-long optimization model.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">MODEL 2</span><h3>Market check</h3>
            <p>Compare current moneyline-implied win probability, late injury news and meaningful line movement.</p>
          </article>
          <article className="panel feature-card">
            <span className="panel-kicker">POOL EDGE</span><h3>Leverage + future value</h3>
            <p>Ask whether a slightly riskier team preserves a premium future favorite or creates meaningful leverage against a popular pick.</p>
          </article>
        </section>

        <section className="panel survivor-template">
          <div className="panel-head"><div><span className="panel-kicker">WEEKLY DECISION CARD</span><h3>Our eventual output</h3></div></div>
          <div className="decision-grid">
            <div><span>V1per pick</span><strong>—</strong></div>
            <div><span>Win probability</span><strong>—</strong></div>
            <div><span>Projected popularity</span><strong>—</strong></div>
            <div><span>Future value</span><strong>—</strong></div>
            <div className="span-2"><span>Our verdict</span><strong>Waiting for Week 1 inputs</strong></div>
          </div>
          <p className="panel-explainer">The goal is not to disagree for the sake of it. When the independent layers agree with V1per, that is stronger conviction. We only deviate when the pool-specific tradeoff is actually worth it.</p>
        </section>
      </div>
    </main>
  );
}
