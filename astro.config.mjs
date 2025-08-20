import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://lferreira-astro.netlify.app/",
  integrations: [preact()]
});