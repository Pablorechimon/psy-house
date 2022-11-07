/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    require('flowbite/plugin')
    ],
   theme: {
    colors: {
      'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
      },
      'cyan': {
        700: "#fae8ff",
        800: '#E4D8DC'
      },
      'rosita:': {
        100: '#E4D8DC'
      },
      'purple-pastel': '#C9CCD5',
      'pink': '#DED9C4s',
      'orange': '#ff7849',
      'my-green': '#74B49B',
      'yellow': '#ffc82c',
      'green-dark': '#5C8D89',
      'green-gray': '#A7D7C5',
      'white': '#F4F9F4',
      'cream': '#F9F8EB',
      'orange': '#ffa62b',
      'pink': '#ffd6ff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'home-img': "url('https://img.freepik.com/vector-premium/fondo-abstracto-moderno-concepto-salud-tecnologia-simbolo-medico-patron-hexagonal_236657-1688.jpg?w=2000')",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
        nav: [ "Roboto Mono", "sans"] 
      }
    }
  }
}
