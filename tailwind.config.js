module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'down-bg': '#1A0707',
        'down-text': '#FF4D4D',
        'up-bg': '#011509',
        'up-text': '#6CCF59',
      }
    },
  },
  plugins: [],
};
