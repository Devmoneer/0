document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const newChatBtn = document.getElementById('newChatBtn');

    // Initialize chat with welcome message
    addMessage('چۆنێ دشێم هاریکاریا تە بکم؟', false);

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                addMessage('ببورە، ئەز هێشتا د پرۆسێسا پەرەپێدانێ دامە.');
            }, 1000);
        }
    }

    // Event Listeners
    sendBtn.addEventListener('click', handleUserInput);

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    newChatBtn.addEventListener('click', function() {
        chatBox.innerHTML = '';
        addMessage('چۆنێ دشێم هاریکاریا تە بکم؟', false);
    });
});