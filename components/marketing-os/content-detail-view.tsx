"use client";

import Link from "next/link";
import { CopyButton } from "@/components/marketing-os/copy-button";
import { PageHeading } from "@/components/marketing-os/page-heading";
import { useMarketingOs } from "@/components/marketing-os/provider";
import {
  DifficultyPill,
  ProductStatusPill,
  PublicationStatusPill
} from "@/components/marketing-os/status-pill";
import { StatusSelect } from "@/components/marketing-os/status-select";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import {
  formatLongDate,
  getContentBySlug,
  getDateFromDay,
  getFeatureById,
  getFeatureLabel,
  getFormatLabel,
  getMergedStatus
} from "@/lib/marketing-os/selectors";

function MetaCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <p className="text-sm text-[#9f95b7]">{label}</p>
      <p className="mt-2 text-[15px] leading-7 text-white">{value}</p>
    </div>
  );
}

export function ContentDetailView({
  slug
}: {
  slug: string;
}) {
  const post = getContentBySlug(slug);
  const { publicationStatuses, setPublicationStatus } = useMarketingOs();

  if (!post) {
    return null;
  }

  const feature = getFeatureById(post.featureId);
  const currentStatus = getMergedStatus(post, publicationStatuses);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/conteudos"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Voltar para conteúdos
        </Link>
        <Link
          href="/calendario"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Ver calendário
        </Link>
      </div>

      <PageHeading
        eyebrow={`Dia ${post.day} • ${formatLongDate(getDateFromDay(post.day))}`}
        title={post.title}
        description={post.summary}
      />

      <Card className="p-6 md:p-8">
        <p className="text-sm font-medium text-[#bda8ef]">Resumo</p>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap gap-2">
              <PublicationStatusPill status={currentStatus} />
              <DifficultyPill difficulty={post.difficulty} />
              {feature ? <ProductStatusPill status={feature.status} /> : null}
            </div>
            <p className="mt-4 text-[16px] leading-8 text-[#d9d3e8]">
              {post.objective}
            </p>
          </div>
          <div className="w-full max-w-[260px]">
            <StatusSelect
              value={currentStatus}
              onChange={(value) => setPublicationStatus(post.id, value)}
            />
          </div>
        </div>

        <div className="mt-6 grid min-w-0 gap-4 xl:grid-cols-2">
          <MetaCard label="Formato" value={getFormatLabel(post.format)} />
          <MetaCard label="Duração" value={post.duration} />
          <MetaCard label="Objetivo" value={post.objective} />
          <MetaCard label="Público" value={post.audience} />
          <MetaCard label="Funcionalidade" value={getFeatureLabel(post)} />
          <MetaCard
            label="Tempo de preparação"
            value={`${post.productionTime} minutos`}
          />
          <MetaCard label="Responsável" value={post.responsible.join(", ")} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <CopyButton label="Copiar gancho" text={post.hook} />
          <CopyButton label="Copiar legenda" text={post.caption} />
          <CopyButton label="Copiar CTA" text={post.cta} />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
            Gancho
          </h2>
          <CopyButton label="Copiar gancho" text={post.hook} />
        </div>
        <p className="mt-4 text-[18px] leading-8 text-white">{post.hook}</p>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
          Roteiro por cena
        </h2>
        <div className="mt-5 space-y-4">
          {post.scenes.map((scene, index) => (
            <div
              key={scene.id}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white">
                  Cena {index + 1}
                </span>
                {scene.duration ? (
                  <span className="text-sm text-[#9f95b7]">{scene.duration}</span>
                ) : null}
                {scene.speaker ? (
                  <span className="text-sm text-[#9f95b7]">{scene.speaker}</span>
                ) : null}
              </div>

              <div className="mt-4 grid min-w-0 gap-4 xl:grid-cols-2">
                {scene.speech ? (
                  <MetaCard label="Fala exata" value={scene.speech} />
                ) : null}
                {scene.onScreenText ? (
                  <MetaCard label="Texto na tela" value={scene.onScreenText} />
                ) : null}
                {scene.visual ? (
                  <MetaCard label="Imagem ou tela a mostrar" value={scene.visual} />
                ) : null}
                {scene.recordingDirection ? (
                  <MetaCard
                    label="Instrução de gravação"
                    value={scene.recordingDirection}
                  />
                ) : null}
                {scene.editingDirection ? (
                  <MetaCard
                    label="Observação de edição"
                    value={scene.editingDirection}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
          Capturas do Framja
        </h2>
        <div className="mt-5 grid min-w-0 gap-4 xl:grid-cols-2">
          {post.captures.map((capture) => (
            <div
              key={capture.id}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{capture.screen}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#d9d3e8]">
                {capture.instruction}
              </p>
              <div className="mt-4 space-y-4">
                <MetaCard
                  label="O que deve aparecer"
                  value={capture.shouldAppear.join(" • ")}
                />
                <MetaCard
                  label="O que deve ser ocultado"
                  value={capture.shouldHide.join(" • ")}
                />
                <MetaCard
                  label="Dados fictícios necessários"
                  value={capture.mockData.join(" • ")}
                />
                <MetaCard label="Enquadramento" value={capture.framing} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
            Legenda
          </h2>
          <div className="flex flex-wrap gap-3">
            <CopyButton label="Copiar legenda" text={post.caption} />
            <CopyButton label="Copiar CTA" text={post.cta} />
          </div>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
          <p className="whitespace-pre-line text-[16px] leading-8 text-white">
            {post.caption}
          </p>
        </div>

        <div className="mt-5 grid min-w-0 gap-4 xl:grid-cols-2">
          <MetaCard label="CTA" value={post.cta} />
          <MetaCard label="Hashtags" value={post.hashtags.join(" ")} />
        </div>
      </Card>

      <div className="grid min-w-0 gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
            Checklist
          </h2>
          <div className="mt-5 space-y-3">
            {post.checklist.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] leading-7 text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
            Observações
          </h2>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-[#9f95b7]">Materiais necessários</p>
              <div className="mt-3 space-y-3">
                {post.materials.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] leading-7 text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-[#9f95b7]">Notas de produção</p>
              <div className="mt-3 space-y-3">
                {(post.notes ?? [
                  "Sem observações adicionais neste conteúdo."
                ]).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] leading-7 text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/conteudos"
          className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
        >
          Voltar para conteúdos
        </Link>
        <Button
          type="button"
          variant="primary"
          onClick={() => setPublicationStatus(post.id, "recorded")}
        >
          Marcar como gravado
        </Button>
      </div>
    </div>
  );
}
