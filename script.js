function addToCart(button) {
    let card = button.parentElement;
    let name = card.querySelector("h3").innerText;
    let price = parseInt(card.querySelector("p").innerText);
    let image = card.querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart`);
}
