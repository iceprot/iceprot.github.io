// Fonction Cloudflare du site ICEPROT.
// Elle reçoit les demandes du formulaire (POST /api/contact) et crée une fiche
// dans la base Notion « Demandes » du CRM ICEPROT. L'e-mail de notification,
// lui, est envoyé directement par le navigateur à Formspree.
// Tout le reste du site (pages, images…) est servi tel quel depuis dist/.
//
// Réglage unique (Cloudflare → Workers & Pages → iceprot-site → Settings →
// Runtime variables and secrets) : NOTION_TOKEN (secret), clé de l'intégration
// Notion « Site ICEPROT ». Sans elle, rien n'est enregistré dans Notion.

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  NOTION_TOKEN?: string;
  NOTION_DATABASE_ID?: string;
}

// Base « Demandes » du CRM ICEPROT (identifiant, pas un secret)
const BASE_DEMANDES = '4237f5cffb5481de8343d2b141ea4efe';
const texte = (v: string) => [{ type: 'text', text: { content: v.slice(0, 2000) } }];
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

async function versNotion(env: Env, d: Record<string, string>): Promise<string | null> {
  if (!env.NOTION_TOKEN) return 'non configuré (clé NOTION_TOKEN absente)';
  const properties: Record<string, unknown> = {
    Nom: { title: texte(d.nom || d.email) },
    'E-mail': { email: d.email },
    Statut: { status: { name: 'Nouvelle' } },
    Origine: { select: { name: 'Formulaire du site' } },
    'Accord contact': { checkbox: Boolean(d.accord_contact) },
    Newsletter: { checkbox: Boolean(d.newsletter) },
  };
  // Les options d'une liste Notion ne peuvent pas contenir de virgule
  if (d.profil) properties.Profil = { select: { name: d.profil.replace(/,/g, '').slice(0, 100) } };
  if (d.societe) properties['Société'] = { rich_text: texte(d.societe) };
  if (d.ville) properties.Ville = { rich_text: texte(d.ville) };
  if (d.telephone) properties['Téléphone'] = { phone_number: d.telephone.slice(0, 40) };
  if (d.message) properties.Message = { rich_text: texte(d.message) };
  if (d.source) properties.Source = { rich_text: texte(d.source) };

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ parent: { database_id: env.NOTION_DATABASE_ID || BASE_DEMANDES }, properties }),
  });
  if (res.ok) return null;
  const corps = await res.text();
  let code = '';
  try { code = JSON.parse(corps).code ?? ''; } catch {}
  return `Notion ${res.status} ${code} ${corps.slice(0, 300)}`.trim();
}

async function contact(request: Request, env: Env): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'Formulaire illisible.' }, 400);
  }
  const d: Record<string, string> = {};
  for (const [k, v] of form.entries()) if (typeof v === 'string') d[k] = v.trim();

  // Piège anti-robots : on fait semblant d'accepter, sans rien enregistrer
  if (d._gotcha) return json({ ok: true });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email ?? '')) return json({ error: 'Adresse e-mail invalide.' }, 400);
  if (!d.accord_contact) return json({ error: "L'accord pour être recontacté est obligatoire." }, 400);

  const erreur = await versNotion(env, d).catch((e) => `Notion ${e}`);
  if (!erreur) return json({ ok: true });
  console.error(erreur);
  return json({ error: "L'enregistrement n'a pas abouti.", raison_notion: erreur.slice(0, 60) }, 502);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ error: 'Méthode non autorisée.' }, 405);
      return contact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
