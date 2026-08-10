import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#ffffff",
        "surface-subtle": "#f8fafc",
        "crimson-accent": "#e11d48",
        "emerald-accent": "#059669",
        "border-subtle": "#e2e8f0",
        "border-hover": "#cbd5e1",
        "mono-muted": "#64748b"
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
        bungee: ['var(--font-bungee-hairline)', 'sans-serif'],
        passero: ['var(--font-passero-one)', 'sans-serif'],
        cursive: ['var(--font-winky-rough)', 'cursive'],
        winky: ['var(--font-winky-rough)', 'cursive']
      }
    }
  }
};
export default config;
