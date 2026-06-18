"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroCarouselCopy, HeroCarouselSlide } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { TECH_ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

const getRelativePosition = (index: number, currentIndex: number, total: number) => {
  let diff = index - currentIndex;

  if (diff > Math.floor(total / 2)) diff -= total;
  if (diff < -Math.floor(total / 2)) diff += total;

  return diff;
};

const getCardStyle = (diff: number, isMobile: boolean) => {
  const offset1 = isMobile ? 86 : 168;
  const offset2 = isMobile ? 148 : 288;

  if (diff === 0) {
    return {
      transform: "translateX(0px) scale(1)",
      zIndex: 10,
      opacity: 1,
      filter: "brightness(1)",
    };
  }

  if (diff === -1) {
    return {
      transform: `translateX(-${offset1}px) rotate(-7deg) scale(0.84)`,
      zIndex: 5,
      opacity: 0.82,
      filter: "brightness(0.72)",
    };
  }

  if (diff === 1) {
    return {
      transform: `translateX(${offset1}px) rotate(7deg) scale(0.84)`,
      zIndex: 5,
      opacity: 0.82,
      filter: "brightness(0.72)",
    };
  }

  if (diff === -2) {
    return {
      transform: `translateX(-${offset2}px) rotate(-12deg) scale(0.64)`,
      zIndex: 1,
      opacity: 0.38,
      filter: "brightness(0.46)",
    };
  }

  if (diff === 2) {
    return {
      transform: `translateX(${offset2}px) rotate(12deg) scale(0.64)`,
      zIndex: 1,
      opacity: 0.38,
      filter: "brightness(0.46)",
    };
  }

  return {
    transform: "translateX(0px) scale(0)",
    zIndex: 0,
    opacity: 0,
    filter: "brightness(0.4)",
  };
};

function ShowcaseCard({
  slide,
  isActive,
}: {
  slide: HeroCarouselSlide;
  isActive: boolean;
}) {
  const theme = THEMES[slide.theme ?? "ember"];
  const Icon = TECH_ICONS[slide.icon] as ComponentType<{ className?: string }>;

  return (
    <>
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
      {!isActive ? <div className="absolute inset-0 bg-black/28" aria-hidden /> : null}

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
    </>
  );
}

export function HeroShowcase() {
  const { t } = useLanguage();
  const copy = t<HeroCarouselCopy>("hero.carousel");
  const slides = useMemo(() => copy?.slides ?? [], [copy]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => getWrappedIndex(prev + 1, slides.length));
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => getWrappedIndex(prev - 1, slides.length));
  }, [slides.length]);

  useEffect(() => {
    if (isHovered || slides.length <= 1) return undefined;
    const interval = window.setInterval(handleNext, 3000);
    return () => window.clearInterval(interval);
  }, [currentIndex, handleNext, isHovered, slides.length]);

  const activeSlide = slides[currentIndex];

  if (!slides.length || !activeSlide) return null;

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden px-6 py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-90" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,125,58,0.12),transparent_30%)]" aria-hidden />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="mb-12 flex w-full max-w-4xl items-center justify-between gap-6 px-2">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-primary">
              {activeSlide.label}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {activeSlide.title}
            </h1>
          </div>
          <span className="text-xl font-medium text-white/75 sm:text-2xl">
            {String(currentIndex + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div className="relative flex h-[300px] w-full max-w-4xl items-center justify-center sm:h-[340px]">
          <button
            onClick={handlePrev}
            className="absolute left-2 z-20 rounded-full border border-white/12 bg-surface p-3 text-white/80 shadow-lg transition-all duration-200 hover:border-primary/60 hover:text-white sm:left-8"
            aria-label="Slide anterior"
            type="button"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 z-20 rounded-full border border-white/12 bg-surface p-3 text-white/80 shadow-lg transition-all duration-200 hover:border-primary/60 hover:text-white sm:right-8"
            aria-label="Próximo slide"
            type="button"
          >
            <ChevronRight size={28} />
          </button>

          <div className="relative flex h-full w-full items-center justify-center">
            {slides.map((slide, index) => {
              const diff = getRelativePosition(index, currentIndex, slides.length);
              const isActive = diff === 0;
              const style = getCardStyle(diff, isMobile);

              return (
                <button
                  key={`${slide.title}-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                  className={cn(
                    "noise-card absolute overflow-hidden rounded-[2rem] border border-white/10 bg-[#efebe7] text-left shadow-2xl transition-all outline-none",
                    isActive && "ring-4 ring-primary/70",
                  )}
                  style={{
                    width: isMobile ? "220px" : "280px",
                    height: isMobile ? "220px" : "280px",
                    ...style,
                    transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <ShowcaseCard slide={slide} isActive={isActive} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 min-h-[120px] px-4 text-center">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={`info-${slide.title}-${index}`}
                className="absolute left-1/2 max-w-xl -translate-x-1/2"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translate(-50%, 0)" : "translate(-50%, 10px)",
                  transition: "all 0.4s ease-out",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <h2 className="text-2xl font-semibold text-white">{slide.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{slide.summary}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-dot`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/25"
              }`}
              aria-label={`Ir para o cartão ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
