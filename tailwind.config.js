/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.2rem',
      lg: '3.5rem',
    },
    fontFamily: {
      'sans': ['Roboto Mono', 'Consolas', 'monospace'],
      'Caivun': ['Caivun'],
      'Dead Hammer': ['Dead Hammer'],
      'Indeciso': ['Indeciso'],
      'Kaukhia': ['Kaukhia'],
      'Rollerball-1': ['Rollerball-1'],
      'Straka': ['Straka'],
    },
    extend: {
    },
  },
  plugins: [],
}

