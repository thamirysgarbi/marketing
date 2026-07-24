"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import type { PublicationStatus } from "@/lib/marketing-os/types";
import {
  DEFERRED_POST_KEY,
  POST_STATUS_KEY,
  SIDEBAR_COLLAPSED_KEY,
  addDaysToIsoDate,
  getTodayIsoDate
} from "@/lib/marketing-os/selectors";

type MarketingOsContextValue = {
  isMobile: boolean;
  drawerOpen: boolean;
  sidebarCollapsed: boolean;
  publicationStatuses: Partial<Record<string, PublicationStatus>>;
  deferredUntil: Partial<Record<string, string>>;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
  toggleSidebarCollapsed: () => void;
  setPublicationStatus: (postId: string, status: PublicationStatus) => void;
  markAsRecorded: (postId: string) => void;
  skipToTomorrow: (postId: string) => void;
};

const MarketingOsContext = createContext<MarketingOsContextValue | null>(null);

function readJsonStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  const value = window.localStorage.getItem(key);

  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function readBooleanStorage(key: string, fallback: boolean) {
  if (typeof window === "undefined") {
    return fallback;
  }

  const value = window.localStorage.getItem(key);

  if (value === null) {
    return fallback;
  }

  return value === "true";
}

export function MarketingOsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() =>
    readBooleanStorage(SIDEBAR_COLLAPSED_KEY, false)
  );
  const [publicationStatuses, setPublicationStatuses] = useState<
    Partial<Record<string, PublicationStatus>>
  >(() => readJsonStorage(POST_STATUS_KEY, {}));
  const [deferredUntil, setDeferredUntil] = useState<
    Partial<Record<string, string>>
  >(() => readJsonStorage(DEFERRED_POST_KEY, {}));

  useEffect(() => {
    const media = window.matchMedia("(max-width: 899px)");

    const syncViewport = () => {
      setIsMobile(media.matches);

      if (media.matches) {
        setDrawerOpen(false);
      }
    };

    syncViewport();
    media.addEventListener("change", syncViewport);

    return () => {
      media.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      POST_STATUS_KEY,
      JSON.stringify(publicationStatuses)
    );
  }, [publicationStatuses]);

  useEffect(() => {
    window.localStorage.setItem(
      DEFERRED_POST_KEY,
      JSON.stringify(deferredUntil)
    );
  }, [deferredUntil]);

  useEffect(() => {
    window.localStorage.setItem(
      SIDEBAR_COLLAPSED_KEY,
      String(sidebarCollapsed)
    );
  }, [sidebarCollapsed]);

  const value = {
    isMobile,
    drawerOpen,
    sidebarCollapsed,
    publicationStatuses,
    deferredUntil,
    setDrawerOpen,
    toggleDrawer: () => {
      setDrawerOpen((current) => !current);
    },
    toggleSidebarCollapsed: () => {
      setSidebarCollapsed((current) => !current);
    },
    setPublicationStatus: (postId: string, status: PublicationStatus) => {
      setPublicationStatuses((current) => ({
        ...current,
        [postId]: status
      }));
    },
    markAsRecorded: (postId: string) => {
      setPublicationStatuses((current) => ({
        ...current,
        [postId]: "recorded"
      }));
    },
    skipToTomorrow: (postId: string) => {
      setDeferredUntil((current) => ({
        ...current,
        [postId]: addDaysToIsoDate(getTodayIsoDate(), 1)
      }));
    }
  };

  return (
    <MarketingOsContext.Provider value={value}>
      {children}
    </MarketingOsContext.Provider>
  );
}

export function useMarketingOs() {
  const context = useContext(MarketingOsContext);

  if (!context) {
    throw new Error("useMarketingOs must be used inside MarketingOsProvider");
  }

  return context;
}
