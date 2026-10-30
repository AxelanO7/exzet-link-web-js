"use client";

import { useEffect, useState } from "react";

const fmt = (zone: string) => new Date().toLocaleTimeString("en-GB", { timeZone: zone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" });

/**
 * Real local time in Bali (Asia/Makassar, UTC+8) and Las Vegas (America/Los_Angeles), refreshed on the minute and when the tab wakes up.
 * "--:--" until the browser has mounted: same width, so nothing shifts.
 */
export function Clock() {
  const [t, setT] = useState<{ b: string; l: string } | null>(null);
  useEffect(() => {
    let id = 0;
    const tick = () => {
      try {
        setT({ b: fmt("Asia/Makassar"), l: fmt("America/Los_Angeles") });
      } catch {
        /* no timezone support */
      }
      id = window.setTimeout(tick, 60000 - (Date.now() % 60000) + 20);
    };
    const wake = () => {
      if (document.hidden) return;
      window.clearTimeout(id);
      tick();
    };
    tick();
    document.addEventListener("visibilitychange", wake);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("visibilitychange", wake);
    };
  }, []);
  return (
    <p className="mt-3 flex flex-wrap gap-x-3 font-mono text-[11px] leading-5 tabular-nums text-mist">
      <span className="whitespace-nowrap">
        Bali <span className="text-white">{t?.b ?? "--:--"}</span>
      </span>
      <span className="whitespace-nowrap">
        Las Vegas <span className="text-white">{t?.l ?? "--:--"}</span>
      </span>
    </p>
  );
}
