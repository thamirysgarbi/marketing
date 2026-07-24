"use client";

import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/marketing-os/brand-mark";
import { Button } from "@/components/ui/button";
import { appNavigation } from "@/data/marketing-os/navigation";
import { cn } from "@/lib/cn";
import { MarketingIcon } from "@/lib/marketing-os/icons";

export function Sidebar({
  collapsed,
  mobile = false,
  onNavigate,
  onToggleCollapse
}: {
  collapsed: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
  onToggleCollapse?: () => void;
}) {
  const pathname = usePathname();
  const isCollapsed = mobile ? false : collapsed;

  return (
    <div className="flex h-full flex-col gap-5 p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-3">
        <BrandMark collapsed={isCollapsed} />
        {!mobile ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
            className="shrink-0"
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        ) : null}
      </div>

      <nav className="space-y-2">
        {appNavigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              title={item.label}
              className={cn(
                "flex min-w-0 items-center gap-3 rounded-2xl border px-3 py-3 transition duration-200",
                active
                  ? "border-white/12 bg-white/[0.07] text-white"
                  : "border-transparent text-[#a8a0ba] hover:border-white/8 hover:bg-white/[0.04] hover:text-white",
                isCollapsed && "justify-center px-0"
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border",
                  active
                    ? "border-[#8f57f5]/30 bg-[#8f57f5]/15 text-white"
                    : "border-white/8 bg-white/[0.03] text-[#c7c0d9]"
                )}
              >
                <MarketingIcon name={item.icon} className="h-4 w-4" />
              </span>
              {!isCollapsed ? (
                <span className="min-w-0 text-[15px] font-medium">
                  {item.label}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed ? (
        <div className="mt-auto rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
          <p className="text-sm font-medium text-white">Foco da ferramenta</p>
          <p className="mt-2 text-sm leading-6 text-[#9f95b7]">
            Abrir, entender o conteúdo do dia e enxergar a evolução do produto
            sem perder tempo procurando contexto.
          </p>
        </div>
      ) : null}
    </div>
  );
}
