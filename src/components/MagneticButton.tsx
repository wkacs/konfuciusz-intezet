"use client";

import { useRef, useState, type ReactNode } from "react";

export function MagneticButton({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMove(e: React.MouseEvent) {
    if (!ref.current || window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setStyle({
      transform: `translate(${x * 0.08}px, ${y * 0.08}px)`,
      transition: "transform 0.15s ease-out",
    });
  }

  function handleLeave() {
    setStyle({ transform: "translate(0, 0)", transition: "transform 0.3s ease-out" });
  }

  return (
    <div ref={ref} className={className} style={style} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}
