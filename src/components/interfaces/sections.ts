import type { HeroCarouselCopy, ProjectCardContent, SkillIconId, TimelineItem } from "@/data/translations";

export interface HeroCarouselProps {
  copy?: HeroCarouselCopy;
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
