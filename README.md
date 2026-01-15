# 🔒 Laboratoire de Sécurité Web

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![Education](https://img.shields.io/badge/purpose-educational-orange.svg)

**Environnement d'apprentissage interactif pour comprendre les vulnérabilités web et les permissions du navigateur**

[Installation](#-installation) • [Fonctionnalités](#-fonctionnalités) • [Démarrage](#-démarrage-rapide) • [Modules](#-modules-dapprentissage) • [Contribution](#-contribution)

</div>

---

## ⚠️ AVERTISSEMENT IMPORTANT

> **🎓 Ce projet est STRICTEMENT à des fins éducatives.**

<table>
<tr>
<td>

### ✅ Utilisation Autorisée
- **Apprendre** la sécurité web
- Tester sur **vos propres systèmes**
- Environnement **local isolé** (localhost)
- Formation et recherche académique

</td>
<td>

### ❌ Utilisation Interdite
- **INTERDIT** sans autorisation explicite
- Utilisation **malveillante ILLÉGALE**
- Tests sur systèmes tiers
- Punissable par la loi

</td>
</tr>
</table>

**⚖️ L'auteur décline toute responsabilité en cas d'utilisation abusive.**

---

## 📋 Table des Matières

- [Structure du Projet](#-structure-du-projet)
- [Installation](#-installation)
- [Démarrage Rapide](#-démarrage-rapide)
- [Modules d'Apprentissage](#-modules-dapprentissage)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies-utilisées)
- [Ressources](#-ressources-dapprentissage)
- [Contribution](#-contribution)
- [Licence](#-licence)

---

## 🏗️ Structure du Projet

```
web-security-lab/
├── 📁 public/
│   ├── index.html          # Interface principale
│   ├── styles.css          # Styles améliorés
│   └── script.js           # Logique client
├── 📄 server.js            # Serveur Node.js Express
├── 📄 package.json         # Dépendances
└── 📄 README.md            # Documentation
```

### 🎯 Fonctionnalités Principales

- **🎥 Permissions Navigateur** - Caméra, microphone, géolocalisation, notifications
- **⚡ Vulnérabilités XSS** - Démonstrations vulnérables vs sécurisées
- **🛡️ Protection CSRF** - Tokens de sécurité et validations
- **📋 OWASP Top 10** - Guide complet des vulnérabilités critiques

---

## 💾 Installation

### Prérequis

- **Node.js** ≥ 14.0.0
- **npm** ou **yarn**
- Navigateur web moderne

### Étapes d'Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Farah15300/web-security-lab.git

# 2. Accéder au répertoire
cd web-security-lab

# 3. Installer les dépendances
npm install
```

---

## 🚀 Démarrage Rapide

```bash
# Lancer le serveur de développement
npm start
```

Le serveur démarre sur **http://localhost:3000**

### 🎮 Utilisation

1. **Ouvrir votre navigateur** à `http://localhost:3000`
2. **Explorer les modules** via la navigation en haut
3. **Tester les démonstrations** interactives
4. **Apprendre** en comparant versions vulnérables et sécurisées

---

## 📚 Modules d'Apprentissage

### 🎥 1. Permissions du Navigateur

Apprenez à gérer les permissions de manière éthique et sécurisée :

- **📹 Caméra & Microphone** - `getUserMedia()` API
- **📍 Géolocalisation** - Accès à la position GPS
- **🔔 Notifications** - Notifications push
- **💾 Stockage Local** - LocalStorage et SessionStorage

**🎯 Objectifs d'apprentissage :**
- Comprendre le modèle de permissions
- Demander les permissions au bon moment
- Respecter le consentement utilisateur

---

### ⚡ 2. XSS (Cross-Site Scripting)

Découvrez les attaques XSS et leurs protections :

| Type | Description | Protection |
|------|-------------|-----------|
| **Stored XSS** | Code malveillant stocké en base | Sanitisation côté serveur |
| **Reflected XSS** | Code dans l'URL reflété | Validation des entrées |
| **DOM-based XSS** | Manipulation du DOM | `textContent` vs `innerHTML` |

**🛡️ Protections implémentées :**
- Content Security Policy (CSP)
- Échappement HTML
- Validation des entrées
- Utilisation de `textContent`

---

### 🛡️ 3. CSRF (Cross-Site Request Forgery)

Protégez vos applications contre les requêtes forgées :

**💡 Démonstrations :**
- Version vulnérable sans token
- Version sécurisée avec token CSRF
- Validation d'origine

**🔐 Méthodes de protection :**
- Tokens CSRF uniques
- SameSite cookies
- Vérification Origin/Referer
- Double Submit Cookie

---

### 📋 4. OWASP Top 10 (2021)

Guide complet des 10 vulnérabilités les plus critiques :

1. **🔓 A01: Broken Access Control** - Contrôle d'accès défaillant
2. **🔐 A02: Cryptographic Failures** - Échecs cryptographiques
3. **💉 A03: Injection** - SQL, XSS, commandes OS
4. **🏗️ A04: Insecure Design** - Conception non sécurisée
5. **⚙️ A05: Security Misconfiguration** - Mauvaise configuration
6. **📦 A06: Vulnerable Components** - Composants vulnérables
7. **🔑 A07: Authentication Failures** - Échecs d'authentification
8. **📝 A08: Software Data Integrity** - Intégrité des données
9. **📊 A09: Security Logging Failures** - Logs insuffisants
10. **🌐 A10: SSRF** - Server-Side Request Forgery

Chaque vulnérabilité inclut :
- ✨ Description détaillée
- 💡 Exemples concrets
- ✅ Solutions de protection

---

## 🎨 Fonctionnalités

### Interface Utilisateur

- ✨ **Design Moderne** - Interface fluide et intuitive
- 🎯 **Navigation par Onglets** - Basculer facilement entre modules
- 📱 **Responsive Design** - Compatible mobile, tablette et desktop
- 🌈 **Animations Fluides** - Transitions et effets visuels
- 🎨 **Code Highlighting** - Coloration syntaxique des exemples

### Fonctionnalités Techniques

- 🔒 **Démonstrations Sécurisées** - Environnement isolé
- 💻 **Exemples de Code** - Code source inclus
- 🎮 **Tests Interactifs** - Testez en temps réel
- 📖 **Documentation Intégrée** - Explications détaillées

---

## 🛠️ Technologies Utilisées

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<br>Structure
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
<br>Style
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<br>Logique
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
<br>Backend
</td>
</tr>
<tr>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
<br>Framework
</td>
<td align="center" width="25%">
<img src="https://img.shields.io/badge/OWASP-000000?style=for-the-badge&logo=owasp&logoColor=white" alt="OWASP"/>
<br>Standards
</td>
<td align="center" colspan="2">
<img src="https://img.shields.io/badge/Security-FF0000?style=for-the-badge&logo=security&logoColor=white" alt="Security"/>
<br>Best Practices
</td>
</tr>
</table>

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### Comment Contribuer

1. **🍴 Fork** le projet
2. **🌿 Créer** une branche (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **📤 Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **🔁 Ouvrir** une Pull Request

### 💡 Idées de Contribution

- 🐛 Signaler des bugs
- ✨ Proposer de nouvelles vulnérabilités à démontrer
- 📝 Améliorer la documentation
- 🔒 Ajouter des exemples de protection
- 🌍 Traduire le contenu
- 🎨 Améliorer l'interface

---

## 📝 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License - Libre d'utilisation à des fins éducatives
```

---

## 🙏 Remerciements

<div align="center">

**Projet créé pour l'apprentissage de la cybersécurité web et la sensibilisation aux bonnes pratiques de développement sécurisé.**

### 🌟 Soutien

Si ce projet vous a aidé, n'hésitez pas à mettre une ⭐ !

---

**Fait avec ❤️ pour la communauté de la cybersécurité**

<sub>© 2024 - Laboratoire de Sécurité Web</sub>

</div>
