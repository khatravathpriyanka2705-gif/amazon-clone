
const orders = document.querySelectorAll('.order');
const detailsDiv = document.getElementById('order-details');


orders.forEach(order => {
    order.addEventListener('click', function() {
       
        const details = order.getAttribute('data-details');
        detailsDiv.textContent = details;
    });
});