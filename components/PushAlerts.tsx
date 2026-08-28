"use client";

import { useEffect, useState } from "react";

type AlertState = "checking" | "unsupported" | "blocked" | "ready" | "enabled";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export default function PushAlerts() {
  const [state, setState] = useState<AlertState>("checking");
  const [message, setMessage] = useState("Checking this device…");

  useEffect(() => {
    const supported = "serviceWorker" in navigator && "Notification" in window;
    if (!supported) {
      setState("unsupported");
      setMessage("This browser does not support FFCC notifications.");
      return;
    }

    if (Notification.permission === "denied") {
      setState("blocked");
      setMessage("Notifications are blocked in iPhone settings for FFCC.");
      return;
    }

    const enabled = localStorage.getItem("ffcc-alerts-enabled") === "1" && Notification.permission === "granted";
    setState(enabled ? "enabled" : "ready");
    setMessage(enabled ? "Alerts are enabled on this device." : "Enable alerts to receive time-sensitive fantasy updates.");
  }, []);

  async function enableAlerts() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      await navigator.serviceWorker.ready;

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setState(permission === "denied" ? "blocked" : "ready");
        setMessage(permission === "denied" ? "Notifications were blocked. You can re-enable them in iPhone Settings." : "Notification permission was not granted.");
        return;
      }

      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (vapidPublicKey && "PushManager" in window) {
        const existing = await registration.pushManager.getSubscription();
        const subscription = existing || await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
        });
        localStorage.setItem("ffcc-push-subscription", JSON.stringify(subscription.toJSON()));
      }

      localStorage.setItem("ffcc-alerts-enabled", "1");
      setState("enabled");
      setMessage(vapidPublicKey ? "Alerts enabled. Background push subscription is registered." : "Alerts enabled. Background push transport will connect when the watcher backend is configured.");
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
        body: "Push plumbing is alive. Future alerts can deep-link straight to the relevant league or player.",
        icon: "/api/app-icon",
        badge: "/api/app-icon",
        tag: "ffcc-test",
        data: { url: "/waivers" },
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
        <strong>{state === "enabled" ? "Notifications enabled" : "High-value waiver alerts"}</strong>
        <p>{message}</p>
      </div>
      <div className="push-alert-actions">
        {state !== "enabled" && state !== "unsupported" && state !== "blocked" ? (
          <button type="button" className="push-primary" onClick={enableAlerts}>Enable Alerts</button>
        ) : null}
        {state === "enabled" ? (
          <button type="button" className="push-secondary" onClick={sendTest}>Send Test Alert</button>
        ) : null}
      </div>
    </div>
  );
}
