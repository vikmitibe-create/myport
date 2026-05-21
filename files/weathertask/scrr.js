/* 4d58cfc0-fc58-48d6-8f3c-f6283e3c71f9 */

async function getWeatherByCity(city) {
const resultDiv = document.getElementById('result');

if (!city.trim()) {
resultDiv.innerHTML = '<p class="error">Введите город</p>';
return;
}

try {

const geoRes = await fetch(
`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
);
const geoData = await geoRes.json();

if (!geoData.length) {
resultDiv.innerHTML = '<p class="error">Город не найден</p>';
return;
}

const lat = geoData[0].lat;
const lon = geoData[0].lon;


const weatherRes = await fetch(
`https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&lang=ru_RU`,
{
headers: {
"X-Yandex-API-Key": "4d58cfc0-fc58-48d6-8f3c-f6283e3c71f9"
}
}
);

if (!weatherRes.ok) {
throw new Error(`Ошибка API: ${weatherRes.status}`);
}

const data = await weatherRes.json();

/*
const nameCity = data.geo_object?.locality?.name ||
data.geo_object?.province?.name ||
data.geo_object?.country?.name; 
<p><strong>${nameCity}</strong></p> */
const temperature = data.fact.temp;
const condition = data.fact.condition;
const icon = data.fact.icon;
const windSpeed = data.fact?.wind_speed ?? "нет данных";

const iconUrl = `https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg`;


resultDiv.innerHTML = `
<div class="weather">
<div class="picture">
<img class="pic" src="${iconUrl}" alt="weather icon">
</div>
<div class="text">
<p><strong>Облачность:</strong> ${condition}</p>
<p><strong>Температура:</strong> ${temperature}°C</p>
<p><strong>Скорость ветра:</strong>${windSpeed} м/с</p>
</div>
`;

} catch (err) {
resultDiv.innerHTML = `<p class="error">${err.message}</p>`;
}
}



document.getElementById('search').addEventListener('click', () => {
const city = document.getElementById('city').value;
getWeatherByCity(city);
});