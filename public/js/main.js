document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    const submitBtn = document.getElementById('submit-btn');
    const messageEl = document.getElementById('message');
    const validCodes = ["123456", "654321", "000000",
        "12"
    ]; 
    const maxAttempts = 3;
    const cooldownTime = 10000; // 10 seconds in milliseconds

    let attempts = parseInt(localStorage.getItem('attempts') || 0);
    let lastAttemptTime = parseInt(localStorage.getItem('lastAttemptTime') || 0);

    if (localStorage.getItem('activate') === 'true') {
        window.location.replace('home.html');
    }

    function showMessage(message, isError = true) {
        messageEl.textContent = message;
        messageEl.className = isError ? 'message error' : 'message success';
    }

    function resetAttempts() {
        const currentTime = Date.now();
        if (attempts >= maxAttempts && currentTime - lastAttemptTime >= cooldownTime) {
            attempts = 0;
            localStorage.setItem('attempts', attempts);
            codeInput.disabled = false;
            submitBtn.disabled = false;
            messageEl.textContent = '';
        }
    }

    function checkAttempts() {
        if (attempts >= maxAttempts) {
            codeInput.disabled = true;
            submitBtn.disabled = true;
            const timeLeft = Math.ceil((cooldownTime - (Date.now() - lastAttemptTime)) / 1000);
            if (timeLeft > 0) {
                showMessage(`هیفیە جاڤەرێ بە ${timeLeft} چرکە`);
            }
            return false;
        }
        return true;
    }

    resetAttempts();
    checkAttempts();

    submitBtn.addEventListener('click', function() {
        if (!checkAttempts()) return;

        if (validCodes.includes(codeInput.value)) {
            showMessage('بسەرکەفتیانە کۆد هاتە چالاکرن', false);
            localStorage.setItem('activated', 'true');
            localStorage.removeItem('attempts');
            localStorage.removeItem('lastAttemptTime');
            
            setTimeout(() => {
                window.location.replace('home.html');
            }, 2000);
        } else {
            attempts++;
            localStorage.setItem('attempts', attempts);
            localStorage.setItem('lastAttemptTime', Date.now());
            
            if (attempts >= maxAttempts) {
                checkAttempts();
            } else {
                showMessage(`!کۆد خەلەتە! ${maxAttempts - attempts} هەوڵدانێت تە مان`);
            }
            codeInput.value = '';
        }
    });

    codeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitBtn.click();
        }
    });

    
    setInterval(resetAttempts, 10000);
});