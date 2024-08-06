// Define interfaces for the expected data structure
interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

// Function to get weather data based on location
function getWeather2(location: string): void {
  const apiKey = "58b9f5dc9093a87732324e4d33d0aa9a"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data: WeatherData) => {
      displayWeather(data);
    })
    .catch((error) => {
      const weatherReportElement = document.getElementById("weatherReport");
      if (weatherReportElement) {
        weatherReportElement.innerText = `Error: ${error.message}`;
      }
    });
}

// Function to display weather data
function displayWeather2(data: WeatherData): void {
  const weatherReport = `
      <h2>Weather in ${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  const weatherReportElement = document.getElementById("weatherReport");
  if (weatherReportElement) {
    weatherReportElement.innerHTML = weatherReport;
  }
}

// Add event listener to the button
const getWeatherBtn = document.getElementById("getWeatherBtn");
if (getWeatherBtn) {
  getWeatherBtn.addEventListener("click", () => {
    const locationInput = document.getElementById(
      "locationInput"
    ) as HTMLInputElement;
    if (locationInput) {
      const location = locationInput.value;
      if (location) {
        getWeather(location);
      }
    }
  });
}
