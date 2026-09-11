"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { actionableAlerts } from "@/data/actionable-alerts";

const DISMISSED_KEY = "ffcc-dismissed-breaking-alerts";

export default function BreakingNewsTicker() {
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(DISMISSED_KEY) || "[]");
      if (Array.isArray(stored)) setDismissedIds(stored.filter((id): id is string => typeof id === "string"));
    } catch {
      // Ignore a malformed local value and show the alert normally.
    }
  }, []);

  const alerts = useMemo(
    () => actionableAlerts.filter((alert) => alert.active && !dismissedIds.includes(alert.id)),
    [dismissedIds],
  );

  if (!alerts.length) return null;

  function dismissVisibleAlerts() {
    const next = Array.from(new Set([...dismissedIds, ...alerts.map((alert) => alert.id)]));
    setDismissedIds(next);
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(next));
  }

  return (
    <div className="breaking-ticker" role="status" aria-live="polite">
      <div className="breaking-ticker__label">BREAKING</div>
      <div className="breaking-ticker__track">
        {alerts.map((alert) => (
          <Link href={alert.href} className="breaking-ticker__item" key={alert.id}>
            <span className="breaking-ticker__category">{alert.category}</span>
            <strong>{alert.headline}</strong>
            <span>{alert.detail}</span>
            <b aria-hidden="true">→</b>
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="breaking-ticker__dismiss"
        onClick={dismissVisibleAlerts}
        aria-label="Dismiss breaking news alert"
        title="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
