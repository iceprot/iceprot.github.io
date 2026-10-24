# Modifier le site

Tous les textes de la page d'accueil et l'affichage des blocs se règlent dans un seul fichier : **`contenu.json`**, à la racine du dépôt.

## Modifier depuis github.com

1. Ouvrez le dépôt sur github.com, branche `main`, et cliquez sur `contenu.json`.
2. Cliquez sur l'icône crayon (« Edit this file »).
3. Trouvez le groupe du bloc à modifier (ils sont dans l'ordre de la page), changez les textes entre guillemets, ou passez `afficher` de `true` à `false`.
4. Cliquez sur **Commit changes…**, puis de nouveau sur **Commit changes**.
5. Le site se met à jour en une à deux minutes. Rechargez la page pour voir le résultat.

Après chaque enregistrement, une vérification automatique se lance (onglet **Actions**). Une croix rouge signale une erreur, avec la ligne à corriger. Le site continue alors d'afficher les textes de la dernière version valide.

## Comment le fichier est organisé

`contenu.json` suit l'ordre de la page, de haut en bas. Chaque bloc a son groupe :

```json
"hero": {
  "bloc": "2. Hero (haut de page, avec la vidéo)",
  "afficher": true,
  "textes": {
    "hero.surtitre": "Délicieuse et rafraîchissante",
    "hero.titre": "Glace à l'eau protéinée *fuel your next level*"
  }
},
```

- **`bloc`** : le nom et la place du bloc dans la page, pour se repérer (à ne pas modifier).
- **`afficher`** : `true` pour afficher le bloc, `false` pour le masquer, **sans guillemets**. Un bloc masqué n'est pas supprimé, et ses liens dans le menu et le pied de page disparaissent aussi.
- **`textes`** : à gauche le nom du champ (à ne pas modifier), à droite le texte affiché (à modifier).

## Règles d'écriture

- Chaque texte reste **entre guillemets droits** `"…"`. Chaque ligne se termine par une virgule, sauf la dernière d'un groupe.
- Pour écrire un guillemet dans un texte, utilisez les guillemets français « » ou l'apostrophe typographique ’.
- `*mots*` : passe ces mots en manuscrit corail dans les titres.
- `**mots**` : met ces mots en gras.

## Les blocs

| Groupe | Bloc | Au lancement | Nombre de textes |
|---|---|---|---|
| `entete` | 1. En-tête (menu du haut) | affiché | 9 |
| `hero` | 2. Hero (haut de page, avec la vidéo) | affiché | 6 |
| `benefices` | 3. Bandeau 8 g / 0 g / 0 g | affiché | 3 |
| `produit` | 4. Produit vedette (tube, prix, boutons) | affiché | 20 |
| `inscription` | 5. Inscription communauté (formulaire) | affiché | 5 |
| `profils` | 6. Profils (8 cartes) | masqué | 18 |
| `pourquoi` | 7. Pourquoi ICEPROT | masqué | 18 |
| `proteines-101` | 8. Protéines 101 | masqué | 12 |
| `comparatif` | 9. Comparatif (tableau) | masqué | 13 |
| `faq` | 10. FAQ (questions) | affiché | 11 |
| `final` | 11. Appel final (bas de page) | affiché | 4 |
| `pied` | 12. Pied de page | affiché | 1 |

Les textes des blocs masqués peuvent être préparés à l'avance : ils apparaîtront tels quels le jour où le bloc sera réaffiché.

## Médias à fournir

- **Vidéo du hero** : MP4 (H.264) en 1920×1080, 8 à 15 s en boucle, sans son, moins de 5 Mo. Une version verticale pour mobile est un plus. Fichier à remplacer : `assets/video/hero-provisoire.mp4` (et l'image d'attente `assets/video/hero-poster.jpg`).
- **Photo du bloc Inscription** : photo d'ambiance en paysage, 2400 px de large.
- **Photo du bloc Pourquoi ICEPROT** : photo produit en portrait (4:5).
- **Liens** : réseaux sociaux, CGV, livraison, confidentialité, page revendeur (à me transmettre, ils ne sont pas dans `contenu.json`).
