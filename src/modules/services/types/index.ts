/**
 * Services Module Types
 */

export interface ServicePageData {
  id: string;
  slug: string; // URL-friendly name, e.g., "fire-damage-leads"
  name: string; // Display name, e.g., "Fire Restoration Leads"
  heroImage: string; // Path to hero image
  icon: string; // Service icon for badge
  centerIcon?: string; // Optional center icon graphic (for hero section)
  incomingLeadCount: number; // For "+X Incoming Lead" badge
  avgCostPerLead: string; // e.g., "$30" for cost badge
  description?: string; // Optional, for future sections
}
