module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dxt-bg-primary": "#00043a",
        "dxt-bg-secondary": "#f7f7f7",
        "dxt-bg-tertiary": "#f7f7f7",
        "dxt-accents-1": "#1d3557",
        "dxt-accents-2": "#e63946",
        "dxt-accents-3": "#03045e",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        // "sourc": ["Russo One", "sans-serif"],
      },
      colors: {
        "orange-accent": "#EB4511",
        "blue-accent": "#03045e",
      },
    },
  },
  plugins: [],
};
