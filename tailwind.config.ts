import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        apple: {
          bg: "#f5f5f7",
          text: "#1d1d1f",
          secondary: "#6e6e73",
          accent: "#0071e3",
          border: "#d2d2d7",
          card: "#ffffff",
        },
      },
      maxWidth: {
        "8xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
