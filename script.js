let getPrice = document.getElementById("price");
let getBtnDown = document.getElementById("quenty-down");
let getBtnUp = document.getElementById("quenty-up");
let getProductQuenty = document.getElementById("productQuenty");
let addToCartBtn = document.getElementById("addToCart");
let cart = document.getElementById("cart");
// ----
let count = 0;

// Total Price

function priceUp() {
  if (getBtnUp) {
    count++;
    getProductQuenty.innerHTML = count;
    getPrice.innerHTML = "$" + (count * 125).toFixed(2);
  }
}

function priceDown() {
  if (getBtnDown && count !== 1) {
    count--;
    getProductQuenty.innerHTML = count;
    getPrice.innerHTML = "$" + (count * 125).toFixed(2);
  }
}

function addCart() {
  cart.innerHTML = count;
}

// Product gallery

function image1() {
  document.getElementById("productImage").style.backgroundImage =
    "url('images/image-product-1.jpg')";
}

function image2() {
  document.getElementById("productImage").style.backgroundImage =
    "url('images/image-product-2.jpg')";
}
function image3() {
  document.getElementById("productImage").style.backgroundImage =
    "url('images/image-product-3.jpg')";
}
function image4() {
  document.getElementById("productImage").style.backgroundImage =
    "url('images/image-product-4.jpg')";
}
