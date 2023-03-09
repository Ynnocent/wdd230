const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
// 43.8231
// 111.7924
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=43.8231&lon=111.7924&appid=adc52b2f761bf1e18153385164fece2a";

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp - 273.15}</strong>`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);

  weatherIcon.setAttribute('alt', desc);

  captionDesc.textContent = desc;  
}
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
