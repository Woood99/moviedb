import {
    isMobile,
    isTablet,
    isDesktop
} from '../functions/check-viewport';


// if (document.querySelector('.search') && !isMobile()) {
//     const searchForm = document.querySelector('.search');
//     const searchInput = document.querySelector('.search__input');
//     const searchBtn = document.querySelector('.search__btn');
//     searchBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         searchInput.classList.toggle('search--active');
//     });

//     document.querySelector('.main').addEventListener('click', (e) => {
//         if (searchInput.classList.contains('search--active')) {
//             searchInput.classList.remove('search--active');
//         }
//     });
// }

if (document.querySelector('.search--mobile')) {
    const searchMobile = document.querySelector('.search--mobile');
    const search = document.querySelector('.search');
    searchMobile.addEventListener('click', () => {
        document.querySelector('.header').classList.remove('burger--active');
        document.querySelector('[data-menu]').classList.remove('menu--active');
        document.querySelector('.burger').classList.remove('burger--active');
        search.classList.toggle('search--active');
        if (search.classList.contains('search--active')) {
            document.querySelector('.page__body').classList.add('no-scroll');
            document.querySelector('.header').classList.add('search--active');
        } else {
            document.querySelector('.page__body').classList.remove('no-scroll');
            document.querySelector('.header').classList.remove('search--active');
        }
    })
}
