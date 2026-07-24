import { Badge } from "@/components/ui/badge";
import type { FramjaRoadmapItem } from "@/lib/marketing-os/types";

const kindMeta = {
  feature: {
    label: "Nova funcionalidade",
    variant: "purple"
  },
  improvement: {
    label: "Melhoria",
    variant: "neutral"
  },
  bugfix: {
    label: "Correção",
    variant: "warning"
  },
  exclusive: {
    label: "Exclusivo Framja",
    variant: "success"
  }
} as const;

export function RoadmapItemCard({
  item
}: {
  item: FramjaRoadmapItem;
}) {
  const meta = kindMeta[item.kind];

  return (
    <div className="rounded-[22px] border border-white/8 bg-[#0f0b18] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="min-w-0 flex-1 text-[16px] font-semibold tracking-[-0.04em] text-white sm:text-[17px]">
          {item.title}
        </h3>
        <Badge variant={meta.variant}>{meta.label}</Badge>
      </div>

      <p className="mt-3 text-[14px] leading-7 text-[#d9d3e8] sm:text-[15px]">
        {item.summary}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.surfaces.map((surface) => (
          <Badge key={surface} variant="neutral" className="text-[11px]">
            {surface}
          </Badge>
        ))}
      </div>

      <div className="mt-4 space-y-2.5">
        {item.details.map((detail) => (
          <div
            key={detail}
            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[13px] leading-6 text-[#ebe5f8] sm:text-[14px]"
          >
            {detail}
          </div>
        ))}
      </div>

      {item.note ? (
        <p className="mt-3 text-xs leading-5 text-[#a99ec2]">{item.note}</p>
      ) : null}
    </div>
  );
}
