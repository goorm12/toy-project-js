const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formEl = document.querySelector(".form");
const inputSearchEl = document.querySelector(".form-input");
const resultsEl = document.querySelector(".results");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputSearchValue = inputSearchEl.value;

  if (!inputSearchValue) {
    resultsEl.innerHTML = `<div class='error'>검색어를 작성해주세요.</div>`;
    return;
  }
  fetchPages(inputSearchValue);
});

const fetchPages = async (inputSearchValue) => {
  resultsEl.innerHTML = `<div class='loading'></div>`;
  try {
    const response = await fetch(`${url}${inputSearchValue}`);
    const data = await response.json();
    const results = data.query.search;

    if (results.length < 1) {
      resultsEl.innerHTML = `<div class='error'>검색어에 맞는 결과가 없습니다.</div>`;
    } else {
      renderResults(results);
    }
  } catch (error) {
    resultsEl.innerHTML = `<div class='error'>요청을 보내는데 에러가 있습니다. 주소를 확인해 주세요!</div>`;
  }
};

const renderResults = (list) => {
  const cardList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
      <h4>${title}</h4>
      <p>${snippet}</p>
    </a>`;
    })
    .join("");

  resultsEl.innerHTML = `<article class=articles>${cardList}</article>`;
};
