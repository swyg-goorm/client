/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'grey-1': '#FAFAFD',
        'grey-2': '#F0F0F5',
        'grey-3': '#E8E8EE',
        'grey-4': '#A9ABB8',
        'grey-5': '#858899',
        'grey-6': '#525463',
        'grey-7': '#3E404C',

        'cyan-900': '#23707B',
        'cyan-600': '#1FA8BD',
        'cyan-100': '#D5F1F6',

        sub: '#DCEAFE',
        warning: '#F84A4A',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
