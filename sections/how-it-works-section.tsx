import {
  Building2,
  LineChart,
  SlidersHorizontal
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

const stepIcons = {
  Building2,
  SlidersHorizontal,
  LineChart
};

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow="Como funciona"
          title="Em poucos passos, a operação deixa de ser reativa e passa a ser controlada."
          description="O Framja foi pensado para entrar rápido na rotina e gerar clareza desde o primeiro uso."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteContent.steps.map((item, index) => {
            const Icon = stepIcons[item.icon];

            return (
              <Reveal key={item.step} delay={index * 0.06}>
                <article className="surface-card h-full p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="text-5xl font-semibold tracking-[-0.08em] text-[#a090be]">
                      {item.step}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#820AD1]/10 bg-[#f4ebff] text-[#820AD1]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1630]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#6c6381]">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
