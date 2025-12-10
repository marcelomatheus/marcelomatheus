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
        background: "#05060F",
        surface: "rgba(255,255,255,0.04)",
        primary: {
          50: "#F2EDFF",
          100: "#DCCCFF",
          200: "#B89BFF",
          300: "#9475FF",
          400: "#7A5BFF",
          500: "#5D3BFF",
          600: "#4426DB",
          DEFAULT: "#7A5BFF",
        },
        accent: "#00D8FF",
        moon: "#1B1C2E",
        glow: "#A0C8FF",
        muted: "#A1A4BE",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, #2E2667, transparent 45%), radial-gradient(circle at 80% 0%, #1E1B5F, transparent 55%), radial-gradient(circle at 50% 50%, rgba(122,91,255,0.35), transparent 60%)",
        "card-glow": "radial-gradient(circle at 30% 20%, rgba(122,91,255,0.35), transparent 55%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(122,91,255,0.45)",
        "inner-card": "inset 0 0 30px rgba(255,255,255,0.08)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(0,216,255,0.6)",
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
