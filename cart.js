document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    function loadCart() {
        cartItemsDiv.innerHTML = "";
        let total = 0;

        cart.forEach((item, i) => {
            total += 449 * item.quantity;
            total += 2099 * item.quantity;
            total += 799 * item.quantity;
            total += 699 * item.quantity;
            total += 1699 * item.quantity;
            total += 1009* item.quantity;
            total += 799* item.quantity;
            total += 499 * item.quantity;


            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" width="80">
                    <p>${item.name}</p>
                    <p>\u20B9${item.price}</p>
                    <p>Qty:
                        <button onclick="changeQty(${i},-1)">-</button>
                        ${item.quantity}
                        <button onclick="changeQty(${i},1)">+</button>
                    </p>
                    <button onclick="removeItem(${i})">Remove</button>
                </div>
            `;
        });

        totalDiv.textContent = "Total: \u20B9" + total;
    }

    window.changeQty = function(i, c) {
        cart[i].quantity += c;
        if (cart[i].quantity <= 0) cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    window.removeItem = function(i) {
        cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    loadCart();
});

