/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8c46fd",
          dark: "#7b39e6"
        },
        page: {
          bg: "#0b0b0b",
          panel: "#101010",
          slate: "#2f2f2f"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
