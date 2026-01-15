document.getElementById("checkoutForm")
.addEventListener("submit", function(e){
  e.preventDefault();

  alert("🎉 Order placed successfully!");

  localStorage.removeItem("cart"); // clear cart
  window.location.href = "index.html"; // back to home
});

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("checkoutForm");

  if (!form) {
    console.error("Checkout form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert("🎉 Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
  });

});
