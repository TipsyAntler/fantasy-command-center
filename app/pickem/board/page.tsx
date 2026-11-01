import AtAGlance from "@/components/AtAGlance";
import { week8Number, week8PoolGames, week8PoolStatus, week8MarketAsOf, week8ReviewedAt, week8ReviewedLabel, week8Tiebreaker, week8Standing } from "@/data/pickem-week8";
import { actionableAlerts } from "@/data/actionable-alerts";
import styles from "./board.module.css";
export const dynamic = "force-dynamic";
function label(team:string, line:number){return team+" "+(line>0?"+":"")+line;}
function weekET(){
 const parts=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
 const num=(k:string)=>Number(parts.find(p=>p.type===k)?.value||0);
 return Math.max(8,8+Math.floor((Date.UTC(num("year"),num("month")-1,num("day"))-Date.UTC(2026,9,27))/604800000));
}
function evidence(s:string){return s.startsWith("FROZEN-NUMBER")?"Frozen-number advantage":s.startsWith("SMALL EXACT-LINE")?"Small exact-line price lean":"No measured edge";}
export default function PickemBoard(){
 const week=weekET(),current=week===week8Number;
 const games=current?week8PoolGames:[];
 const flips=actionableAlerts.filter(a=>a.category==="Pick'em"&&a.id.startsWith("2026-w"+week+"-")&&a.headline.includes("FLIP:"));
 const different=games.filter(g=>g.mikeVibe!==label(g.poolPick,g.poolLine)).length;
 const hours=Math.max(0,Math.floor((Date.now()-Date.parse(week8ReviewedAt))/3600000));
 const stale=hours>=18;
 return <main><div className="shell page-shell">
  <header className="page-hero"><div className="eyebrow">PICK&apos;EM OPERATIONS · WEEK {week} · ATS</div><h1>Pick&apos;em Room</h1><p className="hero-copy">The recommendation first. Tap any game for the evidence, market snapshot and what could change.</p></header>
  {!current?<section className="panel survivor-template"><h2>Week {week} lines pending</h2><p className="panel-explainer">Previous-week picks are hidden until the new SZN frozen lines are verified and the next card is published. No old spread is reused.</p></section>:<>
   <div className={styles.freshness}><div><strong>{stale?"Review due":"Board reviewed"}</strong><span>Last audited {week8ReviewedLabel} · {hours}h ago. Quotes are dated snapshots, not a live feed.</span></div><a href="#flip-history">Flip history ↓</a></div>
   <AtAGlance items={[
    {label:"FFCC vs. vibes",value:(games.length-different)+" agree · "+different+" differ",note:"Vibes are not submitted picks",tone:"accent"},
    {label:"Documented flips",value:String(flips.length),note:"Old → new recommendations",tone:"accent"},
    {label:"Frozen-number edges",value:String(games.filter(g=>g.signal.startsWith("FROZEN-NUMBER")).length),note:"Uncalibrated size",tone:"good"},
    {label:"FFCC tiebreaker",value:String(week8Tiebreaker.earlyFfccTarget),note:"Provisional · "+week8Tiebreaker.matchup}
   ]}/>
   <p className={styles.notice}><strong>Frozen pool lines only.</strong> {week8PoolStatus}. Your highlighted vibes, FFCC advice and confirmed submissions are three different things.</p>
   <div className={styles.heading}><h2>All {games.length} matchups</h2><span>FFCC pick · your vibe · evidence</span></div>
   <section className={styles.games}>{games.map(g=>{
    const id=(g.away+"-"+g.home).toLowerCase(),pick=label(g.poolPick,g.poolLine),agree=pick===g.mikeVibe;
    const changed=flips.some(a=>a.headline.includes(pick+" replaces"));
    return <details id={id} key={id} className={changed?styles.flipped:styles.game}>
      <summary className={styles.summary}>
       <div className={styles.match}><strong>{g.away} @ {g.home}</strong><small>{g.day} · {g.kickoff} ET</small>{changed&&<span className={styles.flipPill}>PICK FLIPPED</span>}</div>
       <div className={styles.sides}><div><small>FFCC PICK</small><strong className={styles.ffcc}>{pick}</strong></div><div><small>YOUR VIBE</small><strong>{g.mikeVibe}</strong><span className={agree?styles.agree:styles.diff}>{agree?"✓ Agree":"↔ Different"}</span></div></div>
       <div className={styles.reason}><strong>{evidence(g.signal)}</strong><span>{g.signal.startsWith("FROZEN-NUMBER")?"Pool line appears better than reviewed market; edge not quantified.":g.signal.startsWith("SMALL EXACT-LINE")?"Modest lean at the exact frozen spread.":"Prior side retained; no measured advantage."}</span></div><span className={styles.arrow}>⌄</span>
      </summary>
      <div className={styles.details}><div><h4>Why this side</h4><p>{g.rationale}</p></div><div><h4>Market evidence · dated</h4><p>Frozen pool: {g.poolFavorite} -{g.poolSpread}. {g.marketLabel}. O/U {g.marketTotal}.</p><p>{g.signal}</p></div><div><h4>What could change it</h4><p>{g.watch}</p>{g.result&&<p>{g.result}</p>}</div></div>
     </details>;
   })}</section>
   <section id="flip-history" className="panel survivor-template second-heading"><div className={styles.heading}><h2>Changes this week</h2><span>{flips.length} documented flips</span></div><p className="panel-explainer">Every flip shows the original and new FFCC side. A flip never changes your SZN submission.</p><div className={styles.history}>{flips.map(a=>{const g=games.find(g=>a.headline.includes(label(g.poolPick,g.poolLine)+" replaces"));return <a key={a.id} href={g?"#"+(g.away+"-"+g.home).toLowerCase():"#flip-history"}><strong>{a.headline.replace("PICK’EM FLIP: ","")}</strong><span>{a.active?"Current actionable recommendation":"Archived · recorded decision"}</span></a>;})}{flips.length===0&&<p>No verified changes recorded this week.</p>}</div></section>
   <section className="panel survivor-template second-heading"><h2>Final-game tiebreaker</h2><div className="decision-grid"><div><span>Game</span><strong>{week8Tiebreaker.matchup}</strong></div><div><span>FFCC provisional total</span><strong>{week8Tiebreaker.earlyFfccTarget}</strong></div><div><span>Last market total</span><strong>{week8Tiebreaker.currentMarketTotal}</strong></div><div><span>Actual submission</span><strong>Not confirmed</strong></div></div><p className="panel-explainer">{week8Tiebreaker.note}</p></section>
   <section className={styles.footer}><strong>Evidence status</strong><p>{week8MarketAsOf}</p><p>Season standing from the last screenshot: #{week8Standing.rank}. Reviews are timestamped only after actual verification, not every page load. <a href="/pickem/strategy">Read the market-first methodology →</a></p></section>
  </>}
 </div></main>;
}
