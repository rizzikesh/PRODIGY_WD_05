const apiKey = "646bf1ed84aa21b411c3c8f9d9987fef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
        }

        else if (data.weather[0].main == "Clear") {
        }

        else if (data.weather[0].main == "Rain") {
        }

        else if (data.weather[0].main == "Drizzle") {
        }

        else if (data.weather[0].main == "Mist") {
        }

        document.querySelector(".weather").style.display = "block";

    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
    }

    else if (data.weather[0].main == "Clear") {
    }

    else if (data.weather[0].main == "Rain") {
    }

    else if (data.weather[0].main == "Drizzle") {
    }

    else if (data.weather[0].main == "Mist") {
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})