/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-purple-300',
    'bg-purple-500',
    'bg-orange-300',
    'bg-orange-500',
    'bg-emerald-300',
    'bg-emerald-500',
    'bg-blue-300',
    'bg-blue-500',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(276, 100%, 79%)',
          200: 'hsl(276, 79%, 69%)',
          300: 'hsl(276, 53%, 49%)',
          400: 'hsl(276, 64%, 48%)',
          500: 'hsl(276, 96%, 20%)',
          DEFAULT: 'hsl(276, 96%, 20%)',
        },
        secondary: {
          100: 'hsl(173, 81%, 68%)',
          200: 'hsl(173, 80%, 63%)',
          300: 'hsl(173, 72%, 57%)',
          400: 'hsl(173, 75%, 47%)',
          500: 'hsl(173, 90%, 30%)',
          DEFAULT: 'hsl(173, 90%, 30%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(200, 23%, 97%)',
          300: 'hsl(200, 12%, 95%)',
          400: 'hsl(205, 12%, 88%)',
          500: 'hsl(209, 13%, 83%)',
          DEFAULT: 'hsl(209, 13%, 83%)',
          600: 'hsl(208, 6%, 55%)',
          700: 'hsl(210, 8%, 31%)',
          800: 'hsl(212, 9%, 22%)',
          900: 'hsl(210, 10%, 14%)',
        },
        dark: {
          100: 'hsl(240, 4%, 9%)',
          DEFAULT: 'hsl(240, 4%, 9%)',
        },
      },
      fontFamily: {
        kapak: ['Kapak'],
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
