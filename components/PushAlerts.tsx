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

export default function PushAlerts() {
  const [state, setState] = useState<AlertState>("checking");
  const [message, setMessage] = useState("Checking this device…");

  useEffect(() => {
    const supported = "serviceWorker" in navigator && "Notification" in window;
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
    setMessage(enabled ? "Alerts are enabled on this device." : "This installed FFCC app is ready. Tap Enable Alerts to allow time-sensitive fantasy notifications.");
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
      setMessage(vapidPublicKey ? "Alerts enabled. Background push subscription is registered." : "Alerts enabled on this device. The league-aware background watcher will connect when the Yahoo backend is configured.");
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
        <strong>{state === "enabled" ? "Notifications enabled" : state === "browser" || state === "unsupported" ? "Open the installed FFCC app" : "High-value waiver alerts"}</strong>
        <p>{message}</p>
      </div>
      <div className="push-alert-actions">
        {state === "ready" ? <button type="button" className="push-primary" onClick={enableAlerts}>Enable Alerts</button> : null}
        {state === "enabled" ? <button type="button" className="push-secondary" onClick={sendTest}>Send Test Alert</button> : null}
      </div>
    </div>
  );
}
