const sizeGroup = document.querySelector('.product__layout-info-size');
const flowerBtn = document.querySelectorAll('.product__layout-info-composition-flower-btn');
const flowerModal = document.querySelector('.product__layout-info-flower-modal');
const flowerModalClose = document.querySelector('.product__layout-info-flower-modal-close');
const addProductToCart = document.querySelector('.product__layout-info-purchase-order-btn');
const addToCartModal = document.querySelector('.place-cart__modal');
const addToCartModalClose = document.querySelector('.place-cart__modal-close');

addProductToCart.addEventListener('click', (e) => {
    const amountProduct = document.querySelector('.counter__amount');
    const priceProperty = document.querySelector('.product__layout-info-size-btn--active');
    const productInfo = document.querySelector('.product__layout-info');

    const amountProductValue = amountProduct ? amountProduct.textContent : undefined;
    const pricePropertyValue = priceProperty ? priceProperty.getAttribute("data-product-price") : undefined;
    const productId = productInfo ? productInfo.getAttribute("data-product-id") : undefined;

    fetch('/cart/add/'+productId+'?'+'price='+pricePropertyValue+'&quantity='+amountProductValue)
        .then(response => {
            addToCartModal.classList.add('place-cart__modal--active');
            document.body.style.overflow = 'hidden';
        });
});

sizeGroup.addEventListener('click', (e) => {
    const sizeBtn = e.target.closest('.product__layout-info-size-btn');
    const sizeBtnActive = document.querySelector('.product__layout-info-size-btn--active');

    if (!sizeBtn) return;

    if (sizeBtn === sizeBtnActive) {
        return;
    }

    if (sizeBtnActive) {
        sizeBtnActive.classList.remove('product__layout-info-size-btn--active');
    }

    sizeBtn.classList.add('product__layout-info-size-btn--active');
    const priceCurrent = sizeBtn.getAttribute("data-product-price");
    const priceOld = sizeBtn.getAttribute("data-product-price-old");

    if (priceCurrent !== undefined) {
        const priceValue = document.querySelector('.product__layout-info-price-sum.price-count');
        priceValue.textContent = priceCurrent;
    }

    if (priceOld !== undefined) {
        const priceOldValue = document.querySelector('.product__layout-info-price-sum-discount');
        priceOldValue.textContent = priceOld;
    }

});

flowerBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        flowerModal.classList.add('product__layout-info-flower-modal--active');
        document.body.style.overflow = 'hidden';
    })
});

flowerModal.addEventListener('click', (e) => {
    if (e.target === flowerModal) {
        flowerModal.classList.remove('product__layout-info-flower-modal--active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && flowerModal.classList.contains('product__layout-info-flower-modal--active')) {
        flowerModal.classList.remove('product__layout-info-flower-modal--active');
        document.body.style.overflow = '';
    }
});

flowerModalClose.addEventListener('click', () => {
    flowerModal.classList.remove('product__layout-info-flower-modal--active');
    document.body.style.overflow = '';
});

addToCartModalClose.addEventListener('click', () => {
    addToCartModal.classList.remove('place-cart__modal--active');
    document.body.style.overflow = '';
});