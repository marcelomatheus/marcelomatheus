"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Eyebrow, GradientHeading } from "@/components/ui/Typography";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TimelineItem } from "@/data/translations";
import { TimelineItemCard } from "./TimelineItemCard";

export function About() {
  const { t } = useLanguage();
  const timeline = t<TimelineItem[]>("about.timeline");

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <RevealOnScroll>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="noise-card relative overflow-hidden rounded-[1rem] border border-primary/18 bg-surface p-7 shadow-panel">
            <span className="font-display text-[8rem] leading-none text-primary/25">ABOUT</span>
            <Eyebrow className="mt-8">{t<string>("about.title")}</Eyebrow>
            <GradientHeading className="mb-6 mt-2 font-display text-6xl leading-none tracking-wide">
              {t<string>("about.subtitle")}
            </GradientHeading>
            <p className="text-sm leading-7 text-muted">{t<string>("about.caption")}</p>
            <div className="mt-10 h-px w-full bg-gradient-to-r from-primary via-primary/20 to-transparent" aria-hidden />
          </div>
          <div>
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-white/20 to-transparent" />
              <div className="space-y-6">
                {timeline?.map((item) => (
                  <TimelineItemCard key={item.period + item.role} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
