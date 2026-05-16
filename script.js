let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  alert(name + " added to cart");
}

function openCart() {
  document.getElementById("cart").style.display = "block";

  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - P" + item.price;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function goToCheckout() {
  document.getElementById("checkout").style.display = "block";
}

function completePurchase() {
  alert("Payment Successful! Thank you for shopping.");

  cart = [];
  total = 0;

  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("total").textContent = "0";
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
