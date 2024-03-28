const currentTemp = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.19&lon=121.11&units=imperial&appid=2da8a4cd6d9da23afaa72a1b524b2798';

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
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].main}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'cloud icon');
}

apiFetch(url);