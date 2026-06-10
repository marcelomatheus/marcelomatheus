"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { HeroCarouselSlide } from "@/data/translations";
import { cn } from "@/lib/utils";
import type { HeroCarouselProps } from "../interfaces/sections";

const THEMES = {
  ember: {
    glow: "from-primary/35 via-primary/10 to-transparent",
    orb: "bg-primary/80",
    edge: "from-primary/60 to-transparent",
  },
  graphite: {
    glow: "from-white/18 via-white/5 to-transparent",
    orb: "bg-white/70",
    edge: "from-white/35 to-transparent",
  },
  ash: {
    glow: "from-white/10 via-primary/10 to-transparent",
    orb: "bg-zinc-200/70",
    edge: "from-zinc-200/30 to-transparent",
  },
  cinder: {
    glow: "from-primary/20 via-white/10 to-transparent",
    orb: "bg-primary/65",
    edge: "from-primary/45 to-transparent",
  },
} as const;

const getWrappedIndex = (index: number, length: number) => {
  if (!length) return 0;
  return (index + length) % length;
};

const getRelativePosition = (index: number, activeIndex: number, length: number) => {
  const forward = (index - activeIndex + length) % length;
  const backward = (activeIndex - index + length) % length;

  if (forward === 0) return 0;
  if (forward <= 2) return forward;
  if (backward <= 2) return -backward;
  return forward < backward ? 3 : -3;
};

function CarouselCard({
  slide,
  position,
}: {
  slide: HeroCarouselSlide;
  position: number;
}) {
  const theme = THEMES[slide.theme ?? "ember"];
  const isActive = position === 0;
  const absPosition = Math.abs(position);

  return (
    <motion.article
      className={cn(
        "noise-card absolute left-1/2 top-1/2 h-[24rem] w-[16rem] overflow-hidden rounded-[2rem] border border-white/10 bg-surface px-5 py-5 shadow-panel sm:h-[27rem] sm:w-[18rem] sm:px-6 sm:py-6 lg:h-[30rem] lg:w-[20rem]",
        !isActive && "pointer-events-none",
      )}
      initial={false}
      animate={{
        x:
          position === 0
            ? "-50%"
            : `calc(-50% + ${position * (position > 0 ? 44 : 44)}%)`,
        y: "-50%",
        scale: isActive ? 1 : absPosition === 1 ? 0.86 : 0.72,
        rotate: isActive ? 0 : position * 11,
        opacity: absPosition > 2 ? 0 : isActive ? 1 : absPosition === 1 ? 0.55 : 0.18,
        zIndex: 30 - absPosition,
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!isActive}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", theme.glow)} aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_52%)]" aria-hidden />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden />
      <div className="absolute inset-x-8 bottom-7 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-white/35" aria-hidden>
        <span>Stack</span>
        <span>System</span>
      </div>

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-white/70">
              {slide.label}
            </span>
            <span className={cn("h-2.5 w-2.5 rounded-full shadow-[0_0_28px_rgba(255,125,58,0.45)]", theme.orb)} />
          </div>

          <div className="mt-10 space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.45em] text-white/45">Featured stack</p>
            <h3 className="max-w-[10ch] text-3xl font-semibold leading-none text-white sm:text-[2.5rem]">
              {slide.title}
            </h3>
            <p className="max-w-[28ch] text-sm leading-6 text-white/72 sm:text-[0.95rem]">
              {slide.summary}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {slide.highlights.map((highlight, index) => (
            <div
              key={highlight}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
            >
              <span className={cn("h-px w-8 bg-gradient-to-r", theme.edge)} aria-hidden />
              <span className="text-sm text-white/85">
                {String(index + 1).padStart(2, "0")} {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function HeroCarousel({ copy }: HeroCarouselProps) {
  const slides = useMemo(() => copy?.slides ?? [], [copy]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => getWrappedIndex(current + 1, slides.length));
    }, 4800);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const goTo = (direction: 1 | -1) => {
    setActiveIndex((current) => getWrappedIndex(current + direction, slides.length));
  };

  if (!slides.length) return null;

  return (
    <div
      className="relative mx-auto w-full max-w-[40rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-x-[14%] top-[10%] h-32 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <motion.div
        className="relative h-[30rem] cursor-grab overflow-hidden active:cursor-grabbing sm:h-[34rem] lg:h-[37rem]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={(_, info) => {
          setIsPaused(false);
          if (info.offset.x <= -70) goTo(1);
          if (info.offset.x >= 70) goTo(-1);
        }}
      >
        <div className="absolute inset-x-0 bottom-8 h-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_68%)] blur-2xl" aria-hidden />
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => {
            const position = getRelativePosition(index, activeIndex, slides.length);
            return <CarouselCard key={`${slide.title}-${index}`} slide={slide} position={position} />;
          })}
        </AnimatePresence>
      </motion.div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">{copy?.instruction}</p>
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
