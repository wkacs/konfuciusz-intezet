"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";
import { Fireflies } from "@/components/Particles";
import { CloudOrnament, PhoenixOrnament, LotusOrnament, BambooOrnament, DragonOrnament } from "@/components/ornaments";

const eligibilityCriteria = [
  "Nem kínai állampolgárok",
  "Jó fizikai és szellemi egészségi állapotban lévő személyek",
  "Kínai nyelvoktatás iránt érdeklődők, jó tanulmányi eredménnyel",
  "2025. szeptember 1-jén 16 és 35 év közötti életkor",
  "Aktív tanárok esetében az életkori határ 45 év",
  "Alapképzéses ösztöndíjra pályázók jellemzően 25 év alattiak",
];

const recommendingInstitutions = [
  "Konfuciusz Intézetek",
  "Önálló Konfuciusz Osztálytermek",
  "HSK vizsgaközpontok",
  "Külföldi oktatási intézmények",
  "Kínai nyelvtanári továbbképzési programok",
  "Kínai nagykövetségek és konzulátusok",
];

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero Section (dark) ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-20 pt-32">
        <div className="absolute inset-0 cloud-pattern opacity-[0.07]" />
        <Fireflies count={8} />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[12rem] font-bold leading-none text-accent/[0.05] select-none">學</span>
        </div>

        {/* Ornaments */}
        <PhoenixOrnament className="absolute right-8 top-12 hidden h-20 w-44 text-accent/20 lg:block" />
        <CloudOrnament className="absolute left-6 top-16 hidden h-12 w-32 text-accent/15 md:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title="Kínai ösztöndíjak"
            subtitle="Ösztöndíj lehetőségek kínai nyelvtanárok és diákok számára."
          />
        </div>

      </section>

      {/* ── Nemzetközi Kínai Nyelvoktatói Ösztöndíj Section (dark) ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] py-20">
        <div className="absolute inset-0 lattice-pattern opacity-[0.12]" />
        <Fireflies count={8} />

        <DragonOrnament className="absolute right-6 top-8 hidden h-20 w-44 text-accent/15 xl:block" />
        <LotusOrnament className="absolute left-10 bottom-20 hidden h-14 w-14 text-accent/15 lg:block" />
        <BambooOrnament className="absolute left-6 top-12 hidden h-16 w-16 text-accent/10 lg:block" />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-20 top-1/3">
          <span className="text-[10rem] font-bold leading-none text-accent/[0.04] select-none">獎</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            title="Nemzetközi Kínai Nyelvoktatói Ösztöndíj 2026"
            subtitle="A nemzetközi kínai nyelvoktatás támogatása és fejlesztése érdekében"
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Eligibility Card */}
            <TiltCard className="rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-8 backdrop-blur-md">
              {/* Corner decorations */}
              <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-accent/30" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-accent/30" />

              <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-cream/95">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm text-accent">
                  ✓
                </span>
                Ki pályázhat?
              </h3>
              <ul className="space-y-3">
                {eligibilityCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent/60" />
                    <span className="text-sm leading-relaxed text-cream/80">{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>

            {/* Recommending Institutions Card */}
            <TiltCard className="rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-8 backdrop-blur-md">
              {/* Corner decorations */}
              <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-accent/30" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-accent/30" />

              <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-cream/95">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm text-accent">
                  🏛
                </span>
                Ajánló intézmények
              </h3>
              <div className="grid gap-3">
                {recommendingInstitutions.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-accent/10 bg-white/[0.04] px-4 py-3 text-sm text-cream/80"
                  >
                    <span className="text-accent/70">◆</span>
                    {item}
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>

      </section>

      {/* ── Kínai Kormányösztöndíj Section (light) ── */}
      <section className="bg-cream silk-texture chinese-pattern relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Kínai Kormányösztöndíj"
            subtitle="Pályázati lehetőség intézetünkön keresztül"
          />

          <div className="mt-10 relative rounded-[1.5rem] border border-border bg-white p-8 shadow-sm">
            {/* Corner decorations */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/40 rounded-tl-[1.5rem]" />
            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/40 rounded-tr-[1.5rem]" />
            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/40 rounded-bl-[1.5rem]" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/40 rounded-br-[1.5rem]" />

            <p className="mb-8 text-lg leading-relaxed text-text-secondary">
              A Kínai Kormányösztöndíj program szintén elérhető intézetünkön keresztül.
              Érdeklődjön irodánkban a részletekről és a pályázati feltételekről.
            </p>

            <MagneticButton>
              <a
                href="mailto:kristaly.agnes@konfuciusz.elte.hu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-cream shadow-lg transition-colors hover:bg-primary-light"
              >
                ✉️ Érdeklődés
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
