import { cn } from "@/lib/utils";
import type { GlassCardProps } from "../interfaces/ui";

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6",
        "backdrop-blur-2xl shadow-inner-card",
        "before:pointer-events-none before:absolute before:-top-16 before:right-0 before:h-32 before:w-32 before:bg-card-glow before:opacity-80 before:content-['']",
        className,
      )}
      {...props}
    />
  );
}
