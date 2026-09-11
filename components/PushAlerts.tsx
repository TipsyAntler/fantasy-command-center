"use client";

import { useEffect, useState } from "react";

type AlertState = "checking" | "unsupported" | "browser" | "blocked" | "ready" | "enabled";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function isStandalone() {
  const iosStandalone = Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
  return window.matchMedia("(display-mode: standalone)").matches || iosStandalone;
}

async function getVapidPublicKey() {
  const response = await fetch("/api/push/public-key", { cache: "no-store" });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload?.publicKey) {
    throw new Error(payload?.error || "FFCC could not prepare push notifications yet.");
  }
  return payload.publicKey as string;
}

async function registerSubscription(subscription: PushSubscription) {
  const response = await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscription.toJSON()),
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    throw new Error(payload?.error || "Could not register FFCC push subscription.");
  }
}

export default function PushAlerts() {
  const [state, setState] = useState<AlertState>("checking");
  const [message, setMessage] = useState("Checking this device…");

  useEffect(() => {
    const supported = "serviceWorker" in navigator && "Notification" in window && "PushManager" in window;
    if (!supported) {
      setState("unsupported");
      setMessage("This browser cannot enable FFCC push notifications. On iPhone, open the installed FFCC Home Screen app and return to Smart Alerts there.");
      return;
    }

    if (!isStandalone()) {
      setState("browser");
      setMessage("You are viewing FFCC in a browser tab. On iPhone, notification permission must be enabled from the installed FFCC Home Screen app. Open FFCC from your Home Screen, tap Smart Alerts, then enable notifications there.");
      return;
    }

    if (Notification.permission === "denied") {
      setState("blocked");
      setMessage("Notifications are blocked in iPhone Settings for FFCC. Re-enable them there, then return to this page.");
      return;
    }

    const enabled = localStorage.getItem("ffcc-alerts-enabled") === "1" && Notification.permission === "granted";
    setState(enabled ? "enabled" : "ready");
    setMessage(enabled ? "FFCC push is enabled on this device for high-value Fantasy, Survivor and Pick'em alerts." : "This installed FFCC app is ready. Tap Enable Alerts to allow high-value fantasy notifications.");
  }, []);

  async function enableAlerts() {
    try {
      if (!isStandalone()) {
        setState("browser");
        setMessage("Open the installed FFCC Home Screen app first. iPhone will not grant web-push permission from this browser tab.");
        return;
      }

      const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      await navigator.serviceWorker.ready;

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setState(permission === "denied" ? "blocked" : "ready");
        setMessage(permission === "denied" ? "Notifications were blocked. You can re-enable them in iPhone Settings." : "Notification permission was not granted.");
        return;
      }

      const vapidPublicKey = await getVapidPublicKey();
      const existing = await registration.pushManager.getSubscription();
      const subscription = existing || await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      });
      await registerSubscription(subscription);

      localStorage.setItem("ffcc-push-subscription", JSON.stringify(subscription.toJSON()));
      localStorage.setItem("ffcc-alerts-enabled", "1");
      setState("enabled");
      setMessage("FFCC push is enabled. Breaking and actionable Fantasy, Survivor and Pick'em alerts can reach this device even when FFCC is closed.");
    } catch (error) {
      setState("ready");
      setMessage(error instanceof Error ? error.message : "Could not enable alerts on this device.");
    }
  }

  async function sendTest() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      await navigator.serviceWorker.ready;
      if (Notification.permission !== "granted") {
        await enableAlerts();
        return;
      }
      await registration.showNotification("FFCC · Test Alert", {
        body: "Push plumbing is alive. Real alerts will deep-link to the exact Fantasy, Survivor or Pick'em decision.",
        icon: "/api/app-icon",
        badge: "/api/app-icon",
        tag: "ffcc-test",
        data: { url: "/" },
      });
      setMessage("Test alert sent to this device.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not send the test alert.");
    }
  }

  return (
    <div className="push-alerts">
      <div className="push-alert-copy">
        <span className="panel-kicker">SMART ALERTS</span>
        <strong>{state === "enabled" ? "Notifications enabled" : state === "browser" || state === "unsupported" ? "Open the installed FFCC app" : "High-value FFCC alerts"}</strong>
        <p>{message}</p>
        {state === "enabled" ? <p>Push-worthy by default: recommendation flips, FINAL Survivor decisions, major injury/role news affecting your roster, deadline-critical action, and other genuinely important FFCC changes.</p> : null}
      </div>
      <div className="push-alert-actions">
        {state === "ready" ? <button type="button" className="push-primary" onClick={enableAlerts}>Enable Alerts</button> : null}
        {state === "enabled" ? <button type="button" className="push-secondary" onClick={sendTest}>Send Test Alert</button> : null}
      </div>
    </div>
  );
}
