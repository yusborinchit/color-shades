import tailwindForms from "@tailwindcss/forms";
import { type Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-geist-sans)", "sans-serif"],
  			mono: ["var(--font-geist-mono)", "monospace"]
  		},
  		colors: {
  			primary: {
  				'50': 'var(--primary-50,#fafafa)',
  				'100': 'var(--primary-100,#f5f5f5)',
  				'200': 'var(--primary-200,#e5e5e5)',
  				'300': 'var(--primary-300,#d4d4d4)',
  				'400': 'var(--primary-400,#a3a3a3)',
  				'500': 'var(--primary-500,#737373)',
  				'600': 'var(--primary-600,#525252)',
  				'700': 'var(--primary-700,#404040)',
  				'800': 'var(--primary-800,#262626)',
  				'900': 'var(--primary-900,#171717)',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindForms, require("tailwindcss-animate")],
};

export default config;
