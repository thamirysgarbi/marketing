import type {
  DifficultyLevel,
  MarketingFormat,
  ProductStatus,
  PublicationStatus
} from "@/lib/marketing-os/types";

export const formatLabels: Record<MarketingFormat, string> = {
  reels: "Reels",
  carousel: "Carrossel",
  stories: "Stories",
  "behind-the-scenes": "Bastidores"
};

export const difficultyLabels: Record<DifficultyLevel, string> = {
  low: "Baixa",
  medium: "Média",
  high: "Alta"
};

export const publicationStatusLabels: Record<PublicationStatus, string> = {
  planned: "Planejado",
  ready: "Pronto para gravar",
  recorded: "Gravado",
  editing: "Em edição",
  published: "Publicado"
};

export const productStatusLabels: Record<ProductStatus, string> = {
  available: "Disponível",
  "in-development": "Em desenvolvimento",
  future: "Visão futura"
};

export const publicationStatuses: Array<{
  value: PublicationStatus;
  label: string;
}> = [
  { value: "planned", label: "Planejado" },
  { value: "ready", label: "Pronto para gravar" },
  { value: "recorded", label: "Gravado" },
  { value: "editing", label: "Em edição" },
  { value: "published", label: "Publicado" }
];
