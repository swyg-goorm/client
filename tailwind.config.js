/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Gmarket: ['GmarketSans', 'sans-serif'],
      },
      fontSize: {
        hugeTitle: '60px',
        largeTitle: '34px',
        title1: '28px',
        title2: '22px',
        title3: '20px',
        headline: '17px',
        subHeadline: '15px',
        footNote: '13px',
        caption1: '12px',
        caption2: '11px',
        caption3: '10px',
      },
      colors: {
        'gray-0': '#FFFFFF',
        'gray-1': '#FAFAFD',
        'gray-2': '#F0F0F5',
        'gray-3': '#E8E8EE',
        'gray-4': '#A9ABB8',
        'gray-5': '#858899',
        'gray-6': '#525463',
        'gray-7': '#3E404C',
        'gray-8': '#000000',

        'main-1': '#F3FBFC',
        'main-2': '#D5F1F6',
        'main-3': '#1FA8BD',
        'main-4': '#23707B',

        'sub-1': '#DCEAFE',
        warning: '#F84A4A',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
