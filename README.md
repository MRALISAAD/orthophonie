# Aya Orthophonie

Site public en français pour Aya Orthophonie — Guidance et Langage. Le projet utilise Next.js App Router, React et Tailwind CSS.

## Installation

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Configuration

Le formulaire de contact refuse les envois tant que les variables suivantes ne sont pas configurées côté serveur :

- `RESEND_API_KEY` : clé privée Resend, jamais exposée au navigateur.
- `CONTACT_FROM_EMAIL` : adresse expéditrice vérifiée auprès du fournisseur.
- `CONTACT_TO_EMAIL` : boîte professionnelle destinataire.
- `NEXT_PUBLIC_SITE_URL` : URL de production vérifiée, utilisée pour les métadonnées, le sitemap et le contrôle d’origine.

Ne transmettez aucune donnée médicale via le formulaire général.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

ESLint est configuré avec `eslint-config-next` et s’exécute sans assistant interactif. Le build Next.js effectue la compilation et le pré-rendu des pages; aucun framework de tests navigateur n’est installé actuellement.

## Contact et sécurité

`POST /api/contact` valide les champs côté serveur, limite la taille de la requête, vérifie l’origine lorsque le domaine est configuré, applique un anti-spam honeypot et une limitation locale de fréquence. Pour un déploiement serverless multi-instance, remplacer cette dernière par un limiteur partagé avant ouverture publique.

Le contenu légal, l’identité professionnelle, les coordonnées, les règles de conservation et le domaine doivent être validés par le responsable du site avant production. Aucune disponibilité de rendez-vous n’est publiée.

## Déploiement

Déployer sur un hébergeur compatible Next.js, définir les quatre variables d’environnement en production, vérifier le domaine et exécuter `npm run build`. Tester ensuite les pages publiques et le formulaire avec un fournisseur email configuré. Voir `IMPLEMENTATION_REPORT.md` pour la checklist complète.
