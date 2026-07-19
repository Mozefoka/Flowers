import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

document.addEventListener('DOMContentLoaded', function () {
    const deliveryDate = document.querySelector('.delivery-date__content-tabs-calendar');
    const deliveryTime = document.querySelector('.delivery-date__content-tabs-time-choose');
    const checkoutDate = document.querySelector('.checkout__content-form-date-calendar-item');

    if (deliveryDate) {
        flatpickr(deliveryDate, {
            dateFormat: "d.m.y",
        });
    }

    if (deliveryTime) {
        flatpickr(deliveryTime, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
        });
    }

    if (checkoutDate) {
        flatpickr(checkoutDate, {
            dateFormat: "d.m.y",
        });
    }
});