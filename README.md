# iceprot.github.io

Site de lancement ICEPROT — glace à l'eau protéinée. Construit avec **Astro** et hébergé sur **Cloudflare** (Workers, gratuit), comme le site Mosily. Chaque modification de la branche `main` est publiée automatiquement.

- `contenu.json` : **tous les textes de la page et l'affichage de chaque bloc** (`true` / `false`). C'est le fichier à modifier, directement sur github.com. Il est appliqué au moment de la construction du site : les textes sont directement dans la page (meilleur pour Google).
- `src/modele/index.html` : la mise en page de l'accueil (structure inspirée d'ofuel.co), avec les valeurs par défaut des textes.
- `src/pages/index.html.ts` : assemble le modèle et `contenu.json` pour produire la page finale.
- `worker/index.ts` : fonction Cloudflare qui reçoit le formulaire (`/api/contact`) et crée une fiche dans le **CRM ICEPROT** sur Notion (base « Demandes »). L'e-mail part en parallèle via Formspree.
- `public/` : fichiers publiés tels quels (`assets/`, `mentions-legales.html`, `llms.txt`, `robots.txt`, `sitemap.xml`).
- `CHAMPS.md` : mode d'emploi de `contenu.json`, liste des blocs et des champs, médias à fournir.
- `SEO.md` : référencement Google et IA, formulaire de contact.
- `MEDIAS.md` : comment obtenir les photos et vidéos du site (photos maison, banques gratuites, IA vidéo et image, consignes prêtes à copier).
- `archives/` et `v1.html` : versions précédentes (non publiées sur le site).
- `.github/workflows/verifier-contenu.yml` : vérifie `contenu.json` à chaque modification.

Le wordmark est Poppins ExtraBold vectorisé (approche −0,025 em). Le filet en réserve va du fût du I au fût du T, centré sur la barre centrale du E, épaisseur 7,5 % de la hauteur des capitales.

## Skill Claude Code

`.claude/skills/ui-ux-pro-max/` : skill de design [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (licence MIT, commit `56ea9cf`), chargé automatiquement par Claude Code dans ce dépôt. Le script de recherche se lance depuis la racine du dépôt avec `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<requête>" --domain <domaine>`. La charte ICEPROT reste prioritaire sur ses recommandations (palettes notamment).

## Couleur d'accent

Le corail remplace l'orange du brief initial : `#EC4E44` (principal), `#FF6B5E` (clair, survols), `#C8382F` (foncé). La glace du tube garde sa couleur de parfum (orange sanguine) et le favicon garde la palette de l'avatar Instagram.

## Mise en ligne (Cloudflare)

Projet Cloudflare `iceprot-site`, relié à ce dépôt (branche `main`) :

- Commande de build : `npm run build`
- Commande de déploiement : `npx wrangler deploy`
- Variable de build : `NODE_VERSION` = `22`
- Secret d'exécution (Settings → **Runtime variables and secrets**, pas la section Build) : `NOTION_TOKEN`, clé de l'intégration Notion « Site ICEPROT » connectée à la page CRM ICEPROT.

Lancer en local : `npm install`, puis `npm run dev` (site seul) ou `npm run build && npx wrangler dev` (site + fonction du formulaire).
