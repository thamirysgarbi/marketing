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
        eyebrow="Funcionalidades reais do produto"
        title="Mapa vivo do que já existe dentro do Framja."
        description="Esta área foi alimentada a partir do sistema real, agrupando os módulos visíveis no menu e os principais recursos encontrados em cada tela."
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
