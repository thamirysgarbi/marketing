import { CTAButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/data/site-content";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="surface-card hero-glow overflow-hidden p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow mb-6">Último passo</span>
                <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#1d1630] md:text-6xl">
                  {siteContent.finalCta.title}
                </h2>
                <p className="text-lg leading-8 text-[#6c6381]">
                  {siteContent.finalCta.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <CTAButton
                  href={siteContent.links.trial}
                  newTab
                  withArrow
                  className="w-full lg:w-auto"
                >
                  Começar teste grátis
                </CTAButton>
                <CTAButton
                  href={siteContent.links.whatsapp}
                  newTab
                  variant="secondary"
                  className="w-full lg:w-auto"
                >
                  Falar com especialista
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
