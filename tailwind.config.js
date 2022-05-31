module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          100: "#eaf5fb",
          200: "#1f7094",
          300: "#165069",
          400: "#0d2f3e",
        },
        secondary: {
          400: "#e66b58",
        },
      },
    },
  },
  plugins: [],
};
