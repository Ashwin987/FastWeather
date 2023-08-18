// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

const apiKey = '42e0c5e7dcd3d397053d17456a4a5158';

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeather);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function fetchWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=37.5538299&lon=-122.026818&appid=42e0c5e7dcd3d397053d17456a4a5158&units=metric`;




    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById("location");
            const celsiusElement = document.getElementById("celsius");
            const fahrenheitElement = document.getElementById("fahrenheit");

            const location = data.name;
            const celsius = data.main.temp;
            const fahrenheit = (celsius * 9/5) + 32;

            locationElement.textContent = `Weather in ${location}`;
            celsiusElement.textContent = `${celsius.toFixed(1)}°C`;
            fahrenheitElement.textContent = `${fahrenheit.toFixed(1)}°F`;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

getLocation();
