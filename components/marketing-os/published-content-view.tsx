"use client";

import { useState } from "react";
import Link from "next/link";
import { Archive, Search } from "lucide-react";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { useMarketingOs } from "@/components/marketing-os/provider";
import { PublicationStatusPill } from "@/components/marketing-os/status-pill";
import { StatusSelect } from "@/components/marketing-os/status-select";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { posts } from "@/data/posts";
import {
  formatLongDate,
  getDateFromDay,
  getFeatureLabel,
  getFormatLabel,
  getMergedStatus
} from "@/lib/marketing-os/selectors";

export function PublishedContentView() {
  const [query, setQuery] = useState("");
  const { publicationStatuses, setPublicationStatus } = useMarketingOs();
  const normalizedQuery = query.trim().toLowerCase();
  const publishedPosts = posts
    .filter(
      (post) => getMergedStatus(post, publicationStatuses) === "published"
    )
    .filter((post) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.objective.toLowerCase().includes(normalizedQuery) ||
        post.hook.toLowerCase().includes(normalizedQuery) ||
        getFeatureLabel(post).toLowerCase().includes(normalizedQuery)
      );
    })
    .sort((left, right) => right.day - left.day);

  return (
    <div className="space-y-5 sm:space-y-6">
      <PageHeading
        eyebrow="Arquivo editorial"
        title="Conteúdos já publicados"
        description="Todos os roteiros marcados como Publicado ficam guardados aqui e podem ser consultados ou reabertos quando você quiser."
      />

      <Card className="p-4 sm:p-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7f7596]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-11"
            placeholder="Buscar nos conteúdos publicados"
          />
        </label>
      </Card>

      {publishedPosts.length > 0 ? (
        <div className="space-y-4">
          {publishedPosts.map((post) => (
            <Card key={post.id} className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <PublicationStatusPill status="published" />
                  <p className="mt-4 text-sm text-[#9f95b7]">
                    Dia {post.day} • {formatLongDate(getDateFromDay(post.day))}
                  </p>
                  <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.05em] text-white sm:text-[24px]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#d9d3e8]">
                    {getFormatLabel(post.format)} • {getFeatureLabel(post)}
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#b4acc5]">
                    {post.summary}
                  </p>
                </div>

                <div className="w-full sm:w-[220px] sm:shrink-0">
                  <StatusSelect
                    value="published"
                    compact
                    onChange={(value) => setPublicationStatus(post.id, value)}
                  />
                </div>
              </div>

              <Link
                href={`/conteudos/${post.slug}`}
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-2xl border border-[#8f57f5]/30 bg-[#8f57f5]/14 px-4 text-[15px] font-medium text-white sm:w-auto"
              >
                Abrir roteiro arquivado
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-6 text-center sm:p-10">
          <Archive className="mx-auto h-9 w-9 text-[#8f57f5]" />
          <h2 className="mt-4 text-xl font-semibold text-white">
            Nenhum conteúdo publicado encontrado
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#b4acc5]">
            Quando um roteiro receber o status Publicado no Calendário, ele
            será arquivado automaticamente nesta pasta.
          </p>
          <Link
            href="/calendario"
            className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-[15px] font-medium text-white"
          >
            Voltar ao calendário
          </Link>
        </Card>
      )}
    </div>
  );
}
