/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './App.jsx'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      nophone: '376px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      // ### Primary
      colors: {
        BrightBlue: 'hsl(220, 98%, 61%)',
        // CheckBackground: linear-gradient 'hsl(192, 100%, 67%)' to 'hsl(280, 87%, 65%)'
        // ### LightTheme

        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',

        // ### Dark Theme

        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        LightGray_ishBlue: 'hsl(234, 39%, 85%)',
        LightGrayishBluehover: 'hsl(236, 33%, 92%)',
        DarkGrayish_Blue: 'hsl(234, 11%, 52%)',
        VeryDarkGray_ishBlue: 'hsl(233, 14%, 35%)',
        VeryDarkGrayish_Blue: 'hsl(237, 14%, 26%)'
      },
      backgroundImage: {
        'img-mobile-dark': "url('./src/assets/bg-mobile-dark.jpg')",
        'img-desktop-dark': "url('src/assets/bg-desktop-dark.jpg')",
        'img-mobile-light': "url('./src/assets/bg-mobile-light.jpg')",
        'img-desktop-light': "url('src/assets/bg-desktop-light.jpg')"
      }
    },
    fontFamily: {
      Josefin: ['Josefin Sans']
    }
  },
  plugins: []
}
