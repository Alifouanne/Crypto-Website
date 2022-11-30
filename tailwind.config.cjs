/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-primary':'#000',
        'bgPrimary':'#fff',
        'bgSecondary': '#F9F9F9',
       ' pink': '#0071bd',
       'light-blue': '#e6f7ff',
       'border': '#d9d9d9'
      }
    },
  },
  plugins: [],
}
