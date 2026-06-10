"use client";

import { useState } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <RevealOnScroll>
        <div className="mb-10 max-w-2xl">
          <Eyebrow>{t<string>("nav.projects")}</Eyebrow>
          <GradientHeading className="mt-2 text-4xl">{t<string>("projects.title")}</GradientHeading>
          <SectionParagraph className="mt-4">{t<string>("projects.subtitle")}</SectionParagraph>
        </div>
      </RevealOnScroll>
      <div className="grid gap-6 md:grid-cols-3">
        {projects?.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={index * 0.05}>
            <GlassCard className="flex h-full flex-col">
              <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <Image src={project.cover} alt={project.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/75" />
              </div>
              <div className="mt-4 flex-1">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{project.excerpt}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button className="mt-6 w-full" onClick={() => setSelected(project)}>
                {t<string>("projects.modal.what")}
              </Button>
            </GlassCard>
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
