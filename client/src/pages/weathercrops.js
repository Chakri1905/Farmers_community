// 
import React, { useState } from 'react';

const API_KEY = '518986a99c78e842dbff2baa292459b4';

const WeatherForecastPage = () => {
const [cityName, setCityName] = useState('');
const [weatherData, setWeatherData] = useState(null);
const [error, setError] = useState(null);

const handleSubmit = async e => {
e.preventDefault();
try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
);
if (!response.ok) {
throw new Error('Failed to fetch weather data');
}
const data = await response.json();
setWeatherData(data);
} catch (error) {
setError(error.message);
}
};

if (error) {
return <div>Error: {error}</div>;
}

if (!weatherData) {
return (
<div>
<form onSubmit={handleSubmit}>
<label>
Enter city name:
<input type="text" value={cityName} onChange={e => setCityName(e.target.value)} />
</label>
<button type="submit">Submit</button>
</form>
<div>Loading weather data...</div>
</div>
);
}

const { main, wind, rain, clouds } = weatherData;

// Define an array of crops with their corresponding parameters
const crops = [
{ name: 'Wheat', temperature: 10, humidity: 70, rain: 500 },
{ name: 'Rice', temperature: 25, humidity: 80, rain: 1000 },
{ name: 'Corn', temperature: 20, humidity: 60, rain: 700 },
{ name: 'Barley', temperature: 12, humidity: 65, rain: 400 },
{ name: 'Sugarcane', temperature: 30, humidity: 90, rain: 1500 },
];

return (
<div>
<form onSubmit={handleSubmit}>
<label>
Enter city name:
<input type="text" value={cityName} onChange={e => setCityName(e.target.value)} />
</label>
<button type="submit">Submit</button>
</form>
<h1>Weather Forecast for {weatherData.name}</h1>
<p>Temperature: {main.temp} °C</p>
<p>Humidity: {main.humidity}%</p>
<p>Wind Speed: {wind.speed} m/s</p>
{rain && <p>Rain: {rain['1h']} mm/h</p>}
<p>Cloudiness: {clouds.all}%</p>
<table>
<thead>
<tr>
<th>Crop</th>
<th>Temperature (°C)</th>
<th>Humidity (%)</th>
<th>Rain (mm)</th>
</tr>
</thead>
<tbody>
{crops.map(crop => (
<tr key={crop.name}>
<td>{crop.name}</td>
<td>{crop.temperature}</td>
<td>{crop.humidity}</td>
<td>{crop.rain}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};
export default WeatherForecastPage;