"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientHeading, SectionParagraph } from "@/components/ui/Typography";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechOrbit } from "@/components/sections/TechOrbit";
import type { TechOrbitCopy } from "@/data/translations";

export function Hero() {
  const { t } = useLanguage();
  const stats = t<Array<{ label: string; value: string }>>("hero.stats");
  const techOrbitCopy = t<TechOrbitCopy>("hero.techOrbit");

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center pt-32">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-80" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <RevealOnScroll>
            <Eyebrow>{t<string>("hero.eyebrow")}</Eyebrow>
            <GradientHeading className="text-4xl font-semibold lg:text-6xl">
              {t<string>("hero.title")}
            </GradientHeading>
            <SectionParagraph>{t<string>("hero.subtitle")}</SectionParagraph>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t<string>("hero.primaryCta")}
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t<string>("hero.secondaryCta")}
            </Button>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2} className="flex flex-wrap gap-6 text-sm text-muted">
            {stats?.map((stat) => (
              <div key={stat.label} className="min-w-[140px]">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
        <div className="flex-1">
          <div
            className="relative mx-auto max-w-3xl"
          >
            <div className="pointer-events-none absolute inset-x-6 top-4 h-[360px] rounded-full bg-gradient-to-b from-accent/30 via-background/40 to-background blur-3xl sm:h-[420px]" aria-hidden />
      
            <TechOrbit copy={techOrbitCopy} />
          </div>
        </div>
      </div>
    </section>
  );
}
