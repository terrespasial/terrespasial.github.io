// script.js
document.getElementById('logo').addEventListener('mouseenter', function() {
    this.src = './assets/images/ts_logo_rgb.png';  // Ganti dengan path gambar baru
});

document.getElementById('logo').addEventListener('mouseleave', function() {
    this.src = './assets/images/ts_logo_bnw.png';  // Kembalikan ke gambar semula
});
