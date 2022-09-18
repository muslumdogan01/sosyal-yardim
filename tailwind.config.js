/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pageBg': '#FBF8F1',
        'buttonBg': '#E6EEE3',
        'headerColor': '#E03F1E',
      },
    },
    fontFamily: {
      amatic: ['Amatic SC'],
      jakarta: ['Plus Jakarta Sans'],
    },
  },
  plugins: [],
};
