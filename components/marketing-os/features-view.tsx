"use client";

import { FunctionalityCard } from "@/components/marketing-os/functionality-card";
import { PageHeading } from "@/components/marketing-os/page-heading";
import {
  functionalityGroups,
  systemFunctionalities
} from "@/data/system-functionalities";

export function FeaturesView() {
  return (
    <div className="space-y-8">
      <PageHeading
        eyebrow="Taxonomia estratégica do produto"
        title="Cada ferramenta do Framja traduzida em valor, operação e conteúdo."
        description="A leitura abaixo parte do menu real do sistema e organiza cada módulo por ferramenta, o que resolve, funcionalidades reais, ganho percebido pelo dono, ganho percebido pela cliente final e ganchos que podem virar pauta."
      />

      <div className="space-y-8">
        {functionalityGroups.map((group) => {
          const items = systemFunctionalities.filter(
            (functionality) => functionality.groupId === group.id
          );

          return (
            <section key={group.id} className="space-y-5">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-[#bda8ef]">{group.name}</p>
                <p className="mt-2 text-[15px] leading-7 text-[#b4acc5] sm:text-[16px] sm:leading-8">
                  {group.description}
                </p>
              </div>

              <div className="grid min-w-0 gap-6 xl:grid-cols-2">
                {items.map((functionality) => (
                  <FunctionalityCard
                    key={functionality.id}
                    functionality={functionality}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
