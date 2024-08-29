import products from "./product.js";

let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
const formEl = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(filteredProducts);
});

formEl.addEventListener("keyup", (e) => {
  e.preventDefault();
  const inputValue = searchInput.value;

  const result = filteredProducts.filter((item) => {
    return item.title.toLocaleLowerCase().includes(inputValue);
  });

  displayMenu(result);
});

function displayMenu(menuItem) {
  productsContainer.innerHTML = menuItem
    .map((product) => {
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
    })
    .join("");
}
