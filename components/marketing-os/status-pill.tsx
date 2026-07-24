import { Badge } from "@/components/ui/badge";
import {
  getDifficultyLabel,
  getProductStatusLabel,
  getPublicationStatusLabel
} from "@/lib/marketing-os/selectors";
import type {
  DifficultyLevel,
  ProductStatus,
  PublicationStatus
} from "@/lib/marketing-os/types";

export function PublicationStatusPill({
  status
}: {
  status: PublicationStatus;
}) {
  const variant =
    status === "published"
      ? "success"
      : status === "ready" || status === "recorded"
        ? "purple"
        : status === "editing"
          ? "warning"
          : "neutral";

  return <Badge variant={variant}>{getPublicationStatusLabel(status)}</Badge>;
}

export function ProductStatusPill({
  status
}: {
  status: ProductStatus;
}) {
  const variant = status === "available" ? "success" : status === "future" ? "neutral" : "warning";

  return <Badge variant={variant}>{getProductStatusLabel(status)}</Badge>;
}

export function DifficultyPill({
  difficulty
}: {
  difficulty: DifficultyLevel;
}) {
  const variant =
    difficulty === "high" ? "warning" : difficulty === "medium" ? "purple" : "neutral";

  return <Badge variant={variant}>{getDifficultyLabel(difficulty)}</Badge>;
}
