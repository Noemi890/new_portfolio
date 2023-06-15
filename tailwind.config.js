/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui")],
}
