import sharp from 'sharp';
import { readdir, writeFile } from 'node:fs/promises';

const files = [
  ...(await readdir('src/assets/product')).filter((file) => file.endsWith('.webp')).map((file) => `product/${file}`),
  'glade-spring.webp',
  'glade-autumn.webp',
].sort();
const placeholders = {};
for (const file of files) {
  const image = await sharp(`src/assets/${file}`).resize({ width: 24 }).blur(3).webp({ quality: 30 }).toBuffer();
  placeholders[file] = `data:image/webp;base64,${image.toString('base64')}`;
}
await writeFile('src/assets/placeholders.json', `${JSON.stringify(placeholders)}\n`);
