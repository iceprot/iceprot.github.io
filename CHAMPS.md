# Modifier le site

Tous les textes de la page d'accueil et l'affichage des blocs se règlent dans un seul fichier : **`contenu.json`**, à la racine du dépôt.

## Modifier depuis github.com

1. Ouvrez le dépôt sur github.com, branche `main`, et cliquez sur `contenu.json`.
2. Cliquez sur l'icône crayon (« Edit this file »).
3. Changez les textes entre guillemets, ou passez un bloc de `true` à `false`.
4. Cliquez sur **Commit changes…**, puis de nouveau sur **Commit changes**.
5. Le site se met à jour en une à deux minutes. Rechargez la page pour voir le résultat.

Après chaque enregistrement, une vérification automatique se lance (onglet **Actions**). Une croix rouge signale une erreur, avec la ligne à corriger. Le site continue alors d'afficher les textes de la dernière version valide.

## Règles d'écriture

- Chaque texte reste **entre guillemets droits** : `"hero.titre": "Mon titre"`. Chaque ligne se termine par une virgule, sauf la dernière d'un groupe.
- Pour écrire un guillemet dans un texte, utilisez les guillemets français « » ou l'apostrophe typographique ’.
- `*mots*` : passe ces mots en manuscrit, couleur corail dans les titres (exemple : `"Post workout *game changer.*"`).
- `**mots**` : met ces mots en gras.
- Les blocs s'écrivent `true` (affiché) ou `false` (masqué), **sans guillemets**. Un bloc masqué n'est pas supprimé, et ses liens dans le menu et le pied de page disparaissent aussi.

## Les blocs

| Identifiant | Bloc | Au lancement |
|---|---|---|
| `entete` | 1. En-tête (menu) | affiché |
| `hero` | 2. Hero vidéo | affiché |
| `benefices` | 3. Bandeau 8 g / 0 g / 0 g | affiché |
| `produit` | 4. Produit vedette | affiché |
| `inscription` | 5. Inscription communauté | affiché |
| `profils` | 6. Profils (8 cartes) | masqué |
| `pourquoi` | 7. Pourquoi ICEPROT | masqué |
| `proteines-101` | 8. Protéines 101 | masqué |
| `comparatif` | 9. Comparatif | masqué |
| `faq` | 10. FAQ | affiché |
| `final` | 11. Appel final | affiché |
| `pied` | 12. Pied de page | affiché |

## Les textes

Le texte actuel de chaque champ se lit directement dans `contenu.json`. Les champs des blocs masqués peuvent être préparés à l'avance.

**1. En-tête** : `nav.boutique` `nav.boutique.1.titre` `nav.boutique.1.texte` `nav.boutique.2.titre` `nav.boutique.2.texte` `nav.boutique.3.titre` `nav.2` `nav.3` `nav.connexion`

**2. Hero vidéo** : `hero.surtitre` `hero.titre` `hero.sous-titre` `hero.texte` `hero.bouton-1` `hero.bouton-2`

**3. Bandeau bénéfices** : `benef.1` `benef.2` `benef.3`

**4. Produit vedette** : `produit.orbite.1` `produit.orbite.2` `produit.orbite.3` `produit.orbite.4` `produit.orbite.5` `produit.orbite.6` `produit.surtitre` `produit.titre` `produit.texte` `produit.picto.1` `produit.picto.2` `produit.picto.3` `produit.picto.4` `produit.point.1` `produit.point.2` `produit.point.3` `produit.prix.mention` `produit.prix` `produit.bouton-1` `produit.bouton-2`

**5. Inscription communauté** : `inscription.surtitre` `inscription.titre` `inscription.texte` `inscription.consentement` `inscription.bouton`

**6. Profils** : `profils.titre` `profils.texte` `profils.1.titre` `profils.1.texte` `profils.2.titre` `profils.2.texte` `profils.3.titre` `profils.3.texte` `profils.4.titre` `profils.4.texte` `profils.5.titre` `profils.5.texte` `profils.6.titre` `profils.6.texte` `profils.7.titre` `profils.7.texte` `profils.8.titre` `profils.8.texte`

**7. Pourquoi ICEPROT** : `pourquoi.surtitre` `pourquoi.titre` `pourquoi.texte` `pourquoi.point.1` `pourquoi.point.2` `pourquoi.point.3` `pourquoi.point.4` `pourquoi.point.5` `pourquoi.point.6` `pourquoi.rond.1.etiquette` `pourquoi.rond.1.titre` `pourquoi.rond.1.texte` `pourquoi.rond.2.etiquette` `pourquoi.rond.2.titre` `pourquoi.rond.2.texte` `pourquoi.rond.3.etiquette` `pourquoi.rond.3.titre` `pourquoi.rond.3.texte`

**8. Protéines 101** : `c101.surtitre` `c101.titre` `c101.texte` `c101.bouton` `c101.1.titre` `c101.1.texte` `c101.2.titre` `c101.2.texte` `c101.3.titre` `c101.3.texte` `c101.4.titre` `c101.4.texte`

**9. Comparatif** : `comparatif.titre` `comparatif.texte` `comparatif.colonne.2` `comparatif.colonne.3` `comparatif.ligne.1` `comparatif.ligne.2` `comparatif.ligne.3` `comparatif.ligne.4` `comparatif.ligne.5` `comparatif.ligne.6` `comparatif.ligne.7` `comparatif.ligne.8` `comparatif.bouton`

**10. FAQ** : `faq.titre` `faq.1.question` `faq.1.reponse` `faq.2.question` `faq.2.reponse` `faq.3.question` `faq.3.reponse` `faq.4.question` `faq.4.reponse` `faq.5.question` `faq.5.reponse`

**11. Appel final** : `final.titre` `final.texte` `final.bouton-1` `final.bouton-2`

**12. Pied de page** : `pied.mention`

## Médias à fournir

- **Vidéo du hero** : MP4 (H.264) en 1920×1080, 8 à 15 s en boucle, sans son, moins de 5 Mo. Une version verticale pour mobile est un plus. Fichier à remplacer : `assets/video/hero-provisoire.mp4` (et l'image d'attente `assets/video/hero-poster.jpg`).
- **Photo du bloc Inscription** : photo d'ambiance en paysage, 2400 px de large.
- **Photo du bloc Pourquoi ICEPROT** : photo produit en portrait (4:5).
- **Liens** : réseaux sociaux, CGV, livraison, confidentialité, page revendeur (à me transmettre, ils ne sont pas dans `contenu.json`).
