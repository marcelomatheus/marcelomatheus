"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientHeading, SectionParagraph } from "@/components/ui/Typography";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import type { HeroCarouselCopy } from "@/data/translations";

export function Hero() {
  const { t } = useLanguage();
  const stats = t<Array<{ label: string; value: string }>>("hero.stats");
  const carouselCopy = t<HeroCarouselCopy>("hero.carousel");

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center px-6 pb-16 pt-32">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-90" aria-hidden />
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,38rem)] lg:items-center">
        <div className="max-w-2xl space-y-8">
          <RevealOnScroll>
            <Eyebrow>{t<string>("hero.eyebrow")}</Eyebrow>
            <GradientHeading className="mt-4 text-4xl font-semibold lg:text-6xl">
              {t<string>("hero.title")}
            </GradientHeading>
            <SectionParagraph className="mt-5 max-w-xl">{t<string>("hero.subtitle")}</SectionParagraph>
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
          <RevealOnScroll delay={0.15} className="max-w-lg rounded-[2rem] border border-white/8 bg-surface px-5 py-5 shadow-panel">
            <p className="text-sm leading-7 text-muted">{t<string>("hero.trustedBy")}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2} className="grid gap-4 text-sm text-muted sm:grid-cols-3">
            {stats?.map((stat) => (
              <div key={stat.label} className="noise-card rounded-[1.75rem] border border-white/8 bg-surface px-5 py-5 shadow-panel">
                <p className="text-3xl font-semibold text-white lg:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <div className="relative w-full max-w-[42rem]">
            <div className="pointer-events-none absolute inset-x-10 top-16 h-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
            <HeroCarousel copy={carouselCopy} />
          </div>
        </div>
      </div>
    </section>
  );
}
