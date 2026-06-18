import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public/logo/Gotterdammerung-logo-white.png");
const outputPath = join(root, "public/og-image.jpg");

const width = 1200;
const height = 630;
const logoMaxWidth = 900;

const logo = await sharp(logoPath)
  .resize({ width: logoMaxWidth, withoutEnlargement: false })
  .png()
  .toBuffer();

const { width: logoWidth, height: logoHeight } = await sharp(logo).metadata();
const left = Math.round((width - logoWidth) / 2);
const top = Math.round((height - logoHeight) / 2);

await sharp({
  create: {
    width,
    height,
    channels: 3,
    background: { r: 0, g: 0, b: 0 },
  },
})
  .composite([{ input: logo, left, top }])
  .jpeg({ quality: 90 })
  .toFile(outputPath);

console.log(`Created ${outputPath}`);
