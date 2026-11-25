// Génère la page d'accueil (dist/index.html) au moment de la construction du site.
// Elle part du modèle src/modele/index.html et y applique contenu.json :
//  - textes de chaque champ (data-champ), avec *manuscrit* et **gras** ;
//  - blocs masqués (data-bloc, "afficher": false) et liens qui y mènent ;
//  - titre et description pour Google et les réseaux sociaux.
// Les textes sont donc directement dans la page envoyée aux visiteurs et à Google,
// sans attendre le chargement de contenu.json dans le navigateur.
import { parse } from 'node-html-parser';
import modele from '../modele/index.html?raw';
import contenu from '../../contenu.json';

type Bloc = { afficher?: boolean; textes?: Record<string, string> };
type Contenu = Record<string, unknown> & { reglages?: Record<string, string> };

const echap = (s: string) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);
const rendu = (s: string) =>
  echap(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<em>$1</em>');

function construire(c: Contenu): string {
  const reglages = c.reglages ?? {};

  // Le navigateur n'a plus besoin de télécharger contenu.json : on remplace ce chargement
  // par les réglages déjà connus, et la page s'affiche immédiatement.
  const debut = modele.indexOf("  fetch('contenu.json'");
  const fin = modele.indexOf(".finally(() => html.classList.add('pret'));", debut);
  if (debut < 0 || fin < 0) throw new Error('Script de chargement de contenu.json introuvable dans le modèle');
  const reglagesNavigateur = { formulaire_adresse_envoi: reglages.formulaire_adresse_envoi ?? '' };
  let source =
    modele.slice(0, debut) +
    `  window.reglages = ${JSON.stringify(reglagesNavigateur)};\n  html.classList.add('pret');` +
    modele.slice(fin + ".finally(() => html.classList.add('pret'));".length);

  // Formulaire : envoi en parallèle à Formspree (e-mail) et à /api/contact (fiche dans le CRM Notion)
  const envoiOrigine =
    "const r = await fetch(adresse, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });\n      if (!r.ok) throw new Error('HTTP ' + r.status);";
  if (!source.includes(envoiOrigine)) throw new Error("Code d'envoi du formulaire introuvable dans le modèle");
  source = source.replace(
    envoiOrigine,
    "const donnees = new FormData(form);\n" +
      "      const [mail, crm] = await Promise.all([\n" +
      "        fetch(adresse, { method: 'POST', body: donnees, headers: { Accept: 'application/json' } }).catch(() => null),\n" +
      "        fetch('/api/contact', { method: 'POST', body: donnees, headers: { Accept: 'application/json' } }).catch(() => null),\n" +
      '      ]);\n' +
      "      if (!(mail && mail.ok) && !(crm && crm.ok)) throw new Error('envoi');",
  );

  const doc = parse(source, {
    comment: true,
    blockTextElements: { script: true, noscript: true, style: true, pre: true },
  });

  // Textes et blocs
  const textes: Record<string, string> = {};
  for (const el of doc.querySelectorAll('[data-bloc]')) {
    const bloc = (c[el.getAttribute('data-bloc') ?? ''] ?? {}) as Bloc;
    if (bloc.afficher === false) el.setAttribute('hidden', '');
    Object.assign(textes, bloc.textes ?? {});
  }
  for (const el of doc.querySelectorAll('[data-champ]')) {
    const v = textes[el.getAttribute('data-champ') ?? ''];
    if (typeof v === 'string') el.set_content(rendu(v));
  }

  // Liens vers un bloc masqué : on masque le lien (ou sa ligne de menu)
  for (const a of doc.querySelectorAll('a[href^="#"]')) {
    const cible = doc.getElementById((a.getAttribute('href') ?? '').slice(1));
    let bloc = cible;
    while (bloc && !bloc.hasAttribute?.('data-bloc')) bloc = bloc.parentNode as typeof bloc;
    if (bloc && bloc.hasAttribute('hidden')) {
      const li = a.closest('li');
      (li ?? a).setAttribute('hidden', '');
    }
  }

  // Référencement
  const titre = reglages.seo_titre;
  const description = reglages.seo_description;
  if (titre) {
    doc.querySelector('title')?.set_content(echap(titre));
    doc.querySelector('meta[property="og:title"]')?.setAttribute('content', titre);
  }
  if (description) {
    doc.querySelector('meta[name="description"]')?.setAttribute('content', description);
    doc.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }

  return doc.toString();
}

export function GET() {
  return new Response(construire(contenu as Contenu), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
