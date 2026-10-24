"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/app/home.module.css";

export default function DismissibleFlipBanner({ ids, summary }: { ids: string[]; summary: string }) {
  const storageKey = "ffcc-home-flips-dismissed";
  const signature = [...ids].sort().join("|");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try { setDismissed(localStorage.getItem(storageKey) === signature); }
    catch { setDismissed(false); }
  }, [signature]);

  if (dismissed) return null;

  return (
    <div className={styles.flipBanner}>
      <Link href="/pickem" className={styles.flipBannerLink} aria-label="Review current Pick'em recommendation flips">
        <span className={styles.flipEyebrow}>ACTION REQUIRED · PICK&apos;EM FLIPS</span>
        <strong>{ids.length} FFCC recommendations changed</strong>
        <p>{summary}</p>
        <span className={styles.flipCta}>Review changes →</span>
      </Link>
      <button type="button" className={styles.flipDismiss} aria-label="Dismiss Pick'em flips banner" title="Dismiss" onClick={() => {
        try { localStorage.setItem(storageKey, signature); } catch {}
        setDismissed(true);
      }}>×</button>
    </div>
  );
}
