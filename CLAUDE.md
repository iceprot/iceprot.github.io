# Projet : site ICEPROT

Passation du projet. Lire en entier avant de commencer et tenir à jour (décisions, liens, choses à faire). Le propriétaire n'est pas développeur : expliquer simplement, en français, et demander avant toute action irréversible.

## Contexte

- ICEPROT : marque française de glace à l'eau protéinée (8 g de protéines, 0 g de sucres). Instagram @iceproteine. Charte : voir README (corail `#EC4E44`, wordmark Poppins ExtraBold).
- Même propriétaire que Mosily (dépôt `simongeorgy/mosily-site`), même méthode : **Astro + Cloudflare (gratuit) + Formspree + CRM Notion**. Les deux sociétés restent **séparées** (dépôts, projets Cloudflare, CRM Notion, clés Notion).
- Ce dépôt (`iceprot/iceprot.github.io`) est **public** : ne jamais y mettre de clé ou de secret.

## Décisions (25/11/2026)

- Passage de GitHub Pages à **Astro + Cloudflare**, en partant de la dernière version (branche `claude/new-session-l0kwou`). Page générée à la construction : `src/modele/index.html` + `contenu.json` → `dist/index.html` (rendu identique au pixel près à l'ancienne version, sauf le badge tournant). Le propriétaire continue de modifier les textes dans `contenu.json` (mode d'emploi : `CHAMPS.md`).
- **Pas encore de nom de domaine.** Les adresses `https://iceprot.github.io/` dans le `<head>`, `sitemap.xml`, `llms.txt` et `robots.txt` sont à remplacer le jour où le domaine sera choisi.
- **CRM ICEPROT** dans Notion : page « CRM ICEPROT » (https://app.notion.com/p/4237f5cffb548159aaf9d82393a9a441, privée), base **Demandes** (database `4237f5cffb5481de8343d2b141ea4efe`, data source `collection://4237f5cf-fb54-8150-a822-000b72a589ae`) : Nom, Profil, Société, Ville, E-mail, Téléphone, Message, Statut (Nouvelle, En cours, Devis envoyé, Gagnée, Perdue), Accord contact, Newsletter, Source, Origine, Reçue le, Prochaine action, Notes, Réf (ICE-DM-n). Vue « Suivi par statut ». Plus tard : bases **Clients** et **Commandes**.
- Formulaire : le navigateur envoie en parallèle à **Formspree** `https://formspree.io/f/mzeeaazp` (e-mail, réglé dans `contenu.json` → `reglages.formulaire_adresse_envoi`) et à **`/api/contact`** (fonction `worker/index.ts` → fiche Notion). Ne pas relayer Formspree depuis le serveur : chez Mosily, les envois relayés étaient classés en spam et aucun e-mail n'arrivait. Formspree : garder reCAPTCHA **désactivé** (sinon erreur 403 en AJAX), surveiller l'onglet Spam.
- Le compte Formspree est au nom de l'adresse ICEPROT (offre gratuite : 2 adresses e-mail, ~50 envois/mois partagés avec Mosily).

## Pièges Cloudflare (appris sur Mosily)

- Le secret `NOTION_TOKEN` va dans **Settings → Runtime variables and secrets**, pas dans la section Build.
- Modifier un réglage depuis un onglet du tableau de bord ouvert depuis longtemps peut republier un **ancien code** : recharger la page avant, et vérifier ensuite que la dernière version correspond au dernier commit de `main`.
- Le bouton « Add Domain » d'un Worker peut ouvrir l'ajout d'une nouvelle zone : pour brancher un domaine, passer par des enregistrements DNS + routes (voir la passation Mosily).

## À faire

- [ ] Propriétaire : autoriser l'application Cloudflare sur le dépôt `iceprot/iceprot.github.io`, créer le projet Worker `iceprot-site` (build `npm run build`, déploiement `npx wrangler deploy`, branche `main`, `NODE_VERSION=22`).
- [ ] Propriétaire : créer l'intégration Notion « Site ICEPROT » (jeton d'API), la connecter à la page CRM ICEPROT, coller la clé en secret `NOTION_TOKEN` (Runtime).
- [ ] Désactiver GitHub Pages sur ce dépôt une fois le site en ligne sur Cloudflare.
- [ ] Nom de domaine, puis mise à jour des adresses (head, sitemap, llms.txt, robots.txt) et restriction de domaine Formspree.
- [ ] Mentions légales : champs entre crochets à compléter (Cloudflare et Notion déjà ajoutés le 25/11/2026).
