# Photos et vidéos du site

Le haut de page affiche pour l'instant un **visuel illustré** du tube dans la glace (`assets/hero-glace.jpg`). La **vidéo provisoire** reste dans `assets/video/`. Voici comment obtenir de vrais médias, puis les envoyer à Claude pour qu'il les intègre.

## Formats attendus

| Média | Format | Dimensions | Remarques |
|---|---|---|---|
| Vidéo du haut de page | MP4 (H.264) | 1920 × 1080 (16:9) | 8 à 15 s en boucle, sans son, moins de 5 Mo. Une version verticale 9:16 pour le mobile est un plus. |
| Photo du haut de page | JPG | au moins 2400 px de large, horizontale | Le tube bien visible sur la droite, la gauche plus calme pour le texte. |
| Photo du formulaire de contact | JPG | au moins 2000 px de large, horizontale | Actuellement : coureurs sur une route (`assets/fond-contact.jpg`). |

## Solution 1 : photos ou vidéo maison (le plus authentique)

1. Remplissez un bac de **glace pilée** (en sac, au supermarché).
2. Plantez-y un tube **bien givré**, sorti du congélateur, avec quelques tranches d'orange.
3. Placez le tout devant un mur ou un carton **clair**, à la lumière du jour près d'une fenêtre.
4. Photographiez au téléphone en **mode portrait**, en **format horizontal**. Pour une vidéo : téléphone posé, plan fixe ou lent travelling, 10 à 15 secondes.

## Solution 2 : vidéos libres de droits (gratuit, immédiat)

Sur **Pexels** (pexels.com/fr-fr/videos), **Pixabay** (pixabay.com/fr/videos) ou **Mixkit** (mixkit.co), cherchez par exemple :
« ice pop », « popsicle », « athlete eating ice cream », « sweaty runner », « gym workout slow motion », « crushed ice ».

Ces vidéos montrent une glace générique, pas un tube ICEPROT : elles conviennent pour une ambiance ou en attendant. Vérifiez la licence de chaque vidéo (usage commercial autorisé, sans obligation de citer l'auteur sur Pexels et Pixabay).

## Solution 3 : vidéo générée par une IA vidéo

Outils : **Runway**, **Sora** (OpenAI), **Veo** (Google), **Kling**, **Luma**. La plupart acceptent une photo de départ : donnez-leur une photo réelle du tube pour que l'emballage reste fidèle.

Consigne prête à copier, sportif avec une glace à l'eau :

> Close-up, slow motion, an athletic man in his late twenties after an intense outdoor workout, skin glistening with sweat, wearing a black sleeveless training top, biting into a bright orange-red ice pop in a clear plastic tube, frost and condensation visible, warm late-afternoon sunlight, shallow depth of field, beige concrete background, cinematic sports commercial look, no text, no logos, 10-second seamless loop, 16:9.

Pour la version mobile, remplacez « 16:9 » par « 9:16 ».

## Solution 4 : image réaliste générée par une IA d'image

Outils : **ChatGPT** (génération d'images), **Gemini**, **Midjourney**, **Adobe Firefly**. Donnez-leur votre photo du tube, avec cette consigne :

> Studio product photo of this exact frozen ice pop tube, standing upright and partly buried in crushed ice, condensation droplets on the clear plastic, a few blood orange slices in the ice, light warm grey seamless background, soft daylight from the left, shallow depth of field, photorealistic, horizontal 16:9, keep the label and logo exactly as they are.

Vérifiez toujours que l'IA n'a pas déformé le logo ni les mentions de l'étiquette (8 g, 0 sucres, 0 gras, sans aspartame).

## Ensuite

Envoyez le fichier à Claude dans la conversation : il le recadre, le compresse pour le web et l'intègre au site (en haut de page ou en fond du formulaire). Les photos verticales ou petites fonctionnent, mais une version horizontale en bonne définition rend nettement mieux sur ordinateur.
