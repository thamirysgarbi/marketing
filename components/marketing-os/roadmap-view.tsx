"use client";

import { motion } from "framer-motion";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { RoadmapReleaseCard } from "@/components/marketing-os/roadmap-release-card";
import { Card } from "@/components/ui/card";
import { upcomingReleases } from "@/data/upcoming-releases";

const summaryCards = (() => {
  const items = upcomingReleases.flatMap((release) =>
    release.sections.flatMap((section) => section.items)
  );

  const countByKind = items.reduce<Record<string, number>>((acc, item) => {
    acc[item.kind] = (acc[item.kind] ?? 0) + 1;
    return acc;
  }, {});

  return [
    {
      label: "Versão seguinte",
      value: upcomingReleases[0]?.version ?? "—",
      description: upcomingReleases[0]?.title ?? "Sem release mapeada"
    },
    {
      label: "Itens mapeados",
      value: String(items.length),
      description: "Escopo total capturado para a próxima entrega."
    },
    {
      label: "Melhorias e correções",
      value: String(
        (countByKind.improvement ?? 0) +
          (countByKind.bugfix ?? 0) +
          (countByKind.exclusive ?? 0)
      ),
      description: "Refinamentos de operação, estabilidade e recortes exclusivos."
    },
    {
      label: "Novas capacidades",
      value: String(countByKind.feature ?? 0),
      description: "Entregas que ampliam o produto e abrem novos fluxos."
    }
  ];
})();

export function RoadmapView() {
  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Próximas funcionalidades do produto"
        title="Roadmap imediato do Framja, organizado por versão."
        description="Essa área mostra o que entra nas próximas entregas, com visão por release, agrupamento por tema e detalhamento do que precisa acontecer em cada módulo."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.04 }}
          >
            <Card className="h-full p-4 sm:p-5">
              <p className="text-sm text-[#9f95b7]">{card.label}</p>
              <p className="mt-4 text-[28px] font-semibold tracking-[-0.06em] text-white">
                {card.value}
              </p>
              <p className="mt-3 text-[14px] leading-7 text-[#c9c1da]">
                {card.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        {upcomingReleases.map((release, index) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: index * 0.05 + 0.08 }}
          >
            <RoadmapReleaseCard release={release} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
