/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontInter: ['Inter', "sans-serif"],
      },
      colors: {
        "theme-1": "#FF6B00",
        "theme-2": "#FF9448",
        "theme-3": "#F2E7DB",
        "theme-4": "#212121"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}