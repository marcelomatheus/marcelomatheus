"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { Language, PortfolioCopy } from "@/data/translations";
import { translations } from "@/data/translations";
import type { LanguageContextValue, LanguageProviderProps } from "./interfaces/language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const resolvePath = (tree: Record<string, unknown>, path: string): unknown => {
  if (!path) return tree;
  return path.split(".").reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === "object" && !Array.isArray(acc)) {
      return (acc as Record<string, unknown>)[segment];
    }
    if (!acc && segment in tree) {
      return (tree as Record<string, unknown>)[segment];
    }
    return undefined;
  }, undefined);
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("pt");

  const dictionary = useMemo<PortfolioCopy>(() => translations[language], [language]);

  const t = useCallback(
    <ReturnType,>(path: string) =>
      (resolvePath(dictionary as unknown as Record<string, unknown>, path) ?? path) as ReturnType,
    [dictionary],
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((prev: Language) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      dictionary,
      t,
    }),
    [language, dictionary, t, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
