/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 10px rgb(190 24 93), 0 0 10px rgb(190 24 93) inset",
      },
    },
  },
  plugins: [],
};
