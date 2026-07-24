import { Check } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

type PricingCardProps = {
  plan: string;
  audience: string;
  description: string;
  price: string;
  billing: string;
  compareAt: string;
  total: string;
  badge: string;
  bullets: readonly string[];
  highlighted?: boolean;
  href: string;
  delay?: number;
};

export function PricingCard({
  plan,
  audience,
  description,
  price,
  billing,
  compareAt,
  total,
  badge,
  bullets,
  highlighted = false,
  href,
  delay = 0
}: PricingCardProps) {
  return (
    <Reveal delay={delay}>
      <article
        className={cn(
          "surface-card h-full p-6 md:p-7",
          highlighted
            ? "border-[#820AD1]/20 bg-[linear-gradient(180deg,rgba(130,10,209,0.05),rgba(255,255,255,0.98))]"
            : ""
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7f7397]">
              {plan} {audience}
            </p>
            <h3 className="mb-2 text-4xl font-semibold tracking-[-0.06em] text-[#1d1630]">
              {price}
            </h3>
            <p className="mb-3 text-sm font-medium text-[#74698b]">{billing}</p>
            <p className="max-w-sm text-sm leading-7 text-[#6c6381]">{description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="rounded-full border border-[#820AD1]/18 bg-[#f4ebff] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#820AD1]">
              {badge}
            </span>
            {highlighted ? (
              <span className="rounded-full border border-[#820AD1]/10 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#2f2148]">
                Mais pedido
              </span>
            ) : null}
          </div>
        </div>

        <div className="mb-6 rounded-[24px] border border-[#820AD1]/10 bg-[#faf7ff] p-4">
          <p className="text-sm text-[#8d83a4] line-through">{compareAt}</p>
          <p className="mt-2 text-base font-semibold text-[#1d1630]">{total}</p>
        </div>

        <ul className="mb-8 space-y-3 text-sm text-[#564d6a]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0e3ff] text-[#820AD1]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <CTAButton
          href={href}
          newTab
          variant={highlighted ? "primary" : "secondary"}
          className="w-full"
        >
          Começar teste grátis
        </CTAButton>
      </article>
    </Reveal>
  );
}
