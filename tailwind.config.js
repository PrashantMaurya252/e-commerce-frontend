/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screen:{
        "screen-1350":{min:'0px',max:'1350px'},
        "screen-1100":{min:'0px',max:'1100px'},
        "screen-900":{min:'0px',max:'900px'},
        "screen-700":{min:'0px',max:'700px'},
        "screen-400":{min:'0px',max:'400px'},
      }
  	}
  },
  plugins: [require("tailwindcss-animate"),addDynamicIconSelectors()],
};
