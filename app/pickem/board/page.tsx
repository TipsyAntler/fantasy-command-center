import AtAGlance from "@/components/AtAGlance";
import { week9Number, week9PoolGames, week9PendingPoolGames, week9PoolStatus, week9MarketAsOf, week9ReviewedAt, week9ReviewedLabel, week9CapturedLabel, week9Tiebreaker, week9Standing, week9SubmittedCard } from "@/data/pickem-week9";
import { actionableAlerts } from "@/data/actionable-alerts";
import styles from "./board.module.css";

export const dynamic = "force-dynamic";

function label(team:string, line:number){return team+" "+(line>0?"+":"")+line;}
function weekET(){
 const parts=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
 const num=(k:string)=>Number(parts.find(p=>p.type===k)?.value||0);
 return Math.max(9,9+Math.floor((Date.UTC(num("year"),num("month")-1,num("day"))-Date.UTC(2026,10,3))/604800000));
}
function evidence(s:string){return s.startsWith("FROZEN-NUMBER")?"Frozen-number advantage":s.startsWith("SMALL EXACT-LINE")?"Small exact-line price lean":"No measured edge";}

export default function PickemBoard(){
 const week=weekET(),current=week===week9Number;
 const games=current?week9PoolGames:[];
 const pending=current?week9PendingPoolGames:[];
 const flips=actionableAlerts.filter(a=>a.category==="Pick'em"&&a.id.startsWith("2026-w"+week+"-")&&a.headline.includes("FLIP:"));
 const different=games.filter(g=>g.mikeVibe!==label(g.poolPick,g.poolLine)).length;
 const audited=Boolean(week9ReviewedAt);
 const hours=audited?Math.max(0,Math.floor((Date.now()-Date.parse(week9ReviewedAt))/3600000)):null;
 const stale=hours!==null&&hours>=18;
 return <main><div className="shell page-shell">
  <header className="page-hero"><div className="eyebrow">PICK&apos;EM OPERATIONS · WEEK {week} · ATS</div><h1>Pick&apos;em Room</h1><p className="hero-copy">The recommendation first. Tap any game for the evidence, market snapshot and what could change.</p></header>
  {!current?<section className="panel survivor-template"><h2>Week {week} lines pending</h2><p className="panel-explainer">Previous-week picks are hidden until the new SZN frozen lines are verified and the next card is published. No old spread is reused.</p></section>:<>
   <div className={styles.freshness}><div><strong>{!audited?"Full audit pending":stale?"Review due":"Board reviewed"}</strong><span>{audited?"Last audited "+week9ReviewedLabel+" · "+hours+"h ago. Quotes are dated snapshots, not a live feed.":"Exact pool lines captured "+week9CapturedLabel+"; no review timestamp is claimed yet."}</span></div><a href="#flip-history">Flip history ↓</a></div>
   <AtAGlance items={[
    {label:"Card coverage",value:games.length+" exact · "+pending.length+" pending",note:"No cropped spread inferred",tone:"accent"},
    {label:"Submitted card",value:Object.keys(week9SubmittedCard.picks).length+" picks · "+week9SubmittedCard.tiebreaker+" TB",note:"User-confirmed Nov 4",tone:"accent"},
    {label:"Documented flips",value:String(flips.length),note:"Old → new recommendations",tone:"accent"},
    {label:"Season standing",value:"#"+week9Standing.rank, note:week9Standing.correct+" correct · leader "+week9Standing.leaderCorrect}
   ]}/>
   <p className={styles.notice}><strong>Submission recorded.</strong> {week9PoolStatus}. Submitted sides are the user-confirmed Nov 4 snapshot; FFCC recommendations can change independently. Your earlier vibes remain separately labeled.</p>
   {pending.length>0&&<section className="panel survivor-template second-heading"><div className={styles.heading}><h2>Exact line still needed</h2><span>{pending.length} matchup</span></div>{pending.map(g=><div key={g.away+"-"+g.home} className="decision-grid"><div><span>Game</span><strong>{g.away} @ {g.home}</strong></div><div><span>Kickoff</span><strong>{g.day} · {g.kickoff} ET</strong></div><div><span>Mike&apos;s vibe</span><strong>{g.mikeVibe}</strong></div><div><span>Pool spread</span><strong>Not visible</strong></div><p className="panel-explainer">{g.reason}</p></div>)}</section>}
   <div className={styles.heading}><h2>{games.length} verified-spread matchups</h2><span>FFCC provisional · your vibe · evidence</span></div>
   <section className={styles.games}>{games.map(g=>{
    const id=(g.away+"-"+g.home).toLowerCase(),pick=label(g.poolPick,g.poolLine),agree=pick===g.mikeVibe;
    const changed=flips.some(a=>a.headline.includes(pick+" replaces"));
    return <details id={id} key={id} className={changed?styles.flipped:styles.game}>
      <summary className={styles.summary}>
       <div className={styles.match}><strong>{g.away} @ {g.home}</strong><small>{g.day} · {g.kickoff} ET</small><small>Submitted: {week9SubmittedCard.picks[g.away+"-"+g.home]||"Not confirmed"}</small>{changed&&<span className={styles.flipPill}>PICK FLIPPED</span>}</div>
       <div className={styles.sides}><div><small>FFCC PICK</small><strong className={styles.ffcc}>{pick}</strong></div><div><small>YOUR VIBE</small><strong>{g.mikeVibe}</strong><span className={agree?styles.agree:styles.diff}>{agree?"✓ Agree":"↔ Different"}</span></div></div>
       <div className={styles.reason}><strong>{evidence(g.signal)}</strong><span>{g.signal.startsWith("FROZEN-NUMBER")?"Pool line appears better than reviewed market; edge not quantified.":g.signal.startsWith("SMALL EXACT-LINE")?"Modest lean at the exact frozen spread.":"Provisional tie choice; no measured advantage."}</span></div><span className={styles.arrow}>⌄</span>
      </summary>
      <div className={styles.details}><div><h4>Why this side</h4><p>{g.rationale}</p></div><div><h4>Market evidence · dated</h4><p>Frozen pool: {g.poolFavorite} -{g.poolSpread}. {g.marketLabel}{g.marketTotal!==null?" O/U "+g.marketTotal+".":""}</p><p>{g.signal}</p></div><div><h4>What could change it</h4><p>{g.watch}</p></div></div>
     </details>;
   })}</section>
   <section id="flip-history" className="panel survivor-template second-heading"><div className={styles.heading}><h2>Changes this week</h2><span>{flips.length} documented flips</span></div><p className="panel-explainer">Every verified flip shows the original and new FFCC side. A flip never changes your SZN submission.</p><div className={styles.history}>{flips.map(a=>{const g=games.find(g=>a.headline.includes(label(g.poolPick,g.poolLine)+" replaces"));return <a key={a.id} href={g?"#"+(g.away+"-"+g.home).toLowerCase():"#flip-history"}><strong>{a.headline.replace("PICK’EM FLIP: ","")}</strong><span>{a.active?"Current actionable recommendation":"Archived · recorded decision"}</span></a>;})}{flips.length===0&&<p>No verified recommendation changes recorded this week.</p>}</div></section>
   <section className="panel survivor-template second-heading"><h2>Final-game tiebreaker</h2><div className="decision-grid"><div><span>Game</span><strong>{week9Tiebreaker.matchup}</strong></div><div><span>FFCC provisional total</span><strong>{week9Tiebreaker.earlyFfccTarget}</strong></div><div><span>Last market total</span><strong>{week9Tiebreaker.currentMarketTotal}</strong></div><div><span>Submitted (user-confirmed)</span><strong>{week9SubmittedCard.tiebreaker}</strong></div></div><p className="panel-explainer">{week9Tiebreaker.note}</p></section>
   <section className={styles.footer}><strong>Evidence status</strong><p>{week9MarketAsOf}</p><p>Season standing from the Nov. 4 screenshot: #{week9Standing.rank}. Reviews are timestamped only after actual verification, not every page load. <a href="/pickem/strategy">Read the market-first methodology →</a></p></section>
  </>}
 </div></main>;
}
