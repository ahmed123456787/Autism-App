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
        "input-short-color" : '#F2ECEC',
        "bottom-color":  "#f8fafc",
        "top-button-color": "#F2ECEC",
        "bottom-button-color": "#A19B8D",
        "bottom-button-hover": "#6D6758",
        "top-button-hover": "#A9A9A9"
        
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'product-sans': ['Product Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}