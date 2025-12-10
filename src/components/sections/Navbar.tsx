"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";
import { NAV_ORDER, NAV_TARGET_BY_KEY, NavKey } from "./constants/navigation";

export function Navbar() {
  const { t, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const links = NAV_ORDER.map((key) => ({
    label: t<string>(key as NavKey),
    href: NAV_TARGET_BY_KEY[key],
  }));

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 z-40">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-black/40 to-transparent" aria-hidden />
      <nav className="mx-auto my-10 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-xl">
        <Link href="#hero" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
         Marcelo Matheus
        </Link>
        <div className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLanguage}
            className={cn(
              "rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted",
              "transition hover:border-accent/80 hover:text-white flex items-center gap-2",
            )}
            aria-label="Toggle language"

          >{language === "en" ? <LiaFlagUsaSolid size={19} /> : <GiBrazilFlag size={19}/>}
            {language.toUpperCase()}
          </button>
          <Button
            variant="outline"
            className="text-xs"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t<string>("hero.primaryCta")}
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="mx-auto mt-28 flex max-w-sm flex-col gap-6 text-center"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-semibold text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={toggleLanguage} variant="outline">
                {language === "en" ? "Switch to PT" : "Switch to EN"}
              </Button>
              <Button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }}
              >
                {t<string>("hero.primaryCta")}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
