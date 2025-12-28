// Sayfa kaydırıldığında navigasyonun arka planını koyulaştır
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
    }
});

// Fare hareketine göre "vignette" (karartma) takibi (Opsiyonel Atmosfer)
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Hafif bir fener efekti gibi takip etmesini istersen burayı kullanabilirsin
    // document.querySelector('.vignette').style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 10%, black 80%)`;
});

// Bölüm Giriş Animasyonları
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});

console.log("Last Control - Flash In Studios hazır.");
