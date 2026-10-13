import { defineConfig } from 'astro/config'
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

import robotsTxt from "astro-robots-txt"

// SITE_URL: dominio propio. Si no está, se usa la URL de producción que
// exponen Vercel o Netlify durante el build.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NETLIFY && process.env.URL
      ? process.env.URL
      : 'http://localhost:4321')

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), robotsTxt()],
  // Astro 7 usa por defecto las reglas de espacios de JSX, que pegan
  // "texto<a>" cuando hay un salto de línea entre ambos. `true` mantiene
  // la compresión sin pérdida de las versiones anteriores.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  site
})
