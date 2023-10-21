/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          main: "#DC7700"
        }
      },
      fontFamily: {
        futura: ["futura-md-bt-medium", "Futura Md BT Medium"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
