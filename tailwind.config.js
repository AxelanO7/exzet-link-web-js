/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        // "Signal" tokens — same as portfolio.axelano.space
        ink: {
          DEFAULT: '#050505',
          elev: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#c9a875',
          bright: '#e8caa0',
          deep: '#8f7248',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        tech: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 24px rgba(201, 168, 117, 0.25)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#050505",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#c9a875",
              foreground: "#050505",
            },
            secondary: {
              DEFAULT: "#8f7248",
              foreground: "#ffffff",
            },
            focus: "#c9a875",
          },
        },
      },
    }),
  ],
};