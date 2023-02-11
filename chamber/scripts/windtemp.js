function setWindChill (temperature, windspeed) {
    tempSpan = document.querySelector("#temperatureSpan");
    windChillSpan = document.querySelector("#windchillSpan");
    windSpeedSpan = document.querySelector("#windspeedSpan");

    let windchill = 'N/A';

    if (windspeed >= 3.0 && temperature <= 50) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchill = `${chill}`;
    }
    
    tempSpan.textContent = temperature;
    windChillSpan.innerHTML = windchill;
    windSpeedSpan.textContent = windspeed;

}

setWindChill(30, 50);