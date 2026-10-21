# iceprot.github.io

Site de lancement ICEPROT — glace à l'eau protéinée. Pages statiques servies par GitHub Pages, sans étape de build.

- `index.html` : page d'accueil complète (structure inspirée d'ofuel.co) avec hero vidéo.
- `contenu.json` : **tous les textes de la page et l'affichage de chaque bloc** (`true` / `false`). C'est le fichier à modifier, directement sur github.com.
- `CHAMPS.md` : mode d'emploi de `contenu.json`, liste des blocs et des champs, médias à fournir.
- `.github/workflows/verifier-contenu.yml` : vérifie `contenu.json` à chaque modification.
- `v1.html` : première version, page unique rédigée d'après le brief de marque.
- `mentions-legales.html` : mentions légales (champs entre crochets à compléter).
- `assets/` : logos, favicon, et `video/` (vidéo et affiche provisoires, à remplacer).

Le wordmark est Poppins ExtraBold vectorisé (approche −0,025 em). Le filet en réserve va du fût du I au fût du T, centré sur la barre centrale du E, épaisseur 7,5 % de la hauteur des capitales.

## Skill Claude Code

`.claude/skills/ui-ux-pro-max/` : skill de design [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (licence MIT, commit `56ea9cf`), chargé automatiquement par Claude Code dans ce dépôt. Le script de recherche se lance depuis la racine du dépôt avec `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<requête>" --domain <domaine>`. La charte ICEPROT reste prioritaire sur ses recommandations (palettes notamment).

## Couleur d'accent

Le corail remplace l'orange du brief initial : `#EC4E44` (principal), `#FF6B5E` (clair, survols), `#C8382F` (foncé). La glace du tube garde sa couleur de parfum (orange sanguine) et le favicon garde la palette de l'avatar Instagram.
