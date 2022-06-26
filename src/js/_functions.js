// ========================================================================================


// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())


// ========================================================================================


// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('desktop')
// } else if (isTablet()) {
//     console.log('tablet')
// } else if (isMobile()) {
//     console.log('isMobile')
// }


// ========================================================================================


// Реализация бургер-меню
import {
    burger
} from './functions/burger';


// ========================================================================================


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';


// ========================================================================================


// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();


// ========================================================================================


// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');


// ========================================================================================


// Получение высоты шапки сайта (не забудьте вызвать функцию)
import {
    getHeaderHeight
} from './functions/header-height';
getHeaderHeight();


// ========================================================================================


// Подключение плагина кастом-скролла
// import 'simplebar';


// ========================================================================================


// Подключение свайпера
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);
if (document.querySelector('.hero-slider')) {
    document.querySelectorAll('.hero-slider').forEach(el => {
        const heroSlider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 750,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: el.querySelector('.hero-slider-pagination'),
                clickable: true,
            },
        });
    });
}
if (document.querySelector('.popular-collections-slider')) {
    document.querySelectorAll('.popular-collections-slider').forEach(el => {
        const heroSlider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 750,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: el.closest('.popular-collections__inner').querySelector('.popular-collections-slider-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: el.closest('.popular-collections__inner').querySelector('.popular-collections-slider-nav_next'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1201: {
                    slidesPerView: 1,
                },
            }
        });
    });
}

if (document.querySelector('.slider-line-swiper')) {
    document.querySelectorAll('.slider-line-swiper').forEach(el => {
        const sliderLine = new Swiper(el, {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 750,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            navigation: {
                prevEl: el.closest('.slider-line__inner').querySelector('.slider-line-swiper-nav_prev'),
                nextEl: el.closest('.slider-line__inner').querySelector('.slider-line-swiper-nav_next'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 2.01,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 4,
                },
                1800: {
                    slidesPerView: 5,
                },
            }
        });
    });
}


// ========================================================================================



// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();


// ========================================================================================



// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');


// ========================================================================================


// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');


// ========================================================================================


// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//     console.log(e.target);
//     console.log(e.detail);
//     console.log(e.detail.dir);
// });



// ========================================================================================


// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);



// ========================================================================================



// Подключение spollers
import * as spollersFunc from "./functions/spollers";
spollersFunc.spollers();


// ========================================================================================


// Подключение галереи

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
// import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, 
// lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';

// Запуск
// const galleries = document.querySelectorAll('#galleryID');
// galleries.forEach(gallery => {
//     lightGallery(gallery, {
//         // plugins: [lgFullscreen],
//         licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
//         speed: 500,
//     });
// });



// ========================================================================================



// Модуль звездного рейтинга 
import * as ratingFunc from "./functions/rating";
ratingFunc.formRating();



// ========================================================================================



// Модуь  "количество"
//import { formQuantity } from './functions/quantity';
//formQuantity();


// ========================================================================================


/* Динамический адаптив */
// import "./functions/dynamic-adapt";


// ========================================================================================


// Фикс фулскрин-блоков
import './functions/fix-fullheight';


// ========================================================================================



// video-js
import videojs from 'video.js';

document.addEventListener('DOMContentLoaded', () => {

    function movieCardTrailers() {
        let movieCardTrailers = document.querySelectorAll('.movie-card-trailer-video').forEach(el => {
            videojs(el);
            let movieCardTrailerBtns = document.querySelectorAll('.movie-card-trailer__btn');
            let modalTrailersContainers = document.querySelectorAll('.modal-trailers__container');
            for (let container of modalTrailersContainers) {
                let containerAttr = container.getAttribute('data-graph-target');
                for (let btn of movieCardTrailerBtns) {
                    let btnAttr = btn.getAttribute('data-graph-path');
                    if (containerAttr == btnAttr) {
                        setTimeout(() => {
                            function msToTime(duration) {
                                duration = duration * 1000;
                                let milliseconds = Math.floor((duration % 1000) / 100),
                                    seconds = Math.floor((duration / 1000) % 60),
                                    minutes = Math.floor((duration / (1000 * 60)) % 60),
                                    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
                                hours = (hours < 10) ? hours : hours;
                                minutes = (minutes < 10) ? minutes : minutes;
                                seconds = (seconds < 10) ? `0${seconds}` : seconds;
                                if (hours == 0) {
                                    return minutes + ":" + seconds;
                                } else if (hours > 0) {
                                    return hours + ":" + minutes + ":" + seconds;
                                }
                            }
                            btn.querySelector('.movie-card-trailer__time').textContent = msToTime(el.duration);
                        }, 500);
                    }
                }
            }





        });
    };
    movieCardTrailers();
    
    // ========================================================================================================
   
    function movieCardView() {
        let movieCardView = document.querySelectorAll('.movie-card-view-video').forEach(el => {
            videojs(el);
        });
    };
    movieCardView();
    
});
