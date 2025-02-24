/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'tv-noise': 'tv-noise 0.8s steps(8) infinite',
        'tv-noise-fast': 'tv-noise-fast 0.4s steps(4) infinite',
        'tv-noise-slow': 'tv-noise-slow 1.2s steps(8) infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        'tv-noise': {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-1%, -1%)' },
          '20%': { transform: 'translate(1%, 1%)' },
          '30%': { transform: 'translate(-1%, 0%)' },
          '40%': { transform: 'translate(1%, -1%)' },
          '50%': { transform: 'translate(-1%, 1%)' },
          '60%': { transform: 'translate(1%, 0%)' },
          '70%': { transform: 'translate(0%, 1%)' },
          '80%': { transform: 'translate(-1%, -1%)' },
          '90%': { transform: 'translate(1%, 1%)' },
        },
        'tv-noise-fast': {
          '0%': { transform: 'translateX(-1%)' },
          '25%': { transform: 'translateX(1%)' },
          '50%': { transform: 'translateX(-0.5%)' },
          '75%': { transform: 'translateX(0.5%)' },
          '100%': { transform: 'translateX(-1%)' },
        },
        'tv-noise-slow': {
          '0%': { transform: 'scale(1) translate(0)' },
          '25%': { transform: 'scale(1.02) translate(1%, 1%)' },
          '50%': { transform: 'scale(0.98) translate(-1%, -1%)' },
          '75%': { transform: 'scale(1.02) translate(0%, 1%)' },
          '100%': { transform: 'scale(1) translate(0)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 