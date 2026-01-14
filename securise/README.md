# Exemples Sécurisés ✅

Ce module présente des implémentations **sécurisées** pour contrer les vulnérabilités web courantes.

## Protections Implémentées

### 1. Protection contre XSS
- ✅ **Sanitisation HTML** - Échappement de tous les caractères spéciaux
- ✅ **Content Security Policy (CSP)** - Restriction des sources de scripts
- ✅ **Utilisation de textContent** au lieu de innerHTML
- ✅ **Validation des entrées** côté client et serveur
- ✅ **Bibliothèques de sanitisation** (DOMPurify)

### 2. Protection contre CSRF
- ✅ **Tokens CSRF** - Token unique par session/requête
- ✅ **Vérification Origin/Referer** - Validation de la provenance
- ✅ **SameSite Cookies** - Restriction des cookies cross-site
- ✅ **Re-authentification** pour actions sensibles
- ✅ **Limitation de temps** pour les tokens

### 3. Protection contre SQL Injection
- ✅ **Requêtes préparées** (Prepared Statements)
- ✅ **ORM** (Object-Relational Mapping)
- ✅ **Validation des entrées**
- ✅ **Principe du moindre privilège** pour la base de données

### 4. Autres Protections
- ✅ **Validation stricte des entrées**
- ✅ **Échappement des sorties**
- ✅ **HTTPS obligatoire**
- ✅ **Headers de sécurité** (X-Frame-Options, X-Content-Type-Options)
- ✅ **Rate limiting**
- ✅ **Logging des actions sensibles**

## Principes de Sécurité

### Defense in Depth (Défense en Profondeur)
Ne jamais se fier à une seule couche de protection. Multiplier les mécanismes de défense.

### Principle of Least Privilege (Moindre Privilège)
Donner uniquement les permissions nécessaires, rien de plus.

### Fail Securely (Échouer en Sécurité)
En cas d'erreur, le système doit rester en mode sécurisé.

### Input Validation (Validation des Entrées)
Ne jamais faire confiance aux données utilisateur. Toujours valider.

### Output Encoding (Encodage des Sorties)
Encoder toutes les données avant affichage.

## Comparaison

| Vulnérabilité | Code Vulnérable | Code Sécurisé |
|---------------|----------------|---------------|
| XSS | `innerHTML = userInput` | `textContent = userInput` |
| CSRF | Pas de token | Token CSRF validé |
| SQLi | `"SELECT * FROM users WHERE id=" + id` | `SELECT * FROM users WHERE id=?` |

## Tests de Sécurité

Pour chaque exemple sécurisé, essayez les mêmes attaques que sur la version vulnérable:
- Les attaques doivent être bloquées
- Des messages d'erreur appropriés doivent être affichés
- Le système doit rester stable

## Resources

- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Web Security Academy](https://portswigger.net/web-security)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
