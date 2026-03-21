"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { Fireflies } from "@/components/Particles";
import { CloudOrnament, PhoenixOrnament, LotusOrnament, BambooOrnament, DragonOrnament } from "@/components/ornaments";
import { examDates } from "@/data/courses";

const hskLevels = [
  { level: "HSK 1", vocab: "150 szó", description: "Alapvető kifejezések és mondatok megértése és használata.", cefr: "A1" },
  { level: "HSK 2", vocab: "300 szó", description: "Egyszerű, mindennapi témákról való kommunikáció.", cefr: "A2" },
  { level: "HSK 3", vocab: "600 szó", description: "Mindennapi, tanulmányi és szakmai helyzetek kezelése.", cefr: "B1" },
  { level: "HSK 4", vocab: "1200 szó", description: "Széles témakörben folyékonyan kommunikál kínai anyanyelvűekkel.", cefr: "B2" },
  { level: "HSK 5", vocab: "2500 szó", description: "Kínai újságok, magazinok olvasása, kínai filmek megértése.", cefr: "C1" },
  { level: "HSK 6", vocab: "5000+ szó", description: "Kínai nyelven hallott vagy olvasott információk megértése és kifejezése.", cefr: "C2" },
];

export default function ExamsPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero Section (dark) ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-20 pt-32">
        <div className="absolute inset-0 cloud-pattern opacity-[0.07]" />
        <Fireflies count={8} />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[12rem] font-bold leading-none text-accent/[0.05] select-none">考</span>
        </div>

        {/* Ornaments */}
        <PhoenixOrnament className="absolute right-8 top-12 hidden h-20 w-44 text-accent/20 lg:block" />
        <CloudOrnament className="absolute left-6 top-16 hidden h-12 w-32 text-accent/15 md:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title="HSK Nyelvvizsgák"
            subtitle="Az ELTE Konfuciusz Intézet hivatalos HSK vizsgaközpont. Évente 8 vizsgaalkalmat biztosítunk, több mint 800 vizsgázóval."
          />
        </div>

      </section>

      {/* ── Warning / Changes Section (light) ── */}
      <section className="bg-cream silk-texture chinese-pattern relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[1.5rem] border-2 border-primary/30 bg-white p-8 shadow-lg">
            {/* Corner decorations */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/60 rounded-tl-[1.5rem]" />
            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/60 rounded-tr-[1.5rem]" />
            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/60 rounded-bl-[1.5rem]" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/60 rounded-br-[1.5rem]" />

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-primary">Fontos változás 2025. szeptember 1-től!</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    HSK 3 vizsgázóknak kötelező a HSKK alapfokú vizsga is
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    HSK 4 vizsgázóknak kötelező a HSKK középfokú vizsga is
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    HSK 5-6 vizsgázóknak kötelező a HSKK felsőfokú vizsga is
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    Új HSK 7-9 szint bevezetése
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ── Exam Dates Section (dark) ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] py-20">
        <div className="absolute inset-0 lattice-pattern opacity-[0.12]" />
        <Fireflies count={8} />

        <LotusOrnament className="absolute left-10 bottom-16 hidden h-14 w-14 text-accent/15 lg:block" />
        <DragonOrnament className="absolute right-6 top-10 hidden h-20 w-44 text-accent/15 xl:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            title="Következő vizsga"
            subtitle="Hivatalos HSK és HSKK vizsgaalkalom."
          />

          {examDates.map((exam) => (
            <div key={exam.date} className="mt-10">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Dátum", value: exam.date },
                  { label: "Szintek", value: exam.levels },
                  { label: "Jelentkezési határidő", value: exam.registrationDeadline },
                  { label: "Eredmények", value: exam.resultsDate },
                ].map((item) => (
                  <TiltCard
                    key={item.label}
                    className="rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-6 backdrop-blur-md"
                  >
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-accent/80">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold text-cream/95">{item.value}</div>
                  </TiltCard>
                ))}
              </div>
              {exam.note && (
                <p className="mt-5 rounded-xl border border-accent/20 bg-accent/[0.08] px-5 py-3 text-sm font-medium text-accent/90">
                  {exam.note}
                </p>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* ── HSK Levels Section (light) ── */}
      <section className="bg-cream silk-texture chinese-pattern relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="HSK szintek"
            subtitle="Hat szint az alapoktól a mesterfokig"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hskLevels.map((level) => (
              <div
                key={level.level}
                className="group relative rounded-[1.5rem] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                {/* Corner decorations */}
                <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-primary/30 rounded-tl-[1.5rem] transition-colors group-hover:border-primary/50" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-primary/30 rounded-br-[1.5rem] transition-colors group-hover:border-primary/50" />

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-primary">{level.level}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent-dark">
                    {level.cefr}
                  </span>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-text-secondary">{level.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60" />
                  Szókincs: {level.vocab}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Exam Requirements Section (dark) ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] py-20">
        <div className="absolute inset-0 hex-pattern opacity-[0.08]" />
        <Fireflies count={8} />

        <BambooOrnament className="absolute left-8 top-10 hidden h-16 w-16 text-accent/15 lg:block" />
        <CloudOrnament className="absolute right-10 bottom-14 hidden h-10 w-28 text-accent/15 md:block" />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2">
          <span className="text-[10rem] font-bold leading-none text-accent/[0.04] select-none">試</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            title="Vizsgára hozandók"
            subtitle="Készüljön fel a vizsgára az alábbi kellékekkel."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: "🎫", title: "Belépőjegy", desc: "Vizsgára bocsátó határozat" },
              { icon: "🪪", title: "Személyi igazolvány", desc: "Vagy útlevél (a regisztrációnak megfelelő)" },
              { icon: "✏️", title: "Íróeszközök", desc: "2B ceruza, radír, hegyező" },
            ].map((item) => (
              <TiltCard
                key={item.title}
                className="rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-6 backdrop-blur-md"
              >
                {/* Corner decorations */}
                <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-accent/30" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-accent/30" />

                <div className="mb-3 text-3xl">{item.icon}</div>
                <div className="mb-1 font-semibold text-cream/95">{item.title}</div>
                <div className="text-sm text-cream/70">{item.desc}</div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-accent/15 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-cream/80">
              Az eredmények a vizsga után kb. 1 hónappal tekinthetők meg a{" "}
              <span className="font-medium text-accent">www.chinesetest.cn</span> oldalon.
              A bizonyítványok kb. 2 hónappal a vizsga után érkeznek meg.
            </p>
            <p className="mt-3 text-sm font-medium text-accent/90">
              A vizsgán a maximális pontszám 60%-át kell elérnie a vizsgázónak a sikeres vizsgához.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
