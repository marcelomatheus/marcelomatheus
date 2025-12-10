import type { ReactNode } from "react";
import type { Language, PortfolioCopy } from "@/data/translations";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  dictionary: PortfolioCopy;
  t: <ReturnType = unknown>(path: string) => ReturnType;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
