"use client";

import { prices } from "@/data/courses";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Fireflies } from "@/components/Particles";
import {
  BambooOrnament,
  CloudOrnament,
  DragonOrnament,
  Lantern,
  LotusOrnament,
  PagodaRoofOrnament,
  PhoenixOrnament,
} from "@/components/ornaments";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════ HERO — Dark ═══════════ */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 lattice-pattern opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 cloud-pattern opacity-[0.05]" />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-8 top-20 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          價
        </div>

        {/* Ornaments */}
        <Lantern size="sm" className="absolute left-6 top-24 hidden text-accent/30 lg:block" />
        <Lantern size="sm" className="absolute right-10 top-32 hidden text-accent/20 lg:block" />
        <PhoenixOrnament className="absolute -right-4 bottom-16 hidden h-24 w-32 text-accent/15 lg:block" />
        <CloudOrnament className="absolute left-8 bottom-24 hidden h-6 w-28 text-accent/10 md:block" />

        <Fireflies count={8} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title="Áraink"
            subtitle="Nyelvtanfolyamaink és kulturális programjaink díjai."
          />
        </div>

      </section>

      {/* ═══════════ PRICING GRID — Light ═══════════ */}
      <section className="relative bg-cream silk-texture chinese-pattern py-20">
        <div className="pointer-events-none absolute inset-0 coin-pattern opacity-[0.04]" />

        <BambooOrnament className="absolute left-4 top-12 hidden h-32 w-10 text-primary/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nyelvtanfolyam árak"
            tone="light"
            withSeal={false}
            className="mb-12"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <div
                key={item.level}
                className={`relative rounded-[1.5rem] border p-8 text-center transition-all hover:shadow-lg ${
                  item.numericPrice === 0
                    ? "border-jade/20 bg-jade/5 hover:border-jade/40"
                    : item.numericPrice === 40000
                      ? "border-primary/30 bg-white shadow-lg shadow-primary/5"
                      : "border-border bg-white hover:border-accent/30"
                }`}
              >
                {/* corner decorations */}
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />

                {item.numericPrice === 40000 && (
                  <>
                    <div className="absolute left-0 right-0 top-0 h-1 rounded-t-[1.5rem] bg-gradient-to-r from-primary via-accent to-primary" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-cream">
                      Legnépszerűbb
                    </div>
                  </>
                )}

                <h3 className="mb-2 text-lg font-bold text-text-primary">{item.level}</h3>
                <div
                  className={`mb-4 text-3xl font-bold ${item.numericPrice === 0 ? "text-jade" : "text-primary"}`}
                >
                  {item.price}
                </div>
                <div className="text-sm text-text-secondary">
                  {item.numericPrice === 0
                    ? "Ismerkedjen meg a kínai nyelvvel!"
                    : "per tanfolyam / modul"}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ═══════════ ELTE DISCOUNT — Dark ═══════════ */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] py-20">
        <div className="pointer-events-none absolute inset-0 hex-pattern opacity-[0.06]" />
        <div className="pointer-events-none absolute inset-0 lattice-pattern opacity-[0.04]" />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute left-8 top-4 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          學
        </div>

        <LotusOrnament className="absolute right-6 top-8 hidden h-20 w-24 text-accent/20 md:block" />
        <DragonOrnament className="absolute -left-6 bottom-16 hidden h-24 w-32 text-accent/10 lg:block" />
        <PagodaRoofOrnament className="absolute right-12 bottom-8 hidden h-14 w-24 text-accent/10 lg:block" />

        <Fireflies count={8} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TiltCard className="rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-10 backdrop-blur-md">
            <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-accent/60" />
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-accent/60" />

            <div className="flex items-start gap-5">
              <span className="text-5xl">🎓</span>
              <div>
                <SectionHeading
                  tone="dark"
                  withSeal={false}
                  title="50% kedvezmény ELTE-seknek!"
                  subtitle="ELTE hallgatók, ELTE Alumni tagok és ELTE alkalmazottak 50%-os kedvezménnyel vehetik igénybe a teljes árú, vagyis a 40 000 Ft-os nyelvtanfolyamainkat. A kedvezmény más akciókkal nem összevonható."
                  titleClassName="text-2xl sm:text-2xl text-accent"
                  subtitleClassName="max-w-none text-cream/85"
                />
              </div>
            </div>
          </TiltCard>
        </div>

      </section>

      {/* ═══════════ CULTURAL COURSE PRICES — Light ═══════════ */}
      <section className="relative bg-cream silk-texture chinese-pattern py-20">
        <div className="pointer-events-none absolute inset-0 wave-pattern opacity-[0.04]" />

        <BambooOrnament className="absolute right-6 top-8 hidden h-28 w-8 text-primary/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Kulturális tanfolyamok"
            tone="light"
            withSeal={false}
            className="mb-12"
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Calligraphy / Painting */}
            <div className="relative rounded-[1.5rem] border border-accent/20 bg-white p-8 shadow-sm">
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent/60" />
              <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent/60" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />

              <div className="mb-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
              <h3 className="mb-2 text-lg font-bold text-text-primary">Kalligráfia / Festészet</h3>
              <div className="mb-2 text-2xl font-bold text-primary">25 000 Ft</div>
              <p className="text-sm text-text-secondary">10 alkalommal, anyagokat biztosítjuk</p>
              <p className="mt-2 text-sm text-accent-dark">
                ELTE alkalmazottaknak és alumni tagoknak 10% kedvezmény
              </p>
            </div>

            {/* Private Lessons */}
            <div className="relative rounded-[1.5rem] border border-accent/20 bg-white p-8 shadow-sm">
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent/60" />
              <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent/60" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />

              <div className="mb-3 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
              <h3 className="mb-2 text-lg font-bold text-text-primary">Magántanfolyamok</h3>
              <div className="mb-2 text-2xl font-bold text-primary">Egyedi árazás</div>
              <p className="text-sm text-text-secondary">
                Az óraszámot és időbeosztást egyénileg egyeztetjük.
              </p>
              <p className="mt-2 text-sm">
                Érdeklődés:{" "}
                <MagneticButton className="inline-block">
                  <a
                    href="mailto:veres.judit@konfuciusz.elte.hu"
                    className="font-medium text-primary hover:text-accent"
                  >
                    veres.judit@konfuciusz.elte.hu
                  </a>
                </MagneticButton>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
