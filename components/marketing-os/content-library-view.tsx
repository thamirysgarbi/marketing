"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { CopyButton } from "@/components/marketing-os/copy-button";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { useMarketingOs } from "@/components/marketing-os/provider";
import { DifficultyPill, PublicationStatusPill } from "@/components/marketing-os/status-pill";
import { StatusSelect } from "@/components/marketing-os/status-select";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { posts } from "@/data/posts";
import { getFeatureLabel, getFormatLabel, getMergedStatus } from "@/lib/marketing-os/selectors";

export function ContentLibraryView() {
  const [query, setQuery] = useState("");
  const { publicationStatuses, setPublicationStatus } = useMarketingOs();
  const normalizedQuery = query.trim().toLowerCase();
  const queuedPosts = posts.filter(
    (post) => getMergedStatus(post, publicationStatuses) !== "published"
  );
  const filteredPosts = queuedPosts.filter((post) => {
    if (!normalizedQuery) {
      return true;
    }

    return (
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.objective.toLowerCase().includes(normalizedQuery) ||
      post.hook.toLowerCase().includes(normalizedQuery) ||
      getFeatureLabel(post).toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="space-y-5 sm:space-y-6">
      <PageHeading
        eyebrow="Biblioteca operacional"
        title={`${queuedPosts.length} conteúdos em uma fila legível.`}
        description="Aqui ficam apenas os conteúdos que ainda estão em produção. Ao marcar um roteiro como Publicado, ele é movido para Conteúdos já publicados."
      />

      <Card className="p-4 sm:p-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7f7596]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-11"
            placeholder="Buscar por título, objetivo, gancho ou funcionalidade"
          />
        </label>
      </Card>

      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const currentStatus = getMergedStatus(post, publicationStatuses);

          return (
            <Card key={post.id} className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap gap-2">
                    <PublicationStatusPill status={currentStatus} />
                    <DifficultyPill difficulty={post.difficulty} />
                  </div>
                  <h2 className="mt-4 text-[22px] font-semibold tracking-[-0.05em] text-white sm:text-[24px]">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-[#d9d3e8] sm:text-[16px] sm:leading-8">
                    {post.summary}
                  </p>
                </div>
                <div className="w-full sm:min-w-[180px] sm:max-w-[220px]">
                  <StatusSelect
                    value={currentStatus}
                    compact
                    onChange={(value) => setPublicationStatus(post.id, value)}
                  />
                </div>
              </div>

              <div className="mt-6 grid min-w-0 gap-4 lg:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm text-[#9f95b7]">Resumo rápido</p>
                  <p className="mt-2 text-[15px] leading-7 text-white">
                    Dia {post.day} • {getFormatLabel(post.format)} • {getFeatureLabel(post)} • {post.productionTime} min
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#d9d3e8]">
                    {post.objective}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-[#9f95b7]">Gancho</p>
                    <CopyButton label="Copiar gancho" text={post.hook} />
                  </div>
                  <p className="mt-3 text-[16px] leading-8 text-white">
                    {post.hook}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={`/conteudos/${post.slug}`}
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-[#8f57f5]/30 bg-[#8f57f5]/14 px-4 text-[15px] font-medium text-white sm:w-auto"
                >
                  Abrir roteiro
                </Link>
                <CopyButton label="Copiar CTA" text={post.cta} />
              </div>
            </Card>
          );
        })}
      </div>

      {filteredPosts.length === 0 ? (
        <Card className="p-6 text-center sm:p-8">
          <h2 className="text-xl font-semibold text-white">
            {normalizedQuery
              ? "Nenhum conteúdo em fila corresponde à busca"
              : "Não há conteúdos aguardando produção"}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-[#b4acc5]">
            Os roteiros marcados como Publicado estão disponíveis no menu
            Conteúdos já publicados.
          </p>
          <Link
            href="/conteudos-publicados"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-[15px] font-medium text-white"
          >
            Abrir conteúdos publicados
          </Link>
        </Card>
      ) : null}
    </div>
  );
}

