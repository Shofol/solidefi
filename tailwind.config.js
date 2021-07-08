// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-primary': '#AE3AF5',
        'brand-secondary': '#6067F3',
        'brand-tertiary': '#4449AC',
        'brand-dark': '#4B4B4B'
      },
      flex: {
        '2': '2 2 0%'
      },
      backgroundImage: theme => ({
        'hor': "linear-gradient(180deg, #AE3AF5 0%, #6067F3 100%)",
        'rev-hor': "linear-gradient(270deg, #AE3AF5 0%, #6067F3 100%)",
        'ver': "linear-gradient(0deg, #AE3AF5 0%, #6067F3 100%)",
        'rev-ver': "linear-gradient(180deg, #AE3AF5 0%, #6067F3 100%)",
      }),
      boxShadow: {
        inner: '0px -2px 10px #0000004D;',
        navInner: 'inset 0px 0px 6px #AE3AF5, 0px 0px 6px #AE3AF5;'
      },
      fontFamily: {
        'botrio': ['Botrio', 'sans-serif']
      },
      maxWidth: {
        'tiny': '17rem'
      }
    }
  },
  variants: {
    extend: {
      textColor: ['hover', 'focus'],
    },
  },
  plugins: [],
}