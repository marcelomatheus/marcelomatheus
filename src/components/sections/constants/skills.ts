import type { ComponentType } from "react";
import { Activity, Brain, Server, Sparkles } from "lucide-react";
import type { SkillIconId } from "@/data/interfaces/translations";

export const SKILL_ICON_MAP: Record<SkillIconId, ComponentType<{ className?: string }>> = {
  Server,
  Sparkles,
  Activity,
  Brain,
};
