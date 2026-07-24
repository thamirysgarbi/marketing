import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm" | "icon";

export function buttonVariants({
  variant = "primary",
  size = "default",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl border text-[15px] font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]/60 disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "border-[#9A3FF5] bg-[linear-gradient(135deg,#9625F7_0%,#6A21D4_100%)] text-white shadow-[0_16px_50px_rgba(130,10,209,0.28)] hover:brightness-110",
    variant === "secondary" &&
      "border-white/10 bg-white/[0.04] text-white hover:border-white/15 hover:bg-white/[0.07]",
    variant === "ghost" && "border-transparent bg-transparent text-[#CFC5E5] hover:bg-white/[0.05] hover:text-white",
    size === "default" && "h-11 px-4",
    size === "sm" && "h-9 rounded-xl px-3 text-sm",
    size === "icon" && "h-10 w-10 rounded-2xl",
    className
  );
}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
