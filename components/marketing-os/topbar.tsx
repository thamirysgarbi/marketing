"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatLongDate } from "@/lib/marketing-os/selectors";

export function Topbar({
  currentDate,
  onMenuClick,
  onLogout
}: {
  currentDate: string;
  onMenuClick: () => void;
  onLogout: () => void;
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-white/8 bg-[rgba(8,8,12,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-3 px-3 py-3 sm:px-6 sm:py-4 xl:px-8">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="min-[900px]:hidden"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          <Menu className="h-4 w-4" />
        </Button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Framja Marketing OS</p>
          <p className="mt-1 truncate text-xs text-[#9f95b7] sm:text-sm">
            {formatLongDate(currentDate)}
          </p>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="shrink-0"
          onClick={onLogout}
        >
          Sair
        </Button>
      </div>
    </div>
  );
}
