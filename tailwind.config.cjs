/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mons: ["Montserrat"],
        cinzel: ["Cinzel"],
        slab:['"Josefin Slab"'],

      },
    },
    screens: {
      ss: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui"),],
};
