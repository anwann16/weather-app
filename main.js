const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "3e243c67a0cddadb7700575612b92382";

const inputSearch = document.querySelector(".input-search");
const searchBtn = document.querySelector(".bx-search");
const weatherImg = document.querySelector(".weather-icon");
const weatherContainer = document.querySelector(".weather");
const errorMessage = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(api + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    errorMessage.style.display = "block";
    weatherContainer.style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".weather-temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherImg.src = "images/clouds.png";
        break;
      case "Haze":
        weatherImg.src = "images/haze.png";
        break;
      case "Mist":
        weatherImg.src = "images/mist.png";
        break;
      case "Rain":
        weatherImg.src = "images/rain.png";
        break;
      case "Clear":
        weatherImg.src = "images/clear.png";
        break;
      case "Snow":
        weatherImg.src = "images/snow.png";
        break;
      case "Drizzle":
        weatherImg.src = "images/drizzle.png";
        break;
      default:
        break;
    }

    weatherContainer.style.display = "block";
    errorMessage.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputSearch.value);
  inputSearch.value = "";
});
