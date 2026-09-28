/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17202a',
        paper: '#f6f7f4',
        blue: '#164b72',
        line: '#dbe1e3',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 16px 40px rgba(23, 32, 42, 0.06)',
      },
    },
  },
  plugins: [],
}
