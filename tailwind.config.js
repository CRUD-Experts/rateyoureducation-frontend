/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/**/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        medium: 500,
        bold: 700,
        black: 900,
      },
      colors: {
        primary: {
          100: '#DAF8FE',
          200: '#ADE8F4',
          300: '#90E0EF',
          400: '#48CAE4',
          500: '#00B4D8',
          600: '#0096C7',
          700: '#0077B6',
          800: '#023E8A',
          900: '#03045E',
        },

        light: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131"
},
        
      },
      maxWidth: {
        "desktop": "1440px"
      },
      screens: {
        "desktop": "1440px",
        "tablet": "1024px",
        "mobile": "768px",
        "mobile-sm": "375px",
      },
      height: {
        "2xl": "1200px",
        "xl": "800px",
        "lg": "600px",
        "md": "500px",
        "sm": "400px",
        "xs": "300px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
