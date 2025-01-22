/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        'Lapis': '#22577A',
        'lightLapis': '2D6991',
        'Verdigris': '#38A3A5',
        'Emerald': '#57CC99',
        'lightGreen': '#80ED99',
        'paleGreen': '#C7F9CC',
        'gray': '#343a40',
        'offWhite': '#f8f9fa',
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.social-icon': {
          color: theme('colors.social-gray'),
          transition: 'color 0.2s ease',
          '&:hover': {
            color: theme('colors.social-hover-gray'),
          },
          '@media (prefers-color-scheme: dark)': {
            '&:hover': {
              color: theme('colors.social-hover-white'),
            },
          },
          marginInlineStart: theme('spacing.5'),
        },
        '.icon-svg': {
          width: theme('spacing.4'),
          height: theme('spacing.4'),
        },
      });
    }),
  ],
}

