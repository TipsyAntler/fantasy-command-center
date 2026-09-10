import Link from "next/link";
import { actionableAlerts } from "@/data/actionable-alerts";

export default function BreakingNewsTicker() {
  const alerts = actionableAlerts.filter((alert) => alert.active);
  if (!alerts.length) return null;

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
    </div>
  );
}
