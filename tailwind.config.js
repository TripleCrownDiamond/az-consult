/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'az-blue': '#3B82F6',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.8)', // az-blue with 80% opacity
      }
    },
  },
  plugins: [],
}