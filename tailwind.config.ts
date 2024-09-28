import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./node_modules/theme/dist/components/(button|popover|ripple|spinner).js",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Inter", "sans-serif"],
         },
      },
   },
};

export default config;
