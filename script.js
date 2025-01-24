const banner = document.getElementById('banner');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        banner.classList.add('shrink');
    } else if(window.scrollY <= 50) {
        banner.classList.remove('shrink');
    }
});