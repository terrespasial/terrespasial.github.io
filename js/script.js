// script.js
document.getElementById('logo_footer').addEventListener('mouseenter', function() {
    this.src = './assets/images/ts_logo_rgb.png';  // Ganti dengan path gambar baru
});

document.getElementById('logo_footer').addEventListener('mouseleave', function() {
    this.src = './assets/images/ts_logo_bnw.png';  // Kembalikan ke gambar semula
});

// Toggle the navigation menu on mobile
const hamburger = document.getElementById('hamburger-icon');
const navList = document.querySelector('.nav-list');

// Event listener untuk hamburger
hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});
