/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      colors: {
        primary: "#8B3DCC",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
