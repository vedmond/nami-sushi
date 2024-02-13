/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Red Hat Display', 'sans-serif']
      }
    }
  },
  plugins: []
}
