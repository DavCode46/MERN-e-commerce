/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: "0 4px 6px rgba(255, 255, 255, 0.5)",
        light: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: {
          bg: '#f5f5f5',
          sidebar: '#303030',
          sidebarHeader: '#252525',
          button: '#cca675',
          buttonHover: '#a97742',
          addToCartHover: '#2f2f2f',
          textWhite: '#F8F8F0',
          textSidebar: '#B0B0B0'
        }
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        poppins: "var(--font-poppins)",
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
    },
  },
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
};
