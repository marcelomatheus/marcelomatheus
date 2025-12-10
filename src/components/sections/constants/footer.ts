import type { ComponentType } from "react";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import type { FooterIconId } from "@/data/interfaces/translations";

export const FOOTER_ICON_MAP: Record<FooterIconId, ComponentType<{ className?: string }>> = {
  external: ExternalLink,
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
};
