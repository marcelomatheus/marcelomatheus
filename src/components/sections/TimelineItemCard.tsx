import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import type { TimelineItemCardProps } from "../interfaces/sections";

export function TimelineItemCard({ item }: TimelineItemCardProps) {
  return (
    <GlassCard className="relative ml-2">
      <span className="absolute -left-[2.1rem] top-8 h-3 w-3 rounded-full border border-primary/40 bg-background shadow-[0_0_18px_rgba(255,125,58,0.4)]" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-primary/85">{item.period}</p>
          {item.location ? <p className="mt-2 text-sm text-muted">{item.location}</p> : null}
        </div>
        <p className="text-sm font-semibold text-white">{item.company}</p>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{item.role}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
    </GlassCard>
  );
}
