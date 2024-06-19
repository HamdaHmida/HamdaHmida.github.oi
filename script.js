// script.js
document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.projects-wrapper').scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.projects-wrapper').scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
    });
});

function animateAboutMeSection() {
    const aboutLeft = document.querySelector('.about-left');
    if (aboutLeft.getBoundingClientRect().top < window.innerHeight * 0.75) {
        aboutLeft.classList.add('show');
    }
}

// Event listener to trigger animation on page load
window.addEventListener('load', () => {
    animateAboutMeSection(); // Check once on page load
    window.addEventListener('scroll', animateAboutMeSection); // Check on scroll
});