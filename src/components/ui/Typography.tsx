import { cn } from "@/lib/utils";
import type { EyebrowProps, GradientHeadingProps, SectionParagraphProps } from "../interfaces/ui";

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.3em] text-accent",
        "bg-gradient-to-r from-accent/60 to-primary-400/80 bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}

export function GradientHeading({ className, ...props }: GradientHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold leading-tight text-white md:text-4xl",
        "bg-gradient-to-r from-white via-primary-200 to-accent bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}

export function SectionParagraph({ className, ...props }: SectionParagraphProps) {
  return (
    <p className={cn("text-base text-muted md:text-lg", className)} {...props} />
  );
}
