/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        ["color-theme-1"] : "#abc5a0",
        ["color-theme-1.1"]:"#cae5bf",
        ["color-theme-2"] : "#f09391",
        ["color-theme-2.1"] : "#fad5c4",
        ["color-theme-3"] : "#502e0a",
        ["color-theme-3.1"] : "#574129",
        ["color-input"]:"#e2e8f0",//Input Background
        ["color-text"] : "#475569" //Text
      },
      fontSize : {
        sm : "0.85rem",
        base: '1rem',
        md : '1.15rem',
        lg : "1.3rem",
        xl: '1.5rem',
        '2xl': '3rem',
        '3xl': '4.5rem',
        '4xl': '6rem',
        '5xl': '7.5rem',
      }
    },

  },
  plugins: [],
}
