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
        AppleM: ['AppleSDGothicNeoM', 'sans-serif'],
        AppleEB: ['AppleSDGothicNeoEB', 'sans-serif'],
        AppleB: ['AppleSDGothicNeoB', 'sans-serif'],
      },
      fontSize: {},
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
        'sub-2': '#EEFAFC',
        warning: '#F84A4A',
      },
      animation: {
        'pass-by-1': 'pass 10s linear infinite ',
        bounce1: 'bounce 2s ease-in-out infinite ',
        bounce2: 'bounce 2s 0.5s ease-in-out infinite ',
        bounce3: 'bounce 2s 1s ease-in-out infinite ',
      },
      keyframes: {
        pass: {
          '0%': {
            transform: 'translateX(-180rem)',
          },
          '100%': {
            transform: 'translateX(0rem)',
          },
        },
        bounce: {
          '0%, 20%': { trasnsform: `translate(0,0)` },
          '50%': {
            transform: 'translateY(-150%)',
          },
          '85%, 100%': {
            trasnsform: `translate(0,0)`,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
