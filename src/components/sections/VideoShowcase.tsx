"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { VideoShowcaseCopy } from "@/data/interfaces/translations";

const getYoutubeEmbedUrl = (url: string) => {
  const videoId = url.match(/v=([^&]+)/)?.[1] ?? "dqV7sI7saoM";
  const start = url.match(/[?&]t=(\d+)s/)?.[1] ?? "206";
  return `https://www.youtube.com/embed/${videoId}?start=${start}`;
};

export function VideoShowcase() {
  const { t } = useLanguage();
  const copy = t<VideoShowcaseCopy>("videoShowcase");

  if (!copy) return null;

  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-[radial-gradient(circle,rgba(232,205,168,0.12),transparent_60%)]" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="noise-card grid w-full max-w-none items-stretch gap-8 overflow-hidden border-y border-primary/20 bg-[#100d0a]/80 p-5 shadow-panel backdrop-blur-md lg:min-h-[560px] lg:grid-cols-[0.82fr_1.18fr] lg:p-8"
      >
        <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[1rem] border border-primary/15 bg-[linear-gradient(145deg,rgba(232,205,168,0.14),rgba(0,0,0,0.24))] p-7 lg:min-h-0 lg:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-primary/20" aria-hidden />
          <div className="absolute bottom-10 right-8 h-20 w-20 animate-float rounded-full bg-primary/10 blur-sm" aria-hidden />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary">
              <Youtube className="h-4 w-4 fill-primary" />
              YouTube
            </span>
            <h2 className="mt-8 max-w-[10ch] font-display text-6xl leading-none text-primary sm:text-7xl lg:text-8xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted">{copy.subtitle}</p>
          </div>
          <a
            href={copy.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-primary-100"
          >
            {copy.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[1rem] border border-primary/20 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.5)] lg:h-full lg:min-h-0">
          <iframe
            src={getYoutubeEmbedUrl(copy.url)}
            title={copy.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ring-white/10" aria-hidden />
        </div>
      </motion.div>
    </section>
  );
}
