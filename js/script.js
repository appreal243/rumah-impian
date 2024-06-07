// Memilih semua elemen <section> di halaman web
let sections = document.querySelectorAll('section');

// Memilih semua tautan <a> di dalam elemen <nav> di dalam elemen <header> di halaman web
let navLinks = document.querySelectorAll('.header nav a');

// Membuat fungsi yang akan dieksekusi setiap kali pengguna menggulir halaman
window.addEventListener('scroll', function() {
    sections.forEach(sec => {
        let top = window.scrollY;   // Posisi Scroll saat ini
        let offset = sec.offsetTop - 120; // Jarak elemen section dengan bagian atas browser
        let height = sec.offsetHeight;  // Tinggi elemen section
        let id = sec.getAttribute('id');    // Id setip section
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            });
        }
    });
});