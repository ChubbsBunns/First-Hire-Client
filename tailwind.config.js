/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const plugin = require('tailwindcss/plugin');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-teal': '#052f38',
        'custom-turqoise': '#00ffff',
        'custom-lightblue': '#0acdff',
        'custom-blue': '#0000ff',
        'custom-dark-blue': '#001052',
        'custom-green': '#64ff64',
        'custom-lightest-blue': '#64ffff',

        'custom-core-background': '#f2f4f7',
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, plugin(function ({ addUtilities }) {
    addUtilities({
      '.scroll-hidden': {
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none', /* Firefox */
      },
      '.scroll-hidden::-webkit-scrollbar': {
        display: 'none', /* Chrome, Safari, and Opera */
      },
    });
  }),]
};

function addVariablesForColors({ addBase, theme }) {
  function flattenColorPalette(colors) {
    return Object.keys(colors).reduce((flatColors, colorKey) => {
      const colorValue = colors[colorKey];
      if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, value]) => {
          flatColors[`${colorKey}-${shade}`] = value;
        });
      } else {
        flatColors[colorKey] = colorValue;
      }
      return flatColors;
    }, {});
  }

  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}