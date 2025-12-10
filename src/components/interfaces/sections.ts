import type { ProjectCardContent, SkillIconId, TechOrbitCopy, TimelineItem } from "@/data/translations";

export interface TechOrbitProps {
  copy?: TechOrbitCopy;
}

export interface ProjectModalProps {
  project: ProjectCardContent | null;
  copy: Record<string, string>;
  commonClose: string;
  onClose: () => void;
}

export interface SkillIconProps {
  name: SkillIconId;
}

export interface TimelineItemCardProps {
  item: TimelineItem;
}
