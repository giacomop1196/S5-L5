// Attendere che il dom sia caricato
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav');
    const button = document.querySelector('button');
    const targetSection = document.getElementById('trending');

    if (navbar && button && targetSection) {  // Verificare che gli elementi esistano
        const navbarHeight = navbar.offsetHeight; // Altezza attuale della navbar

        const scrollThreshold = targetSection.offsetTop - navbarHeight; // La parte superiore di trending raggiunge la parte inferiore della navbar

        window.addEventListener('scroll', function () {
            if (window.scrollY > scrollThreshold) {   // window.scrollY posizione di scorrimento verticale attuale
                // Se abbiamo scrollato oltre la soglia, aggiungiamo la classe
                navbar.classList.add('scrolled-nav');
                button.classList.add('scrolled-button');
            } else {
                // Se siamo torniamo indietro, la rimuoviamo
                navbar.classList.remove('scrolled-nav');
                button.classList.remove('scrolled-button');
            }
        });
    }
});
