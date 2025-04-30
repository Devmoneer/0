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