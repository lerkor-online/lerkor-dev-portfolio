/** @type {import('tailwindcss').Config} */
module.exports = {
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
          whitecustom: '#F2F2F2',
          blackcustom: '#0D0D0D',
        },
        dark: {
          primary: '#9305F2',
          secondary: '#4703A6',
          tertiary: '#1D0259',
          background: '#150140',
          text: '#090126',
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
