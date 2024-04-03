
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.19&lon=121.12&units=metric&appid=2da8a4cd6d9da23afaa72a1b524b2798';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            //console.log(data);
        } else {
            throw error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}


function displayResults(data) {
    const currentTemp = document.createElement('span');
    currentTemp.textContent = `${data.main.temp}°C - ${data.weather[0].description}`;

    const weatherIcon = document.createElement('img')
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather icon');

    weatherContainer.appendChild(weatherIcon)
    weatherContainer.appendChild(currentTemp)
}

apiFetch(url);
