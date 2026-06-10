"use client"
import { cn } from "@/lib/utils";
import type { EyebrowProps, GradientHeadingProps, SectionParagraphProps } from "../interfaces/ui";
import BlurText from "./BlurText";

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.32em] text-primary",
        className,
      )}
      {...props}
    />
  );
}

export function GradientHeading({ className, children, ...props }: GradientHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold leading-tight text-white md:text-4xl",
        "bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text",
        className,
      )}
      {...props}
    >
      <BlurText text={children as string} />
    </h2>
  );
}

export function SectionParagraph({ className, ...props }: SectionParagraphProps) {
  return (
    <p className={cn("text-base text-muted md:text-lg", className)} {...props} />
  );
}
