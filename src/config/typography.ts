/**
 * Typography System
 * Consistent text sizing across the application
 */

export const typography = {
  // Display - Main page titles
  display: {
    size: 'text-[48px]',
    weight: 'font-bold',
    leading: 'leading-tight',
  },
  
  // H1 - Section headers
  h1: {
    size: 'text-[32px]',
    weight: 'font-bold',
    leading: 'leading-tight',
  },
  
  // H2 - Subsection headers, large buttons
  h2: {
    size: 'text-[24px]',
    weight: 'font-semibold',
    leading: 'leading-snug',
  },
  
  // H3 - Component headers, medium buttons
  h3: {
    size: 'text-[20px]',
    weight: 'font-semibold',
    leading: 'leading-snug',
  },
  
  // Body Large - Descriptions, important text
  bodyLg: {
    size: 'text-[18px]',
    weight: 'font-normal',
    leading: 'leading-relaxed',
  },
  
  // Body - Standard text
  body: {
    size: 'text-[16px]',
    weight: 'font-normal',
    leading: 'leading-relaxed',
  },
  
  // Body Small - Secondary text
  bodySm: {
    size: 'text-[14px]',
    weight: 'font-normal',
    leading: 'leading-normal',
  },
  
  // Caption - Helper text, captions
  caption: {
    size: 'text-[12px]',
    weight: 'font-normal',
    leading: 'leading-normal',
  },
} as const;

export type TypographyVariant = keyof typeof typography;
