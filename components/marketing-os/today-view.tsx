"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMarketingOs } from "@/components/marketing-os/provider";
import { CopyButton } from "@/components/marketing-os/copy-button";
import { DifficultyPill, PublicationStatusPill } from "@/components/marketing-os/status-pill";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import {
  formatLongDate,
  getFeatureLabel,
  getFormatLabel,
  getGreeting,
  getMergedStatus,
  getMetrics,
  getTodayIsoDate,
  getTodayQueue
} from "@/lib/marketing-os/selectors";

function SummaryItem({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <p className="text-sm text-[#9f95b7]">{label}</p>
      <p className="mt-2 text-[14px] leading-6 text-white sm:text-[15px] sm:leading-7">
        {value}
      </p>
    </div>
  );
}

function ListCard({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="p-4 sm:p-5">
      <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[14px] leading-6 text-[#e7e2f1] sm:text-[15px] sm:leading-7"
          >
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function TodayView() {
  const {
    deferredUntil,
    markAsRecorded,
    publicationStatuses,
    skipToTomorrow
  } = useMarketingOs();
  const todayQueue = getTodayQueue(publicationStatuses, deferredUntil);
  const currentEntry = todayQueue.current;
  const nextEntry = todayQueue.next;
  const metrics = getMetrics(publicationStatuses, deferredUntil);
  const today = getTodayIsoDate();

  if (!currentEntry) {
    return (
      <div className="space-y-5 sm:space-y-6">
        <PageHeading
          eyebrow={formatLongDate(today)}
          title={`${getGreeting()}.`}
          description="Tudo o que estava na fila operacional já saiu do estado de produção."
        />
        <Card className="p-4 sm:p-6">
          <p className="text-[15px] leading-7 text-[#d9d3e8] sm:text-[16px] sm:leading-8">
            Não há nenhum conteúdo em estado de gravação pendente agora. Se quiser, revise o calendário editorial e ajuste os próximos status.
          </p>
          <div className="mt-5">
            <Link
              href="/calendario"
              className={buttonVariants({ variant: "primary" })}
            >
              Abrir calendário
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const post = currentEntry.post;
  const postStatus = getMergedStatus(post, publicationStatuses);
  const captureSummary = post.captures.map(
    (capture) => `${capture.screen}: ${capture.instruction}`
  );

  return (
    <div className="space-y-5 sm:space-y-6">
      <PageHeading
        eyebrow={formatLongDate(today)}
        title={`${getGreeting()}.`}
        description="Aqui está o conteúdo que vocês precisam produzir hoje."
      />

      <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap gap-2">
                <PublicationStatusPill status={postStatus} />
                <DifficultyPill difficulty={post.difficulty} />
              </div>
              <h1 className="mt-4 text-[clamp(1.9rem,8vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-white">
                {post.title}
              </h1>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#d9d3e8] sm:text-[16px] sm:leading-8">
                {post.objective}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:w-auto">
              <Link
                href={`/conteudos/${post.slug}`}
                className={buttonVariants({
                  variant: "primary",
                  className: "w-full sm:w-auto"
                })}
              >
                Abrir roteiro
              </Link>
              <Button
                type="button"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => markAsRecorded(post.id)}
              >
                Marcar como gravado
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full sm:w-auto"
                onClick={() => skipToTomorrow(post.id)}
              >
                Pular para amanhã
              </Button>
            </div>
          </div>

          <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
            <SummaryItem label="Formato" value={getFormatLabel(post.format)} />
            <SummaryItem label="Tempo estimado" value={`${post.productionTime} minutos`} />
            <SummaryItem label="Quem participa" value={post.responsible.join(", ")} />
            <SummaryItem label="Funcionalidade" value={getFeatureLabel(post)} />
          </div>

          <div className="mt-6 rounded-[28px] border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm text-[#9f95b7]">Gancho</p>
                <p className="mt-2 text-[16px] leading-7 text-white sm:text-[18px] sm:leading-8">
                  {post.hook}
                </p>
              </div>
              <div className="sm:shrink-0">
                <CopyButton label="Copiar gancho" text={post.hook} />
              </div>
            </div>
          </div>
        </Card>

        <div className="grid min-w-0 grid-cols-2 gap-4 xl:grid-cols-1">
          <Card className="col-span-2 p-4 sm:p-5">
            <p className="text-sm text-[#9f95b7]">Próximo conteúdo</p>
            {nextEntry ? (
              <>
                <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">
                  {nextEntry.post.title}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-[#d9d3e8]">
                  {nextEntry.post.summary}
                </p>
                <Link
                  href={`/conteudos/${nextEntry.post.slug}`}
                  className={cn(buttonVariants({ variant: "secondary" }), "mt-5 w-full")}
                >
                  Abrir próximo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            ) : (
              <p className="mt-3 text-[15px] leading-7 text-[#d9d3e8]">
                Não há outro conteúdo em fila depois deste.
              </p>
            )}
          </Card>

          <Card className="p-4 sm:p-5">
            <p className="text-sm text-[#9f95b7]">Tempo total previsto da semana</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl">
              {metrics.weekTime} min
            </p>
          </Card>

          <Card className="p-4 sm:p-5">
            <p className="text-sm text-[#9f95b7]">Conteúdos pendentes</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl">
              {metrics.pendingCount}
            </p>
          </Card>

          <Card className="col-span-2 p-4 sm:col-span-1 sm:p-5">
            <p className="text-sm text-[#9f95b7]">Conteúdos já publicados</p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl">
              {metrics.publishedCount}
            </p>
          </Card>
        </div>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-2">
        <ListCard title="Checklist rápido" items={post.checklist.slice(0, 4)} />
        <ListCard title="Materiais necessários" items={post.materials} />
        <ListCard title="Tela do Framja que precisa ser capturada" items={captureSummary} />
        <ListCard
          title="Observações de produção"
          items={post.notes ?? ["Sem observações adicionais neste conteúdo."]}
        />
      </div>
    </div>
  );
}
