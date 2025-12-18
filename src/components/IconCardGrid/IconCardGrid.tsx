import React from 'react';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';

export interface IconCardItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface IconCardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: IconCardItem[];
  titleWeight?: 'medium' | 'bold';
  descriptionWeight?: 'regular' | 'medium';
  gridCols?: '1' | '2' | '3' | '4' | '1-2-3' | '1-2-4' | '1-3-3';
  cardClassName?: string;
}

const getGridClasses = (gridCols: IconCardGridProps['gridCols'] = '1-2-4'): string => {
  const gridMap: Record<string, string> = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '1-2-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '1-2-4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '1-3-3': 'grid-cols-1 lg:grid-cols-3',
  };
  
  return gridMap[gridCols || '1-2-4'] || gridMap['1-2-4'];
};

export const IconCardGrid: React.FC<IconCardGridProps> = ({
  items,
  titleWeight = 'medium',
  descriptionWeight = 'medium',
  className = '',
  gridCols = '1-2-4',
  cardClassName = '',
  ...props
}) => {
  const gridClasses = `grid ${getGridClasses(gridCols)} gap-4 w-full max-w-[1280px]`;

  return (
    <div className={gridClasses + (className ? ` ${className}` : '')} {...props}>
      {items.map((item) => (
        <Card
          key={item.id}
          variant="elevated"
          className={`flex flex-col gap-4 items-center justify-center h-full min-h-[250px] p-8 ${cardClassName}`}
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
          </div>
          <Typography variant="h4" weight={titleWeight} className="text-neutral-900 text-center">
            {item.title}
          </Typography>
          <Typography variant="p" weight={descriptionWeight} className="text-neutral-500 text-center">
            {item.description}
          </Typography>
        </Card>
      ))}
    </div>
  );
};

