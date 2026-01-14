# 🚀 Workflow d'Initialisation d'Application

Ce workflow GitHub Actions vous permet de créer une nouvelle application étape par étape en répondant à des questions.

## 📋 Comment Utiliser

### Étape 1: Accéder au Workflow

1. Allez dans l'onglet **Actions** de votre repository
2. Sélectionnez le workflow **"🚀 Initialiser une Nouvelle Application"**
3. Cliquez sur **"Run workflow"**

### Étape 2: Répondre aux Questions

Le workflow vous posera les questions suivantes:

#### 📱 **Type d'application à créer**
- Web Security Lab (Labo de sécurité web)
- API REST Sécurisée
- Application Full-Stack
- Application avec Authentification

#### 📝 **Nom de l'application**
- Entrez le nom de votre application (ex: `mon-app`, `api-secure`)

#### 🛠️ **Framework à utiliser**
- Express.js (Node.js)
- Next.js (React + Node)
- Vue.js + Express
- Vanilla JS + Express

#### 💾 **Base de données**
- Aucune (fichiers JSON)
- SQLite
- MongoDB
- PostgreSQL

#### 🔐 **Méthode d'authentification**
- Aucune
- Session + Cookies
- JWT
- OAuth 2.0

#### 🛡️ **Fonctionnalités de sécurité**
- Basique (CSRF, XSS)
- Avancée (CSRF, XSS, Rate Limiting, CORS)
- Complète (OWASP Top 10)
- Personnalisée

#### Options Supplémentaires
- 🐳 **Inclure Docker?** (Oui/Non)
- 🧪 **Inclure des tests?** (Oui/Non)
- ⚙️ **Inclure CI/CD?** (Oui/Non)

### Étape 3: Lancer le Workflow

1. Cliquez sur **"Run workflow"** (bouton vert)
2. Le workflow va générer votre application
3. Attendez que le workflow se termine (environ 1-2 minutes)

### Étape 4: Télécharger Votre Application

1. Une fois le workflow terminé, allez dans l'onglet **Artifacts**
2. Téléchargez l'artefact nommé `[nom-de-votre-app]-[numéro]`
3. Extrayez le fichier ZIP dans votre répertoire de projet

### Étape 5: Installer et Démarrer

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Éditer .env avec vos configurations
nano .env

# Lancer en mode développement
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

## 🎯 Ce Qui Est Généré

Le workflow crée automatiquement:

### Structure de Base
```
mon-app/
├── src/
│   ├── index.js          # Point d'entrée
│   ├── routes/           # Routes de l'API
│   ├── controllers/      # Contrôleurs
│   ├── models/           # Modèles
│   ├── middleware/       # Middleware
│   ├── utils/            # Utilitaires
│   └── config/           # Configuration
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/                # Templates
└── tests/                # Tests (si activé)
```

### Fichiers de Configuration
- ✅ `package.json` - Dépendances et scripts
- ✅ `.env.example` - Variables d'environnement
- ✅ `.gitignore` - Fichiers à ignorer
- ✅ `README.md` - Documentation du projet
- ✅ `INIT_REPORT.md` - Rapport d'initialisation

### Optionnels (selon vos choix)
- 🐳 `Dockerfile` et `docker-compose.yml`
- 🧪 `jest.config.js` et tests
- ⚙️ `.github/workflows/ci.yml` - CI/CD

## 🛡️ Sécurité Incluse

Selon votre choix de fonctionnalités de sécurité:

- **Basique:** CSRF, XSS protection
- **Avancée:** + Helmet, Rate Limiting, CORS
- **Complète:** + Toutes les protections OWASP Top 10

## 🔧 Personnalisation

Après génération, vous pouvez:

1. Ajouter vos propres routes dans `src/routes/`
2. Créer des modèles dans `src/models/`
3. Ajouter du middleware dans `src/middleware/`
4. Personnaliser l'interface dans `public/`

## 📚 Ressources

- [Documentation Express.js](https://expressjs.com/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## 💡 Exemples de Configuration

### Exemple 1: API REST Sécurisée
- Type: API REST Sécurisée
- Framework: Express.js
- DB: MongoDB
- Auth: JWT
- Sécurité: Avancée
- Docker: Oui
- Tests: Oui
- CI/CD: Oui

### Exemple 2: Lab de Sécurité Web
- Type: Web Security Lab
- Framework: Express.js
- DB: Aucune
- Auth: Session + Cookies
- Sécurité: Complète
- Docker: Non
- Tests: Oui
- CI/CD: Oui

### Exemple 3: Application Simple
- Type: Application Full-Stack
- Framework: Vanilla JS + Express
- DB: SQLite
- Auth: Aucune
- Sécurité: Basique
- Docker: Non
- Tests: Non
- CI/CD: Non

## ❓ Questions Fréquentes

**Q: Puis-je modifier l'application après génération?**  
R: Oui! L'application générée est un point de départ. Modifiez-la selon vos besoins.

**Q: Les secrets sont-ils sécurisés?**  
R: Le workflow génère des secrets aléatoires. Changez-les en production et ne les commitez jamais.

**Q: Puis-je réexécuter le workflow?**  
R: Oui! Chaque exécution crée un nouvel artefact avec un numéro unique.

**Q: Comment ajouter une nouvelle fonctionnalité?**  
R: Ajoutez votre code dans les répertoires appropriés (`src/routes/`, `src/controllers/`, etc.).

## 🐛 Problèmes Courants

### Le workflow échoue
- Vérifiez que GitHub Actions est activé dans votre repository
- Vérifiez les permissions du workflow

### L'artefact n'est pas disponible
- Attendez que le workflow se termine complètement
- Vérifiez que toutes les étapes sont vertes

### npm install échoue
- Vérifiez votre version de Node.js (18+ recommandée)
- Supprimez `node_modules` et `package-lock.json`, puis réessayez

## 📝 Notes

- Ce workflow est conçu pour Node.js 18+
- Les dépendances sont automatiquement ajoutées selon votre configuration
- Le workflow génère un rapport détaillé dans `INIT_REPORT.md`

---

**Créé avec ❤️ pour simplifier l'initialisation de projets sécurisés**
