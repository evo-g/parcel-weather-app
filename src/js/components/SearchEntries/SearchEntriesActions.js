import axios from 'axios';

export function searchCity(cityName) {
  return {
    type: 'UPDATE_SEARCH_CITY',
    payload: cityName
  }
};

export function openWeatherMap(cityName) {
  return {
    type: 'OPEN_WEATHER_MAP',
    payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=d5faf64074d5028cdcec14de2bc8a76b`)
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => {
        console.log(err);
      })
  }
};
