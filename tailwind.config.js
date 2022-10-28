/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#74B49B',
      'yellow': '#ffc82c',
      'green-dark': '#5C8D89',
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
    },
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
