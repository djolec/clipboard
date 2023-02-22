/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'grayish-blue': '#9fabb2',
        'dark-grayish-blue': '#4c545d',
        'strong-cyan': '#26baa4',
        'light-blue': '#6173ff',
      },
      fontFamily: {
        'jamjuree': ["Bai Jamjuree", "sans-serif"],
      },
      backgroundImage: {
        'header-pattern': "url('/images/bg-header-mobile.png')",
        'header-pattern-desktop': "url('/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
}
