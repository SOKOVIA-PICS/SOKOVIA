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
      fontSize: {
        sm: "clamp(12.44px, -0.03vw + 12.53px, 12px)",
        base: "clamp(14px, 0.12vw + 13.63px, 16px)",
        md: " clamp(15.75px, 0.34vw + 14.72px, 21.33px)",
        lg: "clamp(17.72px, 0.66vw + 15.74px, 28.43px)",
        xl: "clamp(19.93px, 1.11vw + 16.61px, 37.9px)",
        "2xl": "clamp(22.43px, 1.73vw + 17.22px, 50.52px)",
        "3xl": "clamp(25.23px, 2.6vw + 17.43px, 67.34px)",
        "4xl": "clamp(28.38px, 3.79vw + 17.02px, 89.76px)",
        "5xl": "clamp(31.93px, 5.42vw + 15.68px, 119.66px)",
        "6xl": "clamp(35.92px, 7.63vw + 13.04px, 159.5px)",
        "7xl": "clamp(40.41px, 10.63vw + 8.52px, 212.61px)",
      },
    },
  },
  plugins: [],
};
