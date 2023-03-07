import React from 'react';
import WeatherForecastPage from './weathercrops';

const WeatherForecast = () => {
return (
	<div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Right',
	// 	alignItems: 'Right',
	// 	height: '100vh'
	// }}
	>
	<h1>weather forecast</h1>
	<div className='weather-forecast'>
		<WeatherForecastPage/>
	</div>
	</div>
);
};

export default WeatherForecast;
