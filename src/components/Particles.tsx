"use client";

import { useMemo } from "react";

export function Fireflies({ count = 12 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 20 + Math.random() * 60,
        size: 3 + Math.random() * 3,
        pulseDelay: Math.random() * 4,
        pulseDuration: 2 + Math.random() * 2,
        driftDelay: Math.random() * 8,
        driftDuration: 8 + Math.random() * 8,
      })),
    [count]
  );

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none absolute rounded-full bg-accent/60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `firefly-pulse ${p.pulseDuration}s ease-in-out ${p.pulseDelay}s infinite, firefly-drift ${p.driftDuration}s ease-in-out ${p.driftDelay}s infinite`,
          }}
        />
      ))}
    </>
  );
}

export function GoldenDust({ count = 20 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 2,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
      })),
    [count]
  );

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none absolute bottom-0 rounded-full bg-accent/40"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `golden-dust ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </>
  );
}
