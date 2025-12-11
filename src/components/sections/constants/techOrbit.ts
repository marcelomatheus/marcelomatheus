import type { ComponentType } from "react";
import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import type { TechIconId } from "@/data/interfaces/translations";
import { TbBrandStackshare } from "react-icons/tb";

import { FaAws } from "react-icons/fa";

export const TECH_ICON_MAP: Record<TechIconId, ComponentType<{ className?: string }>> = {
 
  nestjs: SiNestjs,
  messaging: TbBrandStackshare,
  next: SiNextdotjs,
  node: SiNodedotjs,
  docker: SiDocker,
  aws: FaAws,
  postgres: SiPostgresql,
  typescript: SiTypescript,
};
