/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          100: '#F7FAFC',
          200: '#ECF1F9',
          500: '#0070FF',
          600: '#005ACC',
        },
        // Neutral colors
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
        // Success colors
        success: {
          100: '#BBF7D0',
          200: '#14532D',
        },
        // Error colors
        error: {
          100: '#FECACA',
          200: '#DC2626',
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'display': ['48px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h1': ['40px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h2': ['32px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h3': ['24px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h4': ['20px', { lineHeight: '1.3', letterSpacing: '0' }],
        'p': ['16px', { lineHeight: '1.3', letterSpacing: '0' }],
        's': ['14px', { lineHeight: '1.3', letterSpacing: '0' }],
        'xs': ['13px', { lineHeight: '1.3', letterSpacing: '0' }],
        '2xs': ['12px', { lineHeight: '1.3', letterSpacing: '0' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      borderRadius: {
        'button': '32px',
        'input': '10px',
        'card': '20px',
        'label': '24px',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 3))' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(calc(-100% / 3))' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-left-services': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 3))' },
        },
        'scroll-right-services': {
          '0%': { transform: 'translateX(calc(-100% / 3))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
        'scroll-left-services': 'scroll-left-services 10s linear infinite',
        'scroll-right-services': 'scroll-right-services 10s linear infinite',
      },
    },
  },
  plugins: [],
}

