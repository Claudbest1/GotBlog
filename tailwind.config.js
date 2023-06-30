/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blue': '#031F80',
      'red': '',
      'deep-blue': '#010E3A',
      'hover-blue': '#040273',
      'black': '#000000',
      'lemon': '#B4A201',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      sans1:['Nunito', 'sans-serif'],
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    extend: {},
  },
  plugins: [],
}

