const banner = document.getElementById('banner');
const h1 = document.getElementById('banner-h1')
const h2 = document.getElementById('banner-h2')
const nav_bar = document.getElementById('navig')
nav_bar.style.display = 'none'

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        banner.classList.add('shrink');
        h1.innerText = 'Urban Legends'
        nav_bar.style.display = 'block'
        h2.style.display = 'none'
    }
});