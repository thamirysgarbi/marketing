"use client";

import { LogOut, Menu, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatLongDate } from "@/lib/marketing-os/selectors";

export function Topbar({
  currentDate,
  onMenuClick,
  onSidebarOpen,
  sidebarCollapsed,
  onLogout
}: {
  currentDate: string;
  onMenuClick: () => void;
  onSidebarOpen: () => void;
  sidebarCollapsed: boolean;
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

        {sidebarCollapsed ? (
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="hidden min-[900px]:inline-flex"
            onClick={onSidebarOpen}
            aria-label="Abrir menu"
            title="Abrir menu"
          >
            <PanelLeftOpen className="h-4 w-4" />
          </Button>
        ) : null}

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Framja Marketing OS</p>
          <p className="mt-1 truncate text-xs text-[#9f95b7] sm:text-sm">
            {formatLongDate(currentDate)}
          </p>
        </div>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="shrink-0"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4" />
          Sair
        </Button>
      </div>
    </div>
  );
}
