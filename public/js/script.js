document.getElementById('clickBox').addEventListener('click', function() {
    
    this.innerHTML = '<p>Coming soon! Stay tuned for updates.</p>';
    
    
    
    this.style.backgroundColor = '#f8f8f8';

    this.style.backgroundColor = '#f8f8f8';
    
    
    setTimeout(() => {
        this.innerHTML = '<p>My project in the future</p>';
        this.style.backgroundColor = '#f8f8f8';
    }, 2000);
});