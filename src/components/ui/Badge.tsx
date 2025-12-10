import { cn } from "@/lib/utils";
import type { BadgeProps } from "../interfaces/ui";

export function Badge({ className, children, variant = "default", ...props }: BadgeProps) {
  const styles =
    variant === "outline"
      ? "border border-white/20 bg-white/5"
      : "bg-gradient-to-r from-white/10 via-white/5 to-transparent";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted",
        "backdrop-blur-md",
        styles,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
