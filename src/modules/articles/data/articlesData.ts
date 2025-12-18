import { Article } from '../types/articleData';

// Article images
import naturalPestControlImage from '@/assets/images/articles/natural-pest-control-remedies.jpg';
import naturalPestControlHeroImage from '@/assets/images/natural-pest-control-hero.jpg';
import commonHouseholdPestsImage from '@/assets/images/articles/common-household-pests.jpg';
import rodentProofingImage from '@/assets/images/articles/rodent-proofing-home.jpg';
import dayInLifeExterminatorImage from '@/assets/images/articles/day-in-life-exterminator.jpg';
import climateChangeImage from '@/assets/images/articles/climate-change-pest-infestations.jpg';
import authorAvatarImage from '@/assets/images/articles/author-avatar.jpg';

/**
 * Articles data array - matches the Figma design
 */
export const articlesData: Article[] = [
  {
    id: 'natural-pest-control-remedies',
    slug: 'natural-pest-control-remedies-eco-friendly-solutions',
    title: 'Natural Pest Control Remedies: Eco-Friendly Solutions for a Pest-Free Home',
    date: 'August 3, 2024',
    author: 'Aishwarya Gindham',
    authorAvatar: authorAvatarImage,
    image: naturalPestControlImage,
    heroImage: naturalPestControlHeroImage,
    categories: ['pest-control', 'prevention'],
    isFeatured: true,
    excerpt: 'Discover eco-friendly ways to keep your home pest-free using natural remedies and sustainable solutions.',
    readTime: '3 min read',
    tableOfContents: [
      { id: 'what-could-be-the-eco-friendly-solutions', label: 'What could be the eco-friendly solutions?' },
      { id: 'essential-oils-as-repellents', label: 'Essential Oils as Repellents' },
      { id: 'diatomaceous-earth-de', label: 'Diatomaceous Earth (DE)' },
      { id: 'vinegar-for-ant-control', label: 'Vinegar for Ant Control' },
      { id: 'baking-soda-for-cockroach-control', label: 'Baking Soda for Cockroach Control' },
      { id: 'homemade-traps', label: 'Homemade Traps' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
  },
  {
    id: 'common-household-pests',
    slug: '10-common-household-pests-identifying-preventing',
    title: '10 Common Household Pests: Identifying and Preventing Infestations',
    date: 'August 3, 2024',
    author: 'Aishwarya Gindham',
    authorAvatar: authorAvatarImage,
    image: commonHouseholdPestsImage,
    categories: ['pest-control', 'prevention'],
    excerpt: 'Learn about the most common household pests and how to identify and prevent infestations before they become serious problems.',
  },
  {
    id: 'rodent-proofing-home',
    slug: 'rodent-proofing-your-home-essential-tips-mice-rats',
    title: 'Rodent-Proofing Your Home: Essential Tips for Keeping Mice and Rats Out',
    date: 'August 3, 2024',
    author: 'Aishwarya Gindham',
    authorAvatar: authorAvatarImage,
    image: rodentProofingImage,
    categories: ['pest-control', 'prevention'],
    excerpt: 'Essential tips and strategies to protect your home from rodents and keep mice and rats at bay.',
  },
  {
    id: 'day-in-life-exterminator',
    slug: 'behind-scenes-day-life-pest-exterminator',
    title: 'Behind the Scenes: A Day in the Life of a Pest Exterminator',
    date: 'August 3, 2024',
    author: 'Aishwarya Gindham',
    authorAvatar: authorAvatarImage,
    image: dayInLifeExterminatorImage,
    categories: ['insights'],
    excerpt: 'Get an inside look at what a day in the life of a professional pest exterminator really looks like.',
  },
  {
    id: 'climate-change-pest-infestations',
    slug: 'impact-climate-change-pest-infestations-need-know',
    title: 'The Impact of Climate Change on Pest Infestations: What You Need to Know',
    date: 'August 3, 2024',
    author: 'Aishwarya Gindham',
    authorAvatar: authorAvatarImage,
    image: climateChangeImage,
    categories: ['insights'],
    excerpt: 'Understanding how climate change is affecting pest populations and what it means for homeowners.',
  },
];

