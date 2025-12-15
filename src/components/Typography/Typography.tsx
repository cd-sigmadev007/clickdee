import React from 'react';
import { FontSize, FontWeight } from '@/design-system';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: FontSize;
  weight?: FontWeight;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children: React.ReactNode;
}

const variantToElement: Record<FontSize, string> = {
  display: 'h1',
  headline: 'h1',
  title: 'h1',
  subtitle: 'h2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  s: 'p',
  xs: 'span',
  '2xs': 'span',
};

const variantToClass: Record<FontSize, string> = {
  headline: 'text-h2 md:text-h1 lg:text-display',
  title: 'text-h2 md:text-h2 lg:text-h1',
  subtitle: 'text-h3 md:text-h3 lg:text-h2',
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  p: 'text-p',
  s: 'text-s',
  xs: 'text-xs',
  '2xs': 'text-2xs',
};

const weightToClass: Record<FontWeight, string> = {
  regular: 'font-regular',
  medium: 'font-medium',
  bold: 'font-bold',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  weight = 'medium',
  as,
  children,
  className = '',
  ...props
}) => {
  const elementType = (as || variantToElement[variant]) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  const variantClass = variantToClass[variant];
  const weightClass = weightToClass[weight];

  // Create element with proper typing
  return React.createElement(
    elementType,
    {
      className: `font-satoshi not-italic ${variantClass} ${weightClass} ${className}`,
      ...props,
    } as React.HTMLAttributes<HTMLElement>,
    children
  );
};

