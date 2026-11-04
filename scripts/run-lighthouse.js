import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const PORT = 4173;

function sendFile(filePath, contentType, req, res) {
  const acceptEncoding = req.headers["accept-encoding"] || "";
  const isCompressible = /text|javascript|json|xml/i.test(contentType);

  if (isCompressible && acceptEncoding.includes("gzip")) {
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Encoding": "gzip",
      "Vary": "Accept-Encoding",
    });
    const gzip = zlib.createGzip();
    fs.createReadStream(filePath).pipe(gzip).pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  }
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];

  if (urlPath === "/about") {
    res.writeHead(301, { Location: "/about-us" });
    return res.end();
  }

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
        : ext === ".webp"
        ? "image/webp"
        : ext === ".png"
        ? "image/png"
        : ext === ".ico"
        ? "image/x-icon"
        : ext === ".webmanifest"
        ? "application/manifest+json"
        : "application/octet-stream";
    return sendFile(targetFile, contentType, req, res);
  }

  const directHtml = path.join(distDir, `${urlPath}.html`);
  if (fs.existsSync(directHtml) && fs.statSync(directHtml).isFile()) {
    return sendFile(directHtml, "text/html; charset=utf-8", req, res);
  }

  const dirIndex = path.join(distDir, urlPath, "index.html");
  if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
    return sendFile(dirIndex, "text/html; charset=utf-8", req, res);
  }

  const notFoundFile = path.join(distDir, "404.html");
  if (fs.existsSync(notFoundFile)) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    return fs.createReadStream(notFoundFile).pipe(res);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

function runAudit(preset) {
  return new Promise((resolve, reject) => {
    const reportPath = path.join(projectRoot, `lighthouse-${preset}.json`);
    const profileDir = `/tmp/lh_chrome_${preset}_` + Date.now();
    const chromeFlags = `--headless=new --no-sandbox --disable-gpu --user-data-dir=${profileDir}`;

    const args = [
      "--yes",
      "lighthouse",
      `http://127.0.0.1:${PORT}`,
      preset === "desktop" ? "--preset=desktop" : "--form-factor=mobile",
      `--chrome-flags=${chromeFlags}`,
      "--output=json",
      `--output-path=${reportPath}`,
      "--only-categories=performance,accessibility,best-practices,seo",
    ];

    console.log(`\nStarting Lighthouse audit (${preset.toUpperCase()})...`);
    const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    const child = spawn("npx", args, {
      env: { ...process.env, CHROME_PATH: chromePath },
      stdio: "inherit",
    });

    child.on("close", (code) => {
      let results = null;
      if (fs.existsSync(reportPath)) {
        try {
          const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
          const categories = report.categories || {};
          const audits = report.audits || {};
          results = {
            preset,
            perf: Math.round((categories.performance?.score || 0) * 100),
            a11y: Math.round((categories.accessibility?.score || 0) * 100),
            bp: Math.round((categories["best-practices"]?.score || 0) * 100),
            seo: Math.round((categories.seo?.score || 0) * 100),
            fcp: audits["first-contentful-paint"]?.displayValue || "N/A",
            lcp: audits["largest-contentful-paint"]?.displayValue || "N/A",
            tbt: audits["total-blocking-time"]?.displayValue || "N/A",
            cls: audits["cumulative-layout-shift"]?.displayValue || "N/A",
            si: audits["speed-index"]?.displayValue || "N/A",
          };
          fs.unlinkSync(reportPath);
        } catch (e) {
          console.error("Error reading report:", e);
        }
      }
      if (fs.existsSync(profileDir)) {
        fs.rmSync(profileDir, { recursive: true, force: true });
      }
      resolve(results);
    });

    child.on("error", (err) => reject(err));
  });
}

server.listen(PORT, "127.0.0.1", async () => {
  console.log(`Preview server running at http://127.0.0.1:${PORT}`);
  try {
    const desktop = await runAudit("desktop");
    const mobile = await runAudit("mobile");

    console.log("\n========================================================");
    console.log("            LIGHTHOUSE AUDIT FINAL RESULTS              ");
    console.log("========================================================");

    if (desktop) {
      console.log(`DESKTOP:`);
      console.log(`  Performance:    ${desktop.perf} / 100`);
      console.log(`  Accessibility:  ${desktop.a11y} / 100`);
      console.log(`  Best Practices: ${desktop.bp} / 100`);
      console.log(`  SEO:            ${desktop.seo} / 100`);
      console.log(`  FCP: ${desktop.fcp} | LCP: ${desktop.lcp} | TBT: ${desktop.tbt} | CLS: ${desktop.cls} | Speed Index: ${desktop.si}\n`);
    }

    if (mobile) {
      console.log(`MOBILE:`);
      console.log(`  Performance:    ${mobile.perf} / 100`);
      console.log(`  Accessibility:  ${mobile.a11y} / 100`);
      console.log(`  Best Practices: ${mobile.bp} / 100`);
      console.log(`  SEO:            ${mobile.seo} / 100`);
      console.log(`  FCP: ${mobile.fcp} | LCP: ${mobile.lcp} | TBT: ${mobile.tbt} | CLS: ${mobile.cls} | Speed Index: ${mobile.si}`);
    }

    console.log("========================================================\n");
  } catch (err) {
    console.error("Audit failure:", err);
  } finally {
    server.close(() => {
      console.log("Preview server closed.");
      process.exit(0);
    });
  }
});
