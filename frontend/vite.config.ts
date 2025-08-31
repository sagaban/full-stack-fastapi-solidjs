import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import viteSolid from "vite-plugin-solid";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      root: "./",
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      customViteSolidPlugin: true,
      spa: {
        prerender: { enabled: false },
        enabled: true,
      },
    }),
    viteSolid({ ssr: true }),
  ],
});
