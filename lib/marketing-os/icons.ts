import {
  ArrowRight,
  Blocks,
  CalendarDays,
  CalendarRange,
  CheckCheck,
  Clapperboard,
  Clock3,
  CreditCard,
  Eye,
  LayoutDashboard,
  Library,
  ListChecks,
  ReceiptText,
  Smartphone,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { createElement } from "react";

export const iconMap = {
  ArrowRight,
  Blocks,
  CalendarDays,
  CalendarRange,
  CheckCheck,
  Clapperboard,
  Clock3,
  CreditCard,
  Eye,
  LayoutDashboard,
  Library,
  ListChecks,
  ReceiptText,
  Smartphone,
  Sparkles
} as const satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconMap;

export function MarketingIcon({
  name,
  className
}: {
  name: IconKey;
  className?: string;
}) {
  const Icon = iconMap[name];
  return createElement(Icon, { className });
}
