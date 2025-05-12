/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      dropShadow: {
        neon: '0 0 6px #a3e635',
      },
    },
  },

  plugins: [],
};
