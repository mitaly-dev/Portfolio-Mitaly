/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:'#0c2556',
        accent:'#8f9fbc',
        body:'#f9fbfe',
        dark:'#181818',
        lightDark:'#222',
        yellow:'#ffc107'
      },
      fontFamily:{
        dmSans:['DM Sans','sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
