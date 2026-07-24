import { RoadmapItemCard } from "@/components/marketing-os/roadmap-item-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { FramjaRoadmapRelease } from "@/lib/marketing-os/types";

const statusMeta = {
  next: {
    label: "Próxima versão",
    variant: "purple"
  },
  planned: {
    label: "Planejado",
    variant: "neutral"
  }
} as const;

export function RoadmapReleaseCard({
  release
}: {
  release: FramjaRoadmapRelease;
}) {
  const meta = statusMeta[release.status];

  return (
    <Card className="overflow-hidden p-4 sm:p-5 md:p-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(130,10,209,0.18),transparent_52%)]" />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap gap-2">
              <Badge variant={meta.variant}>{meta.label}</Badge>
              <Badge variant="neutral">Versão {release.version}</Badge>
            </div>

            <h2 className="mt-4 text-[24px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[30px]">
              {release.title}
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#d7d0e8] sm:text-[16px] sm:leading-8">
              {release.summary}
            </p>
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {release.highlights.map((highlight) => (
            <Badge key={highlight} variant="neutral">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {release.sections.map((section) => (
          <div
            key={section.id}
            className="rounded-[26px] border border-white/8 bg-white/[0.03] p-4 sm:p-5"
          >
            <p className="text-sm font-medium text-[#c4b1f6]">{section.title}</p>
            <p className="mt-2 text-[14px] leading-7 text-[#a89fbc] sm:text-[15px]">
              {section.description}
            </p>

            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <RoadmapItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
