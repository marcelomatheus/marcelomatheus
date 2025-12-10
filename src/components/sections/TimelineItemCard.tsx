import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import type { TimelineItemCardProps } from "../interfaces/sections";

export function TimelineItemCard({ item }: TimelineItemCardProps) {
  return (
    <GlassCard className="relative border-white/10 bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">{item.year}</p>
        <p className="text-sm font-semibold text-white">{item.company}</p>
      </div>
      <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
      <p className="mt-2 text-sm text-muted">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
    </GlassCard>
  );
}
