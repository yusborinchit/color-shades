import tailwindForms from "@tailwindcss/forms";
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        primary: {
          50: "var(--primary-50,#fafafa)",
          100: "var(--primary-100,#f5f5f5)",
          200: "var(--primary-200,#e5e5e5)",
          300: "var(--primary-300,#d4d4d4)",
          400: "var(--primary-400,#a3a3a3)",
          500: "var(--primary-500,#737373)",
          600: "var(--primary-600,#525252)",
          700: "var(--primary-700,#404040)",
          800: "var(--primary-800,#262626)",
          900: "var(--primary-900,#171717)",
        },
      },
    },
  },
  plugins: [tailwindForms],
};

export default config;
