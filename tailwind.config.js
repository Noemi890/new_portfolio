/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'glassCard': '11px -10px 0px -14px rgba(255,255,255,0.79) inset, -1.5px -1.5px 15px -2px rgba(0,0,0,0.35)',
      },
      borderRadius: {
        'borderCard': '1px solid rgba(43, 43, 43, 0.568)'
      }
    }
  },
  plugins: [require("daisyui")]
}
