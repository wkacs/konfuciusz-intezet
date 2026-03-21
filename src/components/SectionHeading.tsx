import type { ReactNode } from "react";

import { CloudOrnament, SealMark, WaveOrnament } from "@/components/ornaments";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "light" | "dark";
  withSeal?: boolean;
  withBrushReveal?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeading({
  title,
  subtitle,
  tone = "light",
  withSeal = true,
  withBrushReveal = true,
  align = "left",
  as = "h2",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const Tag = as;
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "relative flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" ? "justify-center" : "justify-start",
        )}
      >
        {withSeal && (
          <SealMark
            className={cn(
              isDark
                ? "border-accent/85 bg-primary/15 text-accent shadow-[0_0_30px_rgba(196,30,36,0.22)]"
                : "border-primary/80 bg-primary/5 text-primary",
            )}
          />
        )}
        <div className={cn("flex items-center gap-3", isDark ? "text-accent/90" : "text-accent-dark")}>
          <span className="hidden h-px w-12 bg-current/45 sm:block" />
          <CloudOrnament className="h-6 w-28" />
          <span className="hidden h-px w-12 bg-current/45 sm:block" />
        </div>
      </div>

      <div className="relative inline-block max-w-full">
        {withBrushReveal && (
          <span
            className={cn(
              "pointer-events-none absolute bottom-1 left-1 h-[0.9em] w-[calc(100%-0.25rem)] rounded-full animate-brush-stroke",
              isDark ? "bg-gradient-to-r from-primary/30 via-accent/20 to-transparent" : "bg-gradient-to-r from-accent/20 via-primary/12 to-transparent",
            )}
          />
        )}
        <Tag
          className={cn(
            "relative z-10 font-bold tracking-tight",
            as === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
            isDark ? "text-gold-shimmer" : "text-text-primary",
            titleClassName,
          )}
        >
          {title}
        </Tag>
      </div>

      {subtitle && (
        <p
          className={cn(
            "max-w-3xl text-sm leading-relaxed sm:text-base",
            isDark ? "text-cream/90" : "text-text-secondary",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}

      <WaveOrnament
        className={cn(
          "h-5 w-32",
          isDark ? "text-accent/75" : "text-accent/70",
        )}
      />
    </div>
  );
}
