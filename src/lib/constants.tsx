import type { ComponentType } from "react";
import {
  SiAmazon,
  SiDocker,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { Activity, Brain, Server, Sparkles, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import type { ButtonVariant } from "@/components/interfaces/ui";

export const NAV_LINK_KEYS = ["nav.home", "nav.about", "nav.skills", "nav.projects", "nav.contact"] as const;
export const NAV_TARGETS = ["#hero", "#about", "#skills", "#projects", "#contact"] as const;

export const TECH_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  docker: SiDocker,
  aws: SiAmazon,
  framer: SiFramer,
  postgres: SiPostgresql,
  typescript: SiTypescript,
};

export const SKILL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Server,
  Sparkles,
  Activity,
  Brain,
};

export const BUTTON_VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary-400 via-primary-500 to-accent text-white shadow-[0_0_10px_rgba(122,91,255,0.6)]",
  outline:
    "border border-white/20 bg-white/5 text-white hover:border-accent/70 hover:text-accent",
  ghost: "text-muted hover:text-white",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelooliveiradev/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/marcelomatheus", icon: Github },
  { label: "E-mail", href: "mailto:contact@marcelomatheus.tech", icon: Mail },
];

export const RESOURCE_LINKS_CONFIG = [
  { key: "resume", href: "https://drive.google.com", icon: ExternalLink },
  { key: "blog", href: "https://medium.com", icon: ExternalLink },
  { key: "newsletter", href: "https://substack.com", icon: ExternalLink },
];

export const NAV_LINKS_CONFIG = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];
