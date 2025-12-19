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
  useAlternatingLayout?: boolean;
}


export const IconCardGrid: React.FC<IconCardGridProps> = ({
  items,
  titleWeight = 'medium',
  descriptionWeight = 'medium',
  className = '',
  gridCols = '1-2-4',
  cardClassName = '',
  useAlternatingLayout = false,
  ...props
}) => {
  // Calculate alternating layout pattern for odd numbers of items (desktop only)
  const getGridColumnData = (itemIndex: number, totalItems: number): { startCol: number; span: number } | null => {
    if (!useAlternatingLayout || totalItems % 2 === 0 || totalItems < 5) {
      return null;
    }

    // Pattern: rows alternate between 2 items and 3 items (2-3-2-3...)
    // Using a 6-column grid: rows of 2 = each spans 3 cols, rows of 3 = each spans 2 cols
    let itemsProcessed = 0;
    let rowNumber = 0;

    while (itemsProcessed < totalItems) {
      const isRowOfTwo = rowNumber % 2 === 0;
      const itemsInRow = isRowOfTwo ? 2 : 3;
      const span = isRowOfTwo ? 3 : 2; // In 6-column grid

      if (itemIndex < itemsProcessed + itemsInRow) {
        const positionInRow = itemIndex - itemsProcessed;
        const startCol = 1 + (positionInRow * span);
        
        return { startCol, span };
      }

      itemsProcessed += itemsInRow;
      rowNumber++;
    }

    return null;
  };

  const shouldUseAlternating = useAlternatingLayout && items.length >= 5 && items.length % 2 !== 0;
  
  // Always use 1 column on mobile, 2 columns on tablet
  // On desktop, use alternating layout (6 cols) if enabled, otherwise use gridCols
  const getDesktopGridCols = (): string => {
    if (shouldUseAlternating) {
      return 'lg:grid-cols-6';
    }
    // Extract desktop grid columns from gridCols pattern
    const desktopGridMap: Record<string, string> = {
      '1': 'lg:grid-cols-1',
      '2': 'lg:grid-cols-2',
      '3': 'lg:grid-cols-3',
      '4': 'lg:grid-cols-4',
      '1-2-3': 'lg:grid-cols-3',
      '1-2-4': 'lg:grid-cols-4',
      '1-3-3': 'lg:grid-cols-3',
    };
    return desktopGridMap[gridCols] || 'lg:grid-cols-4';
  };

  const baseGridClasses = `grid grid-cols-1 md:grid-cols-2 ${getDesktopGridCols()} gap-4 w-full max-w-[1280px]`;
  const gridClasses = baseGridClasses + (className ? ` ${className}` : '');

  return (
    <>
      {shouldUseAlternating && (
        <style>{`
          @media (min-width: 1024px) {
            ${items.map((item, index) => {
              const columnData = getGridColumnData(index, items.length);
              if (!columnData) return '';
              return `[data-grid-item="${item.id}"] { grid-column: ${columnData.startCol} / span ${columnData.span}; }`;
            }).join('\n            ')}
          }
        `}</style>
      )}
      <div className={gridClasses} {...props}>
        {items.map((item, index) => {
          const columnData = shouldUseAlternating ? getGridColumnData(index, items.length) : null;

          return (
            <Card
              key={item.id}
              variant="elevated"
              data-grid-item={columnData ? item.id : undefined}
              className={`flex flex-col gap-4 items-center justify-center h-full min-h-[250px] p-8 ${cardClassName}`}
            >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <Typography variant="h4" weight={titleWeight} className="text-neutral-900 text-center">
              {item.title}
            </Typography>
            {item.description && (
              <Typography variant="p" weight={descriptionWeight} className="text-neutral-500 text-center">
                {item.description}
              </Typography>
            )}
          </Card>
        );
      })}
      </div>
    </>
  );
};

