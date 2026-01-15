alert("cart.js loaded");

// 1. Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 2. Get HTML elements
const container = document.getElementById("cartContainer");
const totalPriceEl = document.getElementById("totalPrice");

// 3. Render cart items on page
function renderCart() {
  container.innerHTML = "";
  let total = 0;

  // If cart empty
  if (cart.length === 0) {
    container.innerHTML = "<h3>Cart is empty 🛒</h3>";
    totalPriceEl.innerText = 0;
    return;
  }

  // Loop through cart items
  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

        <div>
          <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  // Show total price
  totalPriceEl.innerText = total;
}

// 4. Increase / Decrease quantity
function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// 5. Remove item completely
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// 6. Call function when page loads
renderCart();

function goToCheckout(){
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "checkout.html";
}

function goToCheckout(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0){
    alert("Cart is empty");
    return;
  }

  window.location.href = "checkout.html";
}


