/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        cardw: "325px",
      },
      height: {
        cardh: "500px",
      },
      animation: {
        "wiggle": 'wiggle 1s ease-in-out infinite',
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
