/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': {'min': '1536px'},
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1024px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '640px'},
        // => @media (max-width: 639px) { ... }
        'sl':{'max':'425px'},
        'smm':{'max':'372px'},
        'ss':{'max':'320px'},
        
      },
      backgroundColor:{
         brand_colors:"rgb(199, 6, 6)"
      },
      textColor:{
        brand_color:"rgb(199, 6, 6)"
      },
      borderColor:{
       b_color:"#DDDDDE",
       brand_b_color:"rgb(199, 6, 6)"
      },
      fontFamily: {
        inter: ['Inter'],
        lato: ['Lato']
      }
    },
  },
  plugins: [],
};
