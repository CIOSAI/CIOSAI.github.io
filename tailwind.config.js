/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.2rem',
      lg: '4rem',
    },
    fontFamily: {
      'sans': ['Roboto Mono', 'Consolas', 'monospace']
    },
    extend: {
    },
  },
  plugins: [],
}

