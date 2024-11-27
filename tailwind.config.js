/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pextralight: ["poppins200", "sans-serif"],
        plight: ["poppins300", "sans-serif"],
        pregular: ["poppins400", "sans-serif"],
        pmedium: ["poppins500", "sans-serif"],
        psemibold: ["poppins600", "sans-serif"],
        pbold: ["poppins700", "sans-serif"],
        pextrabold: ["poppins800", "sans-serif"],
        pblack: ["poppins900", "sans-serif"],
      }
    },
  },
  plugins: [],
}