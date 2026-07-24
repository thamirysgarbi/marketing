import { FAQItem } from "@/components/faq-item";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow="Perguntas frequentes"
          title="As dúvidas mais comuns do site oficial, organizadas para decisão rápida."
          description="Se a próxima etapa é entender migração, mobile, teste grátis ou suporte, está tudo aqui."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {siteContent.faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <FAQItem question={item.question} answer={item.answer} defaultOpen={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
