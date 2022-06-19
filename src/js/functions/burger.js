(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');

  burger?.addEventListener('click', (e) => {
    document.querySelector('.header').classList.toggle('burger--active');
    document.querySelector('.header__search').classList.remove('search--active');
    document.querySelector('.header').classList.remove('search--active');
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      document.querySelector('.page__body').classList.add('no-scroll');
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      document.querySelector('.page__body').classList.remove('no-scroll');
      document.querySelectorAll('.nav-dropdown').forEach(el => {
      el.querySelector('.nav-dropdown__title').classList.remove('_active');
      el.querySelector('.nav-dropdown__content').setAttribute('hidden', '');
      });
    }
  });



  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      document.querySelector('.header').classList.remove('burger--active');
      document.querySelector('.page__body').classList.remove('no-scroll');
      document.querySelectorAll('.nav-dropdown').forEach(el => {
        el.querySelector('.nav-dropdown__title').classList.remove('_active');
        el.querySelector('.nav-dropdown__content').setAttribute('hidden', '');
      });
    });
  });
  
})();
