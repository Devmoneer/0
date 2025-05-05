document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger input');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    
    // Toggle sidebar when burger is clicked
    burger.addEventListener('change', function() {
        sidebar.classList.toggle('active', this.checked);
    });
    
    // Close sidebar when close button is clicked
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        burger.checked = false;
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(event.target) && 
            !burger.contains(event.target)) {
            sidebar.classList.remove('active');
            burger.checked = false;
        }
    });
});