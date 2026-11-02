/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: 'var(--color-cream)',
        'cream-dark': 'var(--color-cream-dark)',
        navy: 'var(--color-navy)',
        'navy-light': 'var(--color-navy-light)',
        'navy-deep': 'var(--color-navy-deep)',
        'warm-white': 'var(--color-warm-white)',
        slate: 'var(--color-slate)',
        'slate-light': 'var(--color-slate-light)',
        gold: 'var(--color-gold)',
      },
      borderRadius: {
        DEFAULT: '10px',
        sm: '6px',
        md: '10px',
        lg: '10px',
        xl: '10px',
        '2xl': '10px',
        '3xl': '10px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
