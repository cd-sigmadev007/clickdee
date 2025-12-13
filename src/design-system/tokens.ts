/**
 * Design System Tokens
 * 
 * This file contains all design tokens used across the application.
 * These tokens are based on the Figma design system.
 */

export const colors = {
  primary: {
    100: '#F7FAFC',
    200: '#ECF1F9',
    500: '#0070FF',
    600: '#005ACC',
  },
  neutral: {
    10: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    500: '#71717A',
    800: '#27272A',
    900: '#18181B',
  },
  success: {
    100: '#BBF7D0',
    200: '#14532D',
  },
  error: {
    100: '#FECACA',
    200: '#DC2626',
  },
} as const;

export const typography = {
  fontFamily: {
    primary: 'Satoshi, sans-serif',
  },
  fontSize: {
    display: '48px',
    h1: '40px',
    h2: '32px',
    h3: '24px',
    h4: '20px',
    p: '16px',
    s: '14px',
    xs: '13px',
    '2xs': '12px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeight: {
    default: '1.3',
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
} as const;

export const borderRadius = {
  button: '32px',
  input: '10px',
  card: '20px',
  label: '24px',
  checkbox: '6px',
} as const;

export const shadows = {
  card: '0px 10px 25.2px 0px rgba(0,0,0,0.1)',
  cardLight: '0px 10px 16px 0px rgba(0,0,0,0.05)',
  popup: '0px 10px 25px 0px rgba(0,0,0,0.1)',
  button: '0px 0.682px 1.365px 0px rgba(16,24,40,0.05)',
} as const;

