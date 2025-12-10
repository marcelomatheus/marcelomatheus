"use client";

import Link from "next/link";
import { MapPin, Phone, Send } from "lucide-react";
import { FOOTER_ICON_MAP } from "./constants/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import type { FooterCopy } from "@/data/interfaces/translations";

export function Footer() {
  const { t } = useLanguage();
  const footer = t<FooterCopy>("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-background/10 via-background/40 to-background/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,216,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 shadow-glow">
            <Send className="h-4 w-4 text-accent" aria-hidden />
            <span>{footer.role}</span>
          </div>
          <p className="text-sm text-muted">{footer.description}</p>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            <span>{footer.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            <a className="hover:text-white" href={footer.phoneHref}>
              {footer.phoneLabel}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">{footer.navTitle}</p>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {footer.navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="flex items-center gap-2 hover:text-white">
                <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" aria-hidden />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">{footer.resourcesTitle}</p>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {footer.resourceLinks.map((link) => {
              const Icon = link.icon ? FOOTER_ICON_MAP[link.icon] : null;
              return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                {Icon ? <Icon className="h-4 w-4 text-accent" aria-hidden /> : null}
                <span>{link.label}</span>
              </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">{footer.socialTitle}</p>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            {footer.socialLinks.map((link) => {
              const Icon = link.icon ? FOOTER_ICON_MAP[link.icon] : null;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-accent/60 hover:bg-white/10 hover:text-white"
                >
                  {Icon ? <Icon className="h-4 w-4 text-accent" aria-hidden /> : null}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40 px-6 py-6 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
