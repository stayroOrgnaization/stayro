/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stayro: '#FF5B2D',
        dbg: '#1A1A1A',
        fcolor:'#F5F5F5',
        
        
      },
      opacity: {
        '5': '0.05', // 5% opacity
      },
      height: {
        'n-h': '99px', // Custom height 99px
      },
      fontFamily: {
        tajawal: ["Tajawal"],
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),],
};
