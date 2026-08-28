"use client";

import { useEffect, useState } from "react";

function greetingFor(date: Date) {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function LocalGreeting() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return <>{now ? greetingFor(now) : "Welcome back"}, Mike.</>;
}

export function LocalRefreshTime({ iso }: { iso: string }) {
  const [label, setLabel] = useState("--");

  useEffect(() => {
    const date = new Date(iso);
    setLabel(
      new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
      }).format(date),
    );
  }, [iso]);

  return <>{label}</>;
}
