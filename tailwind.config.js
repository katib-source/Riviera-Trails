/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "riviera-blue": "#0077BE",
        "sand-beige": "#F5F5DC",
        "sunset-orange": "#FF6B35",
        "mediterranean-teal": "#20B2AA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
