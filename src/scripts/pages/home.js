const catalog = document.querySelector('.home__catalog');
const catalogProductsShowAllBtn = document.querySelector('.home__catalog-show-all');
const filterTabGroup = document.querySelector('.home__filter-tab-group');
const filterTabMobile = document.querySelector('.home__filter-tab-mobile');

const addProductToCartButtons = document.querySelectorAll('.product-card__btns-cart');
const addToCartModal = document.querySelector('.place-cart__modal');
const addToCartModalClose = document.querySelector('.place-cart__modal-close');

if (filterTabMobile) {
    filterTabMobile.addEventListener('click', () => {
        filterTabGroup.classList.toggle('home__filter-tab-group--active');
    })
}

if (catalogProductsShowAllBtn) {
    catalogProductsShowAllBtn.addEventListener('click', (e) => {
        e.target.classList.toggle('hidden');
    })
}

if (filterTabGroup) {
    filterTabGroup.addEventListener('click', (e) => {
        const tab = e.target.closest('.home__filter-tab');
        const filterTabActive = document.querySelector('.home__filter-tab--active');

        if (!tab) return;

        if (tab === filterTabActive) {
            return;
        }

        const newCategoryId = tab.getAttribute("data-category-id");
        const categoriesTitleVisiable = document.querySelectorAll('.home__catalog-products-title' + (!!newCategoryId ? ':not(.home__catalog-products-title--hidden)' : '') );
        const categoriesProductsVisiable = document.querySelectorAll('.home__catalog-products-inner' + (!!newCategoryId ? ':not(.home__catalog-products-inner--hidden)' : ''));

        if (!!newCategoryId) {
            categoriesTitleVisiable.forEach((el) => {
                el.classList.add('home__catalog-products-title--hidden');
            });
            categoriesProductsVisiable.forEach((el) => {
                el.classList.add('home__catalog-products-inner--hidden');
            });

            document.querySelector('#category-title-id-'+newCategoryId).classList.remove('home__catalog-products-title--hidden');
            document.querySelector('#category-products-id-'+newCategoryId).classList.remove('home__catalog-products-inner--hidden');
        }
        else {
            categoriesTitleVisiable.forEach((el) => {
                el.classList.remove('home__catalog-products-title--hidden');
            });
            categoriesProductsVisiable.forEach((el) => {
                el.classList.remove('home__catalog-products-inner--hidden');
            });
        }

        if (filterTabActive) {
            filterTabActive.classList.remove('home__filter-tab--active');
        }

        tab.classList.add('home__filter-tab--active');
    })
}

addProductToCartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const pricePropertyValue = btn.getAttribute("data-product-price");
        const productId = btn.getAttribute("data-product-id");

        fetch('/cart/add/'+productId+'?'+'price='+pricePropertyValue+'&quantity=1')
            .then(response => {
                addToCartModal.classList.add('place-cart__modal--active');
                document.body.style.overflow = 'hidden';
            });
    })
});

if (addToCartModal && addToCartModalClose) {
    addToCartModalClose.addEventListener('click', () => {
        addToCartModal.classList.remove('place-cart__modal--active');
        document.body.style.overflow = '';
    });
}