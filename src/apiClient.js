import axios from "axios";

export class ApiClient {
	responseStatusCheck(responseObject) {
		if (responseObject.status >= 200 && responseObject.status < 300) {
			return Promise.resolve(responseObject);
		} else {
			return Promise.reject(new Error(responseObject.statusText));
		}
	}

	getItems(url) {
		return axios
			.get(url)
			.then(this.responseStatusCheck)
			.catch((error) => {
				console.log(error);
			});
	}

	// getSunrise() {
	// 	return this.getItems(
	// 		"https://api.openweathermap.org/data/2.5/onecall?lat=53.366667&lon=-1.5&exclude={part}&appid=9c78fa45e1c21da83e6115229a3b7a70"
	// 	);
	// }

	getWeather() {
		return this.getItems(
			"https://api.openweathermap.org/data/2.5/onecall?lat=53.366667&lon=-1.5&exclude={part}&appid=9c78fa45e1c21da83e6115229a3b7a70"
		);
	}
}
