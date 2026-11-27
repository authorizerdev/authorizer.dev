// Generates public/sitemap.xml before `next build`.
//
// Routes come from pages/ (static pages) plus constants/alternatives.json
// (one /alternatives/<slug> page each). <lastmod> is the last git commit that
// touched the page or its content source, so it moves only when the page
// changes; without git history (e.g. a shallow CI clone) it falls back to the
// build date.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://authorizer.dev").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

function lastmod(files) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || today;
  } catch {
    return today;
  }
}

const routes = [];
for (const f of readdirSync("pages")) {
  if (!/\.(tsx|ts|jsx|js)$/.test(f) || f.startsWith("_") || f.startsWith("[")) continue;
  const name = f.replace(/\.(tsx|ts|jsx|js)$/, "");
  const path = name === "index" ? "/" : `/${name}`;
  const sources = [join("pages", f)];
  if (path === "/") sources.push("components", "constants");
  else sources.push("constants/landing.ts", "components/LandingPage.tsx");
  routes.push({ path, sources });
}

const altJson = "constants/alternatives.json";
if (existsSync(altJson)) {
  routes.push({ path: "/alternatives", sources: ["pages/alternatives", altJson] });
  for (const { slug } of JSON.parse(readFileSync(altJson, "utf8"))) {
    routes.push({ path: `/alternatives/${slug}`, sources: ["pages/alternatives", altJson] });
  }
}

const urls = routes
  .sort((a, b) => (a.path === "/" ? -1 : b.path === "/" ? 1 : a.path.localeCompare(b.path)))
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${lastmod(r.sources)}</lastmod>
    <priority>${r.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);
console.log(`sitemap: ${routes.length} urls`);
