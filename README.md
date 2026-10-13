# Portfolio de Diego Sarmiento

Sitio personal: backend con Python, FastAPI y PostgreSQL, y análisis de operación de negocio.

- **Inicio**: experiencia, proyectos, skills y sobre mí.
- **Casos de estudio**: `/proyectos/vehimac`, `/proyectos/analisis-taller`, `/proyectos/yachay`.
- **CV imprimible**: `/cv`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build en dist/
npm run preview
```

## Despliegue

Sitio estático (Astro + Tailwind). La URL pública se toma de `SITE_URL`; en Vercel, si no está definida, se usa la URL de producción del proyecto. Con dominio propio:

```bash
SITE_URL=https://tu-dominio.dev npm run build
```

De esa URL salen el canonical, las etiquetas Open Graph, `sitemap-index.xml` y `robots.txt`.

## Créditos y licencia

Diseño basado en [porfolio.dev](https://github.com/midudev/porfolio.dev) de [midudev](https://github.com/midudev), bajo licencia [CC BY-NC 4.0](./LICENSE.md). El contenido (textos, casos de estudio y datos de ejemplo) es de Diego Sarmiento.
