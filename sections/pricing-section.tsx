import { PricingCard } from "@/components/pricing-card";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

export function PricingSection() {
  return (
    <section id="precos" className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow="Planos"
          title="Valores organizados por tamanho de equipe, com a lógica promocional do site oficial."
          description="Abaixo, a referência anual com 30% OFF e pagamento em 12x sem juros para cada faixa de profissionais."
        />

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-[#7a718e]">
          Valores promocionais sujeitos a alteração pela Framja. Esta vitrine foi
          organizada com base nas informações públicas do site oficial.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.pricing.map((item, index) => (
            <PricingCard
              key={`${item.plan}-${item.audience}`}
              plan={item.plan}
              audience={item.audience}
              description={item.description}
              price={item.price}
              billing={item.billing}
              compareAt={item.compareAt}
              total={item.total}
              badge={item.badge}
              bullets={item.bullets}
              highlighted={item.highlighted}
              href={siteContent.links.trial}
              delay={index * 0.04}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
