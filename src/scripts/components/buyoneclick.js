const productCardBtnsBuy = document.querySelectorAll('.product-card__btns-buy');
const productCardBtnsBuy2 = document.querySelectorAll('.product__layout-info-purchase-buy-btn');
const productCardModal = document.querySelector('.product-card__modal');
const productCardModalClose = document.querySelector('.product-card__modal-close');
const productBtnSendBuyInfo = document.querySelector('.product-card__modal-user-info-btn');

document.addEventListener('DOMContentLoaded', function () {

    if ((productCardBtnsBuy.length || productCardBtnsBuy2.length) && productCardModal) {
        const imageUrlEl = productCardModal.querySelector('.product-card__modal-info-img img');
        const productPriceEl = productCardModal.querySelector('.product-card__modal-info-price');
        const productTitleEl = productCardModal.querySelector('.product-card__modal-info-bouquet-description');
        const productQuantityEl = productCardModal.querySelector('.product-card__modal-info-bouquet-quantity');

        const btnsBuy = productCardBtnsBuy.length ? productCardBtnsBuy : productCardBtnsBuy2;

        btnsBuy.forEach(btn => {
            btn.addEventListener('click', () => {
                const imageUrl = btn.getAttribute("data-product-imageurl");
                const productPrice = btn.getAttribute("data-product-price");
                const productTitle = btn.getAttribute("data-product-title");
                const productQuantity = btn.getAttribute("data-product-quantity");

                productTitleEl.textContent = productTitle;
                productPriceEl.textContent = productPrice + " ₽";
                productQuantityEl.textContent = productQuantity + " шт.";
                imageUrlEl.setAttribute("src", imageUrl);

                productCardModal.classList.add('product-card__modal--active');
                document.body.style.overflow = 'hidden';
            })
        });

        productCardModal.addEventListener('click', (e) => {
            if (e.target === productCardModal) {
                productCardModal.classList.remove('product-card__modal--active');
                document.body.style.overflow = '';
            }
        });

        productBtnSendBuyInfo.addEventListener('click', (e) => {
            const phone = productCardModal.querySelector('.product-card__modal-user-info-number input');
            const productTitle = productCardModal.querySelector('.product-card__modal-info-bouquet-description').textContent;
            const productPrice = productCardModal.querySelector('.product-card__modal-info-price').textContent;

            fetch('/feedback/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({
                    phone: phone.value,
                    comment: 'Покупка в 1 клик - ' + productTitle +', цена: ' + productPrice
                })
            })
                .then(response => {
                    productCardModal.classList.remove('product-card__modal--active');
                    document.body.style.overflow = '';
                });
        });

        productCardModalClose.addEventListener('click', () => {
            productCardModal.classList.remove('product-card__modal--active');
            document.body.style.overflow = '';
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && productCardModal.classList.contains('product-card__modal--active')) {
                productCardModal.classList.remove('product-card__modal--active');
                document.body.style.overflow = '';
            }
        });
    }
});