import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-[15px] text-white outline-none placeholder:text-[#6E6682] focus:border-[#9A3FF5]/70 focus:bg-white/[0.06]",
        className
      )}
      {...props}
    />
  );
}
