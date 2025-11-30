let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const count = cart.reduce((t, i) => t + i.quantity, 0);
    document.getElementById("cart-count").textContent = count;
}
updateCartCount();

document.querySelectorAll(".product-card").forEach(card => {
    const btn = card.querySelector(".add-to-cart");
    const msg = card.querySelector(".cart-message");

    btn.addEventListener("click", () => {
        const name = card.querySelector("h3").textContent;
        const price = card.querySelector("p").innerHTML.replace("&#8377;", "").trim();


        const image = card.querySelector("img").src;

        const existing = cart.find(i => i.name === name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                name,
                price: Number(price),
                image,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        msg.textContent = "Added to cart!";
        msg.style.color = "green";
        
    });
});
