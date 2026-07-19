const select = document.querySelector('.delivery-date__content-tabs-location-select');
const selectArrow = document.querySelector('.delivery-date__content-tabs-location-select-arrow');
const chooseBtn = document.querySelector('.delivery-date__content-tabs-time-choose');
const chooseArrow = document.querySelector('.delivery-date__content-tabs-time-arrow');

document.addEventListener('DOMContentLoaded', function () {

    select.addEventListener('click', function () {
        selectArrow.classList.toggle('rotated', !selectArrow.classList.contains('rotated'));
    });

    document.addEventListener('click', function (e) {
        if (!select.contains(e.target)) {
            selectArrow.classList.remove('rotated');
        }
    });

    chooseBtn.addEventListener('click', function () {
        chooseArrow.classList.toggle('rotated', !chooseArrow.classList.contains('rotated'));
    });

    chooseBtn.addEventListener('change', function () {
        chooseArrow.classList.remove('rotated');
    });

    document.addEventListener('click', function (e) {
        if (!chooseBtn.contains(e.target)) {
            chooseArrow.classList.remove('rotated');
        }
    });
});