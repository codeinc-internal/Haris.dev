import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#bfe0ff",
          300: "#93caff",
          400: "#60aeff",
          500: "#3b8fff",
          600: "#1f6cf2",
          700: "#184fc1",
          800: "#163f97",
          900: "#153879"
        }
      }
    },
  },
  plugins: [],
};
export default config;
