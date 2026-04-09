# Portfolio — Hammouche Merouane

> Portfolio personnel déployable sur GitHub Pages

## 🚀 Déploiement sur GitHub Pages

### Étape 1 — Créer un repository GitHub

1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur **New repository**
3. Nomme-le **exactement** : `ton-username.github.io`  
   *(remplace `ton-username` par ton nom d'utilisateur GitHub)*
4. Coche **Public** et crée le repo

### Étape 2 — Uploader les fichiers

**Option A — Via l'interface web (plus simple) :**
1. Dans ton repository, clique sur **Add file → Upload files**
2. Glisse tous les fichiers du dossier `portfolio/`
3. Clique **Commit changes**

**Option B — Via Git (recommandé) :**
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ton-username/ton-username.github.io.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Dans ton repo, va dans **Settings → Pages**
2. Sous **Source**, sélectionne **GitHub Actions**
3. Le workflow se déclenche automatiquement à chaque push

### Étape 4 — Accéder à ton site

Ton portfolio sera disponible à :
```
https://ton-username.github.io
```
*(Attends 1-2 minutes après le déploiement)*

---

## 📁 Structure du projet

```
portfolio/
├── index.html              # Page principale
├── css/
│   └── style.css           # Styles
├── js/
│   └── main.js             # Interactions
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD GitHub Pages
└── README.md
```

## ✏️ Personnalisation

- **Lien GitHub** : Dans `index.html`, cherche `href="https://github.com"` et remplace par ton URL GitHub
- **Projets** : Modifie les `<article class="project-item">` dans `index.html`
- **Photo** : Remplace le SVG avatar par une vraie photo `<img src="assets/photo.jpg">`
- **Couleur accent** : Change `--accent: #4fffb0;` dans `css/style.css`

## 🛠️ Technologies

- HTML5 sémantique
- CSS3 (variables, animations, grid, flexbox)
- JavaScript vanilla (pas de framework)
- GitHub Actions pour le déploiement automatique
