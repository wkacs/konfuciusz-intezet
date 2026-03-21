"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(elementRef?: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({
          x,
          y,
          normalizedX: (x / rect.width - 0.5) * 2,
          normalizedY: (y / rect.height - 0.5) * 2,
        });
      } else {
        setPosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: (e.clientX / window.innerWidth - 0.5) * 2,
          normalizedY: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      }
    });
  }, [elementRef]);

  useEffect(() => {
    const target = elementRef?.current ?? window;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    target.addEventListener("mousemove", handleMouseMove as EventListener);
    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
      cancelAnimationFrame(rafRef.current);
    };
  }, [elementRef, handleMouseMove]);

  return position;
}
