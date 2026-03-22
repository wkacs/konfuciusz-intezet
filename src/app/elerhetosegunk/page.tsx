"use client";

import { SectionHeading } from "@/components/SectionHeading";
import {
  BambooOrnament,
  CloudOrnament,
  DragonOrnament,
  Lantern,
  LotusOrnament,
  PhoenixOrnament,
} from "@/components/ornaments";
import { Fireflies } from "@/components/Particles";
import { TiltCard } from "@/components/TiltCard";
import { staff } from "@/data/courses";
import { useT, useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* ── Dark Hero Section ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-16 pt-32">
        <div className="absolute inset-0 cloud-pattern opacity-[0.06]" />
        <Fireflies count={8} />

        {/* Chinese background character */}
        <div className="pointer-events-none absolute right-8 top-16 text-[12rem] font-bold leading-none text-accent/[0.05] select-none">
          聯
        </div>

        {/* Ornaments */}
        <DragonOrnament className="absolute left-6 top-28 hidden h-10 w-32 text-accent/20 lg:block" />
        <CloudOrnament className="absolute right-10 bottom-10 hidden h-8 w-24 text-accent/15 md:block" />
        <Lantern size="sm" className="absolute left-16 top-16 hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            tone="dark"
            title={t({ hu: "Elérhetőségünk", en: "Contact Us", zh: "联系我们" })}
            subtitle={t({ hu: "Látogasson meg minket személyesen, vagy vegye fel velünk a kapcsolatot.", en: "Visit us in person or get in touch.", zh: "欢迎亲临参观或与我们联系。" })}
          />
        </div>

      </section>

      {/* ── Light Contact Info Section ── */}
      <section className="bg-cream silk-texture chinese-pattern relative pb-16 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: "📍", title: t({ hu: "Cím", en: "Address", zh: "地址" }), content: "1088 Budapest, Múzeum krt. 4/F., I. em. 16." },
              { icon: "📞", title: t({ hu: "Telefon", en: "Phone", zh: "电话" }), content: "(36)-(1)-411-6597\n(36)-(1)-411-65-00/5401\n+36 30 144 3123\nFax: (36)-(1)-411-65-98" },
              { icon: "🕐", title: t({ hu: "Ügyfélfogadás", en: "Office Hours", zh: "办公时间" }), content: t({ hu: "Hétfőtől csütörtökig: 10:30-18:30\nPénteken: nincs ügyfélfogadás", en: "Monday to Thursday: 10:30-18:30\nFriday: closed", zh: "周一至周四：10:30-18:30\n周五：休息" }) + "\n\nE-mail: office@konfuciusz.elte.hu\n" + t({ hu: "Tanfolyam-jelentkezés:", en: "Course registration:", zh: "课程报名：" }) + " kristaly.agnes@konfuciusz.elte.hu" },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-[1.5rem] border border-border bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Corner decorations */}
                <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-accent/30 transition-all group-hover:h-7 group-hover:w-7 group-hover:border-accent/50" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-accent/30 transition-all group-hover:h-7 group-hover:w-7 group-hover:border-accent/50" />
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-3 text-lg font-bold text-text-primary">{item.title}</h3>
                <div className="whitespace-pre-line text-sm leading-relaxed text-text-secondary">{item.content}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Dark Staff Section ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-16 pt-16">
        <div className="absolute inset-0 lattice-pattern opacity-[0.12]" />
        <Fireflies count={8} />

        {/* Ornaments */}
        <BambooOrnament className="absolute -bottom-8 left-0 hidden h-64 w-20 text-jade/20 lg:block" />
        <PhoenixOrnament className="absolute right-8 top-8 hidden h-10 w-32 text-accent/15 md:block" />
        <Lantern size="sm" className="absolute right-12 top-4 hidden xl:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            title={t({ hu: "Munkatársaink", en: "Our Team", zh: "我们的团队" })}
            subtitle={t({ hu: "Intézetünk szakértő csapata", en: "Our institute's expert team", zh: "学院的专业团队" })}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member) => (
              <TiltCard key={member.name}>
                <div className="flex items-center gap-4 rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-5 backdrop-blur-md">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-accent/20 bg-gradient-to-br from-primary to-primary-dark text-lg font-bold text-cream">
                    {member.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-cream">{member.name}</div>
                    <div className="text-xs text-cream/60">{member.role[lang]}</div>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-xs text-accent hover:text-accent/80 transition-colors">
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </section>

      {/* ── Light "About the Institute" Section ── */}
      <section className="bg-cream silk-texture chinese-pattern relative pb-16 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-accent/20 bg-[#0a0a0f] p-8 section-silk">
            <div className="absolute inset-0 lattice-pattern opacity-[0.12]" />
            <CloudOrnament className="absolute right-8 top-6 hidden h-10 w-28 text-accent/25 md:block" />
            <BambooOrnament className="absolute -bottom-8 left-0 hidden h-64 w-20 text-jade/25 lg:block" />
            <LotusOrnament className="absolute bottom-4 right-4 hidden h-16 w-24 text-accent/10 lg:block" />

            <div className="relative">
              <SectionHeading
                tone="dark"
                title={t({ hu: "Az intézetről", en: "About the Institute", zh: "关于学院" })}
                subtitle={t({
                  hu: "Az ELTE Konfuciusz Intézet 2006-ban alakult, és azóta számos elismerést kapott. 5 városban, 21 intézményben működik, évente több mint 2500 diákot oktat 28 anyanyelvű szaktanár bevonásával. Évente 8 vizsgát szervez, több mint 800 vizsgázóval.",
                  en: "The ELTE Confucius Institute was founded in 2006 and has received numerous recognitions since. It operates in 5 cities, across 21 institutions, teaching over 2,500 students annually with the involvement of 28 native-speaking teachers. It organizes 8 exams per year, with more than 800 examinees.",
                  zh: "ELTE孔子学院成立于2006年，此后获得了众多荣誉。学院在5个城市、21所机构开展工作，每年有28名母语教师教授超过2500名学生。每年举办8次考试，考生超过800人。",
                })}
                titleClassName="text-2xl sm:text-3xl"
                subtitleClassName="max-w-4xl text-cream/85"
              />
              <p className="mt-4 text-cream/85">
                {t({
                  hu: "Hanban Kiválósági tanúsítványok: 2007, 2009, 2011, 2013. Modell Konfuciusz Intézet: 2015. Kiváló HSK vizsgaközpont: 2020, 2021, 2022, 2023, 2025. Modell Kínai Nyelvvizsgaközpont: 2024.",
                  en: "Hanban Certificates of Excellence: 2007, 2009, 2011, 2013. Model Confucius Institute: 2015. Outstanding HSK Exam Center: 2020, 2021, 2022, 2023, 2025. Model Chinese Language Exam Center: 2024.",
                  zh: "汉办优秀证书：2007、2009、2011、2013年。模范孔子学院：2015年。优秀HSK考点：2020、2021、2022、2023、2025年。模范中文考试中心：2024年。",
                })}
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ── Dark Partners + Tax Donation Section ── */}
      <section className="grain-overlay vignette section-silk relative overflow-hidden bg-[#0a0a0f] pb-20 pt-16">
        <div className="absolute inset-0 hex-pattern opacity-[0.06]" />
        <Fireflies count={8} />

        {/* Ornaments */}
        <DragonOrnament className="absolute left-4 bottom-8 hidden h-10 w-32 text-accent/15 lg:block" />
        <Lantern size="sm" className="absolute left-8 top-8 hidden xl:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            title={t({ hu: "Partnerszervezetek", en: "Partner Organizations", zh: "合作机构" })}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { name: "ELTE Közép- és Kelet-európai Regionális Kínai Nyelvtanárképzési Központ (CEETC)", href: "http://confucius-institutes.eu/" },
              { name: "ELTE Római Világ és Távol-Kelet Kutatócsoport", href: "https://romanworld.konfuciuszintezet.hu/" },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-[1.5rem] border border-accent/20 bg-white/[0.05] p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.08]"
              >
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-accent/20 transition-all group-hover:border-accent/50" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent/20 transition-all group-hover:border-accent/50" />
                <h3 className="font-semibold text-cream transition-colors group-hover:text-accent">
                  {partner.name}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-accent/70 transition-colors group-hover:text-accent">
                  {t({ hu: "Meglátogatás", en: "Visit", zh: "访问" })}
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          {/* Tax Donation Card */}
          <div className="mt-12 relative rounded-[1.5rem] border border-accent/30 bg-white/[0.05] p-8 backdrop-blur-md">
            <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-accent/40" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-accent/40" />
            <h3 className="mb-3 text-lg font-bold text-cream">{t({ hu: "Támogasson minket adója 1%-ával!", en: "Support us with 1% of your tax!", zh: "用您1%的税款支持我们！" })}</h3>
            <p className="text-sm text-cream/70">
              {t({ hu: "Magyar Kína-kutatásért Alapítvány adószáma:", en: "Tax ID of Hungarian Foundation for China Studies:", zh: "匈牙利中国研究基金会税号：" })}{" "}
              <span className="font-mono font-bold text-accent">18180640-1-42</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
