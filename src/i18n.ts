export type Lang = "es" | "en"

export const getLang = (url: URL): Lang =>
  /^\/en(\/|$)/.test(url.pathname) ? "en" : "es"

/** Prefija una ruta interna con /en cuando el idioma es inglés. */
export const localize = (lang: Lang, path: string) =>
  lang === "en" ? `/en${path}` : path

/** Ruta de la misma página en el otro idioma. */
export const alternatePath = (url: URL) =>
  getLang(url) === "en"
    ? url.pathname.replace(/^\/en/, "") || "/"
    : `/en${url.pathname}`
