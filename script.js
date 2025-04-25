document.addEventListener('DOMContentLoaded', function() {
    // Filter options functionality
    const filterButtons = document.querySelectorAll('.filter-options button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from other buttons
            filterButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.remove('active');
                }
            });
            // Toggle active class on clicked button
            this.classList.toggle('active');
            // Implement filter logic here
            console.log('Filter:', this.textContent);
        });
    });

    // Add ticker button functionality
    const addTickerButton = document.querySelector('.add-ticker-button');
    addTickerButton.addEventListener('click', function() {
        // Implement add ticker logic here
        console.log('Add ticker button clicked');
    });

    // Bottom navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Remove active class from all links
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            // Implement navigation logic here
            console.log('Navigate to:', this.textContent);
        });
    });

    // Light/dark mode toggle
    const body = document.body;
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Light/Dark Mode';
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');
    });
    body.appendChild(toggleButton);

    // Menu functionality
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });
});
