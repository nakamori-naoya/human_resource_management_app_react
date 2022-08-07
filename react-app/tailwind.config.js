/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        112: '448px',
        112: '28rem',
        128: '512px',
        128: '32rem',
      },
      height: {
        112: '448px',
        112: '28rem',
        128: '512px',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '30px',
      },
    },
  },
  plugins: [],
};
