export type ActionableAlert = {
  id: string;
  category: "Fantasy" | "Survivor" | "Pick'em";
  headline: string;
  detail: string;
  href: string;
  active: boolean;
};

// Global FFCC breaking-news strip. Keep this reserved for genuinely actionable
// developments: recommendation flips, FINAL Survivor changes, major roster news,
// or other items the user should see immediately.
// Updating this file also triggers the FFCC push-sync workflow.
export const actionableAlerts: ActionableAlert[] = [
  {
    id: "2026-w1-bowers-out",
    category: "Fantasy",
    headline: "LINEUP: Brock Bowers OUT for Week 1",
    detail: "Bowers is still in the Big Money TE slot. Move Dallas Goedert into TE before Sunday; Bowers is expected to miss 1-2 games after a meniscus trim.",
    href: "/leagues",
    active: true,
  },
  {
    id: "2026-w1-pit-flip",
    category: "Pick'em",
    headline: "PICK FLIP: PIT -3.5 replaces ATL +3.5",
    detail: "Superseded by later Friday market action.",
    href: "/pickem#atl-pit",
    active: false,
  },
  {
    id: "2026-w1-atl-hold-0910-late",
    category: "Pick'em",
    headline: "PICK CORRECTION: keep ATL +3.5",
    detail: "Superseded by the Friday morning Pittsburgh move, then restored by the late-morning reversal.",
    href: "/pickem#atl-pit",
    active: false,
  },
  {
    id: "2026-w1-pit-flip-0911-am",
    category: "Pick'em",
    headline: "PICK FLIP: switch ATL +3.5 to PIT -3.5",
    detail: "Superseded by the late-morning temporary move back toward Pittsburgh -3.",
    href: "/pickem#atl-pit",
    active: false,
  },
  {
    id: "2026-w1-atl-restore-0911-late-am",
    category: "Pick'em",
    headline: "PICK REVERSAL: keep ATL +3.5",
    detail: "Superseded: Friday-noon pricing pushed Pittsburgh back through the frozen -3.5 while Tua remains an injury question.",
    href: "/pickem#atl-pit",
    active: false,
  },
  {
    id: "2026-w1-pit-flip-0911-noon",
    category: "Pick'em",
    headline: "PICK FLIP: switch ATL +3.5 to PIT -3.5",
    detail: "Friday-noon markets are broadly PIT -4 to -4.5 while your pool is frozen at -3.5. Tua Tagovailoa remains uncertain with an oblique injury after Cooper Rush took first-team reps Thursday.",
    href: "/pickem#atl-pit",
    active: true,
  },
];
