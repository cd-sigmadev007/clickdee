/**
 * Script to download service icons from Figma
 * 
 * Usage:
 *   node scripts/download-figma-icons.js
 * 
 * Requires:
 *   - FIGMA_API_TOKEN environment variable or pass as argument
 *   - File key: 7rQbEks4NQ8kg2uPSDBuf7
 *   - Node IDs for service icons (from Figma design)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN || process.argv[2];
const FILE_KEY = '7rQbEks4NQ8kg2uPSDBuf7';
const ICONS_DIR = path.join(__dirname, '../src/assets/icons');

// Service icon node IDs from Figma (these need to be updated with actual node IDs)
// Each service has a Layer_1 frame containing the icon
const SERVICE_ICON_NODES = {
  'appliance-repair': '1:7763', // Appliance Repair
  'asbestos-removal': '1:7771', // Asbestos Removal
  'bathroom-remodel-leads': '1:7777', // Bathroom Remodel Leads
  'biohazard-leads': '1:7784', // Biohazard Leads
  'electrician-leads': '1:7789', // Electrician Leads
  'gutter-leads': '1:7797', // Gutter Leads
  'fire-damage-leads': '1:7805', // Fire Damage Leads
  'hvac-leads': '1:7811', // HVAC Leads
  'flooring-leads': '1:7819', // Flooring Leads
  'locksmith-leads': '1:7828', // Locksmith Leads
  'mold-removal-leads': '1:7836', // Mold Removal Leads
  'pest-control-leads': '1:7844', // Pest Control Leads
  'plumbing-leads': '1:7853', // Plumbing Leads
  'roofing-leads': '1:7861', // Roofing Leads
  'siding-leads': '1:7868', // Siding Leads
  'tree-services-leads': '1:7875', // Tree Services Leads
  'water-damage-leads': '1:7883', // Water Damage Leads
};

async function downloadIcon(nodeId, filename) {
  try {
    // Get image from Figma
    const imageUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${nodeId}&format=svg`;
    
    const response = await fetch(imageUrl, {
      headers: {
        'X-Figma-Token': FIGMA_API_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch icon: ${response.statusText}`);
    }

    const data = await response.json();
    const imageUrlFromFigma = data.images[nodeId];

    if (!imageUrlFromFigma) {
      throw new Error(`No image URL returned for node ${nodeId}`);
    }

    // Download the actual SVG
    const svgResponse = await fetch(imageUrlFromFigma);
    if (!svgResponse.ok) {
      throw new Error(`Failed to download SVG: ${svgResponse.statusText}`);
    }

    const svgContent = await svgResponse.text();
    const filePath = path.join(ICONS_DIR, `${filename}.svg`);
    
    fs.writeFileSync(filePath, svgContent, 'utf-8');
    console.log(`✓ Downloaded ${filename}.svg`);
    
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
    return false;
  }
}

async function downloadAllIcons() {
  if (!FIGMA_API_TOKEN) {
    console.error('Error: FIGMA_API_TOKEN environment variable or argument is required');
    console.error('Usage: FIGMA_API_TOKEN=your_token node scripts/download-figma-icons.js');
    process.exit(1);
  }

  // Ensure icons directory exists
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }

  console.log('Downloading service icons from Figma...\n');

  const results = await Promise.all(
    Object.entries(SERVICE_ICON_NODES).map(([filename, nodeId]) =>
      downloadIcon(nodeId, filename)
    )
  );

  const successCount = results.filter(Boolean).length;
  const totalCount = Object.keys(SERVICE_ICON_NODES).length;

  console.log(`\nCompleted: ${successCount}/${totalCount} icons downloaded`);
  
  if (successCount < totalCount) {
    console.warn('Some icons failed to download. Check the errors above.');
    process.exit(1);
  }
}

downloadAllIcons().catch(console.error);

