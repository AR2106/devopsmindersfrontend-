import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const brightIconPath = path.join(publicDir, "icon devopsminder bright mode.png");
const darkIconPath = path.join(publicDir, "icon devopsminder dark mode.png");

async function generateFavicons() {
  console.log("Generating brand favicon assets from 'icon devopsminder bright mode.png'...\n");

  if (!fs.existsSync(brightIconPath)) {
    console.error("Bright mode icon missing:", brightIconPath);
    process.exit(1);
  }

  // 1. Google Search Central target: 48x48 (exact multiple of 48)
  await sharp(brightIconPath).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  console.log("✓ Generated public/favicon-48x48.png (48x48 Google Search standard)");

  // 2. High-DPI Google / Android target: 96x96 (2x multiple of 48)
  await sharp(brightIconPath).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  console.log("✓ Generated public/favicon-96x96.png (96x96 high-DPI standard)");

  // 3. Browser tab favicons: 32x32 and 16x16
  await sharp(brightIconPath).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  console.log("✓ Generated public/favicon-32x32.png (32x32 desktop browser tab)");

  await sharp(brightIconPath).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));
  console.log("✓ Generated public/favicon-16x16.png (16x16 compact browser tab)");

  // 4. Apple Touch Icon: 180x180
  await sharp(brightIconPath).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("✓ Generated public/apple-touch-icon.png (180x180 Apple iOS standard)");

  // 5. Android / PWA Icons: 192x192 and 512x512
  await sharp(brightIconPath).resize(192, 192).png().toFile(path.join(publicDir, "android-chrome-192x192.png"));
  console.log("✓ Generated public/android-chrome-192x192.png (192x192 Android standard)");

  await sharp(brightIconPath).resize(512, 512).png().toFile(path.join(publicDir, "android-chrome-512x512.png"));
  console.log("✓ Generated public/android-chrome-512x512.png (512x512 master standard)");

  // 6. Dark mode browser tab icons: 48x48 and 32x32
  if (fs.existsSync(darkIconPath)) {
    await sharp(darkIconPath).resize(48, 48).png().toFile(path.join(publicDir, "favicon-dark-48x48.png"));
    await sharp(darkIconPath).resize(32, 32).png().toFile(path.join(publicDir, "favicon-dark-32x32.png"));
    console.log("✓ Generated public/favicon-dark-48x48.png and favicon-dark-32x32.png (Dark mode browser tabs)");
  }

  // 7. Binary multi-size favicon.ico (16x16, 32x32, 48x48)
  const p16 = await sharp(brightIconPath).resize(16, 16).png().toBuffer();
  const p32 = await sharp(brightIconPath).resize(32, 32).png().toBuffer();
  const p48 = await sharp(brightIconPath).resize(48, 48).png().toBuffer();

  const icoImages = [
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 },
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(icoImages.length, 4); // count

  let offset = 6 + icoImages.length * 16;
  const dirEntries = [];
  for (const img of icoImages) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...icoImages.map((img) => img.buffer)]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log(`✓ Generated public/favicon.ico (Multi-size ICO: 16x16, 32x32, 48x48 - ${icoBuffer.length} bytes)`);

  console.log("\nFavicon generation complete!\n");
}

generateFavicons().catch((err) => {
  console.error("Favicon generation failed:", err);
  process.exit(1);
});

