// Permissions Navigateur - Scripts de démonstration

let cameraStream = null;
let micStream = null;
let audioContext = null;

// === CAMÉRA ===
async function requestCamera() {
    const statusDiv = document.getElementById('camera-status');
    const videoElement = document.getElementById('camera-video');
    const stopBtn = document.getElementById('stop-camera-btn');
    
    try {
        statusDiv.style.display = 'block';
        statusDiv.className = 'permission-status prompt';
        statusDiv.textContent = '⏳ Demande de permission...';
        
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        videoElement.srcObject = cameraStream;
        videoElement.style.display = 'block';
        stopBtn.style.display = 'inline-block';
        
        statusDiv.className = 'permission-status granted';
        statusDiv.textContent = '✅ Permission accordée - Caméra active';
    } catch (error) {
        statusDiv.className = 'permission-status denied';
        statusDiv.textContent = `❌ Permission refusée: ${error.message}`;
        console.error('Erreur caméra:', error);
    }
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        document.getElementById('camera-video').style.display = 'none';
        document.getElementById('stop-camera-btn').style.display = 'none';
        document.getElementById('camera-status').textContent = '⏹️ Caméra arrêtée';
    }
}

// === MICROPHONE ===
async function requestMicrophone() {
    const statusDiv = document.getElementById('mic-status');
    const canvas = document.getElementById('audio-visualizer');
    const stopBtn = document.getElementById('stop-mic-btn');
    
    try {
        statusDiv.style.display = 'block';
        statusDiv.className = 'permission-status prompt';
        statusDiv.textContent = '⏳ Demande de permission...';
        
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Visualisation audio
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(micStream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        canvas.style.display = 'block';
        stopBtn.style.display = 'inline-block';
        
        const canvasCtx = canvas.getContext('2d');
        
        function draw() {
            if (!micStream) return;
            
            requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);
            
            canvasCtx.fillStyle = 'rgb(240, 240, 240)';
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
            
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let x = 0;
            
            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 2;
                
                canvasCtx.fillStyle = `rgb(50, ${barHeight + 100}, 200)`;
                canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                
                x += barWidth + 1;
            }
        }
        
        draw();
        
        statusDiv.className = 'permission-status granted';
        statusDiv.textContent = '✅ Permission accordée - Microphone actif';
    } catch (error) {
        statusDiv.className = 'permission-status denied';
        statusDiv.textContent = `❌ Permission refusée: ${error.message}`;
        console.error('Erreur microphone:', error);
    }
}

function stopMicrophone() {
    if (micStream) {
        micStream.getTracks().forEach(track => track.stop());
        document.getElementById('audio-visualizer').style.display = 'none';
        document.getElementById('stop-mic-btn').style.display = 'none';
        document.getElementById('mic-status').textContent = '⏹️ Microphone arrêté';
        if (audioContext) {
            audioContext.close();
        }
        micStream = null;
    }
}

// === GÉOLOCALISATION ===
function requestLocation() {
    const statusDiv = document.getElementById('location-status');
    const infoDiv = document.getElementById('location-info');
    
    statusDiv.style.display = 'block';
    statusDiv.className = 'permission-status prompt';
    statusDiv.textContent = '⏳ Demande de permission...';
    
    if (!navigator.geolocation) {
        statusDiv.className = 'permission-status denied';
        statusDiv.textContent = '❌ La géolocalisation n\'est pas supportée';
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            statusDiv.className = 'permission-status granted';
            statusDiv.textContent = '✅ Permission accordée';
            
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            const accuracy = position.coords.accuracy.toFixed(0);
            
            infoDiv.innerHTML = `
                <strong>Position:</strong><br>
                Latitude: ${lat}°<br>
                Longitude: ${lon}°<br>
                Précision: ${accuracy} mètres<br>
                <small>Note: Ces données sont sensibles et doivent être protégées!</small>
            `;
        },
        (error) => {
            statusDiv.className = 'permission-status denied';
            statusDiv.textContent = `❌ Erreur: ${error.message}`;
            console.error('Erreur géolocalisation:', error);
        }
    );
}

// === NOTIFICATIONS ===
async function requestNotifications() {
    const statusDiv = document.getElementById('notification-status');
    const sendBtn = document.getElementById('send-notif-btn');
    
    statusDiv.style.display = 'block';
    
    if (!('Notification' in window)) {
        statusDiv.className = 'permission-status denied';
        statusDiv.textContent = '❌ Les notifications ne sont pas supportées';
        return;
    }
    
    if (Notification.permission === 'granted') {
        statusDiv.className = 'permission-status granted';
        statusDiv.textContent = '✅ Permission déjà accordée';
        sendBtn.style.display = 'inline-block';
        return;
    }
    
    if (Notification.permission === 'denied') {
        statusDiv.className = 'permission-status denied';
        statusDiv.textContent = '❌ Permission refusée (réinitialiser dans les paramètres du navigateur)';
        return;
    }
    
    statusDiv.className = 'permission-status prompt';
    statusDiv.textContent = '⏳ Demande de permission...';
    
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
        statusDiv.className = 'permission-status granted';
        statusDiv.textContent = '✅ Permission accordée';
        sendBtn.style.display = 'inline-block';
    } else {
        statusDiv.className = 'permission-status denied';
        statusDiv.textContent = '❌ Permission refusée';
    }
}

function sendTestNotification() {
    if (Notification.permission === 'granted') {
        new Notification('🔒 Laboratoire de Sécurité', {
            body: 'Ceci est une notification de test',
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75">🔒</text></svg>'
        });
    }
}

// === STOCKAGE LOCAL ===
function saveToStorage() {
    const key = document.getElementById('storage-key').value;
    const value = document.getElementById('storage-value').value;
    const statusDiv = document.getElementById('storage-status');
    
    if (!key || !value) {
        statusDiv.textContent = '❌ Veuillez remplir la clé et la valeur';
        return;
    }
    
    try {
        localStorage.setItem(key, value);
        statusDiv.textContent = `✅ Sauvegardé: ${key} = ${value}`;
    } catch (error) {
        statusDiv.textContent = `❌ Erreur: ${error.message}`;
    }
}

function loadFromStorage() {
    const key = document.getElementById('storage-key').value;
    const statusDiv = document.getElementById('storage-status');
    
    if (!key) {
        statusDiv.textContent = '❌ Veuillez entrer une clé';
        return;
    }
    
    const value = localStorage.getItem(key);
    
    if (value !== null) {
        document.getElementById('storage-value').value = value;
        statusDiv.textContent = `✅ Chargé: ${key} = ${value}`;
    } else {
        statusDiv.textContent = `❌ Clé "${key}" non trouvée`;
    }
}

function clearStorage() {
    if (confirm('Effacer tout le localStorage?')) {
        localStorage.clear();
        document.getElementById('storage-status').textContent = '✅ Stockage effacé';
        document.getElementById('storage-key').value = '';
        document.getElementById('storage-value').value = '';
    }
}
