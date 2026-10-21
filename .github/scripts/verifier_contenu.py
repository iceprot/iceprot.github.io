"""Vérifie contenu.json : JSON valide, blocs en true/false, textes en chaînes, identifiants connus."""
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
erreurs = []

for nom, val in c.get("blocs", {}).items():
    if nom not in blocs_page:
        erreurs.append(f'bloc inconnu "{nom}" (blocs possibles : {", ".join(sorted(blocs_page))})')
    if not isinstance(val, bool):
        erreurs.append(f'bloc "{nom}" : écrire true ou false, sans guillemets')
for nom, val in c.get("textes", {}).items():
    if nom not in champs_page:
        erreurs.append(f'champ inconnu "{nom}" : vérifiez son orthographe dans CHAMPS.md')
    if not isinstance(val, str):
        erreurs.append(f'champ "{nom}" : le texte doit être entre guillemets')

if erreurs:
    sys.exit("Problèmes dans contenu.json :\n- " + "\n- ".join(erreurs))
print(f"contenu.json OK : {len(c.get('blocs', {}))} blocs, {len(c.get('textes', {}))} textes.")
