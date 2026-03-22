"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/courses";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const flags: { code: Language; text: string; label: string }[] = [
  { code: "hu", text: "HU", label: "Magyar" },
  { code: "en", text: "EN", label: "English" },
  { code: "zh", text: "中", label: "中文" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-[#1a0a0a]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(196,30,36,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Top gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-sm bg-primary border-2 border-accent/50 flex items-center justify-center text-accent font-bold text-xl group-hover:border-accent transition-colors shadow-lg">
                孔
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-accent/60" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-accent/60" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm leading-tight text-cream">
                {lang === "en" ? "ELTE Confucius Institute" : lang === "zh" ? "ELTE孔子学院" : "ELTE Konfuciusz Intézet"}
              </div>
              <div className="text-xs text-accent/80">
                孔子学院 · Budapest
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-accent"
                    : "text-cream/80 hover:text-accent"
                }`}
              >
                {item.label[lang]}
                {pathname === item.href ? (
                  <motion.svg
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-2"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.path
                      d="M2 5C12 2 25 7 38 4C51 1 62 6 75 3C88 0 95 5 98 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      className="text-accent"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </motion.svg>
                ) : (
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5C12 2 25 7 38 4C51 1 62 6 75 3C88 0 95 5 98 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      className="text-accent/50"
                    />
                  </svg>
                )}
              </Link>
            ))}

            {/* Language Switcher - Desktop */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-accent/20">
              {flags.map((f) => (
                <button
                  key={f.code}
                  onClick={() => setLang(f.code)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    lang === f.code
                      ? "text-white bg-white/20 ring-2 ring-white/60 scale-110"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={f.label}
                  title={f.label}
                >
                  {f.text}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher + Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language Switcher - Mobile (compact) */}
            <div className="flex items-center gap-0.5">
              {flags.map((f) => (
                <button
                  key={f.code}
                  onClick={() => setLang(f.code)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                    lang === f.code
                      ? "text-white bg-white/20 ring-2 ring-white/60 scale-110"
                      : "text-white/50 hover:text-white"
                  }`}
                  aria-label={f.label}
                >
                  {f.text}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-cream hover:text-accent transition-colors"
              aria-label={lang === "en" ? "Menu" : lang === "zh" ? "菜单" : "Menü"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      {scrolled && <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a0a0a]/98 backdrop-blur-md border-t border-accent/20 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-primary/20 text-accent border-l-2 border-accent"
                      : "text-cream/80 hover:text-accent hover:bg-white/5"
                  }`}
                >
                  {item.label[lang]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
