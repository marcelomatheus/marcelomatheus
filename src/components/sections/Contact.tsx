"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientHeading, SectionParagraph } from "@/components/ui/Typography";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <RevealOnScroll className="noise-card rounded-[2rem] border border-white/8 bg-surface px-6 py-14 text-center shadow-panel sm:px-10">
          <Eyebrow>{t<string>("nav.contact")}</Eyebrow>
          <SectionParagraph className="mx-auto mt-3 max-w-2xl">
            {t<string>("hero.trustedBy")}
          </SectionParagraph>
          <Button
            className="mt-6"
            onClick={() => (window.location.href = "mailto:contato@celodev.com.br")}
          >
            contato@celodev.com.br
          </Button>
      </RevealOnScroll>
    </section>
  );
}
