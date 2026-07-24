"use client";

import { publicationStatuses } from "@/data/statuses";
import type { PublicationStatus } from "@/lib/marketing-os/types";

export function StatusSelect({
  value,
  onChange,
  compact = false
}: {
  value: PublicationStatus;
  onChange: (value: PublicationStatus) => void;
  compact?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#9f95b7]">Status</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as PublicationStatus)}
        className={
          compact
            ? "h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none"
            : "h-11 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-[15px] text-white outline-none"
        }
      >
        {publicationStatuses.map((status) => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </select>
    </label>
  );
}
