import { defineConfig } from 'astro/config'
import sitemap from "@astrojs/sitemap"

import robotsTxt from "astro-robots-txt"

// SITE_URL: dominio propio. En Vercel se usa la URL de producción del proyecto.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321')

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), robotsTxt()],
  // Astro 7 usa por defecto las reglas de espacios de JSX, que pegan
  // "texto<a>" cuando hay un salto de línea entre ambos. `true` mantiene
  // la compresión sin pérdida de las versiones anteriores.
  compressHTML: true,
  site
})
