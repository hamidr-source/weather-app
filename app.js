const inputElem = document.querySelector(".search-box");

const apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "be6bba11e2f5a407ac8d3d99b97ad613",
};

const fetchData = () => {
  let countryName = inputElem.value;
    console.log(countryName)
  fetch(`${apiData.url}${countryName}&appid=${apiData.key}`).then((res) =>
    console.log(res)
  );
};

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
