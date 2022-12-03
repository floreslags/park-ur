/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'lobster':"'Lobster'",
        'raleway':"'Raleway'"
      },
      colors:{
        primary:'#4338CA',
        light:'#ECEBFA',
        white:'#FFFFFF',
        active:'#C5C1EF'
      }
    },
  },
  plugins: [],
}