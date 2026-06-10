import type { SkillIconProps } from "../interfaces/sections";
import { SKILL_ICON_MAP } from "./constants/skills";

export function SkillIcon({ name }: SkillIconProps) {
  const Icon = SKILL_ICON_MAP[name];
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 text-primary">
      <Icon className="h-6 w-6" />
    </span>
  );
}
