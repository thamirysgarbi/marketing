import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered ? "mx-auto text-center" : "")}>
      <span className={cn("eyebrow mb-5", centered ? "justify-center" : "")}>
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </span>
      <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#1d1630] md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[#6c6381] md:text-lg">{description}</p>
    </div>
  );
}
