import type { ComponentType } from "react";
import {
  SiAmazon,
  SiDocker,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import type { TechIconId } from "@/data/interfaces/translations";

export const TECH_ICON_MAP: Record<TechIconId, ComponentType<{ className?: string }>> = {
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  docker: SiDocker,
  aws: SiAmazon,
  framer: SiFramer,
  postgres: SiPostgresql,
  typescript: SiTypescript,
};
