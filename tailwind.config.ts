import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        "primary-dark": "#C2185B",
        secondary: "#FFE500",
        "accent-red": "#E53935",
        "accent-cyan": "#E0F7FA",
        dark: "#2D2D2D",
        text: "#333333",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
