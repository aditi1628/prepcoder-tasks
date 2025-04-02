let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  totalPrice += price;
  updateCart();
}

function removeFromCart(index) {
  totalPrice -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById("cart-items");
  let totalDisplay = document.getElementById("total-price");

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} 
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = totalPrice;
}
