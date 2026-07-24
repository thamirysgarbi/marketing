"use client";

import Link from "next/link";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { ProductStatusPill } from "@/components/marketing-os/status-pill";
import { Card } from "@/components/ui/card";
import { features } from "@/data/features";
import { getRelatedPostsByFeature } from "@/lib/marketing-os/selectors";

export function FeaturesView() {
  return (
    <div className="space-y-6">
      <PageHeading
        eyebrow="Funcionalidades reais"
        title="Somente o que o Framja realmente tem hoje — e o que ainda está em construção."
        description="Esta página remove qualquer funcionalidade inventada e organiza o que o time precisa mostrar com honestidade."
      />

      <div className="grid min-w-0 gap-6 xl:grid-cols-2">
        {features.map((feature) => {
          const relatedPosts = getRelatedPostsByFeature(feature.id);

          return (
            <Card key={feature.id} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-white">
                    {feature.name}
                  </h2>
                  <p className="mt-4 text-[16px] leading-8 text-[#d9d3e8]">
                    {feature.description}
                  </p>
                </div>
                <ProductStatusPill status={feature.status} />
              </div>

              <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-sm text-[#9f95b7]">Posicionamento</p>
                <p className="mt-2 text-[15px] leading-7 text-white">
                  {feature.positioning}
                </p>
              </div>

              {feature.steps ? (
                <div className="mt-6">
                  <p className="text-sm text-[#9f95b7]">Etapas conhecidas</p>
                  <div className="mt-3 space-y-3">
                    {feature.steps.map((step) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] leading-7 text-white"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-6">
                <p className="text-sm text-[#9f95b7]">Conteúdos ligados a esta funcionalidade</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/conteudos/${post.slug}`}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white"
                      >
                        {post.title}
                      </Link>
                    ))
                  ) : (
                    <span className="text-[15px] leading-7 text-[#d9d3e8]">
                      Nenhum conteúdo desta rodada está diretamente vinculado a esta funcionalidade.
                    </span>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
