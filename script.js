const links = document.querySelectorAll(".nav-links a");
const indicator = document.querySelector(".indicator");

function moveIndicator(el){
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}

links.forEach(link => {
  link.addEventListener("click", () => {

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    moveIndicator(link);
  });
});

// default active indicator
window.onload = () => {
  const active = document.querySelector(".nav-links a.active");
  moveIndicator(active);
};

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// close menu after click (mobile)
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));

    const item = cart.find(p => p.name === name);

    if(item){
      item.quantity += 1;
    }else{
      cart.push({
        name: name,
        price: price,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart 🛒");
  });
});[
  { "name": "Cheese Pizza", "price": 299, "quantity": 2 },
  { "name": "Burger", "price": 149, "quantity": 1 }
]

const cartIcon = document.getElementById("cart-icon");

document.querySelectorAll(".add-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {

    // ===== FLY ANIMATION =====
    const img = btn.parentElement.querySelector(".food-img");
    const flyImg = img.cloneNode(true);

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    flyImg.classList.add("fly-img");
    flyImg.style.left = imgRect.left + "px";
    flyImg.style.top = imgRect.top + "px";

    document.body.appendChild(flyImg);

    setTimeout(() => {
      flyImg.style.left = cartRect.left + "px";
      flyImg.style.top = cartRect.top + "px";
      flyImg.style.width = "30px";
      flyImg.style.opacity = "0.5";
    }, 50);

    setTimeout(() => {
      flyImg.remove();
    }, 900);

  });
});

const newCard = document.createElement("div");
newCard.className = "food-card";
newCard.innerHTML = `
  <img src="images/newdish.jpg" class="food-img">
  <h3>New Dish</h3>
  <p class="price">₹199</p>
  <button class="add-btn" data-name="New Dish" data-price="199">Add to Cart</button>
`;

document.querySelector(".food-grid").appendChild(newCard);

function addNewDish(name, price, imgSrc){
  const newCard = document.createElement("div");
  newCard.className = "food-card";
  newCard.innerHTML = `
    <img src="${imgSrc}" class="food-img" alt="${name}">
    <h3>${name}</h3>
    <p class="price">₹${price}</p>
    <button class="add-btn" data-name="${name}" data-price="${price}">Add to Cart</button>
  `;

  document.querySelector(".food-grid").appendChild(newCard);

  // Add Add-to-Cart functionality
  newCard.querySelector(".add-btn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(i => i.name === name);
    if(item) item.quantity++;
    else cart.push({name, price: parseInt(price), quantity:1});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart 🛒");
  });
}

// SEARCH FUNCTION
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const foodCards = document.querySelectorAll(".food-card");

function searchFood(){
  const value = searchInput.value.toLowerCase();

  foodCards.forEach(card => {
    const name = card.querySelector(".food-name").innerText.toLowerCase();

    if(name.includes(value)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Button click
searchBtn.addEventListener("click", searchFood);

// Live typing search
searchInput.addEventListener("keyup", searchFood);

function scrollToMenu(){
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}
scrollToMenu()
document.querySelector(".contact-form form")
.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully! 🚀");
  this.reset();
});


