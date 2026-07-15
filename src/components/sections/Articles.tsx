"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { Eyebrow, SectionParagraph } from "@/components/ui/Typography";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ArticlesCopy } from "@/data/interfaces/translations";

export function Articles() {
  const { t } = useLanguage();
  const copy = t<ArticlesCopy>("articles");

  if (!copy?.cards?.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <Eyebrow>Medium</Eyebrow>
          <h2 className="mt-3 font-display text-6xl leading-none text-primary sm:text-7xl">
            {copy.title}
          </h2>
        </div>
        <SectionParagraph className="max-w-2xl lg:ml-auto">{copy.subtitle}</SectionParagraph>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {copy.cards.map((article, index) => (
          <motion.a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
            className="noise-card group relative min-h-[250px] overflow-hidden rounded-[1rem] border border-primary/16 bg-surface p-6 shadow-panel backdrop-blur-md"
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/10 transition duration-300 group-hover:bg-primary/20" aria-hidden />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                  <SiMedium className="h-4 w-4" />
                  {article.category}
                </span>
                <ArrowUpRight className="h-5 w-5 text-primary transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-tight text-white transition group-hover:text-primary">
                {article.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{article.description}</p>
              <div className="mt-auto pt-8">
                <span className="font-display text-4xl leading-none text-primary/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
