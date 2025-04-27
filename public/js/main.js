document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    const submitBtn = document.getElementById('submit-btn');
    const messageEl = document.getElementById('message');
    const validCodes = [

        "c@B4NuzLciWHMNEAkEChSa$Y6zZU5@", //free
        "#^RYZn$UCfP7E9#K7GXZ2H^Nha!sQU", //free
        "#^RYZn$UCfP7E9#K7GXZ2H^Nha!sQU", //free
        "VGkbDqgCUjVp#Ubw8krqXt#nmNeeae", //free
        "v@RY%W&NRZMGzVLwUo2on%6FiB6V*K", //free
        "aonzA^Wbus39^PZwQcL9WhS5sqd&W&", //free
        "KzVHUz!Rhy&9EC^Z7UYPkN5L7Se!zD", //free
        "3rYAaVv57edZjkokVK5@r2dJLy7E&e", //paid
        "u*AqRiMCoueG%AGH4*Es3m&nq@zhAE", //paid
        "yYXsktygAnyg&*tP38@MehK94V@5FV", //paid
        "dC^p%$M95TSpW5ic8vpRfN#%4zwdPv", //paid
        "8e7pYZ2#Uffaf7wWbmvThu5XGCdLLPL4PWFX7*SYQ@i!u4FuKPnmaJWp4D#ivY3rRCG^q8$g5z*Gfk*ivS$9@yWsjVWLDwZZAxT4&wgaPD7QtT9tbAi^mpNkytTidr%7",
        "90"


    ]; 
    const maxAttempts = 3;
    const cooldownTime = 10000;

    let attempts = parseInt(localStorage.getItem('attempts') || 0);
    let lastAttemptTime = parseInt(localStorage.getItem('lastAttemptTime') || 0);
    let usedCodes = JSON.parse(localStorage.getItem('usedCodes') || '[]'); 

    if (localStorage.getItem('activated') === 'true') {
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

        const enteredCode = codeInput.value;
        
        
        if (validCodes.includes(enteredCode)) {
            if (usedCodes.includes(enteredCode)) {
                showMessage('!ئەڤ کۆدە پێشتر هاتیە بەکارهینان');
                codeInput.value = '';
                return;
            }

            showMessage('بسەرکەفتیانە کۆد هاتە چالاکرن', false);
            localStorage.setItem('activated', 'true');
            localStorage.removeItem('attempts');
            localStorage.removeItem('lastAttemptTime');
            
            
            usedCodes.push(enteredCode);
            localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
            
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

    setInterval(resetAttempts, 1000);
});