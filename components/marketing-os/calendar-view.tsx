"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { useMarketingOs } from "@/components/marketing-os/provider";
import { ProductStatusPill, PublicationStatusPill } from "@/components/marketing-os/status-pill";
import { StatusSelect } from "@/components/marketing-os/status-select";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatLabels } from "@/data/statuses";
import { cn } from "@/lib/cn";
import {
  formatShortDate,
  getDateFromDay,
  getFeatureById,
  getFeatureLabel,
  getMergedStatus,
  getWeekGroups
} from "@/lib/marketing-os/selectors";
import type { MarketingPost } from "@/lib/marketing-os/types";

type CalendarFilter =
  | "all"
  | "reels"
  | "carousel"
  | "stories"
  | "behind-the-scenes"
  | "future";

const filters: Array<{ id: CalendarFilter; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "reels", label: "Reels" },
  { id: "carousel", label: "Carrossel" },
  { id: "stories", label: "Stories" },
  { id: "behind-the-scenes", label: "Bastidores" },
  { id: "future", label: "Conteúdo futuro" }
];

function matchesFilter(post: MarketingPost, filter: CalendarFilter) {
  if (filter === "all") {
    return true;
  }

  if (filter === "future") {
    return post.productStatus === "in-development" || post.productStatus === "future";
  }

  return post.format === filter;
}

function MetaChip({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium text-[#d9d3e8]">
      {children}
    </span>
  );
}

export function CalendarView() {
  const [activeFilter, setActiveFilter] = useState<CalendarFilter>("all");
  const { publicationStatuses, setPublicationStatus } = useMarketingOs();
  const weeks = getWeekGroups();

  return (
    <div className="space-y-5 sm:space-y-6">
      <PageHeading
        eyebrow="Calendário editorial"
        title="14 dias de produção, em sequência clara."
        description="Em vez de um calendário mensal apertado, aqui a leitura fica em duas semanas operacionais com status editável."
      />

      <div className="-mx-3 overflow-x-auto px-3 pb-1 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              type="button"
              variant={activeFilter === filter.id ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid min-w-0 gap-6 xl:grid-cols-2">
        {weeks.map((week) => (
          <Card key={week.id} className="p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
                  {week.label}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {week.posts.map((post) => (
                    <MetaChip key={post.id}>
                      {formatShortDate(getDateFromDay(post.day))}
                    </MetaChip>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {week.posts.filter((post) => matchesFilter(post, activeFilter)).map((post) => {
                const currentStatus = getMergedStatus(post, publicationStatuses);
                const feature = getFeatureById(post.featureId);

                return (
                  <div
                    key={post.id}
                    className="min-w-0 rounded-[26px] border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-[#9f95b7]">
                          Dia {post.day} • {formatShortDate(getDateFromDay(post.day))}
                        </p>
                        <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.04em] text-white">
                          {post.title}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <MetaChip>{getFeatureLabel(post)}</MetaChip>
                          <MetaChip>{formatLabels[post.format]}</MetaChip>
                          <MetaChip>{post.productionTime} min</MetaChip>
                        </div>
                        <p className="mt-3 text-[14px] leading-6 text-[#b4acc5] sm:text-[15px] sm:leading-7">
                          Responsável: {post.responsible.join(", ")}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:shrink-0">
                        <PublicationStatusPill status={currentStatus} />
                        {feature ? <ProductStatusPill status={feature.status} /> : null}
                      </div>
                    </div>

                    <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-[minmax(0,1fr)_140px] lg:grid-cols-[minmax(0,1fr)_160px]">
                      <StatusSelect
                        value={currentStatus}
                        compact
                        onChange={(value) => setPublicationStatus(post.id, value)}
                      />
                      <Link
                        href={`/conteudos/${post.slug}`}
                        className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
                      >
                        Abrir
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
