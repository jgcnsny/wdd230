const apiKey = '2da8a4cd6d9da23afaa72a1b524b2798';
const lat = '14.19';
const lon = '121.12';

const weatherContainer = document.querySelector('#weather-container')
const weatherElement = document.getElementById('weather-forecast');

function displayCurrentWeather(data) {
    const currentTemp = document.createElement('span');
    currentTemp.textContent = `${data.main.temp}°C - ${data.weather[0].description}`;

    const weatherIcon = document.createElement('img')
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather icon');

    weatherContainer.appendChild(weatherIcon)
    weatherContainer.appendChild(currentTemp)
}

async function apiFetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
            //console.log(data);
        } else {
            throw error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

const  displayMembers = async (forecast) => {
    forecast.forEach(entry => {
        const divElement = document.createElement('div');
        const dateElement = document.createElement('p');
        const tempElement = document.createElement('p');

        const date = new Date(entry.dt_txt);
        const temperature = entry.main.temp;

        dateElement.textContent = date.toDateString();
        tempElement.textContent = `${temperature}°C`;

        divElement.appendChild(dateElement);
        divElement.appendChild(tempElement);

        weatherElement.appendChild(divElement);
    

    });

}

async function fetchForecast() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      const forecastData = data.list.filter(entry => entry.dt_txt.includes('12:00:00'));
      
      displayMembers(forecastData.slice(0, 3));
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  }
  

// Fetch weather data and forecast when the page loads
window.onload = function() {
    apiFetchWeather();
    fetchForecast();
};