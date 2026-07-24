import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "compact";
  newTab?: boolean;
  withArrow?: boolean;
};

const variants = {
  primary:
    "border border-[#a94ff7]/24 bg-[linear-gradient(135deg,#820AD1_0%,#a94ff7_62%,#f1ddff_150%)] text-white shadow-[0_14px_34px_rgba(130,10,209,0.18)] hover:brightness-105",
  secondary:
    "border border-[#820AD1]/14 bg-white/90 text-[#28193d] shadow-[0_12px_28px_rgba(71,43,112,0.06)] hover:border-[#820AD1]/22 hover:bg-[#faf7ff]",
  ghost:
    "border border-transparent bg-transparent text-[#665b7d] hover:bg-[#f5efff] hover:text-[#23163a]"
} as const;

const sizes = {
  default: "px-5 py-3 text-sm",
  compact: "px-4 py-2 text-[13px]"
} as const;

export function CTAButton({
  href,
  children,
  className,
  variant = "primary",
  size = "default",
  newTab = false,
  withArrow = false
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-300",
        variants[variant],
        sizes[size],
        className
      )}
    >
      <span>{children}</span>
      {withArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </a>
  );
}
