"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { Fireflies } from "@/components/Particles";
import { CloudOrnament, PhoenixOrnament, LotusOrnament, BambooOrnament, DragonOrnament } from "@/components/ornaments";
import { examDates } from "@/data/courses";
import { useT, useLanguage } from "@/contexts/LanguageContext";

export default function ExamsPage() {
  const t = useT();
  const { lang } = useLanguage();

  const hskLevels = [
    { level: "HSK 1", vocab: t({ hu: "150 szó", en: "150 words", zh: "150个词汇" }), description: t({ hu: "Alapvető kifejezések és mondatok megértése és használata.", en: "Understanding and using basic expressions and sentences.", zh: "理解和使用基本的表达和句子。" }), cefr: "A1" },
    { level: "HSK 2", vocab: t({ hu: "300 szó", en: "300 words", zh: "300个词汇" }), description: t({ hu: "Egyszerű, mindennapi témákról való kommunikáció.", en: "Communication on simple, everyday topics.", zh: "就简单的日常话题进行交流。" }), cefr: "A2" },
    { level: "HSK 3", vocab: t({ hu: "600 szó", en: "600 words", zh: "600个词汇" }), description: t({ hu: "Mindennapi, tanulmányi és szakmai helyzetek kezelése.", en: "Handling everyday, academic and professional situations.", zh: "应对日常、学术和职业场景。" }), cefr: "B1" },
    { level: "HSK 4", vocab: t({ hu: "1200 szó", en: "1200 words", zh: "1200个词汇" }), description: t({ hu: "Széles témakörben folyékonyan kommunikál kínai anyanyelvűekkel.", en: "Communicates fluently with native speakers on a wide range of topics.", zh: "能够与母语者就广泛话题进行流畅交流。" }), cefr: "B2" },
    { level: "HSK 5", vocab: t({ hu: "2500 szó", en: "2500 words", zh: "2500个词汇" }), description: t({ hu: "Kínai újságok, magazinok olvasása, kínai filmek megértése.", en: "Reading Chinese newspapers, magazines and understanding Chinese films.", zh: "阅读中文报刊杂志，理解中文电影。" }), cefr: "C1" },
    { level: "HSK 6", vocab: t({ hu: "5000+ szó", en: "5000+ words", zh: "5000+个词汇" }), description: t({ hu: "Kínai nyelven hallott vagy olvasott információk megértése és kifejezése.", en: "Understanding and expressing information heard or read in Chinese.", zh: "理解和表达通过中文听到或阅读的信息。" }), cefr: "C2" },
  ];

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
            title={t({ hu: "HSK Nyelvvizsgák", en: "HSK Language Exams", zh: "HSK语言考试" })}
            subtitle={t({ hu: "Az ELTE Konfuciusz Intézet hivatalos HSK vizsgaközpont. Évente 8 vizsgaalkalmat biztosítunk, több mint 800 vizsgázóval.", en: "ELTE Confucius Institute is an official HSK exam center. We provide 8 exam sessions per year, with over 800 examinees.", zh: "ELTE孔子学院是官方HSK考试中心。我们每年举办8次考试，考生超过800人。" })}
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
                <h3 className="mb-3 text-xl font-bold text-primary">{t({ hu: "Fontos változás 2025. szeptember 1-től!", en: "Important Changes from September 1, 2025!", zh: "2025年9月1日起的重要变化！" })}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    {t({ hu: "HSK 3 vizsgázóknak kötelező a HSKK alapfokú vizsga is", en: "HSK 3 examinees must also take the HSKK Basic exam", zh: "HSK 3考生必须同时参加HSKK初级考试" })}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    {t({ hu: "HSK 4 vizsgázóknak kötelező a HSKK középfokú vizsga is", en: "HSK 4 examinees must also take the HSKK Intermediate exam", zh: "HSK 4考生必须同时参加HSKK中级考试" })}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    {t({ hu: "HSK 5-6 vizsgázóknak kötelező a HSKK felsőfokú vizsga is", en: "HSK 5-6 examinees must also take the HSKK Advanced exam", zh: "HSK 5-6考生必须同时参加HSKK高级考试" })}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">●</span>
                    {t({ hu: "Új HSK 7-9 szint bevezetése", en: "Introduction of new HSK 7-9 levels", zh: "引入新的HSK 7-9级" })}
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
            title={t({ hu: "Következő vizsga", en: "Next Exam", zh: "下次考试" })}
            subtitle={t({ hu: "Hivatalos HSK és HSKK vizsgaalkalom.", en: "Official HSK and HSKK exam session.", zh: "官方HSK和HSKK考试。" })}
          />

          {examDates.map((exam) => (
            <div key={exam.date[lang]} className="mt-10">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: t({ hu: "Dátum", en: "Date", zh: "日期" }), value: exam.date[lang] },
                  { label: t({ hu: "Szintek", en: "Levels", zh: "级别" }), value: exam.levels[lang] },
                  { label: t({ hu: "Jelentkezési határidő", en: "Registration Deadline", zh: "报名截止日期" }), value: exam.registrationDeadline[lang] },
                  { label: t({ hu: "Eredmények", en: "Results", zh: "成绩" }), value: exam.resultsDate[lang] },
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
                  {exam.note[lang]}
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
            title={t({ hu: "HSK szintek", en: "HSK Levels", zh: "HSK等级" })}
            subtitle={t({ hu: "Hat szint az alapoktól a mesterfokig", en: "Six levels from beginner to mastery", zh: "从入门到精通的六个等级" })}
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
                  {t({ hu: "Szókincs:", en: "Vocabulary:", zh: "词汇量：" })} {level.vocab}
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
            title={t({ hu: "Vizsgára hozandók", en: "What to Bring to the Exam", zh: "考试须携带" })}
            subtitle={t({ hu: "Készüljön fel a vizsgára az alábbi kellékekkel.", en: "Prepare for the exam with the following items.", zh: "请准备好以下考试用品。" })}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: "🎫", title: t({ hu: "Belépőjegy", en: "Admission Ticket", zh: "准考证" }), desc: t({ hu: "Vizsgára bocsátó határozat", en: "Exam admission document", zh: "考试许可文件" }) },
              { icon: "🪪", title: t({ hu: "Személyi igazolvány", en: "ID Card", zh: "身份证件" }), desc: t({ hu: "Vagy útlevél (a regisztrációnak megfelelő)", en: "Or passport (matching registration)", zh: "或护照（与报名信息一致）" }) },
              { icon: "✏️", title: t({ hu: "Íróeszközök", en: "Writing Tools", zh: "文具" }), desc: t({ hu: "2B ceruza, radír, hegyező", en: "2B pencil, eraser, sharpener", zh: "2B铅笔、橡皮、卷笔刀" }) },
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
              {t({
                hu: <>Az eredmények a vizsga után kb. 1 hónappal tekinthetők meg a{" "}<span className="font-medium text-accent">www.chinesetest.cn</span> oldalon. A bizonyítványok kb. 2 hónappal a vizsga után érkeznek meg.</>,
                en: <>Results can be viewed approximately 1 month after the exam at{" "}<span className="font-medium text-accent">www.chinesetest.cn</span>. Certificates arrive approximately 2 months after the exam.</>,
                zh: <>考试结束约1个月后可在{" "}<span className="font-medium text-accent">www.chinesetest.cn</span> 查询成绩。证书将在考试后约2个月寄达。</>,
              })}
            </p>
            <p className="mt-3 text-sm font-medium text-accent/90">
              {t({ hu: "A vizsgán a maximális pontszám 60%-át kell elérnie a vizsgázónak a sikeres vizsgához.", en: "Examinees must achieve 60% of the maximum score to pass the exam.", zh: "考生需达到最高分数的60%方可通过考试。" })}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
