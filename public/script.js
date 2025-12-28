// Navigation entre modules
function showModule(moduleName) {
    const modules = document.querySelectorAll('.module');
    const buttons = document.querySelectorAll('.modules button');
    
    modules.forEach(m => m.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));
    
    document.getElementById(moduleName).classList.add('active');
    event.target.classList.add('active');
}

// ============ PERMISSIONS NAVIGATEUR ============

let currentStream = null;

async function requestCamera() {
    const statusDiv = document.getElementById('camera-status');
    const video = document.getElementById('video');
    const stopBtn = document.getElementById('stop-camera');
    
    try {
        statusDiv.textContent = '⏳ Demande de permission...';
        statusDiv.style.background = '#fff3e0';
        statusDiv.style.color = '#f57c00';
        
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: true,
            audio: false 
        });
        
        currentStream = stream;
        video.srcObject = stream;
        video.style.display = 'block';
        stopBtn.style.display = 'inline-block';
        
        statusDiv.textContent = '✅ Permission accordée ! La caméra est active.';
        statusDiv.style.background = '#e8f5e9';
        statusDiv.style.color = '#2e7d32';
        
    } catch (error) {
        statusDiv.textContent = '❌ Permission refusée ou caméra indisponible: ' + error.message;
        statusDiv.style.background = '#ffebee';
        statusDiv.style.color = '#c62828';
    }
}

function stopCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
        document.getElementById('video').style.display = 'none';
        document.getElementById('stop-camera').style.display = 'none';
        document.getElementById('camera-status').textContent = '⏹️ Caméra arrêtée.';
        document.getElementById('camera-status').style.background = '#f5f5f5';
        currentStream = null;
    }
}

function requestLocation() {
    const statusDiv = document.getElementById('location-status');
    
    if (!navigator.geolocation) {
        statusDiv.textContent = '❌ Géolocalisation non supportée';
        statusDiv.style.background = '#ffebee';
        return;
    }
    
    statusDiv.textContent = '⏳ Demande de position...';
    statusDiv.style.background = '#fff3e0';
    
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);
            const accuracy = position.coords.accuracy.toFixed(0);
            
            statusDiv.innerHTML = `✅ Position obtenue:<br>
                Latitude: ${lat}<br>
                Longitude: ${lon}<br>
                Précision: ${accuracy}m`;
            statusDiv.style.background = '#e8f5e9';
        },
        error => {
            statusDiv.textContent = '❌ Erreur: ' + error.message;
            statusDiv.style.background = '#ffebee';
        }
    );
}

async function requestNotification() {
    const statusDiv = document.getElementById('notification-status');
    
    if (!('Notification' in window)) {
        statusDiv.textContent = '❌ Notifications non supportées';
        statusDiv.style.background = '#ffebee';
        return;
    }
    
    if (Notification.permission === 'granted') {
        new Notification('Test de Notification', {
            body: 'Les notifications sont déjà activées!',
            icon: '🔔'
        });
        statusDiv.textContent = '✅ Notification envoyée!';
        statusDiv.style.background = '#e8f5e9';
        return;
    }
    
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
        new Notification('Succès!', {
            body: 'Vous avez autorisé les notifications',
            icon: '🔔'
        });
        statusDiv.textContent = '✅ Permission accordée!';
        statusDiv.style.background = '#e8f5e9';
    } else {
        statusDiv.textContent = '❌ Permission refusée';
        statusDiv.style.background = '#ffebee';
    }
}

// ============ XSS DEMONSTRATION ============

function submitVulnerable() {
    const input = document.getElementById('vulnerable-input').value;
    const output = document.getElementById('vulnerable-output');
    
    // VULNÉRABLE: Injection directe
    output.innerHTML = `<div style="padding:10px;"><strong>Commentaire:</strong><br>${input}</div>`;
}

async function submitSecure() {
    const input = document.getElementById('secure-input').value;
    const output = document.getElementById('secure-output');
    
    // SÉCURISÉ: Appel API avec sanitisation
    const response = await fetch('/api/secure/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: input })
    });
    
    const data = await response.json();
    
    // Utilisation de textContent au lieu de innerHTML
    const commentDiv = document.createElement('div');
    commentDiv.style.padding = '10px';
    commentDiv.innerHTML = '<strong>Commentaire:</strong><br>';
    
    const textNode = document.createElement('span');
    textNode.textContent = data.comment; // Sécurisé
    
    commentDiv.appendChild(textNode);
    output.innerHTML = '';
    output.appendChild(commentDiv);
}

// ============ CSRF DEMONSTRATION ============

let csrfToken = null;

// Charger le token CSRF au chargement
fetch('/api/csrf-token')
    .then(res => res.json())
    .then(data => {
        csrfToken = data.token;
        const tokenDisplay = document.getElementById('csrf-token-display');
        if (tokenDisplay) {
            tokenDisplay.textContent = `Token CSRF actuel: ${csrfToken}`;
        }
    });

async function vulnerableTransfer() {
    const to = document.getElementById('vulnerable-to').value;
    const amount = document.getElementById('vulnerable-amount').value;
    const resultDiv = document.getElementById('vulnerable-transfer-result');
    
    if (!to || !amount) {
        resultDiv.textContent = '⚠️ Veuillez remplir tous les champs';
        resultDiv.style.background = '#fff3e0';
        return;
    }
    
    const response = await fetch('/api/vulnerable/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, amount })
    });
    
    const data = await response.json();
    resultDiv.textContent = '⚠️ ' + data.message + ' (Aucune protection CSRF!)';
    resultDiv.style.background = '#ffebee';
    resultDiv.style.color = '#c62828';
}

async function secureTransfer() {
    const to = document.getElementById('secure-to').value;
    const amount = document.getElementById('secure-amount').value;
    const resultDiv = document.getElementById('secure-transfer-result');
    
    if (!to || !amount) {
        resultDiv.textContent = '⚠️ Veuillez remplir tous les champs';
        resultDiv.style.background = '#fff3e0';
        return;
    }
    
    const response = await fetch('/api/secure/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, amount, csrfToken })
    });
    
    const data = await response.json();
    
    if (data.success) {
        resultDiv.textContent = '✅ ' + data.message + ' (Protégé par token CSRF)';
        resultDiv.style.background = '#e8f5e9';
        resultDiv.style.color = '#2e7d32';
    } else {
        resultDiv.textContent = '❌ ' + data.message;
        resultDiv.style.background = '#ffebee';
        resultDiv.style.color = '#c62828';
    }
}

// Nettoyer les ressources à la fermeture
window.addEventListener('beforeunload', () => {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }
});
