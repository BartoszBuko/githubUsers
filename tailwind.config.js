module.exports = {
  content: ["./index.html"],
  theme: {
    screen: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    minW: {
      "3/4": "75%",
    },
    borderWidth: {
      8: "30px",
    },
    extend: {
      colors: {
        githubGray: "#333333",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
