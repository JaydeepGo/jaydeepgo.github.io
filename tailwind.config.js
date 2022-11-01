const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,njk,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          light: '#E5D5CA',
          dark: '#22296B',
        },
        main: {
          light: '#A1968F',
          dark: '#035C9E',
        },
        imp: {
          light: '#11514E',
          dark: '#ED3659',
        },
        normal: {
          light: '#FE9C9B',
          dark: '#FE9600',
        },
        rest: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        text: {
          light: '#191919',
          dark: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
