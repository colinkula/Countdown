const weatherCode = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog and depositing rime fog",
    48: "Fog and depositing rime fog",
    51: "Drizzle: Light intensity",
    52: "Drizzle: Moderate intensity",
    53: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    62: "Rain: Moderate intensity",
    63: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    72: "Snow fall: Moderate intensity",
    73: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
};

const container = document.querySelector(".container");

// Milan
const milanWeather = container.querySelector(".milan-weather");
const milanTemp = milanWeather.querySelector("h1");
const milanWeatherType = milanWeather.querySelector("p");

// Lake Como
const comoWeather = container.querySelector(".lakecomo-weather");
const comoTemp = comoWeather.querySelector("h1");
const comoWeatherType = comoWeather.querySelector("p");

// Venice
const veniceWeather = container.querySelector(".venice-weather");
const veniceTemp = veniceWeather.querySelector("h1");
const veniceWeatherType = veniceWeather.querySelector("p");

// Murano - Burano
const muranoWeather = container.querySelector(".murano-weather");
const muranoTemp = muranoWeather.querySelector("h1");
const muranoWeatherType = muranoWeather.querySelector("p");

// Genova
const genovaWeather = container.querySelector(".genova-weather");
const genovaTemp = genovaWeather.querySelector("h1");
const genovaWeatherType = genovaWeather.querySelector("p");

// Cinque Terre
const cinqueWeather = container.querySelector(".cinqueterre-weather");
const cinqueTemp = cinqueWeather.querySelector("h1");
const cinqueWeatherType = cinqueWeather.querySelector("p");

const grabMilan = async () => {
    const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=45.4643&longitude=9.1895&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );

    const response = await request.json();

    milanTemp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`;

    const currentCode = `${response.current.weather_code}`;
    milanWeatherType.innerHTML = weatherCode[currentCode];
};

const grabComo = async () => {
    const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=45.8082&longitude=9.0832&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );

    const response = await request.json();

    comoTemp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`;

    const currentCode = `${response.current.weather_code}`;
    comoWeatherType.innerHTML = weatherCode[currentCode];
};

const grabVenice = async () => {
    const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=45.4371&longitude=12.3326&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );

    const response = await request.json();

    veniceTemp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`;

    const currentCode = `${response.current.weather_code}`;
    veniceWeatherType.innerHTML = weatherCode[currentCode];
};

const grabMurano = async () => {
    const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=45.4586&longitude=12.3568&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );

    const response = await request.json();

    muranoTemp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`;

    const currentCode = `${response.current.weather_code}`;
    muranoWeatherType.innerHTML = weatherCode[currentCode];
};

const grabGenova = async () => {
    const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.4048&longitude=8.9444&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );

    const response = await request.json();

    genovaTemp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`;

    const currentCode = `${response.current.weather_code}`;
    genovaWeatherType.innerHTML = weatherCode[currentCode];
};

const grabCinque = async () => {
    const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.1071&longitude=9.729&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph'
    );

    const response = await request.json();

    cinqueTemp.innerHTML = `${Math.round(response.current.temperature_2m)}°F`;

    const currentCode = `${response.current.weather_code}`;
    cinqueWeatherType.innerHTML = weatherCode[currentCode];
};



grabMilan();
grabComo();
grabVenice();
grabMurano();
grabGenova();
grabCinque();
