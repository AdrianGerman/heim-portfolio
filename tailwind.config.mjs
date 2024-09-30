/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Onest-Variable": ["Onest Variable", "sans-serif"]
      },
      colors: {
        primary: "#76428a",
        secondary: "#828df3"
      }
    }
  },
  plugins: []
}
