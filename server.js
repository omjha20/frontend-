document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cart-items");

  function renderCart() {
      cartContainer.innerHTML = ""; // Clear cart before rendering
      cartItems.forEach((item, index) => {
          let cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
              <p><strong>${item.name}</strong></p>
              <p>Price: ₹${item.price}</p>
              <button class="remove-btn" data-index="${index}">Remove</button>
          `;
          cartContainer.appendChild(cartItem);
      });

      attachRemoveEvent(); // Attach event listeners to remove buttons
  }

  function attachRemoveEvent() {
      document.querySelectorAll(".remove-btn").forEach(button => {
          button.addEventListener("click", function () {
              let index = this.getAttribute("data-index");
              cartItems.splice(index, 1); // Remove the item
              localStorage.setItem("cart", JSON.stringify(cartItems)); // Update storage
              renderCart(); // Refresh the cart
          });
      });
  }

  renderCart(); // Initial rendering after DOM is ready
});
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
      cartItem.quantity++;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  // Ensure price is stored correctly
  cart.forEach(item => {
      item.price = Number(item.price); // Convert to number to avoid string issues
  });

  localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
  updateCart();
  console.log(cart);
}
function renderCart() {
  cartContainer.innerHTML = ""; // Clear cart before rendering
  cartItems.forEach((item, index) => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
          <p><strong>${item.name}</strong></p>
          <p>Price: ₹${Number(item.price) * item.quantity}</p> <!-- Ensure correct calculation -->
          <p>Quantity: ${item.quantity}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
  });

  attachRemoveEvent(); // Attach event listeners to remove buttons
}
