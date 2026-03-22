"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "hu" | "en" | "zh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "hu",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("hu");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && ["hu", "en", "zh"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang } = useLanguage();
  return <T,>(entry: { hu: T; en: T; zh: T }): T => entry[lang];
}
