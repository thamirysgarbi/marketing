import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow="Antes e depois"
          title="Quando a gestão amadurece, o negócio deixa de viver apagando incêndios."
          description="A diferença entre lotação e crescimento sustentável está no quanto você enxerga e controla a operação."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="surface-card h-full p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#cc627b]">
                Antes do Framja
              </p>
              <ul className="space-y-4">
                {siteContent.comparison.before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#5e566f]">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe8ee] text-[#c44d69]">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="surface-card hero-glow h-full p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#7e5aa8]">
                Com Framja
              </p>
              <ul className="space-y-4">
                {siteContent.comparison.after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#2b213e]">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#f0e3ff] text-[#820AD1]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
