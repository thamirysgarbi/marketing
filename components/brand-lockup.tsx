import Image from "next/image";
import { cn } from "@/lib/cn";
import { getAssetPath } from "@/lib/site";

type BrandLockupProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizes = {
  sm: {
    mark: "h-9 w-9 rounded-[18px]",
    text: "text-[1.12rem]"
  },
  md: {
    mark: "h-11 w-11 rounded-[20px]",
    text: "text-[1.35rem]"
  }
} as const;

export function BrandLockup({ className, size = "sm" }: BrandLockupProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-start overflow-hidden bg-[radial-gradient(circle_at_30%_30%,rgba(207,143,255,0.52),rgba(130,10,209,0.12))] ring-1 ring-[#820AD1]/12 shadow-[0_12px_28px_rgba(130,10,209,0.14)]",
          sizes[size].mark
        )}
      >
        <Image
          src={getAssetPath("/brand/logo.png")}
          alt=""
          aria-hidden="true"
          width={88}
          height={88}
          className="-ml-[1px] h-full w-auto max-w-none"
        />
      </span>
      <span
        className={cn(
          "font-display font-semibold tracking-[-0.05em] text-[#23163a]",
          sizes[size].text
        )}
      >
        Framja
      </span>
    </span>
  );
}
