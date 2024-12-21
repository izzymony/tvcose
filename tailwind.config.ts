import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white-transparent': 'rgba(255, 255, 255, 0.50)',

      },
      animation: {
        colorChange: 'colorChange 3s infinite',
      },
      screens: {
        xs: '290px',
        sm: '375px',
        md: '678px',
        lg: '850px',
        xl: '1000px',
        xxl: '1200px',
       
      
      },
      fontFamily: {
        'clash-display': ['Clash Display', 'sans-serif'], // Add the font family
      },
      backdropBlur: {
        'custom': '40.078125px',
      },
    },
  },
  plugins: [],
} satisfies Config;
