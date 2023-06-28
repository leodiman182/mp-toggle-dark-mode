/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lighter-gray': '#F4F4F5',
        'light-gray': '#D4D4D8',
        'dark-gray': '#3F3F46',
        'darker-gray': '#18181B',
      },
    },
  },
  plugins: [],
};
