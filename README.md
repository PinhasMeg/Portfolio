# Portfolio — Pinhas Meguideche

Site personnel statique (HTML / CSS / JS). Aucun build, aucun framework.

## Lancer en local

```bash
npm run dev
```

Ouvrir `http://localhost:3000`.

Sans npm :

```bash
python3 -m http.server 8080
```

## Déployer

Le dossier entier se publie tel quel (Netlify, Vercel preset *Other*, GitHub Pages).

Après le premier déploiement, dans `index.html` :

1. Ajouter `<link rel="canonical" href="https://votre-domaine/">`
2. Mettre l’URL absolue dans `og:image` (ex. `https://votre-domaine/images/olimaid-hero.jpg`)

## Projets en ligne

| Projet | URL |
| ------ | --- |
| OlimAid | https://olimaid.com |
| Dor Hadash | https://dor-hadash.com |
| Beth-El | https://beth-el-gules.vercel.app |
| ShemTov | https://shemtov.shop |
| Solar Prime | https://www.solarprime.co.il |

## Ajouter un projet

Dans `index.html`, section `#projets`, dupliquer un `<article class="work-card">`.

1. Déposer une capture 1600×900 dans `images/` (JPEG).
2. Changer l’URL, le titre, le texte et les badges.
3. Incrémenter `01` → `02`, etc.

## Contact

- Email : `Pinhas.meguideche@gmail.com`
- LinkedIn : https://www.linkedin.com/in/pinhas-meguideche
