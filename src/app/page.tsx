"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

import { SectionHeading } from "@/components/SectionHeading";
import {
  BambooOrnament,
  CloudOrnament,
  DragonOrnament,
  Lantern,
  LotusOrnament,
  PagodaRoofOrnament,
  PhoenixOrnament,
  WaveOrnament,
} from "@/components/ornaments";
import { culturalCourses, instituteFacts, newsItems, startingCourses } from "@/data/courses";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useCountUp } from "@/hooks/useCountUp";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Fireflies, GoldenDust } from "@/components/Particles";

/* ─── helper: mobile check for particle counts ─── */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

/* ─── character reveal (spec 5.1) ─── */

function CharacterReveal({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 120, damping: 12 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── count-up stat (spec 1.4) ─── */

function CountUpStat({ value, label }: { value: string; label: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const isYear = label === "óta működünk";
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <div ref={ref} className="mb-1 text-4xl font-bold text-primary lg:text-[2.5rem]">
        {isYear ? value : `${count.toLocaleString("hu-HU")}${suffix}`}
      </div>
      <div className="text-xs font-medium text-text-secondary lg:text-sm">{label}</div>
    </div>
  );
}

/* ─── main page ─── */

export default function Home() {
  const upcomingCourses = startingCourses.slice(0, 6);
  const latestNews = newsItems.slice(0, 5);
  const heroRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(heroRef);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  /* Scroll-based parallax (spec 1.5) */
  const { scrollY } = useScroll();
  const parallaxSlow = useTransform(scrollY, [0, 1000], [0, -60]);   // 0.2x — backgrounds
  const parallaxMed = useTransform(scrollY, [0, 1000], [0, -120]);   // 0.4x — patterns
  const parallaxFast = useTransform(scrollY, [0, 1000], [0, -200]);   // 0.6x — decorations

  /* Particle counts: desktop vs mobile (null = not yet mounted) */
  const isMounted = isMobile !== null;
  const fireflyCount = isMobile ? 5 : 12;
  const fireflyCountSmall = isMobile ? 3 : 8;

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        ref={heroRef}
        className="grain-overlay vignette relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f] wave-divider wave-divider-cream"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/35 via-[#0a0a0f] to-[#0a0a0f]" />

          {/* Parallax layers — scroll-linked per spec 1.5 */}
          <motion.div className="absolute inset-0 lattice-pattern opacity-[0.15]" style={{ y: parallaxSlow }} />
          <motion.div className="absolute inset-x-0 top-0 h-72 cloud-pattern opacity-[0.24]" style={{ y: parallaxMed }} />
          <motion.div className="absolute inset-x-0 bottom-10 h-20 wave-pattern opacity-[0.34]" style={{ y: parallaxSlow }} />
          <motion.div className="absolute inset-y-0 left-0 w-1/2 hex-pattern opacity-[0.12]" style={{ y: parallaxMed }} />

          {/* Decorative circles — faster parallax */}
          <motion.div className="absolute top-20 right-20 h-96 w-96 rounded-full border border-accent/10 animate-spin-slow" style={{ y: parallaxFast }} />
          <div className="absolute top-24 right-24 h-80 w-80 rounded-full border border-accent/[0.07]" />
          <motion.div
            className="absolute bottom-20 left-10 h-64 w-64 rounded-full border border-primary/10 animate-spin-slow"
            style={{ animationDirection: "reverse", y: parallaxFast }}
          />

          {/* Floating Chinese characters */}
          <motion.div
            className="absolute left-[10%] top-1/4 select-none text-[15rem] font-bold leading-none text-accent/[0.06]"
            style={{ y: parallaxFast }}
          >
            學
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-[12%] select-none text-[12rem] font-bold leading-none text-primary/[0.08]"
            style={{ y: parallaxMed }}
          >
            道
          </motion.div>
          <motion.div
            className="absolute right-[38%] top-[60%] select-none text-[8rem] font-bold leading-none text-accent/[0.05]"
            style={{ y: parallaxSlow }}
          >
            德
          </motion.div>

          {/* Mouse-reactive clouds (spec 4.4) */}
          <motion.div
            className="absolute left-[6%] top-[16%]"
            style={{
              x: mouse.normalizedX * 10,
              y: mouse.normalizedY * 5,
            }}
          >
            <CloudOrnament className="h-14 w-44 text-accent/35 ornament-glow" />
          </motion.div>
          <motion.div
            className="absolute bottom-[18%] right-[16%]"
            style={{
              x: mouse.normalizedX * -8,
              y: mouse.normalizedY * -4,
            }}
          >
            <CloudOrnament className="h-12 w-40 text-primary/25" />
          </motion.div>

          <BambooOrnament className="absolute -bottom-10 left-0 hidden h-72 w-28 text-jade/30 lg:block" />
          <LotusOrnament className="absolute bottom-12 right-10 hidden h-24 w-32 text-accent/30 md:block" />
          <PhoenixOrnament className="absolute right-[6%] top-[16%] hidden h-24 w-56 text-accent/40 xl:block" />
        </div>


        {isMounted && !reducedMotion && <GoldenDust count={isMobile ? 10 : 20} />}

        {/* Lanterns with interactive prop */}
        <motion.div
          className="absolute left-[8%] top-16 z-[5] hidden md:block"
          animate={{ rotate: [-4, 4, -4], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ transformOrigin: "top center" }}
        >
          <Lantern size="lg" interactive />
        </motion.div>
        <motion.div
          className="absolute right-[12%] top-24 z-[5] hidden md:block"
          animate={{ rotate: [3, -3, 3], y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "top center" }}
        >
          <Lantern size="sm" interactive />
        </motion.div>
        <motion.div
          className="absolute left-[35%] top-12 z-[5] hidden lg:block"
          animate={{ rotate: [-3, 5, -3], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
          style={{ transformOrigin: "top center" }}
        >
          <Lantern size="lg" interactive />
        </motion.div>
        <motion.div
          className="absolute right-[35%] top-20 z-[5] hidden lg:block"
          animate={{ rotate: [2, -4, 2], y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }}
          style={{ transformOrigin: "top center" }}
        >
          <Lantern size="sm" interactive />
        </motion.div>
        <motion.div
          className="absolute left-[60%] top-8 z-[5] hidden xl:block"
          animate={{ rotate: [-2, 3, -2], y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
          style={{ transformOrigin: "top center" }}
        >
          <Lantern size="lg" interactive />
        </motion.div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm text-accent"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              2006 óta a kínai nyelv és kultúra szolgálatában
            </motion.div>

            <SectionHeading
              as="h1"
              tone="dark"
              title={
                <>
                  <span className="text-white">ELTE Konfuciusz</span>
                  <br />
                  <span className="text-gold-gradient">Intézet</span>
                </>
              }
              subtitle="Hiteles kínai nyelvoktatás, gazdag kulturális programok és elegáns, inspiráló tanulási környezet Budapesten."
              subtitleClassName="max-w-xl text-lg text-cream/90"
              titleClassName="leading-[1.03]"
              className="mb-5"
            />

            <div className="mb-5 flex items-center gap-4">
              <DragonOrnament className="h-14 w-40 text-accent ornament-glow" />
              <PhoenixOrnament className="hidden h-14 w-40 text-accent/75 md:block" />
            </div>

            <div className="mb-10 flex items-center gap-4">
              <div className="h-px max-w-[60px] flex-1 bg-accent/60" />
              <CharacterReveal text="孔子学院" className="text-lg tracking-[0.3em] text-accent" />
              <div className="h-px max-w-[60px] flex-1 bg-accent/60" />
            </div>

            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Link
                  href="/nyelvtanfolyamok"
                  className="group relative overflow-hidden rounded-sm bg-primary px-8 py-4 font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(196,30,36,0.4)] animate-glow"
                >
                  <span className="relative z-10">Tanfolyamok</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary transition-all group-hover:from-primary group-hover:to-primary-light" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/elerhetosegunk"
                  className="rounded-sm border-2 border-accent/50 px-8 py-4 font-semibold text-accent transition-all hover:border-accent hover:bg-accent/10"
                >
                  Kapcsolat
                </Link>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div
                className="scroll-frame section-silk relative rounded-[2rem] border border-accent/30 bg-white/[0.04] p-10 backdrop-blur-md"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="absolute inset-[18px] rounded-[1.65rem] border border-accent/15 pointer-events-none" />
                <PagodaRoofOrnament className="absolute left-1/2 top-3 h-10 w-[82%] -translate-x-1/2 text-accent/45" />
                <LotusOrnament className="absolute bottom-4 right-4 h-16 w-20 text-accent/20" />
                <div className="relative flex items-start gap-3 py-4">
                  <span className="shrink-0 text-7xl leading-[0.8] text-accent/40">「</span>
                  <p className="flex-1 pt-3 text-center text-xl italic leading-relaxed text-white">
                    A nemes ember óvatos tartózkodást tanúsít mindenben, amihez nem ért.
                  </p>
                  <span className="shrink-0 self-end text-7xl leading-[0.8] text-accent/40">」</span>
                </div>
                <p className="relative mt-4 text-center font-medium text-accent">
                  — 孔子 · Konfuciusz (XIII.3)
                </p>
                <div className="absolute inset-0 rounded-[2rem] animate-shimmer pointer-events-none" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 100, damping: 15 }}
                className="absolute -bottom-6 -right-6 rounded-[1.5rem] border border-accent/40 bg-primary p-5 shadow-2xl shadow-primary/30 backdrop-blur-sm"
                style={{ transform: "rotate(3deg)" }}
              >
                <div className="text-4xl font-bold text-accent">2500+</div>
                <div className="text-sm text-cream/90">diák évente</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <span className="text-xs tracking-widest text-accent/80">GÖRGETÉS</span>
          <svg className="h-5 w-5 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ═══════════ STATISTICS ═══════════ */}
      <section className="silk-texture relative overflow-hidden bg-cream pt-14 pb-10 chinese-pattern wave-divider wave-divider-dark">
        <div style={{ position: 'absolute', inset: 0 }} className="coin-pattern opacity-[0.25]" />
        {/* Clouds - xiangyun - dúsan szétszórva */}
        <div style={{ position: 'absolute' }} className="left-2 top-2 hidden h-20 w-64 text-accent/45 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute' }} className="right-[12%] top-0 hidden h-16 w-52 text-accent/35 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute', transform: 'scaleX(-1)' }} className="left-[20%] top-[40%] hidden h-14 w-44 text-accent/25 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute' }} className="right-2 bottom-[35%] hidden h-18 w-56 text-accent/30 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute', transform: 'scaleX(-1)' }} className="bottom-6 left-[8%] hidden h-16 w-52 text-accent/35 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute' }} className="bottom-2 right-[30%] hidden h-12 w-40 text-accent/20 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        {/* Dragon & Phoenix */}
        <div style={{ position: 'absolute' }} className="left-[3%] bottom-12 hidden h-16 w-48 text-accent/30 lg:block">
          <DragonOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute' }} className="right-[3%] top-10 hidden h-16 w-48 text-accent/25 lg:block">
          <PhoenixOrnament className="h-full w-full" />
        </div>
        {/* Lotus */}
        <div style={{ position: 'absolute' }} className="bottom-0 right-[16%] hidden h-32 w-44 text-accent/35 lg:block">
          <LotusOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute' }} className="left-[14%] top-[12%] hidden h-20 w-28 text-accent/20 lg:block">
          <LotusOrnament className="h-full w-full" />
        </div>
        {/* Wave ornaments - arany hullámok */}
        <div style={{ position: 'absolute' }} className="left-[4%] top-[55%] hidden h-8 w-36 text-accent/35 lg:block">
          <WaveOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute' }} className="right-[6%] bottom-[38%] hidden h-8 w-32 text-accent/30 lg:block">
          <WaveOrnament className="h-full w-full" />
        </div>
        {/* Pagoda roof - tetőív a szekció tetején */}
        <div style={{ position: 'absolute' }} className="left-[28%] top-0 hidden h-10 w-[44%] text-accent/20 lg:block">
          <PagodaRoofOrnament className="h-full w-full" />
        </div>
        {/* Extra clouds */}
        <div style={{ position: 'absolute' }} className="right-[38%] top-[18%] hidden h-10 w-32 text-accent/25 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <div style={{ position: 'absolute', transform: 'scaleX(-1)' }} className="left-[32%] bottom-[18%] hidden h-10 w-28 text-accent/20 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-0">
            <SectionHeading
              align="center"
              compact
              title="Az intézet számokban"
              subtitle="汇聚数据 · Adatok egy helyen, klasszikus kertmotívumokkal keretezve."
            />
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-3">
            {instituteFacts.map((fact) => (
              <div
                key={fact.label}
                className="relative aspect-square overflow-hidden rounded-full p-4"
              >
                <div className="moongate absolute inset-0 border-accent/35" />
                <div className="absolute inset-3 rounded-full border border-accent/20" />
                <CountUpStat value={fact.number} label={fact.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CULTURAL COURSES ═══════════ */}
      <section
        className="grain-overlay vignette relative overflow-hidden bg-[#0a0a0f] py-24 section-silk wave-divider wave-divider-cream"
      >
        <div className="absolute inset-0 lattice-pattern opacity-[0.12]" />
        {/* CharacterReveal on background text (spec 5.1) */}
        <div className="absolute right-0 top-0 text-[20rem] font-bold leading-none text-accent/[0.05] select-none">
          <CharacterReveal text="文化" />
        </div>
        <div className="absolute left-0 top-12 h-24 w-64 cloud-pattern opacity-[0.2]" />
        <BambooOrnament className="absolute bottom-0 left-0 hidden h-72 w-24 text-jade/25 lg:block" />
        {isMounted && !reducedMotion && <Fireflies count={fireflyCount} />}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              align="center"
              tone="dark"
              title="Kulturális tanfolyamok"
              subtitle="Ismerkedjen meg a kínai kultúra gazdagságával kalligráfia- és festészeti tanfolyamainkon."
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {culturalCourses.map((course, index) => (
              <div key={course.title}>
                {/* TiltCard + glassmorphism blur-md + border shimmer (spec 1.2, 3.2) */}
                <TiltCard className="card-shimmer-border group relative overflow-hidden rounded-[1.75rem] border border-accent/20 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-accent/50 hover:bg-white/[0.08]">
                  <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
                  <div className="absolute inset-0 wave-pattern opacity-[0.12] group-hover:opacity-[0.22]" />
                  <div className="absolute right-4 top-4">
                    <motion.div
                      animate={{ rotate: [-4, 4, -4] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: index * 0.35 }}
                      style={{ transformOrigin: "top center" }}
                    >
                      <Lantern size="sm" />
                    </motion.div>
                  </div>
                  <div className="relative p-8">
                    <h3 className="pr-12 text-xl font-bold text-white transition-colors group-hover:text-accent">
                      {course.title}
                    </h3>
                    <p className="mb-6 mt-4 leading-relaxed text-cream/85">{course.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {[
                        { icon: "📅", label: course.startDate },
                        { icon: "🕐", label: course.schedule },
                        { icon: "📍", label: course.location },
                        { icon: "👨‍🏫", label: course.instructor },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 text-cream/80">
                          <span className="text-base">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-accent/15 pt-6">
                      <span className="text-lg font-bold text-accent">{course.fee}</span>
                      <Link
                        href="/elerhetosegunk"
                        className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
                      >
                        Jelentkezés
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ UPCOMING COURSES ═══════════ */}
      <section
        className="silk-texture relative overflow-hidden bg-cream py-24 chinese-pattern wave-divider wave-divider-dark"
      >
        <div className="absolute inset-0 coin-pattern opacity-[0.3]" />
        <div className="absolute right-[-2rem] top-10 hidden h-48 w-48 rounded-full border border-accent/20 lg:block" />
        <div className="absolute left-[5%] top-16 hidden h-16 w-56 text-accent/25 lg:block">
          <CloudOrnament className="h-full w-full" />
        </div>
        <BambooOrnament className="absolute -bottom-8 right-0 hidden h-56 w-20 text-jade/15 lg:block" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="Induló tanfolyamok"
              subtitle="Jelentkezzen kínai nyelvtanfolyamainkra – online, jelenléti és hibrid formában egyaránt."
            />
            <Link
              href="/nyelvtanfolyamok"
              className="hidden items-center gap-2 font-medium text-primary transition-colors hover:text-accent sm:flex"
            >
              Összes tanfolyam
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingCourses.map((course) => (
              <Link key={course.code} href="/nyelvtanfolyamok">
                <TiltCard className="card-chinese group rounded-[1.5rem] border border-border bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`rounded-sm px-3 py-1 text-xs font-semibold ${
                        course.type === "online"
                          ? "bg-jade/10 text-jade"
                          : course.type === "classroom"
                            ? "bg-accent/10 text-accent-dark"
                            : "bg-primary/10 text-primary"
                      }`}
                    >
                      {course.type === "online"
                        ? "🖥 Online"
                        : course.type === "classroom"
                          ? "🏫 Jelenléti"
                          : "🔁 Hibrid"}
                    </span>
                    <span className="font-mono text-xs text-text-secondary">{course.code}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-primary">
                    {course.level}
                  </h3>
                  <div className="mb-4 space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">📅</span>
                      {course.startDate} – {course.endDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">🕐</span>
                      {course.schedule}, {course.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">👨‍🏫</span>
                      {course.instructor}
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <span className={`text-xl font-bold ${course.isFree ? "text-jade" : "text-primary"}`}>
                      {course.isFree ? "🎉 Ingyenes" : `${course.fee.toLocaleString("hu-HU")} Ft`}
                    </span>
                  </div>
                </TiltCard>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/nyelvtanfolyamok"
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-accent"
            >
              Összes tanfolyam →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ NEWS ═══════════ */}
      <section
        className="grain-overlay vignette relative overflow-hidden bg-[#0a0a0f] py-24 section-silk wave-divider wave-divider-cream"
      >
        <div className="absolute inset-0 hex-pattern opacity-[0.2]" />
        {/* CharacterReveal on background text (spec 5.1) */}
        <div className="absolute bottom-0 left-0 text-[18rem] font-bold leading-none text-accent/[0.05] select-none">
          <CharacterReveal text="新闻" />
        </div>
        <PhoenixOrnament className="absolute left-[6%] top-12 hidden h-20 w-44 text-accent/30 lg:block" />
        <CloudOrnament className="absolute right-[8%] bottom-16 hidden h-10 w-36 text-accent/20 lg:block" />
        {isMounted && !reducedMotion && <Fireflies count={fireflyCount} />}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              tone="dark"
              title="Legfrissebb híreink"
              subtitle="Kövesse nyomon intézetünk legfrissebb eseményeit, kulturális programjait és eredményeit."
            />
            <Link
              href="/hireink"
              className="hidden items-center gap-2 font-medium text-accent transition-colors hover:text-accent-light sm:flex"
            >
              Összes hír
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-3">
            {latestNews.map((news) => (
              <Link key={`${news.date}-${news.title}`} href="/hireink">
                {/* TiltCard on news items (spec 1.2) + glassmorphism blur-md + border shimmer (spec 3.2) */}
                <TiltCard className="card-shimmer-border group flex cursor-pointer items-center gap-6 rounded-[1.5rem] border border-accent/15 bg-white/[0.05] p-5 backdrop-blur-md transition-all hover:border-accent/35 hover:bg-white/[0.08]">
                  {/* Chop-mark stamp (spec 5.5) */}
                  <div className="chop-mark hidden h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-sm text-white sm:flex">
                    <div className="text-[10px] font-medium text-cream/90">{news.date.split(".")[0]}</div>
                    <div className="text-lg font-bold leading-tight">{news.date.split(".")[1]}.{news.date.split(".")[2]}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white transition-colors group-hover:text-accent">
                      {news.title}
                    </h3>
                    {news.description && (
                      <p className="mt-1 line-clamp-2 text-sm text-cream/90">{news.description}</p>
                    )}
                    <span className="text-xs text-cream/80 sm:hidden">{news.date}</span>
                  </div>
                  <svg className="h-5 w-5 flex-shrink-0 text-accent/80 transition-colors group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </TiltCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section
        className="grain-overlay vignette relative overflow-hidden bg-[#120b0b] py-28 section-silk pagoda-divider"
      >
        <PagodaRoofOrnament className="absolute left-1/2 top-0 h-20 w-full -translate-x-1/2 text-accent/40" />
        <div className="absolute inset-0">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute inset-x-0 top-10 h-16 wave-pattern opacity-[0.26]" />
          <div className="absolute inset-x-0 bottom-12 h-20 cloud-pattern opacity-[0.24]" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <BambooOrnament className="absolute bottom-0 left-0 hidden h-72 w-28 text-jade/30 lg:block" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          <LotusOrnament className="absolute bottom-10 right-8 hidden h-24 w-32 text-accent/35 md:block" />
        </motion.div>
        {isMounted && !reducedMotion && <Fireflies count={fireflyCountSmall} />}

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="scroll-frame rounded-[2rem] border border-accent/30 bg-white/[0.05] px-6 py-12 backdrop-blur-md sm:px-12"
          >
            <div className="mb-6 flex items-center justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
              >
                <DragonOrnament className="h-12 w-32 text-accent/85" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
              >
                <PhoenixOrnament className="h-12 w-32 text-accent/75" />
              </motion.div>
            </div>

            <SectionHeading
              align="center"
              tone="dark"
              title={
                <>
                  Kezdje el a kínai nyelv
                  <br />
                  <span className="text-gold-gradient">tanulását</span>
                </>
              }
              subtitle="Csatlakozzon több mint 2500 diákunkhoz, és fedezze fel a kínai nyelv és kultúra szépségét."
              subtitleClassName="mx-auto max-w-2xl text-lg text-cream/90"
              className="items-center"
            />

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/nyelvtanfolyamok"
                  className="group relative overflow-hidden rounded-sm bg-primary px-10 py-4 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(196,30,36,0.3)] animate-glow"
                >
                  <span className="relative z-10">Tanfolyamok megtekintése</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary transition-all group-hover:from-primary group-hover:to-primary-light" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/araink"
                  className="rounded-sm border-2 border-accent/45 px-10 py-4 font-semibold text-accent transition-all hover:border-accent hover:bg-accent/10"
                >
                  Árak és kedvezmények
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
