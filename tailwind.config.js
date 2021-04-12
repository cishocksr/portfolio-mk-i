module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      romanesco: ['Romanesco'],
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#b8b8b7',
        },
        snow: {
          DEFAULT: '#E7ECEF',
        },
        blue: {
          DEFAULT: '#274c77',
        },
        ice: {
          DEFAULT: '#6096ba',
        },
        eyes: {
          DEFAULT: '#A3CEF1',
        },
        desert: {
          DEFAULT: '#8b8c89',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
