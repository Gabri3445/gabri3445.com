/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        kaguya: "url('/background.png')",
      },
    },
    fontFamily: {
      sans: "Lucida Console, Lucida Sans Unicode, Fira Mono, Consolas, Courier New, Courier, monospace, Times New Roman",
    },
  },
  plugins: [],
};
