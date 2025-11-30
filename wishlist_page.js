let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function save() {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items");
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = "<p>Your wishlist is empty</p>";
        return;
    }

    wishlist.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "wishlist-card";

        card.innerHTML = `
            <img src="${item.img}">
            <div class="info">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <div class="buttons">
                    <button class="move-cart">Move to Cart</button>
                    <button class="remove">Remove</button>
                </div>
            </div>
        `;

        card.querySelector(".remove").onclick = () => {
            wishlist.splice(index, 1);
            save();
            renderWishlist();
        };

        card.querySelector(".move-cart").onclick = () => {
            cart.push(item);
            wishlist.splice(index, 1);
            save();
            renderWishlist();
        };

        container.appendChild(card);
    });
}

renderWishlist();
