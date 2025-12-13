# Service Icons Download Instructions

## Overview
The Header component requires 18 service icons to be downloaded from Figma. These icons are used in the Services dropdown menu.

## Download Script
A script has been created at `scripts/download-figma-icons.js` to automate the download process.

## How to Download Icons

### Prerequisites
- Node.js installed
- Figma API token (set as environment variable)

### Steps

1. **Set the Figma API token:**
   ```bash
   export FIGMA_API_TOKEN=your_figma_api_token_here
   ```

2. **Run the download script:**
   ```bash
   node scripts/download-figma-icons.js
   ```

3. **Verify icons are downloaded:**
   The icons should be saved in `src/assets/icons/` with the following names:
   - `appliance-repair.svg`
   - `asbestos-removal.svg`
   - `bathroom-remodel-leads.svg`
   - `biohazard-leads.svg`
   - `electrician-leads.svg`
   - `fire-damage-leads.svg`
   - `flooring-leads.svg`
   - `gutter-leads.svg`
   - `hvac-leads.svg`
   - `locksmith-leads.svg`
   - `mold-removal-leads.svg`
   - `pest-control-leads.svg`
   - `plumbing-leads.svg`
   - `roofing-leads.svg`
   - `siding-leads.svg`
   - `tree-services-leads.svg`
   - `water-damage-leads.svg`

4. **Update Header component:**
   Once icons are downloaded, uncomment the import statements in `src/components/Header/Header.tsx` and update the `serviceIcons` object to use the imported icons.

## Manual Download (Alternative)

If the script doesn't work, you can manually download icons from Figma:

1. Open the Figma design: https://www.figma.com/design/7rQbEks4NQ8kg2uPSDBuf7/Clikdee-Website?node-id=1-7648&m=dev
2. Select each service icon (Layer_1 frames in the Services dropdown)
3. Export as SVG
4. Rename to kebab-case (e.g., "Appliance Repair" → "appliance-repair.svg")
5. Save to `src/assets/icons/`

## Icon Node IDs (for reference)
- Appliance Repair: 1:7763
- Asbestos Removal: 1:7771
- Bathroom Remodel Leads: 1:7777
- Biohazard Leads: 1:7784
- Electrician Leads: 1:7789
- Gutter Leads: 1:7797
- Fire Damage Leads: 1:7805
- HVAC Leads: 1:7811
- Flooring Leads: 1:7819
- Locksmith Leads: 1:7828
- Mold Removal Leads: 1:7836
- Pest Control Leads: 1:7844
- Plumbing Leads: 1:7853
- Roofing Leads: 1:7861
- Siding Leads: 1:7868
- Tree Services Leads: 1:7875
- Water Damage Leads: 1:7883

## Current Status
Icons are currently showing as placeholder gray boxes. Once downloaded and imported, they will display correctly in the Services dropdown.

