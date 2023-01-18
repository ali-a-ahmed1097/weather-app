
function getWeatherA(location) {
    if (location !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=57093c04b4e625060b9132b088866101`)
            .then(response => response.json())
            .then(function (response) {
                const data = document.querySelectorAll('td');
                const caption = document.querySelector('caption');

                caption.textContent = `Data from: ${location}`;

                data[0].textContent = response['coord']['lon'];
                data[1].textContent = response['coord']['lat'];
                data[2].textContent = response['main']['temp'];
                data[3].textContent = response['main']['feels_like'];
                data[4].textContent = response['main']['temp_min'];
                data[5].textContent = response['main']['temp_max'];
                data[6].textContent = response['main']['pressure'];
                data[7].textContent = response['main']['humidity'];
                data[8].textContent = response['wind']['speed'];
                data[9].textContent = response['wind']['deg'];
                data[10].textContent = response['weather']['0']['description'];
            })
            .catch(e => console.log(e));
    }
}

async function getWeather(location) {
    const responseFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=57093c04b4e625060b9132b088866101`);
    const response = await responseFetch.json();

    const data = document.querySelectorAll('td');
    const caption = document.querySelector('caption');

    caption.textContent = `Data from: ${location}`;
    data[0].textContent = response['coord']['lon'];
    data[1].textContent = response['coord']['lat'];
    data[2].textContent = response['main']['temp'];
    data[3].textContent = response['main']['feels_like'];
    data[4].textContent = response['main']['temp_min'];
    data[5].textContent = response['main']['temp_max'];
    data[6].textContent = response['main']['pressure'];
    data[7].textContent = response['main']['humidity'];
    data[8].textContent = response['wind']['speed'];
    data[9].textContent = response['wind']['deg'];
    data[10].textContent = response['weather']['0']['description'];
}

const weather = document.querySelector('button');
const input = document.querySelector('input');

weather.addEventListener('click', () => getWeather(document.getElementById('location').value));
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        weather.click();
    }
});

getWeather('Toronto');