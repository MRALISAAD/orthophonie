const routes = ["", "/services", "/services/bilan-orthophonique", "/services/suivi-personnalise", "/services/conseils-parents", "/reperes", "/ressources", "/ressources/quand-consulter-orthophoniste", "/ressources/stimuler-langage-maison", "/ressources/bilinguisme-langage", "/a-propos", "/contact", "/mentions-legales", "/politique-confidentialite"];

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return routes.map((route) => ({ url: `${baseUrl.replace(/\/$/, "")}${route}`, lastModified: new Date() }));
}
