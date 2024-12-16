/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5038E6",
        black: "#111111",
        "matte-black": '#1c1c1c',
        "matte-white": '#fdfbf9',
        grey: '#848484'
      },
    },
  },
  plugins: [],
};
