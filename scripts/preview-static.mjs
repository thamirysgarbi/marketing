import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const host = process.env.HOST ?? "localhost";
const port = Number(process.env.PORT ?? "3000");
const rootDir = path.resolve(process.cwd(), "out");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8"
};

function resolveCandidates(urlPath) {
  const normalizedPath = path.normalize(
    decodeURIComponent(urlPath).replace(/^\/+/, "")
  );
  const resolvedPath = path.resolve(rootDir, normalizedPath);

  if (!resolvedPath.startsWith(rootDir)) {
    return [];
  }

  if (urlPath === "/") {
    return [path.join(rootDir, "index.html")];
  }

  if (path.extname(resolvedPath)) {
    return [resolvedPath];
  }

  return [
    resolvedPath,
    `${resolvedPath}.html`,
    path.join(resolvedPath, "index.html")
  ];
}

async function findFile(urlPath) {
  const candidates = resolveCandidates(urlPath);

  for (const candidate of candidates) {
    if (!existsSync(candidate)) {
      continue;
    }

    const candidateStats = await stat(candidate);

    if (candidateStats.isFile()) {
      return {
        filePath: candidate,
        statusCode: 200
      };
    }

    if (candidateStats.isDirectory()) {
      const indexPath = path.join(candidate, "index.html");

      if (existsSync(indexPath)) {
        return {
          filePath: indexPath,
          statusCode: 200
        };
      }
    }
  }

  const notFoundPath = path.join(rootDir, "404.html");

  if (existsSync(notFoundPath)) {
    return {
      filePath: notFoundPath,
      statusCode: 404
    };
  }

  return null;
}

const server = createServer(async (request, response) => {
  const requestPath = request.url ? new URL(request.url, `http://${host}`).pathname : "/";

  try {
    const match = await findFile(requestPath);

    if (!match) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const extension = path.extname(match.filePath).toLowerCase();
    const contentType =
      mimeTypes[extension] ?? "application/octet-stream";

    response.writeHead(match.statusCode, {
      "Cache-Control": "no-store",
      "Content-Type": contentType
    });

    createReadStream(match.filePath).pipe(response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Internal preview server error");
    console.error(error);
  }
});

server.listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}`);
});
