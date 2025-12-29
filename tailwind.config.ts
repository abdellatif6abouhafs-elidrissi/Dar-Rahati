import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Moroccan-inspired palette
        sand: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5EDE0',
          300: '#EBD9C4',
          400: '#D4BC9A',
          500: '#C4A77D',
          600: '#A68B5B',
          700: '#7D6844',
          800: '#5A4B32',
          900: '#3D3322',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF9E6',
          200: '#FFF0C2',
          300: '#FFE494',
          400: '#FFD666',
          500: '#D4A84B',
          600: '#B8923D',
          700: '#8B6E2E',
          800: '#5E4A1F',
          900: '#3D3014',
        },
        earth: {
          50: '#F9F7F5',
          100: '#F0EBE5',
          200: '#E0D5C9',
          300: '#C7B7A3',
          400: '#A8957D',
          500: '#8B7760',
          600: '#6E5D4A',
          700: '#544737',
          800: '#3A3127',
          900: '#251F19',
        },
        cream: '#FBF9F6',
        ivory: '#FFFEF8',
      },
      fontFamily: {
        arabic: ['Noto Kufi Arabic', 'Amiri', 'serif'],
        sans: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'moroccan-pattern': "url('/patterns/moroccan.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

