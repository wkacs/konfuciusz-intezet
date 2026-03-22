"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { CloudOrnament, DragonOrnament, Lantern, BambooOrnament } from "@/components/ornaments";
import { Fireflies } from "@/components/Particles";
import { downloads } from "@/data/courses";
import { useT } from "@/contexts/LanguageContext";

export default function DownloadsPage() {
  const t = useT();

  return (
    <div className="min-h-screen">
      {/* ── Dark Hero Section ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-16 pt-32">
        <div className="absolute inset-0 cloud-pattern opacity-[0.06]" />
        <Fireflies count={8} />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-8 top-16 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          書
        </div>

        {/* Ornaments */}
        <DragonOrnament className="absolute left-6 top-24 hidden h-10 w-32 text-accent/20 lg:block" />
        <CloudOrnament className="absolute right-10 bottom-12 hidden h-8 w-24 text-accent/15 md:block" />
        <BambooOrnament className="absolute -bottom-8 right-0 hidden h-48 w-16 text-jade/15 lg:block" />
        <Lantern size="sm" className="absolute right-24 top-20 hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title={t({ hu: "Letöltések", en: "Downloads", zh: "下载中心" })}
            subtitle={t({ hu: "Konfuciusz Krónika – intézetünk kiadványa", en: "Confucius Chronicle – our institute's publication", zh: "孔子学院通讯——学院刊物" })}
          />
        </div>

      </section>

      {/* ── Light Downloads Section ── */}
      <section className="bg-cream silk-texture chinese-pattern relative pb-20 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item) => (
              <div
                key={item.filename}
                className="group relative rounded-[1.25rem] border border-border bg-white p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Corner decorations */}
                <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-accent/0 transition-all group-hover:border-accent/40" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-accent/0 transition-all group-hover:border-accent/40" />
                <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-accent/0 transition-all group-hover:border-accent/40" />
                <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-accent/0 transition-all group-hover:border-accent/40" />

                <div className="flex items-start gap-4">
                  {/* PDF Icon */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-sm border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6M9 17h4M13 3v5a2 2 0 002 2h4" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-text-primary transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">{item.year}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary/70 transition-colors group-hover:text-primary">
                      {t({ hu: "PDF letöltés", en: "Download PDF", zh: "下载PDF" })}
                      <svg className="h-3 w-3 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
