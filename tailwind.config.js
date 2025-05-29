/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#E9E6F8",
        secondary: "#1E00B9",
      },
      borderRadius: {
        16: 16,
        14:14,
        8: 8,
        7: 7,
        4: 4,
      },
      borderColor: {
        neutrals: "#B1B0B8",
        primary: "#1E00B9",
      },
      borderWidth: {
        1: 1,
      },
      textColor: {
        body: "#04001A",
        primary: "#1E00B9",
        secondary: "#B4E13C",
        neutrals: "#8C8A96",
      },
      fontSize: {
        "heading-1": 36,
        "heading-2": 32,
        "heading-3":29,
        "heading-4": 26,
        "heading-5": 23,
        "heading-6": 20,
        base: 16,
      },
      fontWeight: {
        extrabold:900,
        bold: 700,
        semibold: 600,
        medium: 500,
        regular:400
      },
    },
  },
  plugins: [],
};
