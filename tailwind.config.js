/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Same palette as portfolio.axelano.space: teal-navy ground, one cyan, gold for emphasis, coral for "live".
        ink: { DEFAULT: "#050f16", deep: "#031018", surface: "#09151e", raised: "#0e1f2b" },
        cy: { DEFAULT: "#2dd4e8", soft: "#7cebf7" },
        gold: "#e9c27d",
        coral: "#ff7b5c",
        mint: "#4fe0bd",
        mist: "#9bb1be",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
