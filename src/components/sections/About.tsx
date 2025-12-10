"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
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
        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div className="relative">
            <GlassCard className="flex h-full flex-col items-center justify-center border-white/20">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/projects/orion.svg"
                  alt="Avatar placeholder"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted">{t<string>("about.caption")}</p>
            </GlassCard>
          </div>
          <div>
            <Eyebrow>{t<string>("about.title")}</Eyebrow>
            <GradientHeading className="mb-6 mt-2 text-4xl">{t<string>("about.subtitle")}</GradientHeading>
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent via-white/40 to-transparent" />
              <div className="space-y-6">
                {timeline?.map((item) => (
                  <TimelineItemCard key={item.year + item.role} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
