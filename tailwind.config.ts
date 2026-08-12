import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4b1d33ff",     // Wine / Maroon
        secondary: "#6A2C46",
        light: "#F9F4EF",
      },
    },
  },
  plugins: [],
};

export default config;
