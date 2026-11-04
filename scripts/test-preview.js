import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const PORT = 4173;

// Create static preview server implementing vercel.json logic
const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];

  // 1. Redirect rule: /about -> /about-us (301)
  if (urlPath === "/about") {
    res.writeHead(301, { Location: "/about-us" });
    return res.end();
  }

  // 2. Direct static file match
  let targetFile = path.join(distDir, urlPath);
  if (fs.existsSync(targetFile) && fs.statSync(targetFile).isFile()) {
    const ext = path.extname(targetFile);
    const contentType =
      ext === ".html"
        ? "text/html; charset=utf-8"
        : ext === ".xml"
        ? "application/xml; charset=utf-8"
        : ext === ".txt"
        ? "text/plain; charset=utf-8"
        : ext === ".css"
        ? "text/css"
        : ext === ".js"
        ? "application/javascript"
        : ext === ".png"
        ? "image/png"
        : ext === ".webp"
        ? "image/webp"
        : ext === ".ico"
        ? "image/x-icon"
        : ext === ".webmanifest"
        ? "application/manifest+json"
        : "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    return fs.createReadStream(targetFile).pipe(res);
  }

  // 3. Clean URL resolution: <urlPath>.html
  const directHtml = path.join(distDir, `${urlPath}.html`);
  if (fs.existsSync(directHtml) && fs.statSync(directHtml).isFile()) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return fs.createReadStream(directHtml).pipe(res);
  }

  // 4. Directory index resolution: <urlPath>/index.html
  const dirIndex = path.join(distDir, urlPath, "index.html");
  if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return fs.createReadStream(dirIndex).pipe(res);
  }

  // 5. 404 Fallback
  const notFoundFile = path.join(distDir, "404.html");
  if (fs.existsSync(notFoundFile)) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    return fs.createReadStream(notFoundFile).pipe(res);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(PORT, "127.0.0.1", async () => {
  console.log(`Preview server running at http://127.0.0.1:${PORT}`);

  const routesToTest = [
    // 20 sitemap routes
    { path: "/", expectedStatus: 200 },
    { path: "/services", expectedStatus: 200 },
    { path: "/ai-solutions", expectedStatus: 200 },
    { path: "/ai-development", expectedStatus: 200 },
    { path: "/ai-agents", expectedStatus: 200 },
    { path: "/about-us", expectedStatus: 200 },
    { path: "/contact", expectedStatus: 200 },
    { path: "/quote", expectedStatus: 200 },
    { path: "/case-studies", expectedStatus: 200 },
    { path: "/case-studies/bmg", expectedStatus: 200 },
    { path: "/case-studies/unpod", expectedStatus: 200 },
    { path: "/case-studies/maxwell", expectedStatus: 200 },
    { path: "/case-studies/fearless", expectedStatus: 200 },
    { path: "/case-studies/nestle", expectedStatus: 200 },
    { path: "/case-studies/cadbury", expectedStatus: 200 },
    { path: "/case-studies/vespa", expectedStatus: 200 },
    { path: "/case-studies/expertify", expectedStatus: 200 },
    { path: "/case-studies/vintagewatcholic", expectedStatus: 200 },
    { path: "/case-studies/itsybitsy", expectedStatus: 200 },
    { path: "/case-studies/pyne", expectedStatus: 200 },

    // Redirect test
    { path: "/about", expectedStatus: 301, expectedLocation: "/about-us" },

    // SEO files
    { path: "/sitemap.xml", expectedStatus: 200 },
    { path: "/robots.txt", expectedStatus: 200 },
    { path: "/assets/og-image.png", expectedStatus: 200 },

    // Favicon & Web Manifest Suite (Google Search Central & Browsers)
    { path: "/favicon-48x48.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/favicon-96x96.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/favicon-32x32.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/favicon-16x16.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/favicon.ico", expectedStatus: 200, expectedType: "image/x-icon" },
    { path: "/apple-touch-icon.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/android-chrome-192x192.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/android-chrome-512x512.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/favicon-dark-48x48.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/favicon-dark-32x32.png", expectedStatus: 200, expectedType: "image/png" },
    { path: "/logo.webp", expectedStatus: 200, expectedType: "image/webp" },
    { path: "/site.webmanifest", expectedStatus: 200, expectedType: "application/manifest+json" },

    // Invalid URLs (must be true 404)
    { path: "/invalid-test-url", expectedStatus: 404, expect404Content: true },
    { path: "/case-studies/non-existent-client", expectedStatus: 404, expect404Content: true },
    { path: "/services/random-sub-page", expectedStatus: 404, expect404Content: true },
  ];

  let passed = 0;
  let failed = 0;

  for (const t of routesToTest) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}${t.path}`, { redirect: "manual" });
      const statusOk = res.status === t.expectedStatus;
      let locationOk = true;
      if (t.expectedLocation) {
        locationOk = res.headers.get("location") === t.expectedLocation;
      }
      let typeOk = true;
      if (t.expectedType) {
        typeOk = res.headers.get("content-type") === t.expectedType;
      }
      let contentOk = true;
      if (t.expect404Content) {
        const text = await res.text();
        contentOk = text.includes("404 - Page Not Found") && text.includes("noindex, follow");
      }

      if (statusOk && locationOk && typeOk && contentOk) {
        console.log(
          `✓ [PASS] ${t.path.padEnd(35)} -> HTTP ${res.status}${
            t.expectedType ? ` [${res.headers.get("content-type")}]` : ""
          }${t.expectedLocation ? ` (Redirect: ${t.expectedLocation})` : ""}`
        );
        passed++;
      } else {
        console.error(
          `✗ [FAIL] ${t.path.padEnd(35)} -> Got HTTP ${res.status} (Expected ${t.expectedStatus}) Content-Type: ${res.headers.get("content-type")}`
        );
        failed++;
      }
    } catch (err) {
      console.error(`✗ [ERR]  ${t.path.padEnd(35)} -> ${err.message}`);
      failed++;
    }
  }

  console.log(`\n================ ROUTING & ASSET TEST SUMMARY ================`);
  console.log(`Total: ${routesToTest.length} | Passed: ${passed} | Failed: ${failed}`);
  console.log(`==============================================================\n`);

  server.close(() => {
    process.exit(failed === 0 ? 0 : 1);
  });
});
