const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      fontFamily: {
         body: ['Lato', 'sans-serif']
      },
      screens: {
         xs: '480px',
         ...defaultTheme.screens
      },
      extend: {
         colors: {
            'hosers-blue': '#3B4DAA',
            'hosers-blue-hover': '#344497',
            'hosers-red': '#BF182B',
            'hosers-red-hover': '#a81526',
            'hosers-gray': '#303030'
         }
      }
   },
   plugins: []
};
