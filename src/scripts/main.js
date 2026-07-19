import "../styles/base/main.scss";
import "../scripts/components/header.js";
import "../scripts/pages/home";
import "../scripts/components/swiper";
import "../scripts/components/buyoneclick";

const productCardHeartBtn = document.querySelectorAll('.product-card__img-btn');
const chatButton = document.querySelector('.chat');
const modal = document.querySelector('.chat-modal');
const chatButtonSend = document.querySelector('.chat-modal__call');
const placeOrder = document.querySelector('.place-order');
const placeOrderModal = document.querySelector('.place-order__modal');

document.addEventListener('DOMContentLoaded', function () {

    if (placeOrder) {
        placeOrder.addEventListener('click', () => {
            placeOrderModal.classList.add('place-order__modal--active');
            document.body.style.overflow = 'hidden';
        })
    }

    productCardHeartBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('product-card__img-btn--active');
        })
    })

    if (chatButton) {
        function openModal() {
            modal.classList.add('chat-modal--active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('chat-modal--active');
            document.body.style.overflow = '';
        }

        chatButton.addEventListener('click', openModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        chatButtonSend.addEventListener('click', () => {
            const phone = modal.querySelector('.chat-modal__phone input');

            fetch('/feedback/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({
                    phone: phone.value,
                    comment: 'Запрос звонка с сайта'
                })
            })
            .then(response => {
                closeModal();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('chat-modal--active')) {
                closeModal();
            }
        });

        const closeModalBtn = modal.querySelector('.chat-modal__close');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
    }

    document.querySelectorAll('.counter').forEach(counter => {
        const minusBtn = counter.querySelector('.counter__btn-minus');
        const plusBtn = counter.querySelector('.counter__btn-plus');

        if (minusBtn && plusBtn) {
            const amountElement = counter.querySelector('.counter__amount');
            const priceElement = document.querySelector('.price-count');
            const basePrice = priceElement ?
                parseFloat(priceElement.dataset.price || priceElement.textContent.replace(/[^\d.]/g, '')) :
                null;

            function updatePrice(amount) {
                amountElement.textContent = amount;

                if (priceElement && basePrice) {
                    const totalPrice = basePrice * amount;
                    priceElement.textContent = totalPrice;
                    if (priceElement.value !== undefined) {
                        priceElement.value = totalPrice;
                    }
                }
            }

            minusBtn.addEventListener('click', () => {
                let amount = parseInt(amountElement.textContent) || 1;

                if (amount > 1) {
                    amount--;
                    updatePrice(amount);
                }
            });

            plusBtn.addEventListener('click', () => {
                let amount = parseInt(amountElement.textContent) || 1;

                amount++;
                updatePrice(amount);
            });
        }
    });
});