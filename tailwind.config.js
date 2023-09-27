/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './App.jsx'
  ],
  theme: {
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
        'img-mobile-dark': "url('./assets/bg-mobile-dark.svg')",
        'img-desktop-dark': "url('./assets/images/bg-desktop-dark.svg')",
        'img-mobile-light': "url('./assets/bg-mobile-light.svg')",
        'img-desktop-light': "url('./assets/images/bg-desktop-light.svg')"
      }
    }
  },
  plugins: []
}
