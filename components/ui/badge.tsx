import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "purple" | "success" | "warning";

export function Badge({
  className,
  variant = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium",
        variant === "neutral" &&
          "border-white/10 bg-white/[0.04] text-[#A9A0BE]",
        variant === "purple" &&
          "border-[#9A3FF5]/30 bg-[#820AD1]/15 text-[#D4B3FF]",
        variant === "success" &&
          "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
        variant === "warning" &&
          "border-amber-400/20 bg-amber-400/10 text-amber-200",
        className
      )}
      {...props}
    />
  );
}
