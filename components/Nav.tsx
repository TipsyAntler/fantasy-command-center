"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/", "Home"],
  ["/draft", "Draft"],
  ["/leagues", "Leagues"],
  ["/waivers", "Waivers"],
  ["/survivor", "Survivor"],
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="app-nav" aria-label="Fantasy Command Center">
      <Link className="brand-mark" href="/" aria-label="Fantasy Command Center home">FCC</Link>
      <div className="nav-scroll">
        {items.map(([href, label]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link key={href} href={href} className={active ? "nav-link active" : "nav-link"}>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
