/**
 * Color namer https://colornamer.robertcooper.me/
 */

const colors = {
  aqua: {
    50: "#aae9d2",
    100: "#99e5ce",
    200: "#79ddcc",
    300: "#58d4d0",
    400: "#38bdcc",
    500: "#2c8daa",
    600: "#226186",
    700: "#193d61",
    800: "#10203d",
    900: "#060a18",
    950: "#020206",
  },
  carotte: {
    400: "#ed5215",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
    white: "#ffffff",
    black: "#000000",
  },
};

const colorSchemes = {
  light: {
    primary: "188deg 84% 35%",
    secondary: "8 84% 50%",
    background: "0 0% 98%",
    surface: "188 27% 94%",
    border: "188 48% 80%",
    text: "0 0% 4%",
    fadeText: "188 12% 32%",
    shadow: "188deg 100% 18%",
  },
  dark: {
    primary: "188deg 84% 28%",
    secondary: "8 84% 43%",
    background: "0 0% 4%",
    surface: "202 10% 10%",
    border: "208 27% 15%",
    text: "0 0% 98%",
    fadeText: "188 12% 70%",
    shadow: "188deg 100% 18%",
  },
};

module.exports = { colors, colorSchemes };
