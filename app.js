import products from "./product.js";

let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
const formEl = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const companiesEl = document.querySelector(".companies");

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(filteredProducts);
  displayButtons();
});

formEl.addEventListener("keyup", (e) => {
  e.preventDefault();
  const inputValue = searchInput.value;

  const result = filteredProducts.filter((item) => {
    return item.title.toLocaleLowerCase().includes(inputValue);
  });

  displayMenu(result);
});

const displayButtons = () => {
  const product = [...filteredProducts].map((product) => product.company);
  const buttons = ["all", ...new Set(product)];

  companiesEl.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button> `;
    })
    .join("");
};

const displayMenu = (menuItem) => {
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
      <span class="product-price">${product.price}원</span>
    </div>
  </article>`);
    })
    .join("");
};

companiesEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("company-btn")) {
    if (e.target.dataset.id === "all") {
      const allProduct = [...products];
      displayMenu(allProduct);
    } else {
      const selectProduct = [...products].filter((product) => {
        return e.target.dataset.id === product.company;
      });

      displayMenu(selectProduct);
    }
  }

  searchInput.value = "";
});
