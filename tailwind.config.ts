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
        background: "#080706",
        surface: "rgba(232,205,168,0.055)",
        primary: {
          50: "#FFF8EF",
          100: "#F8E6CC",
          200: "#E8CDA8",
          300: "#D8B27F",
          400: "#C18C4A",
          500: "#A86D2D",
          600: "#7D4B1E",
          DEFAULT: "#E8CDA8",
        },
        accent: "#D8B27F",
        moon: "#100E0C",
        glow: "#E8CDA8",
        muted: "#B8AA98",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...fontFamily.sans],
        display: ["var(--font-bebas)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(232,205,168,0.16), transparent 35%), radial-gradient(circle at 85% 5%, rgba(255,255,255,0.06), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(8,7,6,0))",
        "card-glow": "radial-gradient(circle at 30% 20%, rgba(232,205,168,0.24), transparent 55%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(232,205,168,0.18)",
        "inner-card": "inset 0 1px 0 rgba(255,255,255,0.05)",
        panel: "0 28px 80px rgba(0,0,0,0.4)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(232,205,168,0.4)",
      },
      borderColor: {
        divider: "rgba(255,255,255,0.15)",
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "spin-reverse": "spin-reverse 24s linear infinite",
        pulse: "pulse 2.5s ease-in-out infinite",
        "marquee-slow": "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
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
