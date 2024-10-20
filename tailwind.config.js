const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./view/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          bluish:'#000',
          gray:'#f7f7f7',
          lightGray:'#f8f9fa',
          blackGray:'#000'
        },

      },
      fontFamily:{
        cursive: ['"Shadows Into Light"', 'cursive'],
        teko:['"Teko"', 'sans-serif']
      },
      backgroundImage: {
        'countDataBg': "url('/assets/buscover.jpg')",
        // 'hero-pattern': "url('/path-to-another-image.png')",
      },
    },
  },
  plugins: [],
});
