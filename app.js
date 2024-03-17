const inputElem = document.querySelector(".search-box");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const highLow = document.querySelector(".hi-low");
const date = document.querySelector(".date");

const apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "be6bba11e2f5a407ac8d3d99b97ad613",
};

const fetchData = () => {
  let countryName = inputElem.value;
  if (countryName === "") {
    city.innerHTML = "Please enter a city or country.";
    emptyingData();
  } else {
    fetch(`${apiData.url}${countryName}&appid=${apiData.key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          showData(data);
          console.log(data);
        } else {
          city.innerHTML = `${countryName} is not a city or country.`;
          emptyingData();
        }
      });
  }
};

const emptyingData = () => {
  temp.innerHTML = "";
  weather.innerHTML = "";
  highLow.innerHTML = "";
};

const showData = (data) => {
  city.innerHTML = `${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°c`;
  weather.innerHTML = `${data.weather[0].main}`;
  highLow.innerHTML = `${Math.round(
    data.main.temp_max - 273.15
  )}°c / ${Math.round(data.main.temp_min - 273.15)}°c`;
  date.innerHTML = showTime();
};

const loadingPage = () => {
  fetch(`${apiData.url}tehran&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => showData(data));
};

const showTime = () => {
  const month = [
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

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();

  return `${weekDays[now.getDay()]} ${now.getDate()} ${
    month[now.getMonth()]
  } ${now.getFullYear()}`;
};

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});

window.addEventListener("load", loadingPage);
