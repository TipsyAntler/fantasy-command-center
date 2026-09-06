"use client";

import { useEffect, useRef, useState } from "react";

const TRIGGER_DISTANCE = 72;
const MAX_PULL_DISTANCE = 112;

export default function PullToRefresh() {
  const startY = useRef(0);
  const startX = useRef(0);
  const canPull = useRef(false);
  const distanceRef = useRef(0);
  const [distance, setDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const reset = () => {
      canPull.current = false;
      distanceRef.current = 0;
      setDistance(0);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (refreshing || event.touches.length !== 1 || window.scrollY > 0) {
        canPull.current = false;
        return;
      }

      const touch = event.touches[0];
      startY.current = touch.clientY;
      startX.current = touch.clientX;
      canPull.current = true;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!canPull.current || refreshing || event.touches.length !== 1) return;

      if (window.scrollY > 0) {
        reset();
        return;
      }

      const touch = event.touches[0];
      const deltaY = touch.clientY - startY.current;
      const deltaX = Math.abs(touch.clientX - startX.current);

      if (deltaY <= 0 || deltaY <= deltaX * 1.2) {
        if (distanceRef.current > 0) reset();
        return;
      }

      // Add resistance so the gesture feels closer to native iOS pull-to-refresh.
      const resistedDistance = Math.min(MAX_PULL_DISTANCE, deltaY * 0.48);
      distanceRef.current = resistedDistance;
      setDistance(resistedDistance);
      event.preventDefault();
    };

    const onTouchEnd = () => {
      if (!canPull.current || refreshing) return;

      const shouldRefresh = distanceRef.current >= TRIGGER_DISTANCE;
      canPull.current = false;

      if (shouldRefresh) {
        setRefreshing(true);
        setDistance(TRIGGER_DISTANCE);
        // Let the refresh indicator settle for a beat before reloading.
        window.setTimeout(() => window.location.reload(), 140);
      } else {
        distanceRef.current = 0;
        setDistance(0);
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [refreshing]);

  const progress = Math.min(1, distance / TRIGGER_DISTANCE);
  const visible = distance > 0 || refreshing;
  const ready = distance >= TRIGGER_DISTANCE || refreshing;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        zIndex: 100,
        left: "50%",
        top: "calc(env(safe-area-inset-top, 0px) + 8px)",
        width: 38,
        height: 38,
        display: "grid",
        placeItems: "center",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,.12)",
        background: "rgba(7,16,24,.94)",
        boxShadow: "0 8px 28px rgba(0,0,0,.34), inset 0 0 0 1px rgba(97,226,168,.05)",
        color: ready ? "#61e2a8" : "#93a4b4",
        opacity: visible ? Math.max(0.35, progress) : 0,
        transform: `translate(-50%, ${visible ? Math.min(distance * 0.45, 34) : -52}px) scale(${0.82 + progress * 0.18})`,
        transition: distance > 0 && !refreshing ? "opacity 80ms linear" : "transform 180ms ease, opacity 180ms ease, color 120ms ease",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: 19,
          lineHeight: 1,
          fontWeight: 800,
          transform: refreshing ? "rotate(180deg)" : `rotate(${progress * 180}deg)`,
          transition: refreshing ? "transform 180ms ease" : "none",
        }}
      >
        ↻
      </span>
    </div>
  );
}
