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
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'tech': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'rotate-continuous': 'rotate-continuous 20s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.8,
            transform: 'scale(1.05)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'rotate-continuous': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-tech': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-matrix': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.5)',
        'tech': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#3b82f6",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#06b6d4",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#60a5fa",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#22d3ee",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};