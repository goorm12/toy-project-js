import products from "./product.js";

const filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(filteredProducts);
});

function displayMenu(menuItems) {
  let displayMenu = menuItems.map((product) => {
    return (productsContainer.innerHTML = `
  <article>
    <img
      src=${product.image}
      alt="product-img"
      class="product-img img"
    />
    <div>
      <h5 class="product-name">${product.title}</h5>
      <span class="product-price">${product.price}</span>
    </div>
  </article>`);
  });

  productsContainer.innerHTML = displayMenu.join("");
}
