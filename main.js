const formEl = document.querySelector(".book-form");
const nameInput = document.querySelector(".book-name");
const authorInput = document.querySelector(".book-author");
const tbodyEl = document.querySelector(".tbody");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === "" && authorInput.value.trim()) return;
  const trEl = document.createElement("tr");
  trEl.innerHTML = `
    <td>${nameInput.value}</td>
    <td>${authorInput.value}</td>
    <td><button class="removeBtn">제거</button></td>

  `;

  tbodyEl.appendChild(trEl);

  nameInput.value = "";
  authorInput.value = "";
});
