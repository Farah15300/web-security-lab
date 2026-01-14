# 🎯 Guide d'Utilisation du Workflow d'Initialisation

## Comment utiliser le workflow

### 1️⃣ Accéder au workflow

1. Allez dans l'onglet **Actions** de votre repository GitHub
2. Cherchez le workflow **"🚀 Initialiser une Nouvelle Application"**
3. Cliquez sur le bouton **"Run workflow"**

### 2️⃣ Répondre aux questions

Le workflow vous présentera un formulaire avec 9 questions:

```
┌─────────────────────────────────────────────────────────┐
│  🚀 Initialiser une Nouvelle Application               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📱 Type d'application à créer                         │
│  ▼ [Web Security Lab (Labo de sécurité web)]          │
│     API REST Sécurisée                                 │
│     Application Full-Stack                             │
│     Application avec Authentification                  │
│                                                         │
│  📝 Nom de l'application                               │
│  [mon-application_________________________]            │
│                                                         │
│  🛠️ Framework à utiliser                              │
│  ▼ [Express.js (Node.js)___________________]          │
│     Next.js (React + Node)                             │
│     Vue.js + Express                                   │
│     Vanilla JS + Express                               │
│                                                         │
│  💾 Base de données                                    │
│  ▼ [Aucune (fichiers JSON)_________________]          │
│     SQLite                                             │
│     MongoDB                                            │
│     PostgreSQL                                         │
│                                                         │
│  🔐 Méthode d'authentification                         │
│  ▼ [Aucune_________________________________]          │
│     Session + Cookies                                  │
│     JWT                                                │
│     OAuth 2.0                                          │
│                                                         │
│  🛡️ Fonctionnalités de sécurité à inclure            │
│  ▼ [Basique (CSRF, XSS)____________________]          │
│     Avancée (CSRF, XSS, Rate Limiting, CORS)          │
│     Complète (OWASP Top 10)                           │
│     Personnalisée                                      │
│                                                         │
│  🐳 Inclure Docker?                                    │
│  ☐ Non  ☑ Oui                                         │
│                                                         │
│  🧪 Inclure des tests?                                 │
│  ☐ Non  ☑ Oui                                         │
│                                                         │
│  ⚙️ Inclure CI/CD (GitHub Actions)?                   │
│  ☐ Non  ☑ Oui                                         │
│                                                         │
│  [Run workflow]                                        │
└─────────────────────────────────────────────────────────┘
```

### 3️⃣ Lancement et génération

Une fois que vous cliquez sur "Run workflow", le système va:

1. ✅ Afficher votre configuration
2. 📦 Installer Node.js
3. 📁 Créer la structure de répertoires
4. 📝 Générer package.json avec les bonnes dépendances
5. 🔧 Créer le serveur Express principal
6. 🔐 Générer les fichiers de configuration
7. 🐳 Ajouter Docker (si sélectionné)
8. 🧪 Configurer les tests (si sélectionné)
9. ⚙️ Créer le workflow CI/CD (si sélectionné)
10. 📊 Générer un rapport complet

### 4️⃣ Télécharger votre application

Une fois terminé:

1. Cliquez sur le workflow terminé
2. Descendez jusqu'à la section **"Artifacts"**
3. Téléchargez l'archive ZIP nommée `[votre-app]-[numéro]`
4. Extrayez le contenu dans votre dossier de projet

### 5️⃣ Démarrer l'application

```bash
# Extraire l'archive
unzip mon-application-123.zip

# Aller dans le dossier
cd mon-application

# Installer les dépendances
npm install

# Copier l'environnement
cp .env.example .env

# Éditer les configurations (optionnel)
nano .env

# Démarrer en mode développement
npm run dev
```

Votre application sera disponible sur `http://localhost:3000`

## 📋 Exemples de configurations

### Exemple 1: Lab de Sécurité Web Complet
```
Type: Web Security Lab
Nom: security-lab
Framework: Express.js
DB: Aucune
Auth: Session + Cookies
Sécurité: Complète (OWASP Top 10)
Docker: ✓
Tests: ✓
CI/CD: ✓
```

### Exemple 2: API REST Simple
```
Type: API REST Sécurisée
Nom: my-api
Framework: Express.js
DB: MongoDB
Auth: JWT
Sécurité: Avancée
Docker: ✓
Tests: ✓
CI/CD: ✓
```

### Exemple 3: Application de Démonstration
```
Type: Application Full-Stack
Nom: demo-app
Framework: Vanilla JS + Express
DB: SQLite
Auth: Aucune
Sécurité: Basique
Docker: ✗
Tests: ✗
CI/CD: ✗
```

## 🎨 Structure générée

```
mon-application/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD (si activé)
├── src/
│   ├── index.js               # Serveur principal ⭐
│   ├── routes/                # Routes de l'API
│   ├── controllers/           # Contrôleurs métier
│   ├── models/                # Modèles de données
│   ├── middleware/            # Middleware custom
│   ├── utils/                 # Fonctions utilitaires
│   └── config/                # Configuration
├── public/
│   ├── css/                   # Styles
│   ├── js/                    # Scripts frontend
│   └── images/                # Images
├── views/                     # Templates HTML
├── tests/                     # Tests (si activés)
│   ├── unit/
│   └── integration/
├── docker/                    # Config Docker (si activé)
├── package.json               # Dépendances NPM
├── .env.example               # Variables d'environnement
├── .gitignore                 # Fichiers à ignorer
├── README.md                  # Documentation
├── INIT_REPORT.md            # Rapport de génération
├── Dockerfile                # Docker (si activé)
├── docker-compose.yml        # Docker Compose (si activé)
└── jest.config.js            # Config Jest (si tests)
```

## 🔧 Personnalisation après génération

### Ajouter une route
```javascript
// src/routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Liste des utilisateurs' });
});

module.exports = router;
```

### Ajouter un modèle
```javascript
// src/models/User.js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

module.exports = User;
```

### Ajouter un middleware
```javascript
// src/middleware/auth.js
module.exports = (req, res, next) => {
  // Vérification de l'authentification
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ error: 'Non autorisé' });
  }
};
```

## 🛡️ Sécurité incluse

Selon votre choix:

### Basique
- ✅ Protection CSRF
- ✅ Protection XSS
- ✅ Sanitisation des entrées

### Avancée
- ✅ Tout ce qui est dans Basique +
- ✅ Helmet (headers de sécurité)
- ✅ Rate Limiting
- ✅ CORS configuré

### Complète (OWASP Top 10)
- ✅ Tout ce qui est dans Avancée +
- ✅ Validation stricte des entrées
- ✅ Gestion sécurisée des sessions
- ✅ Protection contre les injections
- ✅ Logging de sécurité
- ✅ Gestion des erreurs sécurisée

## 📝 Notes importantes

- 🔑 **Secrets:** Changez tous les secrets dans `.env` avant de déployer
- 🚫 **Ne jamais commiter:** Le fichier `.env` ne doit JAMAIS être commité
- 🔒 **HTTPS:** Utilisez HTTPS en production
- 📊 **Tests:** Ajoutez des tests au fur et à mesure
- 📚 **Documentation:** Mettez à jour le README selon vos modifications

## ❓ Questions fréquentes

**Q: Puis-je réutiliser le workflow plusieurs fois?**  
R: Oui! Chaque exécution crée un artefact unique.

**Q: Puis-je modifier l'application générée?**  
R: Absolument! C'est un point de départ, personnalisez-le.

**Q: Les dépendances sont-elles à jour?**  
R: Le workflow utilise les dernières versions stables.

**Q: Que faire si j'ai une erreur?**  
R: Consultez les logs du workflow dans l'onglet Actions.

---

**Bon développement! 🚀**
