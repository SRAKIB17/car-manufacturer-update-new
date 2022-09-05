module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#201B4E",
          // secondary: "#4723DA",
          secondary: "#E60023",
          accent: "#2BD566",
          neutral: "#DDDDDD",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
}