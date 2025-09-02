let ApiKey = "1c23c3b3e9434720b9d81705250209";
let Temp = document.getElementById("Temp");
let City = document.getElementById("City");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let input = document.getElementById("searchInput");
let btn = document.getElementById("searchBtn");

async function WeatherApiCaller(city) {
  let reponse = await fetch(
    ` https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}`
  );

  let data = await reponse.json();
  console.log(data);
  Temp.textContent = `${data.current.temp_c}°C`;
  City.textContent = `${data.location.name}`;
  humidity.textContent = `${data.current.humidity}`;
  wind.textContent = `${data.current.wind_kph} km/h`;
}

btn.addEventListener("click", () => {
  WeatherApiCaller(input.value);
  console.log(input);
  input.value = "";
  document.querySelector(".WeatherStatusContainer").style.display = `block`;
});
