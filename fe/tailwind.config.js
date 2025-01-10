/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'primary': '#1e40af', 
          'secondary': '#4b5563', 
          'accent': '#cbd5e1', 
          'neutral': '#FFFFFF', // Putih

          "hover": '#3B82F6',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}