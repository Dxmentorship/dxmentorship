module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dx-bg-primary": "#f7f7f7",
        "dx-bg-secondary": "#f7f7f7",
        "dx-bg-tertiary": "#f7f7f7",
        "dxt-accents-1": "#1d3557",
        "dxt-accents-2": "#e63946",
      },
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        // "sourc": ["Russo One", "sans-serif"],
      },
      colors:{
        "orange-accent": "#EB4511"
      }
    },
  },
  plugins: [],
}