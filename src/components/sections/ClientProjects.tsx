"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, LockKeyhole } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow, SectionParagraph } from "@/components/ui/Typography";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ClientProjectContent } from "@/data/interfaces/translations";

export function ClientProjects() {
  const { t, language } = useLanguage();
  const copy = t<{
    title: string;
    subtitle: string;
    cards: ClientProjectContent[];
  }>("clientProjects");
  const labels = {
    eyebrow: language === "pt" ? "Projetos privados" : "Private Work",
    client: language === "pt" ? "Cliente direto" : "Direct client",
    repository: language === "pt" ? "Repositório privado" : "Private repository",
    pain: language === "pt" ? "Dor resolvida" : "Pain solved",
    solution: language === "pt" ? "Solução" : "Solution",
  };

  if (!copy?.cards?.length) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <Eyebrow>{labels.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-6xl leading-none text-primary sm:text-7xl">
            {copy.title}
          </h2>
        </div>
        <SectionParagraph className="max-w-2xl lg:ml-auto">{copy.subtitle}</SectionParagraph>
      </div>

      <div className="space-y-6">
        {copy.cards.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="noise-card grid overflow-hidden rounded-[1rem] border border-primary/18 bg-[#100d0a]/80 shadow-panel backdrop-blur-md lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="grid grid-cols-3 gap-2 p-3 sm:p-4">
              {project.gallery.map((image, imageIndex) => (
                <div
                  key={`${project.slug}-${image}`}
                  className={imageIndex === 0 ? "relative col-span-3 h-60 overflow-hidden rounded-[0.85rem] sm:h-72" : "relative h-28 overflow-hidden rounded-[0.85rem] sm:h-36"}
                >
                  <Image
                    src={image}
                    alt={`${project.title} preview ${imageIndex + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" aria-hidden />
                </div>
              ))}
            </div>

            <div className="flex h-full flex-col p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary">
                  <BriefcaseBusiness className="h-4 w-4" />
                  {labels.client}
                </span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted">
                  <LockKeyhole className="h-4 w-4 text-primary" />
                  {labels.repository}
                </span>
              </div>

              <h3 className="mt-8 font-display text-6xl leading-none text-primary">{project.title}</h3>
              <p className="mt-5 text-base leading-7 text-white/82">{project.business}</p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-[0.85rem] border border-primary/12 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">{labels.pain}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.pain}</p>
                </div>
                <div className="rounded-[0.85rem] border border-primary/12 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">{labels.solution}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.solution}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.features.map((feature) => (
                  <Badge key={feature} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
