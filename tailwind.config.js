/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: {
          redblack: '#40010D',
          redlight: '#A6243C',
          redbold: '#BF2517',
          rebstrong: '#F20505',
          whitecustom: '#F2F2F2',
          blackcustom: '#0D0D0D',
          bluelight: '#B2C2DC',
          bluestrong: '#784ba0',
          blueblack: '#784ba0',
        },
        dark: {
          100: '#9305F2',
          200: '#4703A6',
          300: '#1D0259',
          400: '#150140',
          500: '#090126',
          600: '#2EF2DF',
          700: '#3316F2',
          800: '#200F8C',
        },
      },
      textShadow: {
        // Nombre de la clase
        'custom': '2px 2px 4px rgba(168, 85, 247, 0.5)', // Personaliza la sombra de texto aquí
      },
    },
  },
  plugins: [],
}
