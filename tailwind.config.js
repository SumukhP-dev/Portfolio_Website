/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  allowJs: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/postcss"],
  content: ["./src/**/*.{html,ts,scss}"],
};
