"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow, GradientHeading, SectionParagraph } from "@/components/ui/Typography";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="mx-auto  px-6 py-24">
      <RevealOnScroll className="text-center">
          <Eyebrow>{t<string>("nav.contact")}</Eyebrow>
          <GradientHeading className="mt-4 text-4xl">
            {t<string>("hero.secondaryCta")}
          </GradientHeading>
          <SectionParagraph className="mt-3">
            {t<string>("hero.trustedBy")}
          </SectionParagraph>
          <Button
            className="mt-6"
            onClick={() => (window.location.href = "mailto:conctact@marcelomatheus.tech")}
          >
            contact@marcelomatheus.tech
          </Button>
      </RevealOnScroll>
    </section>
  );
}
