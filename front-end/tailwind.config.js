/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "top-color":  "#C9C4B8", 
        "bottom-color": "#f8fafc",
        "input-color": "#A19B8D",
        "input-short-color" : '#F2ECEC'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'product-sans': ['Product Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}