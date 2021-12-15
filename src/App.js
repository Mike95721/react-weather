import react from "react";
import background from "./assets/cloud-rain-background.jpg";
import "./App.css";
import { useState, useEffect } from "react";
import { ApiClient } from "./apiClient";

function App() {
	const [weather, changeWeather] = useState({});

	useEffect(() => {
		const api = new ApiClient();
		api.getWeather().then((res) => {
			changeWeather(res.data);
		});
	}, []);

	const sayHello = () => {
		console.log("Hello");
	};

	const buildWeather = (item) => {
		return item.map((weather) => {
			return <div>{weather.description}</div>;
		});
	};

	const buildDays = () => {
		console.log(weather);
		if (!weather.daily) {
			return <div>loading...</div>;
		}

		return weather.daily.map((item) => {
			return (
				<div>
					<img
						src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
					/>
					{Math.round(item.temp.day - 273)}
					{buildWeather(item.weather)}
				</div>
			);
		});
	};

	return (
		<div style={{ backgroundImage: `url(${background})` }}>
			<h1>My Weather App</h1>
			<button
				onClick={() => {
					console.log(weather);
				}}
			>
				Hello
			</button>
			{buildDays()}
		</div>
	);
}

export default App;
