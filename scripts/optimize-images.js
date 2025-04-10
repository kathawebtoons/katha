import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imageminMozjpeg from 'imagemin-mozjpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const OPTIMIZED_DIR = path.join(__dirname, '../public/optimized');

async function optimizeImages() {
  try {
    // Create optimized directory if it doesn't exist
    await fs.mkdir(OPTIMIZED_DIR, { recursive: true });

    // Get all image files
    const files = await fs.readdir(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize`);

    // Process each image
    for (const file of imageFiles) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const outputPath = path.join(OPTIMIZED_DIR, file);

      console.log(`Optimizing ${file}...`);

      await sharp(inputPath)
        .resize(1200, 800, { 
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 80,
          mozjpeg: true,
          progressive: true
        })
        .toFile(outputPath);

      console.log(`✓ Optimized ${file}`);
    }

    console.log('All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 