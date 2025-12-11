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
          <div className="min-h-[480px] flex flex-col justify-center">
             <div
                  className="relative min-h-[80%] md:min-h-[60%]"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
                  }}
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
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"
                  aria-hidden
                />
              <p className="mt-4 text-center text-sm text-muted">{t<string>("about.caption")}</p>
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
