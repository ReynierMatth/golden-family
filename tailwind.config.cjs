/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js', "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        colors: {
          'rosewood': {
            '50': '#ffeef0',
            '100': '#ffdade',
            '200': '#ffbbc2',
            '300': '#ff8b96',
            '400': '#ff495b',
            '500': '#ff1128',
            '600': '#ff0019',
            '700': '#e70017',
            '800': '#be0013',
            '900': '#66000a',
          },
        }
    },
  },
  plugins: [
      require('preline/plugin'),],
}
