/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Same midnight navy + cyan family as portfolio.axelano.space and Guestlist Ticket
        ink: { DEFAULT: "#07151d", deep: "#031018", surface: "#0f1d25", raised: "#142129" },
        cy: { DEFAULT: "#22d3ee", soft: "#7decf4" },
        gold: "#d4af6a",
        mist: "#a5b9cc",
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
