import { cn } from "@/lib/utils";
import type { GlassCardProps } from "../interfaces/ui";

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "noise-card relative overflow-hidden rounded-[2rem] border border-white/8 bg-surface p-6",
        "shadow-panel backdrop-blur-sm",
        "before:pointer-events-none before:absolute before:-right-10 before:top-0 before:h-32 before:w-32 before:bg-card-glow before:opacity-90 before:blur-2xl before:content-['']",
        className,
      )}
      {...props}
    />
  );
}
