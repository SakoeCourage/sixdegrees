import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#BF1C2C',
        'primary-gray': '#F5F5F7',
        'primary-text-gray': '#1e293b',
        'light-gray': '#707070',
        'deep-gray': '#a1a2a5',
        'deeper-gray': '#2d2f31',
        'deep-dark': '#202328',
        'primary-orange': '#efae0f',
        'primary-beige': '#867463',
        'gradient-dark': "#363A3E",
        'light-dark': '#2d2f31',
        'light-white': '#f0fdfa',
      }
    },
  },
  plugins: [],
}
export default config
