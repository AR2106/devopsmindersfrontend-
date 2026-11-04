import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const imagesToOptimize = [
  // Case Studies
  "src/assets/caseStudy/Cadbury.png",
  "src/assets/caseStudy/bng.png",
  "src/assets/caseStudy/experties.png",
  "src/assets/caseStudy/fearless.png",
  "src/assets/caseStudy/itsybitsy.png",
  "src/assets/caseStudy/maxwell.png",
  "src/assets/caseStudy/nestle.png",
  "src/assets/caseStudy/pyne.png",
  "src/assets/caseStudy/robot(1).png",
  "src/assets/caseStudy/unpod.png",
  "src/assets/caseStudy/vespa.jpeg",
  "src/assets/caseStudy/vintagewatcholic.png",

  // Site Graphics
  "src/assets/globe.png",
  "public/assets/about-image.png",
  "public/assets/case-studies-hero.png",
  "public/assets/services-hero.png",
  "public/assets/ai-image.png",
  "public/assets/case.png",
];

async function run() {
  console.log("Optimizing images to WebP format...\n");
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const relPath of imagesToOptimize) {
    const fullPath = path.join(projectRoot, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${relPath}`);
      continue;
    }

    const origStat = fs.statSync(fullPath);
    totalOriginal += origStat.size;

    const ext = path.extname(fullPath);
    const outPath = fullPath.replace(new RegExp(`\\${ext}$`), ".webp");

    await sharp(fullPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outPath);

    const optStat = fs.statSync(outPath);
    totalOptimized += optStat.size;

    const saved = (((origStat.size - optStat.size) / origStat.size) * 100).toFixed(1);
    console.log(
      `✓ ${path.basename(relPath).padEnd(25)} -> ${(origStat.size / 1024).toFixed(0).padStart(5)} KB -> ${(optStat.size / 1024).toFixed(0).padStart(4)} KB (${saved}% saved)`
    );
  }

  console.log("\n================ SUMMARY ================");
  console.log(`Original Total:  ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized Total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Overall Savings: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
  console.log("=========================================\n");
}

run().catch((err) => {
  console.error("Optimization failed:", err);
  process.exit(1);
});

