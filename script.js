let cart = [];
let total = 0;

function addToCart(name, price, color) {
    alert(`${name} (${color}) added to cart for P${price}`);
}

  total += price;

  updateCart();
}

function updateCart(){

  const cartSection = document.getElementById("cart");
  const cartItems = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("total");

  cartSection.style.display = "block";

  cartItems.innerHTML = "";

  cart.forEach(item => {

    let li = document.createElement("li");

    li.textContent = item.name + " - P" + item.price;

    cartItems.appendChild(li);

  });

  totalDisplay.textContent = total;
}

function openCart() {
    alert("Cart opened!");
}

function goToCheckout(){

  document.getElementById("checkout").style.display = "block";
}

function completePurchase(){

  alert("Purchase Successful 🚀");

  cart = [];
  total = 0;

  updateCart();

  document.getElementById("checkout").style.display = "none";
}

function openBrand(event, brandName) {

  let tabContents = document.getElementsByClassName("tab-content");

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  let tabButtons = document.getElementsByClassName("tab-button");

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(brandName).classList.add("active");

  event.currentTarget.classList.add("active");
}
