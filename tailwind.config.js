/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rajdhani': ['Rajdhani", sans-serif'],
      
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('./assets/bgHero.png')",
        'about-bg':"url('./assets/bg-about.png')",
        'mission-bg':"url('./assets/mission-bg.png')"
      }
    },
  },
  plugins: [],
}