document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.header');
    const menuLinks = document.querySelectorAll('.mobile-menu a'); // Add this line

    burgerCheckbox.addEventListener('change', function() {
        if (this.checked) {
            mobileMenu.classList.add('active');
            header.classList.add('menu-open');
        } else {
            mobileMenu.classList.remove('active');
            header.classList.remove('menu-open');
        }
    });

    // Add this new event listener for menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerCheckbox.checked = false;
            mobileMenu.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenu.contains(event.target) || 
                            burgerCheckbox.contains(event.target);
        
        if (!isClickInside && burgerCheckbox.checked) {
            burgerCheckbox.checked = false;
            mobileMenu.classList.remove('active');
            header.classList.remove('menu-open');
        }
    });

    window.addEventListener('scroll', function() {
        if (burgerCheckbox.checked) {
            burgerCheckbox.checked = false;
            mobileMenu.classList.remove('active');
            header.classList.remove('menu-open');
        }
    });
});