if (document.querySelector('.movie-card-about__more')) {
    document.querySelectorAll('.movie-card-about__more').forEach(el => {
        el.addEventListener('click', (elem) => {
            elem.preventDefault();
            el = elem.target.closest('.movie-card-about').querySelector('.movie-card-about__descr')
            el.classList.toggle('active');
        });
    });
}




// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();


function movieCardTrailerModal() {
    let movieCardTrailerBtns = document.querySelectorAll('.movie-card-trailer__btn');
    for (let i = 0; i < movieCardTrailerBtns.length; i++) {
        let count = i;
        let el = movieCardTrailerBtns[i];
        el.setAttribute('data-graph-path', `movie-card-trailer_${i}`);
        let video = el.closest('.movie-card-trailer__view').querySelector('.movie-card-trailer-video');
        let poster = video.getAttribute('poster');
        let imgPoster = document.createElement('img');
        imgPoster.classList.add('movie-card-trailer__img');
        imgPoster.setAttribute('src', `${poster}`);
        imgPoster.setAttribute('alt', `${(el.closest('.movie-card__inner').querySelector('.movie-card__title').textContent).trim()}`);
        el.prepend(imgPoster);
    }
    let modalsInner = document.querySelector('.graph-modal');
    movieCardTrailerBtns.forEach(el => {
        let attr = el.getAttribute('data-graph-path');
        let movieCardTrailerModal = document.createElement('div');
        movieCardTrailerModal.classList.add('graph-modal__container', 'modal-trailers__container');
        movieCardTrailerModal.setAttribute('role', 'dialog');
        movieCardTrailerModal.setAttribute('aria-modal', 'true');
        movieCardTrailerModal.setAttribute('data-graph-target', `${attr}`);
        let video = el.closest('.movie-card-trailer__view').querySelector('.movie-card-trailer-video');
        movieCardTrailerModal.innerHTML = `
            <button class="btn-reset js-modal-close graph-modal__close" aria-label="Закрыть модальное окно"></button>
            <div class="graph-modal__content">
                <div class="movie-card-trailer__header">назад</div>
                <video poster="${video.getAttribute('poster')}" controls class="video-js movie-card-trailer-video vjs-theme-fantasy">
                    <source src="${video.querySelector('source').getAttribute('src')}" type="video/mp4">
                </video>
            </div>
      `;
        video.remove();
        modalsInner.append(movieCardTrailerModal);
    });
}
movieCardTrailerModal();


function trailerModal() {
    document.querySelectorAll('.modal-trailers__container').forEach(el => {
        let content = el.querySelector('.graph-modal__content');
        let count = 0;
        let counter = false;

        function interval() {
            counter = setInterval(function () {
                count++;
                if (count >= 3) {
                    content.classList.remove('trailers-move');
                }
            }, 1000);
        }
        interval();
        el.addEventListener('mousemove', function () {
            clearInterval(counter);
            count = 0;
            content.classList.add('trailers-move');
            interval();
        });
    })
}
// trailerModal();
