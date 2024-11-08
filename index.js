const apiKey = "0f73fb01db85c335011f622309f7c125";

const weatherData = document.getElementById("weather-data")
const cityInput = document.getElementById("city-input")
const formElement = document.querySelector("form")
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInput.value;
    getWeatherData(cityValue);
});


async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("Network Response is not Ok");
        }
        const data = response.json();
        const temperature = Math.round(data.main.temperature);
        const description =data.weather[0].temperature;
        const icon =data.weather[0].icon;
        const details =[
            `Feels Like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${Math.round(data.main.humidity)}`,
            `Wind Speed: ${Math.round(data.wind.speed)}`
        ];

        weatherData.querySelector(".icon").innerHTML=
        `<img src= "http://openweathermap.org/img/wn/${icon}.png" alt = "Weather Icon">`;
    } catch (error) {

    }
}