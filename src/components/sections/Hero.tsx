"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Mail } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

const heroText = {
  pt: {
    role: "Software Engineer & Digital Builder",
    kicker: "Portfólio 2026",
    title: "PORTFOLIO",
    subtitle:
      "Eu construo produtos digitais com engenharia sólida, automação, IA e interfaces que parecem tão boas quanto funcionam.",
    location: "Montes Claros, MG - disponível remoto",
    github: "GitHub",
    contact: "Contato",
    articles: "Artigos",
  },
  en: {
    role: "Software Engineer & Digital Builder",
    kicker: "Portfolio 2026",
    title: "PORTFOLIO",
    subtitle:
      "I build digital products with solid engineering, automation, AI, and interfaces that feel as good as they work.",
    location: "Montes Claros, MG - remote available",
    github: "GitHub",
    contact: "Contact",
    articles: "Articles",
  },
};

export function Hero() {
  const { t, language } = useLanguage();
  const copy = heroText[language];
  const stats = t<Array<{ label: string; value: string }>>("hero.stats") ?? [];

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-32 sm:pt-36">
      <div className="fine-grid absolute inset-0 -z-20 opacity-55" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(232,205,168,0.2),transparent_30%),linear-gradient(180deg,rgba(8,7,6,0.1),rgba(8,7,6,0.92)_82%)]" aria-hidden />
      <div className="absolute left-6 top-28 hidden h-28 w-px bg-gradient-to-b from-primary to-transparent lg:block" aria-hidden />
      <div className="absolute right-6 top-28 hidden h-px w-44 bg-gradient-to-r from-transparent to-primary/70 lg:block" aria-hidden />

      <div className="mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="mb-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.28em] text-primary">
            <span>{copy.role}</span>
            <span className="h-px w-16 bg-primary/60" aria-hidden />
            <span>{copy.kicker}</span>
          </div>

          <h1 className="font-display text-[clamp(6rem,18vw,15rem)] leading-[0.76] tracking-wide text-primary">
            {copy.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8c6ad] sm:text-xl">
            {copy.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              onClick={() => window.open("https://github.com/marcelomatheus", "_blank", "noreferrer")}
              leftIcon={<Github className="h-4 w-4" />}
            >
              {copy.github}
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              rightIcon={<ArrowDownRight className="h-4 w-4" />}
            >
              {t<string>("hero.primaryCta")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "mailto:contato@celodev.com.br")}
              leftIcon={<Mail className="h-4 w-4" />}
            >
              {copy.contact}
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-primary/35 pl-4">
                <p className="font-display text-4xl leading-none text-primary">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute -inset-8 rounded-full bg-primary/12 blur-3xl" aria-hidden />
          <div className="noise-card relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-primary/30 bg-[#15110d] shadow-[0_44px_120px_rgba(0,0,0,0.58)]">
            <Image
              src="/me.png"
              alt="Foto de Marcelo Matheus"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover object-[50%_42%] saturate-[0.9]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(8,7,6,0.82)_100%)]" aria-hidden />
            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-4xl leading-none text-primary">MARCELO</p>
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">Matheus</p>
              </div>
              <a
                href="https://medium.com/@marcelomatheusbr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-primary/35 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary backdrop-blur-md transition hover:bg-primary hover:text-black"
              >
                <SiMedium className="h-4 w-4" />
                {copy.articles}
              </a>
            </div>
          </div>
          <div className="mt-4 rounded-full border border-primary/35 bg-black/55 px-5 py-3 text-center text-xs uppercase tracking-[0.24em] text-primary backdrop-blur-md">
            {copy.location}
          </div>
          <div className="absolute -left-5 bottom-24 hidden h-24 w-24 animate-float rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm sm:block" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
