import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

export function ProofSection() {
  return (
    <section id="depoimentos" className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow={siteContent.proof.kicker}
          title={siteContent.proof.title}
          description={siteContent.proof.description}
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.88fr,1.12fr]">
          <Reveal>
            <article className="surface-card hero-glow h-full p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#7e5aa8]">
                {siteContent.proof.support.eyebrow}
              </p>
              <h3 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#1d1630]">
                {siteContent.proof.support.title}
              </h3>
              <p className="text-base leading-8 text-[#6c6381]">
                {siteContent.proof.support.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#5d556f]">
                {siteContent.proof.support.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c259ff]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {siteContent.proof.stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <article className="surface-card h-full p-7">
                  <p className="mb-3 text-4xl font-semibold tracking-[-0.06em] text-[#1d1630] md:text-5xl">
                    {item.value}
                  </p>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#7b7290]">
                    {item.label}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.proof.testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.04}>
              <article className="surface-card h-full p-6">
                <p className="mb-4 text-sm leading-7 text-[#5d556f]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="soft-divider mb-4" />
                <p className="text-base font-semibold text-[#1d1630]">{item.name}</p>
                <p className="text-sm text-[#6c6381]">
                  {item.role} · {item.business}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
