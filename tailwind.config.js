/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#1a2332',
        'navy-medium': '#2c3e50',
        'light-blue': '#87CEEB',
        'soft-yellow': '#FFF8DC',
        // About page colors - Purple theme
        'purple-primary': '#6B46C1',
        'purple-secondary': '#9333EA',
        'purple-accent': '#A78BFA',
        // Contact page colors - Green theme  
        'green-primary': '#059669',
        'green-secondary': '#10B981',
        'green-accent': '#34D399',
        // Gallery page colors - Pink/Orange theme
        'pink-primary': '#EC4899',
        'pink-secondary': '#F472B6',
        'orange-accent': '#FB923C',
        // FAQ page colors - Blue/Teal theme
        'teal-primary': '#0891B2',
        'teal-secondary': '#06B6D4',
        'teal-accent': '#22D3EE',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
