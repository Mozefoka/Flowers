import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

const productSwiperLine = new Swiper(".product__swiper-line", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        992: {
            spaceBetween: 20,
        },

        320: {
            spaceBetween: 10,
        },
    }
})

const productSwiper = new Swiper(".product__swiper", {
    thumbs: {
        swiper: productSwiperLine,
    },
})

const reviewsSwiper = new Swiper(".home__reviews-swiper-inner", {
    rewind: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".home__reviews-swiper-button-next",
        prevEl: ".home__reviews-swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
        },
        992: {
            slidesPerView: 'auto',
        }
    }
});