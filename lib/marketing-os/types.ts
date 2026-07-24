import type { IconKey } from "@/lib/marketing-os/icons";

export type MarketingFormat =
  | "reels"
  | "carousel"
  | "stories"
  | "behind-the-scenes";

export type PublicationStatus =
  | "planned"
  | "ready"
  | "recorded"
  | "editing"
  | "published";

export type ProductStatus = "available" | "in-development" | "future";
export type DifficultyLevel = "low" | "medium" | "high";

export interface MarketingCategory {
  id: string;
  name: string;
  description: string;
  icon: IconKey;
}

export interface FramjaFeature {
  id: string;
  name: string;
  description: string;
  positioning: string;
  status: ProductStatus;
  icon: IconKey;
  steps?: string[];
}

export interface FramjaFunctionalityGroup {
  id: string;
  name: string;
  description: string;
}

export interface FramjaFunctionalitySection {
  id: string;
  title: string;
  items: string[];
}

export interface FramjaSystemFunctionality {
  id: string;
  groupId: string;
  name: string;
  menuPath: string;
  route: string;
  description: string;
  operationalRole?: string;
  status: ProductStatus;
  icon: IconKey;
  highlights: string[];
  sections?: FramjaFunctionalitySection[];
}

export interface MarketingScene {
  id: string;
  title?: string;
  duration?: string;
  speaker?: string;
  speech?: string;
  onScreenText?: string;
  visual?: string;
  recordingDirection?: string;
  editingDirection?: string;
}

export interface MarketingCapture {
  id: string;
  screen: string;
  instruction: string;
  hideSensitiveData: boolean;
  shouldAppear: string[];
  shouldHide: string[];
  mockData: string[];
  framing: string;
}

export interface MarketingPost {
  id: string;
  slug: string;
  day: number;
  title: string;
  format: MarketingFormat;
  objective: string;
  audience: string;
  summary: string;
  categoryId: string;
  featureId?: string;
  featureLabel?: string;
  publicationStatus: PublicationStatus;
  productStatus?: ProductStatus;
  duration: string;
  difficulty: DifficultyLevel;
  productionTime: number;
  responsible: string[];
  hook: string;
  scenes: MarketingScene[];
  captures: MarketingCapture[];
  materials: string[];
  caption: string;
  cta: string;
  hashtags: string[];
  checklist: string[];
  notes?: string[];
}

export interface AppNavigationItem {
  label: string;
  href: string;
  icon: IconKey;
}

export interface PersistedMarketingState {
  publicationStatuses: Partial<Record<string, PublicationStatus>>;
  deferredUntil: Partial<Record<string, string>>;
  sidebarCollapsed: boolean;
}
