module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        fontSize: 
          { base: '0.875rem',
            lg: '0.9375rem',
            xl: '1rem',
            '2xl': '1.5625rem',
            '3xl': '1.875rem',
            '4xl': '2.1875rem',
            '5xl': '2.5rem' },
         fontFamily: 
          { 'eb-garamond': 'EB Garamond',
            aubrey: 'Aubrey',
            'source-sans-pro': 'Source Sans Pro' },
         borderRadius: 
          { none: '0',
            xs: '0.25rem',
            sm: '1.25rem',
            default: '2.125rem',
            lg: '2.1875rem',
            xl: '2.8271484375rem',
            '2xl': '3.125rem',
            '3xl': '5.0888671875rem',
            full: '9999px' } 
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
