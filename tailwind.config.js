/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
       
  ],
  theme: {
    extend: {
      colors:{
        'sidbar-color':'#4251AE',
        'header-color':'#E4E6FB',
        'bashboard-menu-color':'#D3DED6'
      }
    },
  },
  plugins: [],
}