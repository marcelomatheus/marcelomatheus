"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
import { Eyebrow, GradientHeading, SectionParagraph } from "@/components/ui/Typography";
import { useLanguage } from "@/contexts/LanguageContext";
import type { SkillCardContent } from "@/data/translations";
import { SkillIcon } from "./SkillIcon";

export function Skills() {
  const { t } = useLanguage();
  const cards = t<SkillCardContent[]>("skills.cards");

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <RevealOnScroll>
        <div className="mb-10 max-w-2xl">
          <Eyebrow>{t<string>("nav.skills")}</Eyebrow>
          <GradientHeading className="mt-2 text-4xl">{t<string>("skills.title")}</GradientHeading>
          <SectionParagraph className="mt-4">{t<string>("skills.subtitle")}</SectionParagraph>
        </div>
      </RevealOnScroll>
      <div className="grid gap-6 md:grid-cols-3">
        {cards?.map((card, index) => (
          <RevealOnScroll key={card.title} delay={index * 0.05}>
            <GlassCard className="h-full border-white/10">
              <SkillIcon name={card.icon} />
              <h3 className="mt-6 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm text-muted">{card.description}</p>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
