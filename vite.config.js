import { fileURLToPath, URL } from "node:url";
import { dirname, resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools({ launchEditor: "webstorm" })],
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exampleProject: resolve(__dirname, "./example-project/app.html"),
        myClock: resolve(__dirname, "./my-clock/app.html"),
        noRollover: resolve(__dirname, "./no-rollover/app.html"),
        dynamicList: resolve(__dirname, "./dynamic-list/app.html"),
        countdownTimer: resolve(__dirname, "./countdown-timer/app.html"),
      },
    },
  },
});
