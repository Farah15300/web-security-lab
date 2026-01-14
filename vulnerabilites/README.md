# Vulnérabilités Web ⚠️

Ce module démontre des exemples de vulnérabilités web courantes à des fins **éducatives uniquement**.

## ⚠️ AVERTISSEMENT

**Ces exemples sont VOLONTAIREMENT vulnérables pour l'apprentissage.**
- Ne jamais utiliser ce code en production
- Ne jamais tester sur des systèmes sans autorisation
- Ces techniques sont illégales si utilisées de manière malveillante

## Vulnérabilités Démontrées

### 1. XSS (Cross-Site Scripting)
Injection de code JavaScript malveillant dans une application web.

**Types:**
- **Reflected XSS:** Le script malveillant est dans l'URL
- **Stored XSS:** Le script est stocké en base de données
- **DOM-based XSS:** Modification du DOM côté client

### 2. CSRF (Cross-Site Request Forgery)
Forcer un utilisateur authentifié à effectuer une action non désirée.

**Exemple:** Transfert d'argent sans consentement via une requête forgée

### 3. SQL Injection
Injection de code SQL via les entrées utilisateur.

**Exemple:** `' OR '1'='1` dans un champ de connexion

### 4. Command Injection
Exécution de commandes système via les entrées utilisateur.

### 5. Path Traversal
Accès à des fichiers en dehors du répertoire autorisé via `../`

### 6. Open Redirect
Redirection vers des sites externes malveillants

## Comment Apprendre

1. **Tester les exemples vulnérables** pour comprendre le problème
2. **Étudier le code vulnérable** pour identifier les failles
3. **Voir les exemples sécurisés** dans le dossier `../securise/`
4. **Comparer les différences** entre code vulnérable et sécurisé

## Protection

Pour chaque vulnérabilité, voir le dossier `../securise/` pour les solutions.
