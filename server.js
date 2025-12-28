const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'lab-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Pour HTTP local uniquement
}));

// Servir les fichiers statiques
app.use(express.static('public'));

// Routes principales
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API pour démonstration CSRF (vulnérable)
app.post('/api/vulnerable/transfer', (req, res) => {
  const { to, amount } = req.body;
  console.log(`⚠️ VULNÉRABLE: Transfert de ${amount}€ vers ${to}`);
  res.json({ success: true, message: `Transfert de ${amount}€ effectué vers ${to}` });
});

// API sécurisée avec token CSRF
app.post('/api/secure/transfer', (req, res) => {
  const { to, amount, csrfToken } = req.body;
  
  if (csrfToken !== req.session.csrfToken) {
    return res.status(403).json({ success: false, message: 'Token CSRF invalide' });
  }
  
  console.log(`✅ SÉCURISÉ: Transfert de ${amount}€ vers ${to}`);
  res.json({ success: true, message: `Transfert sécurisé de ${amount}€ effectué` });
});

// Générer un token CSRF
app.get('/api/csrf-token', (req, res) => {
  const token = Math.random().toString(36).substring(2);
  req.session.csrfToken = token;
  res.json({ token });
});

// API pour démonstration XSS (vulnérable)
app.post('/api/vulnerable/comment', (req, res) => {
  const { comment } = req.body;
  // Pas de sanitisation - VULNÉRABLE
  res.json({ success: true, comment: comment });
});

// API sécurisée avec sanitisation
app.post('/api/secure/comment', (req, res) => {
  const { comment } = req.body;
  // Sanitisation basique (en production, utilisez DOMPurify)
  const sanitized = comment
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  res.json({ success: true, comment: sanitized });
});

app.listen(PORT, () => {
  console.log(`🔒 Laboratoire de Sécurité Web démarré sur http://localhost:${PORT}`);
  console.log(`📚 Ouvrez votre navigateur pour commencer l'apprentissage`);
});
