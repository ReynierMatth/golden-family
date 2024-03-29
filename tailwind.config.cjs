/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js', "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        colors: {
          'navi': {
            '50': '#e0e0e5',
            '100': '#b3b3bf',
            '200': '#808099',
            '300': '#4d4d73',
            '400': '#1a1a4d',
            '500': '#000026',
            '600': '#00001f',
            '700': '#000019',
            '800': '#000013',
            '900': '#00000d',
          },
            'navi-light': {
                '50': '#f2f2f5',
                '100': '#d9d9e0',
                '200': '#bfbfd1',
                '300': '#a6a6c2',
                '400': '#8c8cb3',
                '500': '#7373a4',
                '600': '#595995',
                '700': '#404086',
                '800': '#262677',
                '900': '#0d0d68',
            },
            'navi-dark': {
                '50': '#e6e6e6',
                '100': '#bfbfbf',
                '200': '#999999',
                '300': '#737373',
                '400': '#4d4d4d',
                '500': '#262626',
                '600': '#1f1f1f',
                '700': '#191919',
                '800': '#131313',
                '900': '#0d0d0d',
            },
          yellow: {
            '50': '#fff8e6',
            '100': '#ffecb3',
            '200': '#ffe180',
            '300': '#ffcc4d',
            '400': '#ffb31a',
            '500': '#ff9900',
            '600': '#cc7a00',
            '700': '#995c00',
            '800': '#663d00',
            '900': '#331f00',
          },
        },
        animation: {
            'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
            'infinite-scroll': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(-100%)' },
            }
        },
    },
  },
  plugins: [
      require('preline/plugin'),],
}
