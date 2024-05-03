/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#222831",
          500: "#31363F",
        },
        teal: "#76ABAE",
        grey: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
