// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

// Calculate total on page load
cart.forEach(item => {
    total += item.price;
});

// Update cart immediately
updateCart();

function addToCart(name, price, color) {

    cart.push({
        name,
        price,
        color
    });

    total += price;

    // Save to localStorage
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

    alert(`${name} (${color}) added to cart for P${price}`);
}

function updateCart() {

    // Cart counter
    let count = document.getElementById("cart-count");

    if (count) {
        count.innerText = cart.length;
    }

    const cartSection =
        document.getElementById("cart");

    const cartItems =
        document.getElementById("cartItems");

    const totalDisplay =
        document.getElementById("total");

    if (cartSection) {
        cartSection.style.display = "block";
    }

    if (cartItems) {

        cartItems.innerHTML = "";

        cart.forEach(item => {

            let li =
                document.createElement("li");

            li.textContent =
                `${item.name} (${item.color}) - P${item.price}`;

            cartItems.appendChild(li);

        });
    }

    if (totalDisplay) {
        totalDisplay.textContent = total;
    }
}

function openCart() {

    const cartSection =
        document.getElementById("cart");

    if (cartSection) {
        cartSection.style.display = "block";
    }
}

function goToCheckout() {

    const checkout =
        document.getElementById("checkout");

    if (checkout) {
        checkout.style.display = "block";
    }
}

function completePurchase() {

    alert("Purchase Successful 🚀");

    cart = [];
    total = 0;

    localStorage.removeItem("cart");

    updateCart();

    const checkout =
        document.getElementById("checkout");

    if (checkout) {
        checkout.style.display = "none";
    }
}

function openBrand(event, brandName) {

    let tabContents =
        document.getElementsByClassName(
            "tab-content"
        );

    for (
        let i = 0;
        i < tabContents.length;
        i++
    ) {
        tabContents[i]
            .classList
            .remove("active");
    }

    let tabButtons =
        document.getElementsByClassName(
            "tab-button"
        );

    for (
        let i = 0;
        i < tabButtons.length;
        i++
    ) {
        tabButtons[i]
            .classList
            .remove("active");
    }

    document
        .getElementById(brandName)
        .classList
        .add("active");

    event.currentTarget
        .classList
        .add("active");
}

// Load navbar
fetch("navbar.html")
.then(res => res.text())
.then(data => {
    let navbar =
        document.getElementById("navbar");

    if (navbar) {
        navbar.innerHTML = data;
    }
});
