"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { TECH_ICONS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import type { HeroCarouselCopy } from "@/data/translations";

export function StackCarousel() {
  const { t } = useLanguage();
  const copy = t<HeroCarouselCopy>("hero.carousel");
  const slides = copy?.slides ?? [];
  const loop = [...slides, ...slides];

  if (!slides.length) return null;

  return (
    <section className="relative overflow-hidden border-y border-primary/15 bg-black/20 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" aria-hidden />
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((slide, index) => {
          const Icon = TECH_ICONS[slide.icon] as ComponentType<{ className?: string }>;

          return (
            <div
              key={`${slide.title}-${index}`}
              className="group flex min-w-[280px] items-center gap-4 rounded-full border border-primary/18 bg-surface px-5 py-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/55 hover:bg-primary/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black shadow-glow">
                {Icon ? <Icon className="h-6 w-6" /> : null}
              </span>
              <span>
                <span className="block font-display text-3xl leading-none tracking-wide text-primary">
                  {slide.title}
                </span>
                <span className="block text-xs uppercase tracking-[0.22em] text-muted">
                  {slide.label}
                </span>
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
