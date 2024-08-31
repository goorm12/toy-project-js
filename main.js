const api = {
  key: "15dd264653ae19e803a868ed7fb3c895",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchBoxEl = document.querySelector(".search-box");
searchBoxEl.addEventListener("keyup", setQuery);

function setQuery(e) {
  if (e.keyCode === 13) {
    getResult(`${searchBoxEl.value}`);
  }
}

function getResult(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((response) => response.json())
    .then((data) => displayResults(data));
}

const date = {
  getDate() {
    const now = new Date();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = dayFc(now.getDay());

    function dayFc(days) {
      switch (days) {
        case 0:
          return "일";
        case 1:
          return "월";
        case 2:
          return "화";
        case 3:
          return "수";
        case 4:
          return "목";
        case 5:
          return "금";
        case 6:
          return "토";
      }
    }

    return `${month}월 ${date}일 ${day}요일  `;
  },
};

function displayResults(weather) {
  let city = document.querySelector(".city");
  let now = new Date();
  let date = document.querySelector(".date");
  let temp = document.querySelector(".temp");
  let weatherEl = document.querySelector(".weather");
  let hiLow = document.querySelector(".hi-low");
  city.textContent = `${weather.name} + ${weather.sys.country}`;
  date.textContent = dateBuilder(now);
  temp.innerHTML = `${Math.round(weather.main.temp).toFixed(0)}<span>°C</span>`;
  weatherEl.textContent = weather.weather[0].main;
  hiLow.textContent = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
