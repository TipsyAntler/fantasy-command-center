"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/", "Home", "⌂"],
  ["/survivor", "Survivor Lab", "◉"],
  ["/draft", "Draft Room", "⌁"],
  ["/waivers", "Waiver Room", "⇄"],
  ["/leagues", "My Leagues", "▦"],
  ["/pickem", "Pick'em", "✓"],
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="app-nav" aria-label="Fantasy Command Center">
      <Link className="brand-block" href="/" aria-label="Fantasy Command Center home">
        <div className="brand-mark"><img src="/fcc-icon.svg" alt="" aria-hidden="true" /></div>
        <div className="brand-name">
          <span>FANTASY</span>
          <span className="command">COMMAND</span>
          <span className="center">CENTER</span>
        </div>
        <div className="brand-tagline">One app. Every format. Total command.</div>
      </Link>

      <div className="nav-scroll">
        {items.map(([href, label, glyph]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link key={href} href={href} className={active ? "nav-link active" : "nav-link"}>
              <span className="nav-glyph" aria-hidden="true">{glyph}</span>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>

      <div className="nav-spacer" />
      <div className="nav-status">
        <strong>Yahoo connection pending</strong>
        <span>Public NFL signals are live now. League-specific intelligence unlocks after approval.</span>
      </div>
      <div className="nav-profile">
        <div className="profile-dot">M</div>
        <div><strong>Mike</strong><span>Personal command</span></div>
      </div>
    </nav>
  );
}
