
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.cart__products-card-delete').forEach(element => {
        element.addEventListener('click', function(event) {
            const itemId = element.getAttribute("data-item-id");

            fetch('/cart/item/'+itemId)
                .then(response => {
                    location.reload(true);
                });
        });
    });
});

