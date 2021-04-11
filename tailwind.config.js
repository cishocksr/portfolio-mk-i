module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      romanesco: ['Romanesco'],
    },
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#5c6ac4',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
