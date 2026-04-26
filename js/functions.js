const cart = document.querySelector(".cart");
const cartIcon = document.querySelector("img[alt='Icono Carrito']");
const cartItems = document.querySelector(".cart__items");
const addButtons = document.querySelectorAll(".add-to-cart");
const badge = document.getElementById("cart-badge");
const closeBtn = document.querySelector(".cart__close");

let count = 0;

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  cart.classList.remove("show");
});

document.querySelectorAll(".delete-icon").forEach(elem => {
  elem.addEventListener("click", () => {
    const item = elem.closest("div");
    item.remove();
    count--;
    updateBadge();
  });
});

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.closest(".products__item");

    const title = product.querySelector(".products__title").textContent;
    const price = product.querySelector(".products__price").textContent;
    const img = product.querySelector("img").src;
    const newItem = document.createElement("div");
    newItem.classList.add("cart__item");

    newItem.innerHTML = `
        <img src="${img}" class="cart__img">
        <div class="cart__info">
            <p class="cart__title">${title}</p>
            <p class="cart__price">${price}</p>
        </div>
        <button class="cart__delete">✕</button>
    `;

    cartItems.appendChild(newItem);

    newItem.querySelector(".cart__delete").addEventListener("click", () => {
        newItem.remove();
        count--;
        badge.textContent = count;
    });

    count++;
    updateBadge();
  });
});

function updateBadge() {
  badge.textContent = count;
}

