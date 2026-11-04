import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const ssrEntry = path.join(projectRoot, "dist-ssr", "entry-server.js");

const routes = [
  "/",
  "/services",
  "/ai-solutions",
  "/ai-development",
  "/ai-agents",
  "/about-us",
  "/contact",
  "/quote",
  "/case-studies",
  "/case-studies/bmg",
  "/case-studies/unpod",
  "/case-studies/maxwell",
  "/case-studies/fearless",
  "/case-studies/nestle",
  "/case-studies/cadbury",
  "/case-studies/vespa",
  "/case-studies/expertify",
  "/case-studies/vintagewatcholic",
  "/case-studies/itsybitsy",
  "/case-studies/pyne",
  "/404",
];

async function prerender() {
  console.log(`Starting static pre-rendering for ${routes.length} routes...`);

  if (!fs.existsSync(ssrEntry)) {
    console.error("SSR entry not found:", ssrEntry);
    process.exit(1);
  }

  const { render } = await import(ssrEntry);
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error("Client build index.html not found:", templatePath);
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf8");
  const results = [];

  for (const url of routes) {
    const is404 = url === "/404";
    const res = render(is404 ? "/non-existent-route-404-trigger" : url);
    let appHtml = res.appHtml;

    // Extract hoisted head elements from SSR output
    const titleMatch = appHtml.match(/<title>[\s\S]*?<\/title>/i);
    const metaMatches = appHtml.match(/<meta\s+[^>]+>/gi) || [];
    const canonicalMatch = appHtml.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i);
    const preloadMatches = appHtml.match(/<link\s+[^>]*rel=["']preload["'][^>]*>/gi) || [];
    const schemaMatches = appHtml.match(/<script type=["']application\/ld\+json["']>[\s\S]*?<\/script>/gi) || [];

    // Strip extracted head tags and preloads from the body DOM
    let bodyDom = appHtml;
    if (titleMatch) bodyDom = bodyDom.replace(titleMatch[0], "");
    if (canonicalMatch) bodyDom = bodyDom.replace(canonicalMatch[0], "");
    for (const m of metaMatches) bodyDom = bodyDom.replace(m, "");
    for (const p of preloadMatches) bodyDom = bodyDom.replace(p, "");
    for (const s of schemaMatches) bodyDom = bodyDom.replace(s, "");

    // Create page-specific HTML from template
    let pageHtml = rawTemplate;

    if (is404) {
      // 404 specific head tags
      pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, "<title>404 - Page Not Found | DevOps Minders</title>");
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']description["'][^>]*>/i,
        '<meta name="description" content="The page you are looking for does not exist or has been moved. Explore DevOps Minders IT services, cloud solutions, and software engineering." />'
      );
      // Remove canonical tag completely from 404
      pageHtml = pageHtml.replace(/\s*<link\s+rel=["']canonical["'][^>]*>/i, "");
      // Replace index robots tag with strict noindex, follow
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']robots["'][^>]*>/i,
        '<meta name="robots" content="noindex, follow" />'
      );
      // Clean OG tags for 404
      pageHtml = pageHtml.replace(
        /<meta\s+property=["']og:title["'][^>]*>/i,
        '<meta property="og:title" content="404 - Page Not Found | DevOps Minders" />'
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property=["']og:description["'][^>]*>/i,
        '<meta property="og:description" content="The page you are looking for does not exist or has been moved." />'
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']twitter:title["'][^>]*>/i,
        '<meta name="twitter:title" content="404 - Page Not Found | DevOps Minders" />'
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']twitter:description["'][^>]*>/i,
        '<meta name="twitter:description" content="The page you are looking for does not exist or has been moved." />'
      );
    } else {
      // Standard pages: Replace Title
      if (titleMatch) {
        pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, titleMatch[0]);
      }

      // Replace Canonical
      if (canonicalMatch) {
        pageHtml = pageHtml.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalMatch[0]);
      }

      // Replace Description
      const pageDesc = metaMatches.find((m) => /name=["']description["']/i.test(m));
      if (pageDesc) {
        pageHtml = pageHtml.replace(/<meta\s+name=["']description["'][^>]*>/i, pageDesc);
      }

      // Replace Keywords
      const pageKeywords = metaMatches.find((m) => /name=["']keywords["']/i.test(m));
      if (pageKeywords) {
        pageHtml = pageHtml.replace(/<meta\s+name=["']keywords["'][^>]*>/i, pageKeywords);
      }

      // Replace Open Graph Tags
      const ogTitle = metaMatches.find((m) => /property=["']og:title["']/i.test(m));
      if (ogTitle) pageHtml = pageHtml.replace(/<meta\s+property=["']og:title["'][^>]*>/i, ogTitle);

      const ogDesc = metaMatches.find((m) => /property=["']og:description["']/i.test(m));
      if (ogDesc) pageHtml = pageHtml.replace(/<meta\s+property=["']og:description["'][^>]*>/i, ogDesc);

      const ogUrl = metaMatches.find((m) => /property=["']og:url["']/i.test(m));
      if (ogUrl) pageHtml = pageHtml.replace(/<meta\s+property=["']og:url["'][^>]*>/i, ogUrl);

      const ogImage = metaMatches.find((m) => /property=["']og:image["']/i.test(m));
      if (ogImage) pageHtml = pageHtml.replace(/<meta\s+property=["']og:image["'][^>]*>/i, ogImage);

      // Replace Twitter Tags
      const twTitle = metaMatches.find((m) => /name=["']twitter:title["']/i.test(m));
      if (twTitle) pageHtml = pageHtml.replace(/<meta\s+name=["']twitter:title["'][^>]*>/i, twTitle);

      const twDesc = metaMatches.find((m) => /name=["']twitter:description["']/i.test(m));
      if (twDesc) pageHtml = pageHtml.replace(/<meta\s+name=["']twitter:description["'][^>]*>/i, twDesc);

      const twImage = metaMatches.find((m) => /name=["']twitter:image["']/i.test(m));
      if (twImage) pageHtml = pageHtml.replace(/<meta\s+name=["']twitter:image["'][^>]*>/i, twImage);

      // Inject route-specific Schemas before </head>
      if (schemaMatches.length > 0) {
        const schemasBlock = schemaMatches.join("\n    ");
        pageHtml = pageHtml.replace("</head>", `    ${schemasBlock}\n  </head>`);
      }
    }

    // Inject Preload links into <head> for performance
    if (preloadMatches.length > 0) {
      const preloadBlock = preloadMatches.join("\n    ");
      pageHtml = pageHtml.replace("</head>", `    ${preloadBlock}\n  </head>`);
    }

    // Inject pre-rendered body DOM into #root
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyDom.trim()}</div>`);

    // Write output files
    if (url === "/") {
      const outFilePath = path.join(distDir, "index.html");
      fs.writeFileSync(outFilePath, pageHtml, "utf8");
      const stat = fs.statSync(outFilePath);
      results.push({
        route: url,
        file: "index.html",
        size: `${(stat.size / 1024).toFixed(1)} KB`,
      });
    } else if (is404) {
      const outFilePath = path.join(distDir, "404.html");
      fs.writeFileSync(outFilePath, pageHtml, "utf8");
      const stat = fs.statSync(outFilePath);
      results.push({
        route: url,
        file: "404.html",
        size: `${(stat.size / 1024).toFixed(1)} KB`,
      });
    } else {
      // Directory style: dist/<route>/index.html
      const routeDir = path.join(distDir, url.slice(1));
      fs.mkdirSync(routeDir, { recursive: true });
      const dirFilePath = path.join(routeDir, "index.html");
      fs.writeFileSync(dirFilePath, pageHtml, "utf8");

      // File style: dist/<route>.html (e.g. dist/services.html)
      const directFilePath = path.join(distDir, `${url.slice(1)}.html`);
      const directDir = path.dirname(directFilePath);
      if (!fs.existsSync(directDir)) {
        fs.mkdirSync(directDir, { recursive: true });
      }
      fs.writeFileSync(directFilePath, pageHtml, "utf8");

      const stat = fs.statSync(dirFilePath);
      results.push({
        route: url,
        file: `${url.slice(1)}/index.html & .html`,
        size: `${(stat.size / 1024).toFixed(1)} KB`,
      });
    }
  }

  // Clean up temporary SSR build directory
  const distSsrDir = path.join(projectRoot, "dist-ssr");
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log("✓ Cleaned up temporary SSR build directory (dist-ssr)");
  }

  console.log("\n================ PRE-RENDER RESULTS ================");
  for (const r of results) {
    console.log(`✓ ${r.route.padEnd(30)} -> dist/${r.file.padEnd(32)} (${r.size})`);
  }
  console.log("====================================================");
  console.log(`Successfully generated ${results.length} pre-rendered static HTML routes!\n`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
