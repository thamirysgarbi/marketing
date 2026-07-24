const repository = process.env.GITHUB_REPOSITORY ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const repositoryName = repository.split("/")[1] ?? "";
const isProjectPagesRepository =
  repositoryName.length > 0 && !repositoryName.endsWith(".github.io");
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && isProjectPagesRepository
    ? `/${repositoryName}`
    : "";
const basePath = process.env.BASE_PATH ?? githubPagesBasePath;
const siteOrigin =
  process.env.SITE_ORIGIN ??
  (process.env.GITHUB_ACTIONS === "true" && repositoryOwner
    ? `https://${repositoryOwner}.github.io`
    : "https://framja.app.br");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin
  }
};

export default nextConfig;
