"use client";

import { useRef, useState, type ReactNode } from "react";

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMove(e: React.MouseEvent) {
    if (!ref.current || window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-2px)`,
      transition: "transform 0.1s ease-out",
    });
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.4s ease-out",
    });
  }

  return (
    <div ref={ref} className={className} style={style} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}
