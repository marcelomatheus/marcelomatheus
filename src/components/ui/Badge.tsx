import { cn } from "@/lib/utils";
import type { BadgeProps } from "../interfaces/ui";

export function Badge({ className, children, variant = "default", ...props }: BadgeProps) {
  const styles =
    variant === "outline"
      ? "border border-white/12 bg-black/20"
      : "border border-white/8 bg-white/[0.04]";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/72",
        "backdrop-blur-sm",
        styles,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
