"use client";

import { MarketingIcon } from "@/lib/marketing-os/icons";
import type { FramjaSystemFunctionality } from "@/lib/marketing-os/types";
import { ProductStatusPill } from "@/components/marketing-os/status-pill";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function FunctionalityCard({
  functionality
}: {
  functionality: FramjaSystemFunctionality;
}) {
  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
              <MarketingIcon name={functionality.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[22px] font-semibold tracking-[-0.05em] text-white sm:text-[24px]">
                {functionality.name}
              </h2>
              <p className="mt-1 text-sm text-[#9f95b7]">{functionality.menuPath}</p>
            </div>
          </div>

          <p className="mt-4 text-[15px] leading-7 text-[#d9d3e8] sm:text-[16px] sm:leading-8">
            {functionality.description}
          </p>
        </div>

        <ProductStatusPill status={functionality.status} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant="neutral">Rota real: {functionality.route}</Badge>
      </div>

      <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
        <p className="text-sm text-[#9f95b7]">O que existe hoje</p>
        <div className="mt-3 space-y-3">
          {functionality.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] leading-7 text-white"
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
