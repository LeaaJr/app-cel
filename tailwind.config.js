/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          primary: '#ff6347', // Puedes cambiar a cualquier color que necesites
        },
    },
  },
  plugins: [],
}