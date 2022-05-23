/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   media: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            poppins: 'Poppins, sans-serif',
         },
         colors: {
            // Configure your color palette here
            pink: '#FF577F',
            yellow: '#F3AB33',
         },
      },
      screens: {
         xxs: '300px',
         xs: '400px',
			...defaultTheme.screens,
      },
   },
   variants: {
      extend: {
         opacity: ['disabled'],
      },
   },
   plugins: [],
};
