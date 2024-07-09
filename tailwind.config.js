/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        "Primary-Assistive": "#ffe28a",
        "Primary-Normal": "#ffcb51",
        "Primary-Strong": "#fbb62d",
        "Primary-Heavy": "#ef9906",
        "Primary-Dark": "#a35a00",
        "Primary-950": "#7a3d00",
        "Primary-DeepDark": "#522500",
        "Primary-A-Assistive": "#ffe380",
        "Primary-A-Normal": "#ffcb51",
        "Primary-A-Strong": "#fbb449",
        "Primary-A-Heavy": "#f48e3a",
        "Primary-A-Line": "#ffed9e",
        "Primary-A-Fill": "#fff5bd",
        "Primary-A-Background": "#fffce5",
        "Text-Strong": "#000000",
        "Text-Normal": "#272520",
        "Text-Alternative": "#878682",
        "Text-Assistive": "#bab9b5",
        "Text-Disable": "#cfcfcf",
        "Fill-Primary-Assistive": "#fff8d6",
        "Fill-Primary-Normal": "#fff2bd",
        "Fill-Primary-Strong": "#ffeaa3",
        "Fill-Primary-Background": "#fffceb",
        "Fill-Gray-Assistive": "#f4f3f1",
        "Fill-Gray-Normal": "#e8e7e4",
        "Fill-Gray-Strong": "#d1d0cc",
        "Fill-Gray-Disable": "#e6e6e6",
        "Line-Primary-Assistive": "#fff2bd",
        "Line-Primary-Normal": "#ffeaa3",
        "Line-Primary-Strong": "#ffe28a",
        "Line-Gray-Assistive": "#e8e7e4",
        "Line-Gray-Normal": "#d1d0cc",
        "Line-Gray-Strong": "#bab9b5",
        "Line-Gray-Disable": "#cfcfcf",
        "Background-Primary": "#f4f3f1",
        "Background-Secondary": "#ffffff",
        "Background-Tertiary": "#f4f3f1",
        "Caution-Normal": "#f44336",
        "Caution-Strong": "#eb1e0f",
        "Caution-Heavy": "#c01a0c",
        "Caution-Dark": "#71130d",
        "Line-Caution-Assistive": "#fcaca6",
        "Line-Caution-Normal": "#fa7f76",
        "Line-Caution-Strong": "#f9665b",
        "Fill-Caution-Assistive": "#fdc8c4",
        "Fill-Caution-Normal": "#fcaca6",
        "Fill-Caution-Strong": "#fa7f76",
      },
      boxShadow: {
        // md: "0 18px 28px 0px rgba(0, 0, 0, 0.2)",
      },
      clipPath: {
        // Custom utility name
        "inset-400": "inset(400px 0 0 0)", // Custom utility value
        // Add more custom values as needed
      },
      screens: {
        xsm: "360px",
        sm: "500px",
        md: "694px",
        lg: "976px",
        xl: "1440px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  variants: {
    extend: {
      clipPath: ["responsive"], // Add responsive variant if needed
    },
  },
  plugins: [],
};
