import type { MarketingCategory } from "@/lib/marketing-os/types";

export const categories: MarketingCategory[] = [
  {
    id: "evolucao",
    name: "Evolução do produto",
    description: "Conteúdos para reposicionar o Framja e mostrar o que mudou.",
    icon: "Sparkles"
  },
  {
    id: "clareza",
    name: "Clareza de gestão",
    description: "Peças que ajudam a explicar por que certas decisões pedem mais leitura do negócio.",
    icon: "Eye"
  },
  {
    id: "onboarding",
    name: "Começo mais simples",
    description: "Conteúdos sobre o início da jornada e sobre o Passo a Passo.",
    icon: "ListChecks"
  },
  {
    id: "financeiro",
    name: "Leitura financeira",
    description: "Conteúdos que conectam operação, caixa e clareza financeira.",
    icon: "ReceiptText"
  },
  {
    id: "bastidores",
    name: "Bastidores",
    description: "Peças que mostram como o produto e o conteúdo são construídos.",
    icon: "Clapperboard"
  },
  {
    id: "futuro",
    name: "Futuro do produto",
    description: "Conteúdos que apresentam a direção do Framja sem prometer o que ainda não foi lançado.",
    icon: "CalendarRange"
  }
];
