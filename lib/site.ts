const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://framja.app.br";

function trimTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function normalizeAssetPath(value: string) {
  return value.startsWith("/") ? value : `/${value}`;
}

export const publicBasePath = trimTrailingSlash(basePath);
export const publicSiteOrigin = trimTrailingSlash(siteOrigin);
export const publicSiteUrl = `${publicSiteOrigin}${publicBasePath}`;

export function getAssetPath(path: string) {
  return `${publicBasePath}${normalizeAssetPath(path)}`;
}
