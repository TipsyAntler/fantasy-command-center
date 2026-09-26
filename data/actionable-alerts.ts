export type ActionableAlert = { id: string; category: "Fantasy" | "Survivor" | "Pick'em"; headline: string; detail: string; href: string; active: boolean; };

// Breaking-news + push source of truth. Every genuine recommendation flip gets
// a new unique active alert ID so the push-sync workflow sends it once.
export const actionableAlerts: ActionableAlert[] = [
  { id:"2026-w1-bowers-out", category:"Fantasy", headline:"LINEUP: Brock Bowers OUT for Week 1", detail:"Week 1 alert complete.", href:"/leagues", active:false },
  { id:"2026-w1-pit-flip", category:"Pick'em", headline:"PICK FLIP: PIT -3.5 replaces ATL +3.5", detail:"Superseded.", href:"/pickem#atl-pit", active:false },
  { id:"2026-w1-atl-hold-0910-late", category:"Pick'em", headline:"PICK CORRECTION: keep ATL +3.5", detail:"Superseded.", href:"/pickem#atl-pit", active:false },
  { id:"2026-w1-pit-flip-0911-am", category:"Pick'em", headline:"PICK FLIP: switch ATL +3.5 to PIT -3.5", detail:"Superseded.", href:"/pickem#atl-pit", active:false },
  { id:"2026-w1-atl-restore-0911-late-am", category:"Pick'em", headline:"PICK REVERSAL: keep ATL +3.5", detail:"Superseded.", href:"/pickem#atl-pit", active:false },
  { id:"2026-w1-pit-flip-0911-noon", category:"Pick'em", headline:"PICK FLIP: switch ATL +3.5 to PIT -3.5", detail:"Superseded.", href:"/pickem#atl-pit", active:false },
  { id:"2026-w1-pit-tua-out-0911-1340", category:"Pick'em", headline:"CONFIRMED: switch ATL +3.5 to PIT -3.5", detail:"Week 1 alert complete.", href:"/pickem#atl-pit", active:false },
  { id:"2026-w2-buf-flip-0916-am", category:"Pick'em", headline:"PICK FLIP: DET +4.5 → BUF -4.5", detail:"Superseded after a fresh multi-book market recheck showed BUF -4.5 rather than -5.5.", href:"/pickem#det-buf", active:false },
  { id:"2026-w2-nyj-flip-0916-am", category:"Pick'em", headline:"PICK FLIP: GB -4.5 → NYJ +4.5", detail:"You entered GB this morning. Multiple books have Green Bay between -3.5 and -4.5, so frozen NYJ +4.5 remains the preferred side.", href:"/pickem#gb-nyj", active:false },
  { id:"2026-w2-det-restore-0916-0906", category:"Pick'em", headline:"PICK CORRECTION: restore DET +4.5", detail:"Fresh multi-book verification shows BUF -4.5, not the earlier -5.5 reference. The frozen SZN line is also BUF -4.5, so the stale-line case for Buffalo disappears. Restore Detroit +4.5.", href:"/pickem#det-buf", active:false },
  { id:"2026-w3-jax-flip-0925", category:"Pick'em", headline:"PICK FLIP: switch NE +2.5 to JAX -2.5", detail:"Jacksonville moved from an underdog at open to roughly -3 live. Your frozen NFL-575 line is JAX -2.5, so take the better side of the key field-goal number.", href:"/pickem#ne-jax", active:true },
];
