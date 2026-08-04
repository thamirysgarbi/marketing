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
            ? "h-10 w-full rounded-xl border border-white/10 bg-[#17121f] px-3 text-sm text-[#f8f5ff] outline-none [color-scheme:dark] focus:border-[#8f57f5]/60"
            : "h-11 w-full rounded-2xl border border-white/10 bg-[#17121f] px-4 text-[15px] text-[#f8f5ff] outline-none [color-scheme:dark] focus:border-[#8f57f5]/60"
        }
      >
        {publicationStatuses.map((status) => (
          <option
            key={status.value}
            value={status.value}
            className="bg-[#17121f] text-[#f8f5ff]"
          >
            {status.label}
          </option>
        ))}
      </select>
    </label>
  );
}

