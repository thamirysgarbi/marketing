import {
  ArrowRight,
  Bell,
  Blocks,
  Boxes,
  CalendarDays,
  CalendarRange,
  CheckCheck,
  Clapperboard,
  Clock3,
  CreditCard,
  Eye,
  Globe,
  LayoutDashboard,
  Library,
  ListChecks,
  Package,
  ReceiptText,
  Scissors,
  Smartphone,
  Sparkles,
  Settings2,
  UserRound,
  Users,
  Wallet,
  type LucideIcon
} from "lucide-react";
import { createElement } from "react";

export const iconMap = {
  ArrowRight,
  Bell,
  Blocks,
  Boxes,
  CalendarDays,
  CalendarRange,
  CheckCheck,
  Clapperboard,
  Clock3,
  CreditCard,
  Eye,
  Globe,
  LayoutDashboard,
  Library,
  ListChecks,
  Package,
  ReceiptText,
  Scissors,
  Smartphone,
  Sparkles,
  Settings2,
  UserRound,
  Users,
  Wallet
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
