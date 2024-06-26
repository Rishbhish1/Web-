document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const location = document.getElementById("locationInput").value;
  if (location) {
    getWeather(location);
  }
});

function getWeather(location) {
  const apiKey = "58b9f5dc9093a87732324e4d33d0aa9a"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      document.getElementById(
        "weatherReport"
      ).innerText = `Error: ${error.message}`;
    });
}

function displayWeather(data) {
  const weatherReport = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  document.getElementById("weatherReport").innerHTML = weatherReport;
}
