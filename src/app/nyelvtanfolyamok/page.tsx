"use client";

import { useState } from "react";
import { startingCourses, culturalCourses, prices, courseTypeLabel } from "@/data/courses";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { Fireflies } from "@/components/Particles";
import {
  BambooOrnament,
  CloudOrnament,
  DragonOrnament,
  Lantern,
  LotusOrnament,
  PagodaRoofOrnament,
} from "@/components/ornaments";
import { useT, useLanguage } from "@/contexts/LanguageContext";

type FilterType = "all" | "online" | "classroom" | "hybrid";

export default function CoursesPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const t = useT();
  const { lang } = useLanguage();

  const filteredCourses = startingCourses.filter((course) => {
    const matchesFilter = filter === "all" || course.type === filter;
    const matchesSearch =
      course.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* ═══════════ HERO — Dark ═══════════ */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-20 pt-32">
        {/* patterns */}
        <div className="pointer-events-none absolute inset-0 lattice-pattern opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 cloud-pattern opacity-[0.05]" />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-8 top-20 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          語
        </div>

        {/* Ornaments */}
        <Lantern size="sm" className="absolute left-6 top-24 hidden text-accent/30 lg:block" />
        <Lantern size="sm" className="absolute right-10 top-32 hidden text-accent/20 lg:block" />
        <DragonOrnament className="absolute -left-8 bottom-12 hidden h-28 w-36 -scale-x-100 text-accent/15 lg:block" />
        <PagodaRoofOrnament className="absolute right-4 bottom-8 hidden h-16 w-28 text-accent/10 md:block" />

        <Fireflies count={8} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title={t({ hu: "Nyelvtanfolyamok", en: "Language Courses", zh: "语言课程" })}
            subtitle={t({ hu: "Tanfolyamaink min. 5 fő jelentkezése esetén indulnak. Online nyelvtanfolyamainkon a Zoom programot használjuk.", en: "Our courses start with a minimum of 5 enrollments. We use Zoom for online courses.", zh: "课程最少5人报名方可开课。线上课程使用Zoom平台。" })}
          />
        </div>

      </section>

      {/* ═══════════ REGISTRATION + FILTERS + COURSE GRID — Light ═══════════ */}
      <section className="relative bg-cream silk-texture chinese-pattern py-20">
        <div className="pointer-events-none absolute inset-0 coin-pattern opacity-[0.04]" />

        <BambooOrnament className="absolute left-4 top-12 hidden h-32 w-10 text-primary/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Registration Info */}
          <div className="relative mb-12 rounded-[1.5rem] border border-accent/20 bg-white p-8 shadow-sm">
            <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-accent/60" />
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-accent/60" />

            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
              <span>📋</span> {t({ hu: "Jelentkezés menete", en: "Registration Process", zh: "报名流程" })}
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed text-text-secondary">
              <li>{t({ hu: "Online jelentkezés a weboldalon", en: "Online registration on the website", zh: "在网站上在线报名" })}</li>
              <li>{t({ hu: "Visszaigazoló e-mail, ha elértük a minimum 5 fős létszámot", en: "Confirmation email once minimum 5 participants reached", zh: "达到最低5人报名后发送确认邮件" })}</li>
              <li>{t({ hu: "Tandíj befizetése az ELTE ePay rendszerén keresztül (epay.elte.hu)", en: "Tuition payment through ELTE ePay system (epay.elte.hu)", zh: "通过ELTE ePay系统缴纳学费（epay.elte.hu）" })}</li>
              <li>{t({ hu: "Befizetési igazolás küldése az edu@konfuciusz.elte.hu címre", en: "Send payment confirmation to edu@konfuciusz.elte.hu", zh: "将付款证明发送至edu@konfuciusz.elte.hu" })}</li>
              <li>{t({ hu: "Felnőttképzési szerződés aláírása", en: "Signing the adult education contract", zh: "签署成人教育合同" })}</li>
            </ol>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative max-w-md flex-1">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-accent/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={t({ hu: "Keresés szint, oktató vagy kód alapján...", en: "Search by level, instructor or code...", zh: "按级别、教师或代码搜索..." })}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-text-primary focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <div className="flex gap-2">
              {(
                [
                  { value: "all" as FilterType, label: t({ hu: "Összes", en: "All", zh: "全部" }) },
                  { value: "online" as FilterType, label: t({ hu: "🖥 Online", en: "🖥 Online", zh: "🖥 线上" }) },
                  { value: "classroom" as FilterType, label: t({ hu: "🏫 Jelenléti", en: "🏫 In-person", zh: "🏫 面授" }) },
                  { value: "hybrid" as FilterType, label: t({ hu: "🔄 Hibrid", en: "🔄 Hybrid", zh: "🔄 混合" }) },
                ] as const
              ).map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    filter === btn.value
                      ? "bg-primary text-cream shadow-lg shadow-primary/20"
                      : "border border-border bg-white text-text-secondary hover:border-accent/30"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <SectionHeading
            title={`${t({ hu: "Induló nyelvtanfolyamok", en: "Upcoming Language Courses", zh: "即将开课的语言课程" })} (${filteredCourses.length})`}
            tone="light"
            withSeal={false}
            className="mb-8"
          />

          {/* Course Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.code}
                className="group relative rounded-[1.5rem] border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />

                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                      course.type === "online"
                        ? "bg-jade/10 text-jade"
                        : course.type === "classroom"
                          ? "bg-accent/10 text-accent-dark"
                          : "bg-primary/10 text-primary"
                    }`}
                  >
                    {courseTypeLabel(course.type, lang)}
                  </span>
                  <span className="font-mono text-xs text-text-secondary">{course.code}</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-primary">
                  {course.level}
                </h3>

                <div className="space-y-2 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">📅</span> {course.startDate} – {course.endDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">🕐</span> {course.schedule[lang]}, {course.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">👨‍🏫</span> {course.instructor}
                  </div>
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <span className={`text-xl font-bold ${course.isFree ? "text-jade" : "text-primary"}`}>
                    {course.isFree ? t({ hu: "🎉 Ingyenes!", en: "🎉 Free!", zh: "🎉 免费！" }) : `${course.fee.toLocaleString("hu-HU")} Ft`}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-text-secondary">{t({ hu: "Nincs találat a megadott feltételekkel.", en: "No results found for the given criteria.", zh: "没有找到符合条件的结果。" })}</p>
            </div>
          )}
        </div>

      </section>

      {/* ═══════════ CULTURAL COURSES — Dark ═══════════ */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] py-20">
        <div className="pointer-events-none absolute inset-0 hex-pattern opacity-[0.06]" />
        <div className="pointer-events-none absolute inset-0 wave-pattern opacity-[0.04]" />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute left-8 top-8 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          文
        </div>

        <LotusOrnament className="absolute right-6 top-12 hidden h-20 w-24 text-accent/20 md:block" />
        <CloudOrnament className="absolute left-8 bottom-20 hidden h-8 w-32 text-accent/15 lg:block" />

        <Fireflies count={8} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            title={t({ hu: "Kulturális tanfolyamok", en: "Cultural Courses", zh: "文化课程" })}
            subtitle={t({ hu: "Fedezze fel a kínai kultúra művészeti ágait kalligráfia- és festészeti tanfolyamainkon.", en: "Explore the art forms of Chinese culture through our calligraphy and painting courses.", zh: "通过我们的书法和绘画课程探索中国文化的艺术形式。" })}
            className="mb-12"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {culturalCourses.map((course, i) => (
              <TiltCard
                key={i}
                className="rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-8 backdrop-blur-md"
              >
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />

                <div className="mb-1 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
                <h3 className="mb-3 text-lg font-bold text-gold-shimmer">{course.title[lang]}</h3>
                <p className="mb-5 text-sm leading-relaxed text-cream/80">{course.description[lang]}</p>

                <div className="grid grid-cols-2 gap-3 text-sm text-cream/70">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">📅</span> {course.startDate[lang]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">🕐</span> {course.schedule[lang]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">📍</span> {course.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">👨‍🏫</span> {course.instructor}
                  </div>
                </div>

                <div className="mt-5 border-t border-accent/20 pt-4">
                  <span className="font-bold text-accent">{course.fee[lang]}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </section>

      {/* ═══════════ PRICING — Light ═══════════ */}
      <section className="relative bg-cream silk-texture chinese-pattern py-20">
        <div className="pointer-events-none absolute inset-0 coin-pattern opacity-[0.04]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t({ hu: "Áraink", en: "Our Prices", zh: "价格" })}
            tone="light"
            withSeal={false}
            className="mb-12"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => (
              <div
                key={item.level[lang]}
                className={`relative rounded-[1.5rem] border p-8 text-center transition-all hover:shadow-lg ${
                  item.numericPrice === 0
                    ? "border-jade/20 bg-jade/5 hover:border-jade/40"
                    : item.numericPrice === 40000
                      ? "border-primary/30 bg-white shadow-lg shadow-primary/5"
                      : "border-border bg-white hover:border-accent/30"
                }`}
              >
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />

                {item.numericPrice === 40000 && (
                  <>
                    <div className="absolute left-0 right-0 top-0 h-1 rounded-t-[1.5rem] bg-gradient-to-r from-primary via-accent to-primary" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-cream">
                      {t({ hu: "Legnépszerűbb", en: "Most Popular", zh: "最受欢迎" })}
                    </div>
                  </>
                )}

                <h3 className="mb-2 text-lg font-bold text-text-primary">{item.level[lang]}</h3>
                <div
                  className={`mb-4 text-3xl font-bold ${item.numericPrice === 0 ? "text-jade" : "text-primary"}`}
                >
                  {item.price[lang]}
                </div>
                <div className="text-sm text-text-secondary">
                  {item.numericPrice === 0
                    ? t({ hu: "Ismerkedjen meg a kínai nyelvvel!", en: "Get to know the Chinese language!", zh: "了解中文！" })
                    : t({ hu: "per tanfolyam / modul", en: "per course / module", zh: "每期课程/模块" })}
                </div>
              </div>
            ))}
          </div>

          {/* ELTE Discount */}
          <div className="mt-12 relative rounded-[1.5rem] border border-accent/20 bg-white p-8 shadow-sm">
            <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-accent/60" />
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-accent/60" />

            <div className="flex items-start gap-5">
              <span className="text-5xl">🎓</span>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-primary">{t({ hu: "50% kedvezmény ELTE-seknek!", en: "50% Discount for ELTE Members!", zh: "ELTE成员享受50%折扣！" })}</h3>
                <p className="text-text-secondary">
                  {t({ hu: "ELTE hallgatók, ELTE Alumni tagok és ELTE alkalmazottak 50%-os kedvezménnyel vehetik igénybe a teljes árú, vagyis a 40 000 Ft-os nyelvtanfolyamainkat. A kedvezmény más akciókkal nem összevonható.", en: "ELTE students, ELTE Alumni members and ELTE employees can take our full-price (40,000 HUF) language courses with a 50% discount. This discount cannot be combined with other offers.", zh: "ELTE学生、ELTE校友会成员和ELTE员工可享受我们全价（40,000福林）语言课程50%的折扣。此折扣不可与其他优惠叠加使用。" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRIVATE LESSONS — Light ═══════════ */}
      <section className="relative bg-cream silk-texture chinese-pattern py-20">
        <div className="pointer-events-none absolute inset-0 coin-pattern opacity-[0.04]" />

        <BambooOrnament className="absolute right-6 top-8 hidden h-28 w-8 text-primary/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[1.5rem] border border-accent/20 bg-white p-8 shadow-sm">
            <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-accent/60" />
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-accent/60" />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-accent/60" />

            <SectionHeading
              title={t({ hu: "Magánórák", en: "Private Lessons", zh: "私教课程" })}
              tone="light"
              withSeal={false}
              className="mb-4"
            />
            <p className="mb-4 max-w-2xl text-text-secondary">
              {t({ hu: "Egyéni igényekre szabott magánórák is elérhetők. Az óraszámot és az időbeosztást egyénileg egyeztetjük.", en: "Private lessons tailored to individual needs are also available. Hours and schedule are arranged individually.", zh: "我们还提供根据个人需求定制的私教课程。课时和时间安排将单独协商。" })}
            </p>
            <p className="text-sm">
              {t({ hu: "Érdeklődés:", en: "Inquiries:", zh: "咨询：" })}{" "}
              <a
                href="mailto:veres.judit@konfuciusz.elte.hu"
                className="font-medium text-primary hover:text-accent transition-colors"
              >
                veres.judit@konfuciusz.elte.hu
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
