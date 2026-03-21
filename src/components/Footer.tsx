import Link from "next/link";

import { BambooOrnament, CloudOrnament, LotusOrnament, PagodaRoofOrnament } from "@/components/ornaments";
import { Fireflies } from "@/components/Particles";

export function Footer() {
  return (
    <footer className="pagoda-roof-band pagoda-top-border grain-overlay relative overflow-hidden bg-[#0a0a0f] text-cream/85">
      <PagodaRoofOrnament className="absolute left-1/2 top-0 h-16 w-full -translate-x-1/2 text-accent/40" />
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-0 opacity-[0.06] lattice-pattern" />
      <div className="absolute inset-x-0 top-10 h-14 cloud-pattern opacity-[0.2]" />
      <Fireflies count={6} />
      <BambooOrnament className="absolute bottom-0 left-0 hidden h-72 w-24 text-jade/20 lg:block" />
      <LotusOrnament className="absolute bottom-8 right-6 hidden h-24 w-32 text-accent/22 md:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border-2 border-accent/50 bg-primary text-xl font-bold text-accent shadow-lg shadow-primary/20">
                  孔
                </div>
                <div className="absolute -left-0.5 -top-0.5 h-2 w-2 border-l-2 border-t-2 border-accent/60" />
                <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b-2 border-r-2 border-accent/60" />
              </div>
              <div>
                <div className="text-sm font-bold text-cream">ELTE Konfuciusz Intézet</div>
                <div className="text-xs text-accent/80">孔子学院 · Budapest</div>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-cream/85">
              Hiteles kínai nyelvoktatás, kulturális programok és elegáns tanulási környezet 2006 óta.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/konfuciuszintezet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/user/Konfuciusz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://wiki.konfuciuszintezet.hu/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary"
                aria-label="Enciklopédia"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Navigáció</h3>
            <ul className="space-y-3 text-sm text-cream/85">
              <li><Link href="/nyelvtanfolyamok" className="transition-colors duration-300 hover:text-accent">Nyelvtanfolyamok</Link></li>
              <li><Link href="/nyelvvizsgak" className="transition-colors duration-300 hover:text-accent">Nyelvvizsgák</Link></li>
              <li><Link href="/araink" className="transition-colors duration-300 hover:text-accent">Áraink</Link></li>
              <li><Link href="/osztondijak" className="transition-colors duration-300 hover:text-accent">Kínai Ösztöndíjak</Link></li>
              <li><Link href="/hireink" className="transition-colors duration-300 hover:text-accent">Híreink</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Források</h3>
            <ul className="space-y-3 text-sm text-cream/85">
              <li><Link href="/letoltesek" className="transition-colors duration-300 hover:text-accent">Letöltések</Link></li>
              <li><a href="https://wiki.konfuciuszintezet.hu/index.php" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-accent">Enciklopédia</a></li>
              <li><a href="https://www.youtube.com/user/Konfuciusz" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-accent">Konfuciusz Konyhája</a></li>
              <li><a href="http://confucius-institutes.eu/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-accent">CEETC</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Elérhetőség</h3>
            <ul className="space-y-3 text-sm text-cream/85">
              <li className="flex gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                1088 Budapest, Múzeum krt. 4/F., I.16.
              </li>
              <li className="flex gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+3614116597" className="transition-colors duration-300 hover:text-accent">(36)-(1)-411-6597</a>
              </li>
              <li className="flex gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:office@konfuciusz.elte.hu" className="transition-colors duration-300 hover:text-accent">office@konfuciusz.elte.hu</a>
              </li>
              <li className="flex gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                H-Cs: 10:30-18:30 | P: zárva
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 mt-12 text-center">
          <div className="flex items-center justify-center gap-3 text-accent/70 text-sm">
            <span className="hidden h-px w-14 bg-accent/35 sm:block" />
            <CloudOrnament className="h-5 w-28" />
            <span className="hidden h-px w-14 bg-accent/35 sm:block" />
          </div>
          <p className="mt-4 text-sm italic text-cream/80">
            &ldquo;A nemes ember óvatos tartózkodást tanúsít mindenben, amihez nem ért.&rdquo; — 孔子
          </p>
        </div>

        <div className="border-t border-accent/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream/75 md:flex-row">
            <p>&copy; {new Date().getFullYear()} ELTE Konfuciusz Intézet, Budapest. Minden jog fenntartva.</p>
            <div className="flex gap-4">
              <span>Adószám (Magyar Kína-kutatásért Alapítvány): 18180640-1-42</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
