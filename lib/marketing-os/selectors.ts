import { categories } from "@/data/categories";
import { features } from "@/data/features";
import { posts } from "@/data/posts";
import {
  difficultyLabels,
  formatLabels,
  productStatusLabels,
  publicationStatuses,
  publicationStatusLabels
} from "@/data/statuses";
import type {
  FramjaFeature,
  MarketingPost,
  ProductStatus,
  PublicationStatus
} from "@/lib/marketing-os/types";

export const APP_TIME_ZONE = "America/Sao_Paulo";
export const EDITORIAL_START_DATE = "2026-07-20";
export const SIDEBAR_COLLAPSED_KEY = "framja-marketing-os:sidebar-collapsed";
export const POST_STATUS_KEY = "framja-marketing-os:publication-statuses";
export const DEFERRED_POST_KEY = "framja-marketing-os:deferred-until";

const msPerDay = 24 * 60 * 60 * 1000;

function toLocalDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: APP_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  const [year, month, day] = formatter.format(date).split("-");
  return {
    year: Number(year),
    month: Number(month),
    day: Number(day)
  };
}

function makeUtcDate(dateString: string) {
  return new Date(`${dateString}T00:00:00.000Z`);
}

function makeDisplayDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
}

export function getTodayIsoDate() {
  const parts = toLocalDateParts(new Date());
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

export function getDateFromDay(day: number) {
  const base = makeUtcDate(EDITORIAL_START_DATE);
  const next = new Date(base.getTime() + (day - 1) * msPerDay);
  return next.toISOString().slice(0, 10);
}

export function addDaysToIsoDate(dateString: string, days: number) {
  const base = makeUtcDate(dateString);
  const next = new Date(base.getTime() + days * msPerDay);
  return next.toISOString().slice(0, 10);
}

export function formatLongDate(dateString: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: APP_TIME_ZONE,
    weekday: "long",
    day: "2-digit",
    month: "long"
  }).format(makeDisplayDate(dateString));
}

export function formatShortDate(dateString: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: APP_TIME_ZONE,
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  }).format(makeDisplayDate(dateString));
}

export function getGreeting() {
  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: APP_TIME_ZONE,
    hour: "numeric",
    hour12: false
  });
  const hour = Number(hourFormatter.format(new Date()));

  if (hour < 12) {
    return "Bom dia";
  }

  if (hour < 18) {
    return "Boa tarde";
  }

  return "Boa noite";
}

export function getFormatLabel(format: MarketingPost["format"]) {
  return formatLabels[format];
}

export function getDifficultyLabel(level: MarketingPost["difficulty"]) {
  return difficultyLabels[level];
}

export function getPublicationStatusLabel(status: PublicationStatus) {
  return publicationStatusLabels[status];
}

export function getProductStatusLabel(status: ProductStatus) {
  return productStatusLabels[status];
}

export function getMergedStatus(
  post: MarketingPost,
  overrides: Partial<Record<string, PublicationStatus>>
) {
  return overrides[post.id] ?? post.publicationStatus;
}

export function getEffectiveDueDate(
  post: MarketingPost,
  deferredUntil: Partial<Record<string, string>>
) {
  const editorialDate = getDateFromDay(post.day);
  const deferredDate = deferredUntil[post.id];

  if (!deferredDate) {
    return editorialDate;
  }

  return deferredDate > editorialDate ? deferredDate : editorialDate;
}

export function getCurrentDayNumber() {
  const today = makeUtcDate(getTodayIsoDate()).getTime();
  const start = makeUtcDate(EDITORIAL_START_DATE).getTime();
  const difference = Math.floor((today - start) / msPerDay) + 1;

  if (difference < 1) {
    return 1;
  }

  if (difference > posts.length) {
    return posts.length;
  }

  return difference;
}

export function getTodayQueue(
  statusOverrides: Partial<Record<string, PublicationStatus>>,
  deferredUntil: Partial<Record<string, string>>
) {
  const today = getTodayIsoDate();

  const queue = posts
    .map((post) => ({
      post,
      publicationStatus: getMergedStatus(post, statusOverrides),
      effectiveDueDate: getEffectiveDueDate(post, deferredUntil)
    }))
    .filter(({ publicationStatus }) =>
      publicationStatus === "planned" || publicationStatus === "ready"
    )
    .sort((left, right) => {
      if (left.effectiveDueDate === right.effectiveDueDate) {
        return left.post.day - right.post.day;
      }

      return left.effectiveDueDate.localeCompare(right.effectiveDueDate);
    });

  const currentIndex = queue.findIndex(
    (entry) => entry.effectiveDueDate <= today
  );

  if (currentIndex >= 0) {
    return {
      current: queue[currentIndex],
      next: queue[currentIndex + 1],
      queue
    };
  }

  return {
    current: queue[0],
    next: queue[1],
    queue
  };
}

export function getWeekGroups() {
  const groups = [];
  const weekSize = 7;

  for (let weekIndex = 0; weekIndex < posts.length; weekIndex += weekSize) {
    const currentWeek = Math.floor(weekIndex / weekSize) + 1;

    groups.push({
      id: `week-${currentWeek}`,
      label: `Semana ${currentWeek}`,
      posts: posts.slice(weekIndex, weekIndex + weekSize)
    });
  }

  return groups;
}

export function getFeatureById(featureId?: string) {
  return features.find((feature) => feature.id === featureId);
}

export function getCategoryById(categoryId: string) {
  return categories.find((category) => category.id === categoryId);
}

export function getContentBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPostsByFeature(featureId: string) {
  return posts.filter((post) => post.featureId === featureId);
}

export function getFeatureLabel(post: MarketingPost) {
  const feature = getFeatureById(post.featureId);
  return feature?.name ?? post.featureLabel ?? "Não se aplica";
}

export function getMetrics(
  statusOverrides: Partial<Record<string, PublicationStatus>>,
  deferredUntil: Partial<Record<string, string>>
) {
  const today = getTodayIsoDate();
  const weekGroups = getWeekGroups();
  const currentWeekIndex = Math.min(
    Math.floor((getCurrentDayNumber() - 1) / 7),
    Math.max(weekGroups.length - 1, 0)
  );
  const weekPosts = weekGroups[currentWeekIndex]?.posts ?? [];
  const publishedCount = posts.filter(
    (post) => getMergedStatus(post, statusOverrides) === "published"
  ).length;
  const pendingCount = posts.filter(
    (post) => getMergedStatus(post, statusOverrides) !== "published"
  ).length;
  const weekTime = weekPosts
    .filter((post) => getMergedStatus(post, statusOverrides) !== "published")
    .reduce((total, post) => total + post.productionTime, 0);
  const overdueCount = posts.filter((post) => {
    const status = getMergedStatus(post, statusOverrides);
    if (status !== "planned" && status !== "ready") {
      return false;
    }

    return getEffectiveDueDate(post, deferredUntil) < today;
  }).length;

  return {
    weekTime,
    pendingCount,
    publishedCount,
    overdueCount
  };
}

export function getPublicationOptions() {
  return publicationStatuses;
}

export function getVisibleProductStatus(feature?: FramjaFeature) {
  if (!feature) {
    return undefined;
  }

  return getProductStatusLabel(feature.status);
}

export function getTotalProductionTime() {
  return posts.reduce((total, post) => total + post.productionTime, 0);
}
