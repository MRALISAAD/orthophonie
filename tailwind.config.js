/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22557A",
        accent: "#EA764B",
        cream: "#FAF7F2",
        "pale-blue": "#EDF4F8",
        "text-dark": "#2D3436",
        "text-muted": "#636E72",
        "soft-green": "#7CB9A0",
        sand: "#F0E6D3",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Nunito", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(34, 85, 122, 0.12)",
      },
    },
  },
  plugins: [],
};
