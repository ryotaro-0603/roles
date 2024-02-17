import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "pt-br", "es"]
  },
  output: "server",
  adapter: vercel()
});