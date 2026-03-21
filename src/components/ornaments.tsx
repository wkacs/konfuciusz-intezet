import type { ReactNode } from "react";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

type OrnamentProps = {
  className?: string;
};

type LanternProps = OrnamentProps & {
  size?: "sm" | "lg";
};

type SealMarkProps = OrnamentProps & {
  label?: ReactNode;
};

export function Lantern({ size = "sm", className, interactive = false }: LanternProps & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "lantern",
        interactive && "cursor-pointer pointer-events-auto transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_16px_rgba(196,30,36,0.6))] active:animate-[lantern-sway-strong_0.8s_ease-out]",
        className,
      )}
    >
      <div className="lantern-string" />
      <div className={cn("lantern-body", size === "lg" && "lantern-body-lg")} />
      <div
        className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-accent/15 blur-md"
        style={{ width: size === "lg" ? 48 : 32, height: size === "lg" ? 32 : 20, animation: "inherit" }}
      />
    </div>
  );
}

export function DragonOrnament({ className }: OrnamentProps) {
  return (
    <svg className={cn("animate-ornament-breathe", className)} viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dragon-shimmer" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1">
            <animate attributeName="offset" values="-0.3;1.3" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="5%" stopColor="#fff8dc" stopOpacity="0.9">
            <animate attributeName="offset" values="-0.25;1.35" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="10%" stopColor="currentColor" stopOpacity="1">
            <animate attributeName="offset" values="-0.2;1.4" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <path
        d="M13 38C25 17 45 10 62 20C71 9 84 8 95 15C102 10 112 11 118 22C129 11 141 10 152 18C166 14 183 20 194 39"
        stroke="url(#dragon-shimmer)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M46 42C60 28 78 28 92 39C98 43 107 44 113 39C126 28 146 28 160 43"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.66"
      />
      <path
        d="M22 41C29 40 34 44 36 51C44 47 53 48 60 54C72 46 85 49 95 59C108 49 124 49 137 58C146 49 160 48 170 55C176 48 185 46 193 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="110" cy="30" r="8.5" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
      <circle cx="110" cy="30" r="3.5" fill="currentColor" opacity="0.22" />
      <path
        d="M102 13L110 4L118 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}

export function PhoenixOrnament({ className }: OrnamentProps) {
  return (
    <svg className={cn("animate-phoenix-wingbeat", className)} viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 45C35 21 60 13 80 22C91 10 103 8 114 18C124 10 138 11 150 23C169 15 190 23 201 45"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M44 50C53 30 70 22 86 27C95 18 104 15 110 17C116 15 125 18 134 27C150 22 167 30 176 50"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.74"
      />
      <path
        d="M77 57C86 44 99 41 110 46C121 41 134 44 143 57"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M108 44V14M108 14L96 22M108 14L120 22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.78"
      />
      <circle cx="110" cy="30" r="6.5" stroke="currentColor" strokeWidth="1.2" opacity="0.82" />
      <circle cx="110" cy="30" r="2.8" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

export function CloudOrnament({ className }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 320 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 45C18 32 29 23 42 23C47 14 58 9 70 9C83 9 95 17 99 30C103 28 108 27 114 27C127 27 138 37 138 50H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M105 50C108 42 116 37 125 37C128 29 135 24 143 24C152 24 160 30 163 39C168 37 172 36 177 36C189 36 198 42 202 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M190 50C193 42 202 37 212 37C215 29 223 24 232 24C241 24 249 30 253 39C257 37 262 36 267 36C280 36 291 42 296 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.72"
      />
    </svg>
  );
}

export function WaveOrnament({ className }: OrnamentProps) {
  return (
    <svg className={cn("wave-animated", className)} viewBox="0 0 320 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 26C15 12 31 12 46 26C61 40 77 40 92 26C107 12 123 12 138 26C153 40 169 40 184 26C199 12 215 12 230 26C245 40 261 40 276 26C291 12 305 12 320 26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8 38C20 28 32 28 44 38C56 48 68 48 80 38C92 28 104 28 116 38C128 48 140 48 152 38C164 28 176 28 188 38C200 48 212 48 224 38C236 28 248 28 260 38C272 48 284 48 296 38C304 31 312 30 320 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.68"
      />
    </svg>
  );
}

export function BambooOrnament({ className }: OrnamentProps) {
  return (
    <svg className={cn("animate-bamboo-sway", className)} viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 228C36 184 36 137 40 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M76 232C73 190 73 140 78 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.82" />
      <path d="M36 180H44M36 130H44M36 84H44M74 192H82M74 144H82M74 96H82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 80C62 76 72 63 80 42" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M80 42C73 59 62 68 45 74" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity="0.66" />
      <path d="M42 132C24 125 15 112 10 94" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M10 94C21 101 30 112 39 129" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity="0.7" />
      <path d="M80 110C97 105 106 96 114 81" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M114 81C107 93 96 101 82 107" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity="0.64" />
    </svg>
  );
}

export function LotusOrnament({ className }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 180 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M90 99C82 80 82 59 90 40C98 59 98 80 90 99Z" fill="currentColor" opacity="0.16" />
      <path d="M90 18C104 31 108 46 100 63C90 55 85 39 90 18Z" fill="currentColor" opacity="0.36" />
      <path d="M67 31C81 39 87 52 84 69C71 61 63 48 67 31Z" fill="currentColor" opacity="0.3" />
      <path d="M113 31C99 39 93 52 96 69C109 61 117 48 113 31Z" fill="currentColor" opacity="0.3" />
      <path d="M44 49C60 52 70 63 73 79C56 77 45 66 44 49Z" fill="currentColor" opacity="0.24" />
      <path d="M136 49C120 52 110 63 107 79C124 77 135 66 136 49Z" fill="currentColor" opacity="0.24" />
      <path d="M90 103C74 103 60 100 49 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.54" />
      <path d="M90 103C106 103 120 100 131 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.54" />
    </svg>
  );
}

export function PagodaRoofOrnament({ className }: OrnamentProps) {
  return (
    <svg className={className} viewBox="0 0 1200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 92C38 99 78 95 118 74C165 49 227 47 278 65C336 85 405 88 470 58C547 23 655 22 734 58C799 88 868 85 926 65C977 47 1039 49 1086 74C1126 95 1162 99 1200 92"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M97 77L140 54L183 77M328 72L371 49L414 72M557 58L600 32L643 58M786 72L829 49L872 72M1017 77L1060 54L1103 77"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M0 112C60 120 124 113 186 88C234 69 287 66 338 77C387 87 438 85 488 71C560 51 640 51 712 71C762 85 813 87 862 77C913 66 966 69 1014 88C1076 113 1140 120 1200 112"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.46"
      />
    </svg>
  );
}

export function SealMark({ className, label = "印" }: SealMarkProps) {
  return (
    <span className={cn("seal-stamp inline-flex h-11 w-11 items-center justify-center text-lg", className)}>
      {label}
    </span>
  );
}
