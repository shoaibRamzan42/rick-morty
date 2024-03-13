/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
        Slackey: ['Slackey', 'sans-serif'],

      },
      screens: {
        "sm":"320px",
        "md":"768px",
        "lg":"1024px",
        }
    },

   
  },
  plugins: [],
}

