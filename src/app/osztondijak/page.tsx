"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { Fireflies } from "@/components/Particles";
import { CloudOrnament, PhoenixOrnament, LotusOrnament, BambooOrnament, DragonOrnament } from "@/components/ornaments";
import { useT } from "@/contexts/LanguageContext";

export default function ScholarshipsPage() {
  const t = useT();

  const eligibilityCriteria = [
    t({ hu: "Nem kínai állampolgárok", en: "Non-Chinese citizens", zh: "非中国公民" }),
    t({ hu: "Jó fizikai és szellemi egészségi állapotban lévő személyek", en: "Individuals in good physical and mental health", zh: "身体和心理健康状况良好者" }),
    t({ hu: "Kínai nyelvoktatás iránt érdeklődők, jó tanulmányi eredménnyel", en: "Those interested in Chinese language education with good academic results", zh: "对中文教育感兴趣且学业成绩优良者" }),
    t({ hu: "2025. szeptember 1-jén 16 és 35 év közötti életkor", en: "Age between 16 and 35 as of September 1, 2025", zh: "截至2025年9月1日年龄在16至35岁之间" }),
    t({ hu: "Aktív tanárok esetében az életkori határ 45 év", en: "For active teachers, the age limit is 45", zh: "在职教师年龄上限为45岁" }),
    t({ hu: "Alapképzéses ösztöndíjra pályázók jellemzően 25 év alattiak", en: "Undergraduate scholarship applicants are typically under 25", zh: "本科奖学金申请人通常在25岁以下" }),
  ];

  const recommendingInstitutions = [
    t({ hu: "Konfuciusz Intézetek", en: "Confucius Institutes", zh: "孔子学院" }),
    t({ hu: "Önálló Konfuciusz Osztálytermek", en: "Independent Confucius Classrooms", zh: "独立孔子课堂" }),
    t({ hu: "HSK vizsgaközpontok", en: "HSK Exam Centers", zh: "HSK考试中心" }),
    t({ hu: "Külföldi oktatási intézmények", en: "Foreign Educational Institutions", zh: "海外教育机构" }),
    t({ hu: "Kínai nyelvtanári továbbképzési programok", en: "Chinese Language Teacher Training Programs", zh: "中文教师培训项目" }),
    t({ hu: "Kínai nagykövetségek és konzulátusok", en: "Chinese Embassies and Consulates", zh: "中国大使馆和领事馆" }),
  ];

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
            title={t({ hu: "Kínai ösztöndíjak", en: "Chinese Scholarships", zh: "中国奖学金" })}
            subtitle={t({ hu: "Ösztöndíj lehetőségek kínai nyelvtanárok és diákok számára.", en: "Scholarship opportunities for Chinese language teachers and students.", zh: "面向中文教师和学生的奖学金机会。" })}
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
            title={t({ hu: "Nemzetközi Kínai Nyelvoktatói Ösztöndíj 2026", en: "International Chinese Language Teachers' Scholarship 2026", zh: "2026年国际中文教师奖学金" })}
            subtitle={t({ hu: "A nemzetközi kínai nyelvoktatás támogatása és fejlesztése érdekében", en: "To support and develop international Chinese language education", zh: "为支持和发展国际中文教育" })}
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
                {t({ hu: "Ki pályázhat?", en: "Who Can Apply?", zh: "谁可以申请？" })}
              </h3>
              <ul className="space-y-3">
                {eligibilityCriteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                {t({ hu: "Ajánló intézmények", en: "Recommending Institutions", zh: "推荐机构" })}
              </h3>
              <div className="grid gap-3">
                {recommendingInstitutions.map((item, index) => (
                  <div
                    key={index}
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
            title={t({ hu: "Kínai Kormányösztöndíj", en: "Chinese Government Scholarship", zh: "中国政府奖学金" })}
            subtitle={t({ hu: "Pályázati lehetőség intézetünkön keresztül", en: "Application opportunity through our institute", zh: "通过本学院申请" })}
          />

          <div className="mt-10 relative rounded-[1.5rem] border border-border bg-white p-8 shadow-sm">
            {/* Corner decorations */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/40 rounded-tl-[1.5rem]" />
            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/40 rounded-tr-[1.5rem]" />
            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/40 rounded-bl-[1.5rem]" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/40 rounded-br-[1.5rem]" />

            <p className="mb-8 text-lg leading-relaxed text-text-secondary">
              {t({
                hu: "A Kínai Kormányösztöndíj program szintén elérhető intézetünkön keresztül. Érdeklődjön irodánkban a részletekről és a pályázati feltételekről.",
                en: "The Chinese Government Scholarship program is also available through our institute. Contact our office for details and application requirements.",
                zh: "中国政府奖学金项目也可通过本学院申请。请联系我们的办公室了解详情和申请条件。",
              })}
            </p>

            <a
              href="mailto:kristaly.agnes@konfuciusz.elte.hu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-cream shadow-lg transition-colors hover:bg-primary-light"
            >
              {t({ hu: "✉️ Érdeklődés", en: "✉️ Inquire", zh: "✉️ 咨询" })}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
