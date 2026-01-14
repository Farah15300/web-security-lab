# Permissions du Navigateur 🔐

Ce module démontre comment demander et gérer les différentes permissions du navigateur de manière éthique et sécurisée.

## Contenu

### 1. Permission Caméra et Microphone
- Démonstration de `getUserMedia()`
- Gestion des erreurs de permission
- Arrêt propre des flux média

### 2. Géolocalisation
- API de géolocalisation
- Gestion de la vie privée
- Précision et erreurs

### 3. Notifications
- Permission de notifications push
- Affichage de notifications
- Gestion des interactions

### 4. Stockage Local
- LocalStorage et SessionStorage
- Cookies
- IndexedDB

## Bonnes Pratiques

✅ **À FAIRE:**
- Demander les permissions au moment approprié (contexte clair)
- Expliquer POURQUOI vous avez besoin de la permission
- Respecter le refus de l'utilisateur
- Fournir des alternatives si la permission est refusée
- Permettre de révoquer facilement les permissions

❌ **À NE PAS FAIRE:**
- Demander toutes les permissions au chargement de la page
- Redemander continuellement une permission refusée
- Utiliser les permissions à des fins non déclarées
- Stocker des données sensibles sans chiffrement

## Exemples de Code

Voir les fichiers HTML dans ce répertoire pour des démonstrations interactives.
