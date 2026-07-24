import {
  Gem,
  HeartPulse,
  PawPrint,
  PenTool,
  Scissors,
  ShieldCheck,
  Sparkles,
  WandSparkles
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";
import { getSegmentHref } from "@/lib/segment-paths";

const segmentIcons = {
  Sparkles,
  Scissors,
  Gem,
  HeartPulse,
  WandSparkles,
  ShieldCheck,
  PenTool,
  PawPrint
};

export function SegmentsSection() {
  return (
    <section id="segmentos" className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Segmentos"
          title="Uma estrutura pronta para negócios da beleza com rotinas diferentes."
          description="O Framja se adapta a operações com agenda, equipe, clientes e financeiro em ritmos variados."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.segments.map((segment, index) => {
            const Icon = segmentIcons[segment.icon];

            return (
              <Reveal key={segment.slug} delay={index * 0.04}>
                <a
                  href={getSegmentHref(segment.slug)}
                  className="surface-card group flex h-full flex-col gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#820AD1]/20 hover:bg-[#fbf8ff]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#820AD1]/10 bg-[#f4ebff] text-[#820AD1]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-[#820AD1]/10 bg-[#faf7ff] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#7d6c97]">
                      Em breve
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#1d1630]">
                      {segment.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#6c6381]">{segment.description}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
