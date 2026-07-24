import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  label?: string;
  delay?: number;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  label,
  delay = 0,
  className
}: FeatureCardProps) {
  return (
    <Reveal delay={delay} className={className}>
      <article className="surface-card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-[#820AD1]/20 hover:bg-[#fbf8ff]">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#820AD1]/10 bg-[#f4ebff] text-[#820AD1]">
            <Icon className="h-5 w-5" />
          </div>
          {label ? (
            <span className="rounded-full border border-[#820AD1]/10 bg-[#faf7ff] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#7d6c97]">
              {label}
            </span>
          ) : null}
        </div>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#1d1630]">{title}</h3>
        <p className="text-sm leading-7 text-[#6c6381]">{description}</p>
      </article>
    </Reveal>
  );
}
