'use strict';

const menu = document.querySelector('.header__menu');
const menuBtns = document.querySelector('.header__menu-btns');
const menuCall = document.querySelector('.header__menu-call');
const menuSocialMedia = document.querySelector('.header__menu-social-media');
const bottomCatalog = document.querySelector('.header__bottom-catalog');
const bottomCatalogList = document.querySelector('.header__bottom-catalog-list');
const catalogMobile = document.querySelector('.header__catalog-mobile');
const catalogMobileList = document.querySelector('.header__catalog-list-mobile');
const bottomSearchBar = document.querySelector('.header__bottom-search-bar');
const bottomSocialMediaSearch = document.querySelector('.header__bottom-social-media-search');
const burger = document.querySelectorAll('.header__menu-burger');
const listItem = document.querySelectorAll('.header__menu-list-item');
const menuSearch = document.querySelector('.header__menu-btns-search');
const menuMagnifier = document.querySelector('.header__menu-btns-search-magnifier');

burger.forEach(burgerBtn => {
    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('header__menu--active');
        menuBtns.classList.toggle('header__menu-btns--active');
        menuCall.classList.toggle('visible');
        menuSocialMedia.classList.toggle('header__menu-social-media--active');
        catalogMobile.classList.toggle('header__catalog-mobile--active');

        listItem.forEach(item => {
            item.classList.toggle('header__menu-list-item--active');
        });
    })
});

menuMagnifier.addEventListener('click', () => {
    menuSearch.classList.toggle('visible');
})

bottomSocialMediaSearch.addEventListener('click', () => {
    bottomSearchBar.classList.toggle('visible');
})

bottomCatalog.addEventListener('click', () => {
    bottomCatalogList.classList.toggle('header__bottom-catalog-list--active');
})

document.addEventListener('click', (event) => {
    if (
        !bottomCatalog.contains(event.target) &&
        !bottomCatalogList.contains(event.target)
    ) {
        bottomCatalogList.classList.remove('header__bottom-catalog-list--active');
    }
});

if (catalogMobile && catalogMobileList) {
    catalogMobile.addEventListener('click', (e) => {
        e.stopPropagation(); // предотвращаем закрытие меню этим же кликом
        catalogMobileList.classList.toggle('header__catalog-list-mobile--active');
    });

    document.addEventListener('click', (event) => {
        // Проверка: открыто ли меню вообще?
        if (
            catalogMobileList.classList.contains('header__catalog-list-mobile--active') &&
            !catalogMobile.contains(event.target) &&
            !catalogMobileList.contains(event.target)
        ) {
            catalogMobileList.classList.remove('header__catalog-list-mobile--active');
        }
    });
}