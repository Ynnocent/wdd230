let weatherDescription = document.querySelector("#weatherDescription");
let weatherTemp = document.querySelector("#weatherTemp");
let weatherIcon = document.querySelector("#weatherIcon");
let humidityDescription = document.querySelector("#humidityDescription");
let forecast1 = document.querySelector("#forecast1");
let forecast2 = document.querySelector("#forecast2");
let forecast3 = document.querySelector("#forecast3");

// API Call
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=adc52b2f761bf1e18153385164fece2a&units=imperial";
const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=33.1581&&lon=-117.3506&appid=adc52b2f761bf1e18153385164fece2a&units=imperial`;
            
async function weatherApiCall() {
    try {
        let response = await fetch(url);
        let forecastResponse = await fetch(forecastUrl);

        if (response.ok && forecastResponse.ok) {
            const data = await response.json();
            const forecastData = await forecastResponse.json()
            // Display function
            displayWeatherDetails(data, forecastData);
        } else {
            throw new Error(await response.text());
        }

    } catch(error) {
        alert(error);
    }
}

function displayWeatherDetails(apiResponse, forecastApiResponse) {
    let weatherDescriptionData = apiResponse.weather[0].description;
    let humidityData = apiResponse.main.humidity;
    let tempData = apiResponse.main.temp;
    let forecastDaily1 = forecastApiResponse.list[0].main.temp;
    let forecastDaily2 = forecastApiResponse.list[1].main.temp;
    let forecastDaily3 = forecastApiResponse.list[2].main.temp;
    const iconSrc = `https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`;

    weatherDescription.textContent = weatherDescriptionData;
    weatherTemp.innerHTML = tempData;
    humidityDescription.textContent = humidityData;
    weatherIcon.setAttribute("src", iconSrc);
    forecast1.textContent = forecastDaily1;
    forecast2.textContent = forecastDaily2;
    forecast3.textContent = forecastDaily3;
}

weatherApiCall();