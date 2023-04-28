// vite.config.ts
import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    Unfonts({
      // Google Fonts API V2
      google: {
        families: [
          // families can be either strings (only regular 400 will be loaded)

          // "Noto Sans",

          // or objects
          {
            /**
             * Family name (required)
             */
            name: "Noto Sans",

            /**
             * Family styles
             */
            styles: "ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
          },
        ],
      },
    }),
  ],
});
