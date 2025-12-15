/**
 * Script to download founder images from Figma
 * 
 * Usage:
 *   node scripts/download-figma-founders.js
 * 
 * Requires:
 *   - FIGMA_API_TOKEN environment variable or pass as argument
 *   - File key: 7rQbEks4NQ8kg2uPSDBuf7
 *   - Node IDs for founder images (from Figma design node-id=1-15475)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN || process.argv[2];
const FILE_KEY = '7rQbEks4NQ8kg2uPSDBuf7';
const FOUNDERS_DIR = path.join(__dirname, '../src/assets/images/founders');

// Founder image node IDs from Figma (node-id=1-15475)
// These need to be updated with actual node IDs from the carousel
const FOUNDER_IMAGE_NODES = {
  'founder-1': '1:15475', // First founder (woman with blue beanie)
  'founder-2': '1:15475', // Jordan Simkin
  'founder-3': '1:15475', // Blonde woman
  'founder-4': '1:15475', // Man with beard
  'founder-5': '1:15475', // Man with puffer vest
};

async function downloadImage(nodeId, filename) {
  try {
    // Get image from Figma as PNG
    const imageUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${nodeId}&format=png&scale=2`;
    
    const response = await fetch(imageUrl, {
      headers: {
        'X-Figma-Token': FIGMA_API_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const data = await response.json();
    const imageUrlFromFigma = data.images[nodeId];

    if (!imageUrlFromFigma) {
      throw new Error(`No image URL returned for node ${nodeId}`);
    }

    // Download the actual image
    const imageResponse = await fetch(imageUrlFromFigma);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download image: ${imageResponse.statusText}`);
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const filePath = path.join(FOUNDERS_DIR, `${filename}.png`);
    
    fs.writeFileSync(filePath, Buffer.from(imageBuffer));
    console.log(`✓ Downloaded ${filename}.png`);
    
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
    return false;
  }
}

async function downloadAllFounders() {
  if (!FIGMA_API_TOKEN) {
    console.error('Error: FIGMA_API_TOKEN environment variable or argument is required');
    console.error('Usage: FIGMA_API_TOKEN=your_token node scripts/download-figma-founders.js');
    process.exit(1);
  }

  // Ensure founders directory exists
  if (!fs.existsSync(FOUNDERS_DIR)) {
    fs.mkdirSync(FOUNDERS_DIR, { recursive: true });
  }

  console.log('Downloading founder images from Figma...\n');
  console.log('Note: Update FOUNDER_IMAGE_NODES with actual node IDs from Figma design\n');

  const results = await Promise.all(
    Object.entries(FOUNDER_IMAGE_NODES).map(([filename, nodeId]) =>
      downloadImage(nodeId, filename)
    )
  );

  const successCount = results.filter(Boolean).length;
  const totalCount = Object.keys(FOUNDER_IMAGE_NODES).length;

  console.log(`\nCompleted: ${successCount}/${totalCount} images downloaded`);
  
  if (successCount < totalCount) {
    console.warn('Some images failed to download. Check the errors above.');
    process.exit(1);
  }
}

downloadAllFounders().catch(console.error);
