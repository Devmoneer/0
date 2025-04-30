document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.header');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    
    function closeMenu() {
        burgerCheckbox.checked = false;
        mobileMenu.classList.remove('active');
        header.classList.remove('menu-open');
    }

    
    burgerCheckbox.addEventListener('change', function() {
        if (this.checked) {
            mobileMenu.classList.add('active');
            header.classList.add('menu-open');
        } else {
            closeMenu();
        }
    });

    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenu.contains(event.target) || 
                            burgerCheckbox.contains(event.target) ||
                            event.target.closest('.burger');
        
        if (!isClickInside && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    
    window.addEventListener('scroll', function() {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const aiBox = document.getElementById('aiBox');
    
    aiBox.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        const message = document.createElement('p');
        message.textContent = 'ل دەمەکێ نێزیک';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #102E50;
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-family: 'Noto Sans Arabic', sans-serif;
            z-index: 1000;
            animation: fadeInOut 2s ease-in-out forwards;
            -webkit-user-select: none; 
        `;

        
        document.body.appendChild(message);

        
        setTimeout(() => {
            message.remove();
        }, 5000);
    });
});

