/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
