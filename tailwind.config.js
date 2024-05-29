/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rajdhani': ["Rajdhani, sans-serif"],
      
    },
    extend: {
      opacity: {
        '50': '.50',
      },
      backgroundImage: {
        'hero-bg': "url('./assets/bgHero.png')",
        'about-bg':"url('./assets/bg-about.png')",
        'mission-bg':"url('./assets/mission-bg.png')",
        'banner-bg':"url('./assets/bg-banner.png')",
        'about-banner-bg':"url('./assets/about-hero.png')",
        'contact-banner-bg':"url('./assets/bg-contact.png')",
        
      },
      textColor:{
        'blue': "#69ABE0",
        
      }
    },
  },
  plugins: [],
}