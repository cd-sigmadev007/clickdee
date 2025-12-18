import React from 'react';
import { Article } from '../types/articleData';
import { Typography } from '@/components/Typography';

export interface ArticleContentProps {
  article: Article;
  className?: string;
}

// Sample content structure - in real app this would come from CMS or markdown
const sampleContent = [
  {
    heading: 'What could be the eco-friendly solutions?',
    paragraphs: [
      'In the quest for a pest-free home, many homeowners are turning to natural pest control remedies as a safer and more eco-friendly alternative to chemical pesticides. These natural solutions not only help keep pests at bay but also minimize the environmental impact and reduce exposure to potentially harmful substances. In this blog post, we\'ll explore some effective natural pest control remedies that you can easily implement to protect your home and loved ones.',
    ],
  },
  {
    heading: 'Essential Oils as Repellents',
    paragraphs: [
      'Essential oils are potent extracts derived from plants and have long been used for their aromatic and medicinal properties. Many essential oils, such as peppermint, lavender, eucalyptus, and tea tree oil, are natural repellents for pests like ants, spiders, mosquitoes, and flies. You can create your own natural pest spray by diluting a few drops of essential oil in water and spraying it around entry points, windows, and other areas where pests may enter your home.',
    ],
  },
  {
    heading: 'Diatomaceous Earth (DE)',
    paragraphs: [
      'Diatomaceous earth is a naturally occurring sedimentary rock powder that is highly effective against crawling insects like ants, cockroaches, and bed bugs. DE works by absorbing the oils and fats from the exoskeletons of insects, causing them to dehydrate and die. Simply sprinkle diatomaceous earth in areas where pests are present, such as cracks, crevices, and along baseboards, to create a barrier against them.',
    ],
  },
  {
    heading: 'Vinegar for Ant Control',
    paragraphs: [
      'Vinegar is a versatile household ingredient that can be used to deter ants from invading your home. Mix equal parts of white vinegar and water in a spray bottle and apply it to ant trails, entry points, and other areas where ants are active. The strong scent of vinegar disrupts the ants\' pheromone trails, making it difficult for them to navigate and communicate with each other, ultimately discouraging them from entering your home.',
    ],
  },
  {
    heading: 'Baking Soda for Cockroach Control',
    paragraphs: [
      'Baking soda, also known as sodium bicarbonate, is a common kitchen ingredient with natural pest control properties. Create a bait using equal parts of baking soda and powdered sugar and place it in areas frequented by cockroaches, such as under sinks, behind appliances, and in cabinets. Cockroaches are attracted to the sugar but are unable to digest the baking soda, leading to their eventual demise.',
    ],
  },
  {
    heading: 'Homemade Traps',
    paragraphs: [
      'Homemade traps are an effective and environmentally friendly way to capture and eliminate pests without the use of chemicals. You can create simple traps using household items such as jars, bottles, or cardboard tubes and bait them with food or attractants that are appealing to the target pests. Once the pests are trapped, you can safely release them outdoors or dispose of them as needed.',
    ],
  },
  {
    heading: 'Conclusion',
    paragraphs: [
      'Natural pest control remedies offer a safe, eco-friendly, and sustainable approach to managing pest infestations in your home. By harnessing the power of natural ingredients and simple DIY techniques, you can effectively keep pests at bay while minimizing your environmental footprint. Incorporate these natural pest control remedies into your home maintenance routine to create a healthier and pest-free living environment for you and your family.',
    ],
  },
];

export const ArticleContent: React.FC<ArticleContentProps> = ({
  article,
  className = '',
}) => {
  // Map content sections to table of contents IDs if available
  const getSectionId = (heading: string, index: number): string => {
    if (article.tableOfContents && article.tableOfContents[index]) {
      return article.tableOfContents[index].id;
    }
    // Fallback: generate ID from heading text
    return heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  return (
    <div className={`flex flex-col gap-5 items-start relative shrink-0 ${className}`}>
      {sampleContent.map((section, index) => {
        const sectionId = getSectionId(section.heading, index);
        return (
          <div key={index} id={sectionId} className="scroll-mt-20">
            <Typography
              variant="h4"
              weight="medium"
              className="text-neutral-900 mb-5"
            >
              {section.heading}
            </Typography>
            {section.paragraphs.map((paragraph, pIndex) => (
              <Typography
                key={pIndex}
                variant="s"
                weight="medium"
                className="text-neutral-500 mb-5"
              >
                {paragraph}
              </Typography>
            ))}
          </div>
        );
      })}
    </div>
  );
};

