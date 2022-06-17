if (document.querySelector('.search')) {
    const searchForm = document.querySelector('.search');
    const searchInput = document.querySelector('.search__input');
    const searchBtn = document.querySelector('.search__btn');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.classList.toggle('search--active');
    });
    
    document.querySelector('.main').addEventListener('click', (e) => {
        if (searchInput.classList.contains('search--active')) {
            searchInput.classList.remove('search--active');
        }
    });
}
