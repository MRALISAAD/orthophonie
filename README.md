# Orthophonie — site vitrine

Site web vitrine pour un cabinet d'orthophonie pédiatrique : présentation des services, repères de développement du langage par âge, ressources pour les parents et formulaire de contact.

## Fonctionnalités

- Pages **Services** (bilan orthophonique, suivi personnalisé, conseils aux parents, ressources éducatives)
- **Repères** du développement du langage par tranche d'âge
- **Ressources** et articles pour les parents
- Page **À propos**, **Contact** (formulaire) et **Mentions légales**
- Design responsive, composants réutilisables (cartes, sections, CTA)
- Contenu centralisé dans `data/site.js` (facile à modifier sans toucher aux pages)

## Stack technique

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18
- Tailwind CSS

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de production :

```bash
npm run build
npm start
```

## Structure

```
app/          # Pages (App Router) : accueil, services, repères, ressources, à propos, contact…
components/   # Composants UI réutilisables (Header, Footer, cartes, sections…)
data/site.js  # Contenu du site (navigation, services, repères…)
```

## Auteur

Ali Saad — [github.com/MRALISAAD](https://github.com/MRALISAAD)
