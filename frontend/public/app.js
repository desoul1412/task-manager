console.log("Frontend App Initialized");
const messageDiv = document.getElementById('message');

// Placeholder: Later, fetch backend URL dynamically or from config
// For local testing, backend might run on http://localhost:8080
// For Cloud Run, it will have a specific *.run.app URL
const backendUrl = 'http://localhost:8080'; // <-- CHANGE THIS LATER

// Test connection to backend API (will fail until backend is running)
function checkBackend() {
    messageDiv.textContent = 'Checking backend connection...';
    // We'll create a /api/health endpoint in the backend
    fetch(`${backendUrl}/api/health`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Backend response:", data);
            messageDiv.textContent = `Backend Status: ${data.status || 'Unknown'}. Timestamp: ${data.timestamp || 'N/A'}`;
        })
        .catch(error => {
            console.error("Error fetching backend status:", error);
            messageDiv.textContent = `Error connecting to backend: ${error}. Is it running at ${backendUrl}?`;
            messageDiv.style.color = 'red';
        });
}

// Run the check when the page loads
document.addEventListener('DOMContentLoaded', checkBackend);