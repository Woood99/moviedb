if (document.querySelector('.movie-card-about__more')) {
    document.querySelectorAll('.movie-card-about__more').forEach(el => {
        el.addEventListener('click', (elem) => {
            elem.preventDefault();
            el = elem.target.closest('.movie-card-about').querySelector('.movie-card-about__descr')
            el.classList.toggle('active');
        });
    });
}




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
        let title = el.closest('.movie-card__inner').querySelector('.movie-card__title').textContent.trim();
        movieCardTrailerModal.innerHTML = `
            <div class="graph-modal__content">
                <div class="movie-card-trailer__header">
                    <button class="btn-reset js-modal-close graph-modal__close movie-card-trailer__prev" aria-label="Закрыть модальное окно">
                        <svg>
                            <use xlink:href="img/sprite.svg#arrow-right"></use>
                        </svg>
                    </button>
                    <span>Трейлер:</span>
                    <p>${title}</p>
                </div>
                <video poster="${video.getAttribute('poster')}" controls class="video-js movie-card-trailer-video vjs-theme-fantasy" preload="metadata">
                    <source src="${video.querySelector('source').getAttribute('src')}" type="${video.querySelector('source').getAttribute('type')}">
                </video>
            </div>
      `;
        video.remove();
        modalsInner.append(movieCardTrailerModal);
    });
}
movieCardTrailerModal();


function trailerModalInterval() {
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
            if (el.querySelector('.movie-card-trailer-video').classList.contains('vjs-has-started')) {
                clearInterval(counter);
                count = 0;
                content.classList.add('trailers-move');
                interval();
            }
        });
        el.addEventListener('touchstart', function () {
            if (el.querySelector('.movie-card-trailer-video').classList.contains('vjs-has-started')) {
                clearInterval(counter);
                count = 0;
                content.classList.add('trailers-move');
                interval();
            }
        });
    })
}
trailerModalInterval();

function trailerModalStop() {
    document.querySelectorAll('.modal-trailers__container').forEach(el => {
        let video = el.querySelector('.movie-card-trailer-video');
        let close = el.querySelector('.js-modal-close');
        close.addEventListener('click', () => {
            video.pause();
        });
    });
}
trailerModalStop();

function trailerModalStart() {
    document.querySelectorAll('.movie-card-trailer__btn').forEach(el => {
        el.addEventListener('click', () => {
            let containers = document.querySelectorAll('.modal-trailers__container');
            for (let container of containers) {
                let containerAttr = container.getAttribute('data-graph-target');
                if (containerAttr == el.getAttribute('data-graph-path')) {
                    let video = container.querySelector('.movie-card-trailer-video video');
                    setTimeout(() => {
                        video.play();    
                    }, 750);
                }
            }
        });
    });
}
trailerModalStart();



// ================================================================================================





function movieCardViewModal() {

    let movieCardViewBtns = document.querySelectorAll('.movie-card-view__btn');


    for (let i = 0; i < movieCardViewBtns.length; i++) {
        let count = i;
        let el = movieCardViewBtns[i];
        el.setAttribute('data-graph-path', `movie-card-view_${i}`);
        let video = el.closest('.movie-card-view__inner').querySelector('.movie-card-view-video');
        let poster = video.getAttribute('poster');
        let imgPoster = document.createElement('img');
        imgPoster.classList.add('movie-card-view__img');
        imgPoster.setAttribute('src', `${poster}`);
        imgPoster.setAttribute('alt', `${(el.closest('.movie-card__inner').querySelector('.movie-card__title').textContent).trim()}`);
        el.prepend(imgPoster);
    }


    let modalsInner = document.querySelector('.graph-modal');
    movieCardViewBtns.forEach(el => {
        let attr = el.getAttribute('data-graph-path');
        let movieCardViewModal = document.createElement('div');
        movieCardViewModal.classList.add('graph-modal__container', 'modal-view__container');
        movieCardViewModal.setAttribute('role', 'dialog');
        movieCardViewModal.setAttribute('aria-modal', 'true');
        movieCardViewModal.setAttribute('data-graph-target', `${attr}`);
        let video = el.closest('.movie-card-view__inner').querySelector('.movie-card-view-video');
        let title = el.closest('.movie-card__inner').querySelector('.movie-card__title').textContent.trim();
        movieCardViewModal.innerHTML = `
            <div class="graph-modal__content">
                <div class="movie-card-view__header">
                    <button class="btn-reset js-modal-close graph-modal__close movie-card-view__prev" aria-label="Закрыть модальное окно">
                        <svg>
                            <use xlink:href="img/sprite.svg#arrow-right"></use>
                        </svg>
                    </button>
                    <span>Смотреть:</span>
                    <p>${title}</p>
                </div>
                <video poster="${video.getAttribute('poster')}" controls class="video-js movie-card-view-video vjs-theme-fantasy" preload="metadata">
                    <source src="${video.querySelector('source').getAttribute('src')}" type="${video.querySelector('source').getAttribute('type')}">
                </video>
            </div>
      `;
        video.remove();
        modalsInner.append(movieCardViewModal);
    });




}
movieCardViewModal();

function viewModalInterval() {
    document.querySelectorAll('.modal-view__container').forEach(el => {
        let content = el.querySelector('.graph-modal__content');
        let count = 0;
        let counter = false;

        function interval() {
            counter = setInterval(function () {
                count++;
                if (count >= 3) {
                    content.classList.remove('view-move');
                }
            }, 1000);
        }
        interval();
        el.addEventListener('mousemove', function () {
            if (el.querySelector('.movie-card-view-video').classList.contains('vjs-has-started')) {
                clearInterval(counter);
                count = 0;
                content.classList.add('view-move');
                interval();
            }
        });
        el.addEventListener('touchstart', function () {
            if (el.querySelector('.movie-card-view-video').classList.contains('vjs-has-started')) {
                clearInterval(counter);
                count = 0;
                content.classList.add('view-move');
                interval();
            }
        });
    })
}
viewModalInterval();

function viewModalStop() {
    document.querySelectorAll('.modal-view__container').forEach(el => {
        let video = el.querySelector('.movie-card-view-video');
        let close = el.querySelector('.js-modal-close');
        close.addEventListener('click', () => {
            video.pause();
        });
    });
}
viewModalStop();

function viewModalStart() {
    document.querySelectorAll('.movie-card-view__btn').forEach(el => {
        el.addEventListener('click', () => {
            let containers = document.querySelectorAll('.modal-view__container');
            for (let container of containers) {
                let containerAttr = container.getAttribute('data-graph-target');
                if (containerAttr == el.getAttribute('data-graph-path')) {
                    let video = container.querySelector('.movie-card-view-video video');
                    setTimeout(() => {
                        video.play();    
                    }, 750);
                }
            }
        });
    });
}
viewModalStart();




// ================================================================================================






import {
    isMobile,
    isTablet,
    isDesktop
} from '../functions/check-viewport';

function movieCardActors() {
    document.querySelectorAll('.movie-card-actors__more').forEach(el => {
        let list = el.closest('.movie-card__actors').querySelector('.movie-card-actors__cast');
        let items = list.querySelectorAll('.movie-card-actors-item');
        let max = list.getAttribute('data-actors-max');
        let min = list.getAttribute('data-actors-min');
        if (items.length > max && !isMobile()) {
            for (let item = 0; item < items.length; item++) {
                if (item >= max) {
                    let element = items[item];
                    element.style.display = 'none';
                }
            }
        }
        if (items.length > min && isMobile()) {
            for (let item = 0; item < items.length; item++) {
                if (item >= min) {
                    let element = items[item];
                    element.style.display = 'none';
                }
            }
        }
        el.addEventListener('click', () => {
            items.forEach(element => {
                if (element.getAttribute('style') == 'display: none;') {
                    element.style.display = 'block';
                }
            });
        });
    });
}
movieCardActors();
