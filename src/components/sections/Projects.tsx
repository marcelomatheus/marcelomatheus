"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Eyebrow, GradientHeading, SectionParagraph } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ProjectCardContent } from "@/data/translations";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { t } = useLanguage();
  const projects = t<ProjectCardContent[]>("projects.cards");
  const modalCopy = t<{ [key: string]: string }>("projects.modal");
  const common = t<{ close: string }>("common");
  const [selected, setSelected] = useState<ProjectCardContent | null>(null);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute inset-x-0 top-16 -z-10 h-72 bg-[radial-gradient(circle,rgba(232,205,168,0.11),transparent_58%)]" aria-hidden />
      <RevealOnScroll>
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
          <Eyebrow>{t<string>("nav.projects")}</Eyebrow>
            <GradientHeading className="mt-2 font-display text-7xl leading-none tracking-wide sm:text-8xl">
              {t<string>("projects.title")}
            </GradientHeading>
          </div>
          <SectionParagraph className="max-w-2xl lg:ml-auto">
            {t<string>("projects.subtitle")}
          </SectionParagraph>
        </div>
      </RevealOnScroll>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects?.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={index * 0.05}>
            <motion.article
              whileHover={{ y: -10, rotate: index === 1 ? 0.4 : -0.4 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="noise-card group flex h-full flex-col overflow-hidden rounded-[1rem] border border-primary/18 bg-[#100d0a]/80 p-4 shadow-panel backdrop-blur-md"
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="relative h-64 w-full overflow-hidden rounded-[0.75rem] text-left"
                aria-label={`${modalCopy?.what ?? "Overview"}: ${project.title}`}
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/82" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.26em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-black transition group-hover:rotate-12">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </button>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <p className="text-sm leading-7 text-muted">{project.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-primary/15 pt-5 text-xs text-muted">
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-primary" />
                    {project.github.language}
                  </span>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-right font-semibold uppercase tracking-[0.16em] text-primary hover:text-primary-100"
                  >
                    Repo
                  </a>
                </div>
                <Button className="mt-6 w-full" onClick={() => setSelected(project)}>
                  {t<string>("projects.modal.what")}
                </Button>
              </div>
            </motion.article>
          </RevealOnScroll>
        ))}
      </div>
      <ProjectModal
        project={selected}
        copy={modalCopy as Record<string, string>}
        commonClose={common?.close ?? "Close"}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
