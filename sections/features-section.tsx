import {
  BadgePercent,
  BellRing,
  CalendarDays,
  Globe,
  LineChart,
  MonitorSmartphone,
  Package,
  SlidersHorizontal,
  Smartphone,
  Wallet
} from "lucide-react";
import Image from "next/image";
import { FeatureCard } from "@/components/feature-card";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { siteContent } from "@/data/site-content";

const featureIcons = {
  CalendarDays,
  Globe,
  BellRing,
  Smartphone,
  Wallet,
  BadgePercent,
  Package,
  LineChart,
  MonitorSmartphone,
  SlidersHorizontal
};

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-24 md:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Funcionalidades"
          title="Ferramentas que tiram o peso da rotina e devolvem clareza para a operação."
          description="O Framja organiza os fluxos que mais travam o dia a dia: agendamento, confirmações, financeiro, comissões, estoque e permissões."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.08fr,0.92fr]">
          <Reveal>
            <article className="surface-card tech-frame hero-glow overflow-hidden p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#7e5aa8]">
                    Agenda com leitura clara
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1d1630] md:text-3xl">
                    Uma experiência impecável também em tela grande, para a gestão não acontecer apertada.
                  </h3>
                </div>
                <span className="rounded-full border border-[#820AD1]/10 bg-white px-4 py-2 text-sm text-[#6c6381]">
                  Desktop-ready
                </span>
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[#820AD1]/10 bg-white p-2">
                <Image
                  src="/showcase/agenda-tablet.png"
                  alt="Agenda do Framja em tela ampla"
                  width={1600}
                  height={1000}
                  className="w-full rounded-[18px]"
                />
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.06}>
              <article className="surface-card overflow-hidden p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7e5aa8]">
                  Painel operacional
                </p>
                <div className="overflow-hidden rounded-[22px] border border-[#820AD1]/10 bg-white p-2">
                  <Image
                    src="/showcase/operations-dashboard.jpeg"
                    alt="Painel operacional do Framja"
                    width={1600}
                    height={1000}
                    className="w-full rounded-[18px]"
                  />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="surface-card overflow-hidden p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7e5aa8]">
                  Mobile quando faz sentido
                </p>
                <div className="grid items-end gap-4 sm:grid-cols-[0.95fr,1.05fr]">
                  <Image
                    src="/showcase/cashier-phone.png"
                    alt="Caixa do Framja no celular"
                    width={900}
                    height={1800}
                    className="mx-auto max-h-[24rem] rounded-[22px] border border-[#820AD1]/10"
                  />
                  <div className="rounded-[22px] border border-[#820AD1]/10 bg-[#faf7ff] p-4">
                    <p className="mb-3 text-base font-semibold text-[#1d1630]">
                      A experiência mobile apoia a operação, sem roubar protagonismo da visão web.
                    </p>
                    <p className="text-sm leading-7 text-[#6c6381]">
                      Use o app para caixa, lançamentos e agilidade no dia a dia, enquanto o
                      desktop concentra a leitura mais estratégica da agenda e dos dados.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];

            return (
              <FeatureCard
                key={feature.title}
                icon={Icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.03}
                label={index < 3 ? "Essencial" : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
