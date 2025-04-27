// Check internet connection and display message
function checkConnection() {
    const messageElement = document.getElementById('message');
    
    function updateConnectionStatus() {
        if (navigator.onLine) {
            // If online, remove any existing error message
            messageElement.textContent = '';
            messageElement.className = 'message';
        } else {
            // If offline, show error message in Kurdish
            messageElement.textContent = 'جافەرێ بە';
            messageElement.className = 'message error';
        }
    }

    // Initial check
    updateConnectionStatus();

    // Listen for connection changes
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
}

// Run the connection check when the page loads
window.addEventListener('DOMContentLoaded', checkConnection);