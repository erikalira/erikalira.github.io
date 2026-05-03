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
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          strong: "hsl(var(--color-accent-strong))",
          muted: "hsl(var(--color-accent-muted))",
        },
        canvas: "hsl(var(--color-canvas))",
        border: "hsl(var(--color-border))",
        foreground: "hsl(var(--color-foreground))",
        muted: "hsl(var(--color-muted))",
        panel: "hsl(var(--color-panel))",
        "panel-raised": "hsl(var(--color-panel-raised))",
      },
      boxShadow: {
        card: "0 18px 48px -28px hsl(var(--color-shadow) / 0.28)",
        "card-hover": "0 24px 60px -30px hsl(var(--color-shadow) / 0.38)",
      },
      backgroundImage: {
        "app-canvas":
          "radial-gradient(circle at top left, hsl(var(--color-accent-muted) / 0.36), transparent 34rem), linear-gradient(180deg, hsl(var(--color-canvas)), hsl(var(--color-canvas-soft)))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
