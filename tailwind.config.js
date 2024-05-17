/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary colors
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)', //graphic design text
        'dark-blue': 'hsl(198, 62%, 26%)', //photography text
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)', //footer
        'moderate-cyan': 'hsl(167, 44%, 70%)',

        //neutral colors
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      },
      screens: {
        xs: '500px'
      }
    },
  },
  plugins: [],
}

