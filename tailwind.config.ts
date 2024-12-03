import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "30px",
        md: "72px",
        "2xl": "72px",
      },
    },
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        caslon: "var(--font-caslon)",
      },
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        orange: "var(--orange)",
      },
    },
  },
  plugins: [],
} satisfies Config
