/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", ],
  theme: {
    extend: {
      colors : {
      LinearGradient1: "hsl(236, 72%, 79%)",
     LinearGradient2: "hsl(237, 63%, 64%)",

    /* ### Neutral */

     VeryLightGrayishBlue:  "hsl(240, 78%, 98%)",
     LightGrayishBlue: "hsl(234, 14%, 74%)",
     GrayishBlue: "hsl(233, 13%, 49%)",
     DarkGrayishBlue: "hsl(232, 13%, 33%)"
      }
    },
  },
  plugins: [],
}