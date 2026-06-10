import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "rgba(255,255,255,0.045)",
        primary: {
          50: "#FFF3EB",
          100: "#FFE0CC",
          200: "#FFC49A",
          300: "#FFA56B",
          400: "#FF8A45",
          500: "#FF7D3A",
          600: "#E66421",
          DEFAULT: "#FF7D3A",
        },
        accent: "#FF7D3A",
        moon: "#121212",
        glow: "#FFB37D",
        muted: "#9A9A9A",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(255,125,58,0.12), transparent 35%), radial-gradient(circle at 85% 5%, rgba(255,255,255,0.06), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(10,10,10,0))",
        "card-glow": "radial-gradient(circle at 30% 20%, rgba(255,125,58,0.22), transparent 55%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,125,58,0.18)",
        "inner-card": "inset 0 1px 0 rgba(255,255,255,0.05)",
        panel: "0 28px 80px rgba(0,0,0,0.4)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(255,125,58,0.4)",
      },
      borderColor: {
        divider: "rgba(255,255,255,0.15)",
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "spin-reverse": "spin-reverse 24s linear infinite",
        pulse: "pulse 2.5s ease-in-out infinite",
        "marquee-slow": "marquee 32s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem",
          "2xl": "5rem",
        },
      },
    },
  },
  plugins: [typography, scrollbar({ nocompatible: true })],
};

export default config;
