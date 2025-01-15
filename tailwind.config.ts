import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'ssm': '842px',
        'mdd': '1361px',
        'lgg': '1820px'
      },
      fontFamily: {
        oceanwide: ['Oceanwide', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
