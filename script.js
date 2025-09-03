let ApiKey = "1c23c3b3e9434720b9d81705250209";
let Temp = document.getElementById("Temp");
let City = document.getElementById("City");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let input = document.getElementById("searchInput");
let btn = document.getElementById("searchBtn");

async function WeatherApiCaller(city) {
  try {
    let reponse = await fetch(
      ` https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}`
    );
    console.log(reponse.ok);
    if (!reponse.ok) {
      document.querySelector(".error p").style.display = `block`;
      document.querySelector(".WeatherStatusContainer").style.display = `none`;
      throw new Error("City not found!");
    }
    let data = await reponse.json();
    document.querySelector(".WeatherStatusContainer").style.display = `block`;
    console.log(data);
    Temp.textContent = `${data.current.temp_c}°C`;
    City.textContent = `${data.location.name}`;
    humidity.textContent = `${data.current.humidity}`;
    wind.textContent = `${data.current.wind_kph} km/h`;
    let p = (document.querySelector("#fail ").style.display = `none`);
  } catch (error) {
    document.querySelector(".WeatherStatusContainer").style.display = `none`;

    let p = document.querySelector("#fail ");
    p.style.display = `block`;
    p.textContent = "Error Found ";
  }
}

btn.addEventListener("click", () => {
  WeatherApiCaller(input.value);
  input.value = "";
});
