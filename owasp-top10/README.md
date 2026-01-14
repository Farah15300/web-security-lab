# OWASP Top 10 - 2021 🔟

Ce module présente les 10 risques de sécurité les plus critiques pour les applications web selon l'OWASP.

## Les 10 Vulnérabilités

### A01:2021 - Broken Access Control ⬆️ (Montée depuis #5)
**Contrôle d'accès cassé** - Les utilisateurs peuvent accéder à des ressources non autorisées.

**Exemples:**
- Modification d'URL pour voir le profil d'un autre utilisateur
- Élévation de privilèges (user → admin)
- Accès à des API sans authentification
- Manipulation d'identifiants (IDOR - Insecure Direct Object Reference)

**Impact:** 94% des applications testées présentent cette vulnérabilité

---

### A02:2021 - Cryptographic Failures ⬇️ (Anciennement Sensitive Data Exposure)
**Échec cryptographique** - Protection inadéquate des données sensibles.

**Exemples:**
- Transmission de données sans HTTPS
- Mots de passe stockés en clair ou avec hash faible
- Clés de chiffrement codées en dur
- Algorithmes de chiffrement obsolètes (MD5, SHA1)

**Données à protéger:** Mots de passe, numéros de carte bancaire, données médicales, PII

---

### A03:2021 - Injection ⬇️ (Anciennement #1)
**Injection de code** - Insertion de code malveillant dans les entrées.

**Types:**
- **SQL Injection:** `' OR '1'='1`
- **XSS:** `<script>alert('XSS')</script>`
- **Command Injection:** `; rm -rf /`
- **LDAP Injection**
- **XML Injection**

**Protection:** Requêtes préparées, validation, échappement

---

### A04:2021 - Insecure Design 🆕 (Nouvelle catégorie)
**Conception non sécurisée** - Failles dans la conception même de l'application.

**Exemples:**
- Absence de rate limiting permettant le brute force
- Pas de validation des processus métier
- Flux d'authentification faibles
- Architecture sans défense en profondeur

**Solution:** Threat modeling, secure design patterns

---

### A05:2021 - Security Misconfiguration ⬇️
**Mauvaise configuration de sécurité**

**Exemples:**
- Comptes par défaut actifs (admin/admin)
- Répertoires listables
- Messages d'erreur verbeux révélant des infos
- Fonctionnalités inutiles activées
- Cors mal configuré
- Headers de sécurité manquants

---

### A06:2021 - Vulnerable and Outdated Components ⬆️
**Composants vulnérables ou obsolètes**

**Exemples:**
- Bibliothèques avec CVE connus
- OS/serveurs non patchés
- Dépendances non mises à jour
- Utilisation de versions non supportées

**Protection:** Audit régulier, npm audit, dependabot

---

### A07:2021 - Identification and Authentication Failures ⬇️
**Échecs d'authentification et d'identification**

**Exemples:**
- Pas de protection brute force
- Mots de passe faibles acceptés
- Sessions qui n'expirent pas
- Récupération de mot de passe non sécurisée
- Absence de MFA

---

### A08:2021 - Software and Data Integrity Failures 🆕
**Échecs d'intégrité logicielle et des données**

**Exemples:**
- Dépendances depuis CDN non vérifiés
- Updates automatiques sans vérification
- Pipeline CI/CD non sécurisé
- Désérialisation non sécurisée

---

### A09:2021 - Security Logging and Monitoring Failures ⬇️
**Échecs de journalisation et de surveillance**

**Exemples:**
- Événements critiques non loggés
- Logs non surveillés
- Pas d'alertes sur activités suspectes
- Logs facilement altérables

---

### A10:2021 - Server-Side Request Forgery (SSRF) 🆕
**Falsification de requête côté serveur**

**Exemples:**
- Application récupère une URL fournie par l'utilisateur
- Accès aux métadonnées cloud (AWS, Azure)
- Scan de réseau interne
- Contournement de pare-feu

**Exemple d'attaque:**
```
GET /fetch?url=http://169.254.169.254/latest/meta-data/
```

---

## Statistiques OWASP Top 10 - 2021

| Rang | Vulnérabilité | Incidence | Exploitabilité | Détectabilité |
|------|--------------|-----------|----------------|---------------|
| A01  | Broken Access Control | 3.81% | Facile | Facile |
| A02  | Cryptographic Failures | 4.49% | Difficile | Difficile |
| A03  | Injection | 3.37% | Facile | Facile |
| A04  | Insecure Design | - | - | - |
| A05  | Security Misconfiguration | 4.51% | Facile | Facile |
| A06  | Vulnerable Components | - | Moyenne | Moyenne |
| A07  | Auth Failures | 2.55% | Facile | Moyenne |
| A08  | Integrity Failures | 2.72% | Difficile | Moyenne |
| A09  | Logging Failures | 6.51% | Difficile | Difficile |
| A10  | SSRF | 2.72% | Moyenne | Facile |

## Évolution 2017 → 2021

**Nouvelles entrées:**
- A04: Insecure Design
- A08: Software and Data Integrity Failures
- A10: Server-Side Request Forgery

**Sorties:**
- XXE (XML External Entities) - maintenant dans Injection
- Insecure Deserialization - maintenant dans A08

**Changements majeurs:**
- Injection passe de #1 à #3
- Broken Access Control passe de #5 à #1

## Ressources

- 📖 [OWASP Top 10 Official](https://owasp.org/www-project-top-ten/)
- 🎓 [OWASP Top 10 2021 PDF](https://owasp.org/Top10/)
- 🔬 [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- 📚 [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- 🏫 [WebGoat - Application de formation](https://owasp.org/www-project-webgoat/)

## Checklist de Sécurité

- [ ] A01: Contrôle d'accès sur toutes les ressources
- [ ] A02: HTTPS partout + chiffrement des données sensibles
- [ ] A03: Requêtes préparées + validation des entrées
- [ ] A04: Threat modeling + design sécurisé
- [ ] A05: Configuration sécurisée + headers de sécurité
- [ ] A06: Dépendances à jour + audit régulier
- [ ] A07: Authentification forte + MFA
- [ ] A08: Vérification d'intégrité + signature de code
- [ ] A09: Logging complet + monitoring actif
- [ ] A10: Validation d'URL + whitelist
