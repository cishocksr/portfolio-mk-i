module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      romanesco: ["Romanesco"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        azure: {
          DEFAULT: "#b4e1ff",
          100: "#6fc0ff",
          200: "#369bf4",
          300: "#1078d4",
          400: "#0a54b5",
          500: "#053391",
          600: "#021663",
        },
        page: {
          DEFAULT: "#f8f8ff",
        },
        night: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
