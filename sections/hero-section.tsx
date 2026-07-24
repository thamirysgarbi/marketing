import { Check, PhoneCall } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/data/site-content";

export function HeroSection() {
  const heroTitle = "Agenda, financeiro e operação em um só lugar.";
  const heroDescription =
    "Agendamento online 24/7, lembretes inteligentes, caixa, comissões e visão clara da operação em uma única plataforma.";

  return (
    <section id="top" className="relative pt-26 pb-14 md:pt-30 md:pb-18 xl:pt-32 xl:pb-20">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-10 xl:min-h-[calc(100vh-8rem)] xl:grid-cols-[0.82fr,1.18fr] xl:items-center xl:gap-14">
          <Reveal>
            <div className="max-w-xl xl:max-w-[32rem]">
              <span className="eyebrow mb-5 !border-[#820AD1]/10 !bg-white/80 !text-[#6c2f97]">
                {siteContent.hero.eyebrow}
              </span>

              <h1 className="mb-5 max-w-[15ch] text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.065em] text-[#1d1630] md:text-[3.65rem] xl:text-[4.1rem]">
                <span className="text-gradient">{heroTitle}</span>
              </h1>

              <p className="mb-4 max-w-[31rem] text-[1.02rem] leading-8 text-[#5f5674] md:text-[1.08rem]">
                {heroDescription}
              </p>

              <div className="mb-7 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={siteContent.links.trial} newTab withArrow>
                  Começar teste grátis
                </CTAButton>
                <CTAButton href={siteContent.links.whatsapp} newTab variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    Falar no WhatsApp
                  </span>
                </CTAButton>
              </div>

              <ul className="grid gap-2.5 text-sm text-[#5f5674]">
                {siteContent.hero.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#820AD1]/10 bg-[#f4ebff] text-[#820AD1]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[30px] border border-[#820AD1]/10 bg-[radial-gradient(circle_at_top_right,rgba(130,10,209,0.1),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,243,255,0.98))] p-4 shadow-[0_28px_90px_rgba(84,52,129,0.12)] md:p-5 xl:p-6">
              <div className="mb-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#7b58a4]">
                    Framja Web
                  </p>
                  <p className="mt-1 text-sm text-[#6b6380]">
                    Agenda, operação e financeiro com visão ampla da rotina.
                  </p>
                </div>

                <span className="hidden rounded-full border border-[#820AD1]/10 bg-white/90 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#24173a] md:inline-flex">
                  10 dias grátis
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-[#820AD1]/10 bg-white p-2.5">
                <Image
                  src="/showcase/agenda-header.png"
                  alt="Agenda web do Framja"
                  width={1600}
                  height={1000}
                  className="w-full rounded-[20px]"
                />

                <div className="pointer-events-none absolute left-6 top-6 hidden rounded-full border border-[#820AD1]/10 bg-white/92 px-4 py-2 text-xs font-medium text-[#35204f] shadow-[0_12px_30px_rgba(84,52,129,0.12)] md:block">
                  Agenda multiagenda
                </div>
                <div className="pointer-events-none absolute bottom-6 right-6 hidden rounded-full border border-[#820AD1]/10 bg-white/92 px-4 py-2 text-xs font-medium text-[#35204f] shadow-[0_12px_30px_rgba(84,52,129,0.12)] md:block">
                  Financeiro em tempo real
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
