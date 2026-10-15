"use client";

import { useEffect, useState } from "react";

/** Real local time in Bali and Las Vegas. Placeholder until the browser has mounted. */
export function Clock() {
  const [t, setT] = useState<{ b: string; l: string } | null>(null);
  useEffect(() => {
    const f = (z: string) => new Date().toLocaleTimeString("en-GB", { timeZone: z, hour: "2-digit", minute: "2-digit" });
    const tick = () => {
      try {
        setT({ b: f("Asia/Makassar"), l: f("America/Los_Angeles") });
      } catch {
        /* no timezone support */
      }
    };
    tick();
    const id = window.setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="mt-3 font-mono text-[11px] leading-5 tabular-nums text-mist" aria-label="Local times">
      Bali <span className="text-white">{t?.b ?? "--:--"}</span> · Las Vegas <span className="text-white">{t?.l ?? "--:--"}</span>
    </p>
  );
}
