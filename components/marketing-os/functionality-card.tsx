"use client";

import { MarketingIcon } from "@/lib/marketing-os/icons";
import type { FramjaSystemFunctionality } from "@/lib/marketing-os/types";
import { ProductStatusPill } from "@/components/marketing-os/status-pill";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function FunctionalityCard({
  functionality
}: {
  functionality: FramjaSystemFunctionality;
}) {
  const featureItems =
    functionality.taxonomy?.realFeatures ?? functionality.highlights;

  const strategicSections = functionality.taxonomy
    ? [
        {
          title: "O que resolve",
          items: functionality.taxonomy.solves,
          spanClass: "xl:col-span-2"
        },
        {
          title: "Ganho percebido pelo dono",
          items: functionality.taxonomy.ownerPerceivedGain
        },
        {
          title: "Ganho percebido pela cliente final",
          items: functionality.taxonomy.clientPerceivedGain
        },
        {
          title: "Ganchos de conteúdo",
          items: functionality.taxonomy.contentHooks,
          spanClass: "xl:col-span-2"
        }
      ]
    : [];

  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
              <MarketingIcon name={functionality.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[22px] font-semibold tracking-[-0.05em] text-white sm:text-[24px]">
                {functionality.name}
              </h2>
              <p className="mt-1 text-sm text-[#9f95b7]">
                {functionality.menuPath}
              </p>
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-7 text-[#d9d3e8] sm:text-[16px] sm:leading-8">
            {functionality.description}
          </p>
        </div>

        <ProductStatusPill status={functionality.status} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant="neutral">Rota real: {functionality.route}</Badge>
        {functionality.taxonomy ? (
          <Badge variant="neutral">
            Ferramenta: {functionality.taxonomy.tool}
          </Badge>
        ) : null}
      </div>

      {functionality.operationalRole ? (
        <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
          <p className="text-sm text-[#9f95b7]">Papel na operação</p>
          <p className="mt-3 text-[15px] leading-7 text-[#f3efff]">
            {functionality.operationalRole}
          </p>
        </div>
      ) : null}

      <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
        <p className="text-sm text-[#9f95b7]">Funcionalidades reais</p>
        <div className="mt-3 space-y-3">
          {featureItems.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] leading-7 text-white"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {strategicSections.length ? (
        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {strategicSections.map((section) => (
            <div
              key={section.title}
              className={`rounded-[24px] border border-white/8 bg-white/[0.03] p-4 ${section.spanClass ?? ""}`}
            >
              <p className="text-sm text-[#9f95b7]">{section.title}</p>
              <div className="mt-3 space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-[#0f0b18] px-4 py-3 text-[14px] leading-7 text-[#e9e3f8] sm:text-[15px]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {functionality.sections?.length ? (
        <div className="mt-6 space-y-4">
          {functionality.sections.map((section) => (
            <div
              key={section.id}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4"
            >
              <p className="text-sm text-[#9f95b7]">{section.title}</p>
              <div className="mt-3 space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-[#0f0b18] px-4 py-3 text-[14px] leading-7 text-[#e9e3f8] sm:text-[15px]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
