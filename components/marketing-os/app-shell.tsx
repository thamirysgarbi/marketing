"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoginScreen } from "@/components/marketing-os/login-screen";
import { Sidebar } from "@/components/marketing-os/sidebar";
import { Topbar } from "@/components/marketing-os/topbar";
import { MarketingOsProvider, useMarketingOs } from "@/components/marketing-os/provider";
import { cn } from "@/lib/cn";
import {
  ACCESS_CHANGED_EVENT,
  ACCESS_GRANTED_TOKEN,
  ACCESS_STORAGE_KEY,
  fixedAccessCredentials
} from "@/lib/marketing-os/access";
import { getTodayIsoDate } from "@/lib/marketing-os/selectors";

function AppShellFrame({
  children,
  onLogout
}: {
  children: React.ReactNode;
  onLogout: () => void;
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
                className="fixed inset-y-0 left-0 z-50 w-[min(86vw,320px)] border-r border-white/8 bg-[#0b0b10] min-[900px]:hidden"
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
          <Topbar
            currentDate={getTodayIsoDate()}
            onMenuClick={toggleDrawer}
            onSidebarOpen={toggleSidebarCollapsed}
            sidebarCollapsed={sidebarCollapsed}
            onLogout={onLogout}
          />
          <main className="min-w-0 flex-1">
            <div className="mx-auto w-full max-w-[1400px] px-3 py-4 sm:px-6 sm:py-6 xl:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function readStoredAccess() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(ACCESS_STORAGE_KEY) === ACCESS_GRANTED_TOKEN;
}

function subscribeToAccessChange(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const notify = () => onStoreChange();

  window.addEventListener("storage", notify);
  window.addEventListener(ACCESS_CHANGED_EVENT, notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(ACCESS_CHANGED_EVENT, notify);
  };
}

export function AppShell({
  children
}: {
  children: React.ReactNode;
}) {
  const authenticated = useSyncExternalStore(
    subscribeToAccessChange,
    readStoredAccess,
    () => false
  );

  const handleAuthenticate = ({
    username,
    password
  }: {
    username: string;
    password: string;
  }) => {
    const granted =
      username === fixedAccessCredentials.username &&
      password === fixedAccessCredentials.password;

    if (!granted) {
      return false;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(ACCESS_STORAGE_KEY, ACCESS_GRANTED_TOKEN);
      window.dispatchEvent(new Event(ACCESS_CHANGED_EVENT));
    }

    return true;
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(ACCESS_STORAGE_KEY);
      window.dispatchEvent(new Event(ACCESS_CHANGED_EVENT));
    }
  };

  if (!authenticated) {
    return <LoginScreen onAuthenticate={handleAuthenticate} />;
  }

  return (
    <MarketingOsProvider>
      <AppShellFrame onLogout={handleLogout}>{children}</AppShellFrame>
    </MarketingOsProvider>
  );
}
