/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'link-color': '#FF7575',
        'link-hover': '#CC5D5D'
      }
    }
  },
  plugins: [],
}
