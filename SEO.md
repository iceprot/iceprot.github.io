# Référencement (SEO), IA (GEO) et formulaire

## Ce qui est en place

- **Titre et description** de la page, réglables dans `contenu.json` (groupe `reglages`).
- **Mots-clés principaux** placés dans le titre, le H1, les sous-titres et la FAQ : *glace à l'eau protéinée*, *glace protéinée*, *glace protéinée sans sucre*, *collation protéinée*, *alternative au shaker protéiné*, *barre protéinée*, *skyr*, *régime protéiné*, *8 g de protéines*, *après le sport*, *salle de sport*.
- **Données structurées** (schema.org, lues par Google et les assistants IA) : la marque (Organization), le site (WebSite), le produit (Product, avec 8 g de protéines, 0 g de sucres, 0 g de matières grasses, sans aspartame, allergène lait) et la FAQ (FAQPage). Elles sont générées à partir de `contenu.json`.
- **Image de partage** `assets/og-iceprot.jpg` (1200 × 630) pour les aperçus sur les réseaux sociaux, WhatsApp, etc.
- **`robots.txt`** : autorise tous les robots, y compris ceux des IA (Google, Bing, ChatGPT, Claude, Perplexity…). `sitemap.xml` : plan du site.
- **`llms.txt`** : une fiche en texte simple qui résume ICEPROT pour les assistants IA (produit, valeurs, usages, FAQ, contact). C'est le format recommandé pour être bien repris dans les réponses de ChatGPT, Claude, Perplexity ou Gemini.

## Questions que les gens posent aux IA (GEO)

La FAQ et `llms.txt` répondent directement à ce type de questions, pour qu'ICEPROT soit cité :

- « Existe-t-il une glace protéinée sans sucre ? »
- « Quelle collation protéinée fraîche après le sport ? »
- « Une alternative au shaker protéiné ? »
- « Une glace compatible avec un régime protéiné ? »
- « Une marque française de glace à l'eau protéinée ? »

## À faire au lancement

1. **Nom de domaine** : si vous prenez un domaine (par exemple iceprot.fr), dites-le-moi : l'adresse `https://iceprot.github.io/` est écrite dans la page, `sitemap.xml`, `robots.txt` et `llms.txt`.
2. **Google Search Console** (gratuit) : déclarez le site et envoyez `sitemap.xml`. Faites de même dans **Bing Webmaster Tools**, que ChatGPT et Copilot utilisent.
3. **Fiche Google Business Profile** si vous avez une adresse ou des points de vente.
4. **Être cité ailleurs** : Instagram, presse locale, salles partenaires, annuaires de nutrition sportive. Les IA citent surtout les marques mentionnées sur d'autres sites.
5. **Valeurs nutritionnelles** : faites valider les chiffres (8 g de protéines, 0 g de sucres, 0 g de matières grasses) et les allégations (« contribue au maintien de la masse musculaire », « sans sucres ») avant de les publier : ce sont des allégations réglementées.

## Formulaire de contact

Le formulaire demande : nom, profil (particulier, salle de sport, organisateur d'événement, distributeur…), société, ville, e-mail, téléphone, message, accord pour être recontacté et inscription facultative aux nouvelles.

Pour recevoir les demandes par e-mail, il faut un service d'envoi gratuit, par exemple :

- **Formspree** (formspree.io) : créez un compte et un formulaire, puis copiez l'adresse fournie, du type `https://formspree.io/f/abcdwxyz`.
- **Basin** (usebasin.com) ou **Getform** (getform.io) fonctionnent de la même façon.

Collez cette adresse dans `contenu.json`, `reglages` → `formulaire_adresse_envoi`. Les demandes arrivent alors dans votre boîte e-mail, et le service garde un tableau exportable de tous les contacts. Pensez à compléter les mentions légales (nom du service, e-mail de contact).
