import type { AppNavigationItem } from "@/lib/marketing-os/types";

export const appNavigation: AppNavigationItem[] = [
  { label: "Hoje", href: "/", icon: "LayoutDashboard" },
  { label: "Calendário", href: "/calendario", icon: "CalendarDays" },
  { label: "Conteúdos", href: "/conteudos", icon: "Library" },
  { label: "Funcionalidades", href: "/funcionalidades", icon: "Blocks" },
  { label: "Roadmap", href: "/roadmap", icon: "Sparkles" }
];
