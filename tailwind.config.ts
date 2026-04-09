import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D3A",
        "navy-deep": "#060F20",
        "navy-mid": "#112647",
        orchid: "#96088E",
        "orchid-lt": "#B84DB2",
        gold: "#D4A843",
        "gold-lt": "#E8C97A",
        green: "#0DB760",
        white: "#FFFFFF",
        light: "#F6F4F9",
        "gray-500": "#7A7284",
      },
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        glow: "glow 6s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.6", transform: "translate(0, 0)" },
          "100%": { opacity: "1", transform: "translate(-3%, 2%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
