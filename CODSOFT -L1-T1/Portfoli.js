window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#939498'; // Neutral gray on scroll
    } else {
        navbar.style.background = '#ee1b24'; // Vibrant red for original
    }
});
