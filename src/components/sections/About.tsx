"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Eyebrow, GradientHeading } from "@/components/ui/Typography";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TimelineItem } from "@/data/translations";
import { TimelineItemCard } from "./TimelineItemCard";

export function About() {
  const { t } = useLanguage();
  const timeline = t<TimelineItem[]>("about.timeline");

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <RevealOnScroll>
        <div className="grid gap-10 md:grid-cols-[2fr_3fr] ">
          <div className="noise-card relative min-h-[480px] overflow-hidden rounded-[2rem] border border-white/8 bg-surface shadow-panel">
            <div
              className="relative h-full min-h-[24rem] overflow-hidden rounded-[1.5rem]"
              
            >
              <Image
                src="/me.png"
                alt="Foto de Marcelo Matheus"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(10,10,10,0.88)_100%)]"
              aria-hidden
            />
            <p className="absolute bottom-6 left-6 right-6 text-sm text-muted">{t<string>("about.caption")}</p>
          </div>
          <div>
            <Eyebrow>{t<string>("about.title")}</Eyebrow>
            <GradientHeading className="mb-6 mt-2 text-4xl">{t<string>("about.subtitle")}</GradientHeading>
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
