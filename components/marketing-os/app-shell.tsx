"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "@/components/marketing-os/sidebar";
import { Topbar } from "@/components/marketing-os/topbar";
import { MarketingOsProvider, useMarketingOs } from "@/components/marketing-os/provider";
import { cn } from "@/lib/cn";
import { getTodayIsoDate } from "@/lib/marketing-os/selectors";

function AppShellFrame({
  children
}: {
  children: React.ReactNode;
}) {
  const {
    drawerOpen,
    setDrawerOpen,
    sidebarCollapsed,
    toggleDrawer,
    toggleSidebarCollapsed
  } = useMarketingOs();

  return (
    <div className="min-h-screen bg-[#07070b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(130,10,209,0.13),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(72,72,84,0.18),transparent_22%)]" />
      <div className="relative flex min-h-screen">
        <aside
          className={cn(
            "hidden min-[900px]:block min-[900px]:border-r min-[900px]:border-white/8 min-[900px]:bg-white/[0.025] min-[900px]:transition-[width] min-[900px]:duration-200",
            sidebarCollapsed ? "min-[900px]:w-[84px]" : "min-[900px]:w-[236px]"
          )}
        >
          <div className="sticky top-0 h-screen overflow-y-auto">
            <Sidebar
              collapsed={sidebarCollapsed}
              onToggleCollapse={toggleSidebarCollapsed}
            />
          </div>
        </aside>

        <AnimatePresence>
          {drawerOpen ? (
            <>
              <motion.button
                type="button"
                className="fixed inset-0 z-40 bg-black/65 min-[900px]:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
                aria-label="Fechar menu"
              />
              <motion.aside
                className="fixed inset-y-0 left-0 z-50 w-[240px] border-r border-white/8 bg-[#0b0b10] min-[900px]:hidden"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Sidebar
                  collapsed={false}
                  mobile
                  onNavigate={() => setDrawerOpen(false)}
                />
              </motion.aside>
            </>
          ) : null}
        </AnimatePresence>

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar currentDate={getTodayIsoDate()} onMenuClick={toggleDrawer} />
          <main className="min-w-0 flex-1">
            <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 xl:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export function AppShell({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingOsProvider>
      <AppShellFrame>{children}</AppShellFrame>
    </MarketingOsProvider>
  );
}
