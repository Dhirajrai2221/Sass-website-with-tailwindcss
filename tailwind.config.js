/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "cl-1": "#212227",
        "cl-2": "#D3D3D3",
        "cl-3": "#A09F9F",
        "cl-4": "#E7E7E7",
        "cl-5": "#444",

        mainBgcl: "#F2F5F8",
        lightBlue: "#6DACE7",
        lightPurple: "#AA7AEB",
        lightPink: "#EA79BA",

        "textcl-1": "#474747",
        "textcl-2": "#B9B7B7",
        "textcl-3": "#727272",
        "textcl-4": "#AFAFAF",
        "textcl-5": "rgba(158, 158, 158, 0.80)",
      },
      boxShadow: {
        navShadow: " 0px 4px 26px 0px rgba(191, 190, 190, 0.25)",
        cardShadow: "5px 8px 20px 0px rgba(191, 191, 191, 0.25)",
        toogleBtnShadow: "0 5px 8px 20px 0px rgba(191, 191, 191, 0.25)",
        leftRightShadow: "0px 16px 20px 0px rgba(80, 80, 80, 0.20)",
      },
      gridTemplateColumns: {
        gridfluid: "repeat(auto-fit, minmax(10rem, 1fr))",
      },
    },
  },
  plugins: [],
};
