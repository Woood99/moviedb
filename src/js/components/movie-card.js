if (document.querySelector('.movie-card-about__more')) {
    document.querySelectorAll('.movie-card-about__more').forEach(el => {
        el.addEventListener('click', (elem) => {
            elem.preventDefault();
           el = elem.target.closest('.movie-card-about').querySelector('.movie-card-about__descr')
            el.classList.toggle('active');
        });
    });
}