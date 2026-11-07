import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f8fafc",
        obsidian: {
          950: "#02040a",
          900: "#060913",
          850: "#0b101e",
          800: "#111827",
        },
        glass: {
          card: "rgba(15, 23, 42, 0.55)",
          highlight: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(99, 102, 241, 0.15)",
        },
        tokyo: {
          neon: "#38bdf8",
          indigo: "#6366f1",
          emerald: "#10b981",
          sakura: "#f43f5e",
          gold: "#eab308",
        },
      },
      backgroundImage: {
        "radial-glass": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
        "radial-glow": "radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 50%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glass-sm": "0 2px 10px -1px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "glass-md": "0 8px 30px -4px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        "glass-lg": "0 20px 40px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
        "neon-glow": "0 0 25px -5px rgba(99, 102, 241, 0.35)",
        "emerald-glow": "0 0 20px -3px rgba(16, 185, 129, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

