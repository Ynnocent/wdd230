// Document HTML stuff
const tempSpan = document.querySelector("#temperatureSpan");
const windChillSpan = document.querySelector("#windchillSpan");
const windSpeedSpan = document.querySelector("#windspeedSpan");
const weatherDescription = document.querySelector("#weatherDesc");
const weatherIcon = document.querySelector("#weather-icon");

// API URL
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=43.8231&lon=111.7924&appid=adc52b2f761bf1e18153385164fece2a";

async function weatherApiCall() {
  try {
    let response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      displayTemp(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayTemp(weatherResponse) {
  let tempData = weatherResponse.main.temp - 273.15;
  let windChillData = weatherResponse.main.feels_like - 273.15;
  let windSpeedData = weatherResponse.wind.speed;
  let weatherDescData = weatherResponse.weather[0].description;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`;

  tempSpan.innerHTML = `<strong>${tempData.toFixed(2)} &deg;C</strong>`;
  windChillSpan.innerHTML = `<strong>${windChillData.toFixed(2)} &deg;C</strong>`;
  windSpeedSpan.innerHTML = `<strong>${windSpeedData.toFixed(2)}</strong>`;
  weatherDescription.innerHTML = weatherDescData;
  weatherIcon.setAttribute("src", iconsrc);
}

weatherApiCall();
