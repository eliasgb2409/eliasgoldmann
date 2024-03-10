import type { Config } from "tailwindcss";


//const defaultTheme = require("tailwindcss/defaultTheme");
//const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
				fade: 'fadeIn 1.5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Code from UI component: https://ui.aceternity.com/components/tracing-beam
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


export default config;
