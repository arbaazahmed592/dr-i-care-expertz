import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#0a0a0c",
        "space-gray": "#1d1d1f",
        "apple-silver": "#f5f5f7",
        "apple-blue": "#0071e3",
        "apple-blue-light": "#2997ff"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      animation: {
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.2s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" }
        }
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(41,151,255,0.18) 0%, rgba(10,10,12,0) 70%)"
      }
    }
  },
  plugins: []
};

export default config;
