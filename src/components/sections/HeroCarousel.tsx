"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { HeroCarouselSlide } from "@/data/translations";
import { TECH_ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { HeroCarouselProps } from "../interfaces/sections";

const THEMES = {
  ember: {
    top: "from-primary/30 via-primary/10 to-transparent",
    dot: "bg-primary",
    accent: "from-primary/55 to-transparent",
  },
  graphite: {
    top: "from-zinc-100/16 via-zinc-100/6 to-transparent",
    dot: "bg-zinc-200",
    accent: "from-zinc-300/35 to-transparent",
  },
  ash: {
    top: "from-white/18 via-primary/8 to-transparent",
    dot: "bg-white",
    accent: "from-white/30 to-transparent",
  },
  cinder: {
    top: "from-primary/20 via-white/8 to-transparent",
    dot: "bg-primary/85",
    accent: "from-primary/40 to-transparent",
  },
} as const;

const getWrappedIndex = (index: number, length: number) => {
  if (!length) return 0;
  return (index + length) % length;
};

const getRelativePosition = (index: number, activeIndex: number, length: number) => {
  let offset = index - activeIndex;
  const half = Math.floor(length / 2);

  if (offset > half) offset -= length;
  if (offset < -half) offset += length;

  return offset;
};

function CarouselCard({
  slide,
  offset,
  isActive,
  onClick,
}: {
  slide: HeroCarouselSlide;
  offset: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const theme = THEMES[slide.theme ?? "ember"];
  const Icon = TECH_ICONS[slide.icon] as ComponentType<{ className?: string }>;
  const distance = Math.abs(offset);
  const x = offset * 32;
  const y = distance * 12;
  const rotateZ = offset * 5;
  const rotateY = offset * -12;
  const scale = 1 - distance * 0.08;
  const opacity = 1 - distance * 0.22;
  const zIndex = 20 - distance;

  return (
    <motion.article
      className={cn(
        "noise-card absolute left-1/2 top-1/2 h-[24rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#efebe7] shadow-panel sm:h-[27rem] sm:w-[18rem] lg:h-[30rem] lg:w-[20rem]",
        !isActive && "select-none",
      )}
      initial={false}
      animate={{
        x: `${x}%`,
        y,
        scale,
        rotateZ,
        rotateY,
        opacity,
        zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        mass: 1,
      }}
      aria-hidden={!isActive}
      onClick={onClick}
    >
      <div className={cn("absolute inset-x-0 top-0 h-[46%] bg-gradient-to-br", theme.top)} aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[46%] bg-[linear-gradient(112deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.12)_18%,rgba(0,0,0,0)_18%,rgba(0,0,0,0)_34%,rgba(255,255,255,0.08)_34%,rgba(255,255,255,0.08)_50%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_68%,rgba(255,255,255,0.1)_68%,rgba(255,255,255,0.1)_84%,rgba(0,0,0,0)_84%)]"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-[46%] h-[54%] bg-[#f4f0eb]" aria-hidden />
      <div className="absolute inset-x-5 top-[46%] h-px bg-black/10" aria-hidden />
      <div className="absolute left-5 top-[calc(46%-2.4rem)] flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border-[5px] border-[#f4f0eb] bg-primary shadow-[0_14px_28px_rgba(255,125,58,0.35)]">
        {Icon ? <Icon className="h-9 w-9 text-white" /> : null}
      </div>
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 0 : 0.12 + distance * 0.08 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 bg-black rounded-[2rem] pointer-events-none"
      />

      <div className="relative flex h-full flex-col justify-between px-5 py-5 sm:px-6 sm:py-6">
        <div className="min-h-[46%]">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/85">
              {slide.label}
            </span>
            <span className={cn("h-2.5 w-2.5 rounded-full shadow-[0_0_28px_rgba(255,125,58,0.45)]", theme.dot)} />
          </div>
          <div className="mt-6 flex h-full items-end">
            <div className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.35em] text-white/75">
              Featured Stack
            </div>
          </div>
        </div>

        <div className="flex-1 pt-14 text-[#111111]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="max-w-[10ch] text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[#111111] sm:text-[2.25rem]">
                {slide.title}
              </h3>
              <p className="mt-2 text-xs text-black/45">@marcelomatheus.tech</p>
            </div>
            <span className="rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white shadow-sm">
              Stack
            </span>
          </div>

          <p className="mt-4 max-w-[28ch] text-sm leading-6 text-black/72 sm:text-[0.95rem]">
            {slide.summary}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/8 pt-4">
            {slide.highlights.map((highlight, index) => (
              <div key={highlight} className="rounded-2xl bg-black/[0.04] px-3 py-3">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-black/72">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 text-xs text-black/55">
            <span className={cn("h-px w-10 bg-gradient-to-r", theme.accent)} aria-hidden />
            <span>Product-minded implementation</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function HeroCarousel({ copy }: HeroCarouselProps) {
  const slides = useMemo(() => copy?.slides ?? [], [copy]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => getWrappedIndex(current + direction, slides.length));
    },
    [slides.length],
  );

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return undefined;

    const timer = window.setInterval(() => {
      goTo(1);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [goTo, isPaused, slides.length]);

  const visibleSlides = slides
    .map((slide, index) => {
      const offset = getRelativePosition(index, activeIndex, slides.length);
      return Math.abs(offset) > 2
        ? null
        : {
            slide: {
              ...slide,
            },
            index,
            offset,
            onClick: () => setActiveIndex(index),
          };
    })
    .filter(
      (
        item,
      ): item is {
        slide: HeroCarouselSlide;
        index: number;
        offset: number;
        onClick: () => void;
      } => item !== null,
    );

  if (!slides.length) return null;

  return (
    <div
      className="relative mx-auto w-full max-w-[52rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-x-[20%] top-[10%] h-32 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <motion.div
        className="relative h-[30rem] overflow-hidden rounded-[2.5rem] active:cursor-grabbing sm:h-[34rem] lg:h-[37rem]"
        style={{ perspective: 1200 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.06}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={(_, info) => {
          setIsPaused(false);
          if (info.offset.x <= -70) goTo(1);
          if (info.offset.x >= 70) goTo(-1);
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,125,58,0.07),transparent_55%)]" aria-hidden />
        <div className="absolute inset-x-0 bottom-10 h-20 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_68%)] blur-2xl" aria-hidden />
        <AnimatePresence initial={false}>
          {visibleSlides.map(({ slide, index, offset, onClick }) => (
            <CarouselCard
              key={`${slide.title}-${index}`}
              slide={slide}
              offset={offset}
              isActive={offset === 0}
              onClick={onClick}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.28em] text-muted">{copy?.instruction}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-white/85 transition hover:border-primary/50 hover:text-white"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-white/85 transition hover:border-primary/50 hover:text-white"
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
