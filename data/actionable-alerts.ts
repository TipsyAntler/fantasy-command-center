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
  { id:"2026-w2-buf-flip-0916-am", category:"Pick'em", headline:"PICK FLIP: DET +4.5 → BUF -4.5", detail:"You entered DET this morning. Live market moved to roughly BUF -5.5, making frozen BUF -4.5 the preferred side. Update the submitted pick to Buffalo.", href:"/pickem#det-buf", active:true },
  { id:"2026-w2-nyj-flip-0916-am", category:"Pick'em", headline:"PICK FLIP: GB -4.5 → NYJ +4.5", detail:"You entered GB this morning. Live market fell to roughly GB -3.5, making frozen NYJ +4.5 the preferred side. Update the submitted pick to the Jets.", href:"/pickem#gb-nyj", active:true },
];
