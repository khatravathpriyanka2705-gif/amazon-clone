let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function updateWishlistCount() {
    document.querySelector(".wishlist-count").textContent = wishlist.length;
}

function addToWishlist(product, button) {
    if (!wishlist.some(item => item.name === product.name)) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateWishlistCount();
        button.textContent = "Added !!";
        button.style.background = "#ff4f90";
    } else {
        button.textContent = "Already in Wishlist";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    updateWishlistCount();

    document.querySelectorAll(".product-card").forEach(card => {
        const name = card.querySelector("h3").textContent;
        const price = card.querySelector("p").textContent;
        const img = card.querySelector("img").src;
        const button = card.querySelector(".wishlist-add");

        button.addEventListener("click", function () {
            addToWishlist({ name, price, img }, button);
        });
    });
});

