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
        midnight: {
          primary: "#050505",
          secondary: "#0a0a0a",
          text: "#FFFFFF",
          muted: "rgba(255, 255, 255, 0.4)",
          border: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        editorial: "0.2em",
      },
      borderRadius: {
        sharp: "2px",
      },
      animation: {
        "reveal-up": "revealUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
