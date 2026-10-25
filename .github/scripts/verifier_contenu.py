"""Vérifie contenu.json : JSON valide, un groupe par bloc, afficher en true/false, textes en chaînes, noms connus."""
import json, re, sys

try:
    with open("contenu.json", encoding="utf-8") as f:
        c = json.load(f)
except json.JSONDecodeError as e:
    sys.exit(f"contenu.json n'est pas un JSON valide, ligne {e.lineno}, colonne {e.colno} : {e.msg}. "
             "Vérifiez les guillemets et les virgules autour de cette ligne.")

page = open("index.html", encoding="utf-8").read()
blocs_page = set(re.findall(r'data-bloc="([^"]+)"', page))
champs_page = set(re.findall(r'data-champ="([^"]+)"', page))
erreurs, nb_textes = [], 0

for nom, bloc in c.items():
    if nom.startswith("_"):
        continue
    if nom == "reglages":
        if not isinstance(bloc, dict) or not all(isinstance(v, str) for v in bloc.values()):
            erreurs.append('reglages : chaque valeur doit être un texte entre guillemets')
        continue
    if nom not in blocs_page:
        erreurs.append(f'bloc inconnu "{nom}" (blocs possibles : {", ".join(sorted(blocs_page))})')
        continue
    if not isinstance(bloc, dict):
        erreurs.append(f'bloc "{nom}" : la structure du groupe a été modifiée')
        continue
    if not isinstance(bloc.get("afficher"), bool):
        erreurs.append(f'bloc "{nom}" : "afficher" doit valoir true ou false, sans guillemets')
    for champ, val in bloc.get("textes", {}).items():
        nb_textes += 1
        if champ not in champs_page:
            erreurs.append(f'champ inconnu "{champ}" dans le bloc "{nom}" : ne changez pas les noms à gauche')
        if not isinstance(val, str):
            erreurs.append(f'champ "{champ}" : le texte doit être entre guillemets')

if erreurs:
    sys.exit("Problèmes dans contenu.json :\n- " + "\n- ".join(erreurs))
print(f"contenu.json OK : {sum(1 for k in c if not k.startswith('_') and k != 'reglages')} blocs, {nb_textes} textes.")
