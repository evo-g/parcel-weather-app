import moment from 'moment';

const defaultState = {
  cityName: '',
  searchHistory: [],
  weatherData: null
};

export default function searchCity(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_CITY': {
      return {
        ...state,
        cityName: payload,
      };
    }
    case 'OPEN_WEATHER_MAP_FULFILLED': {
      return {
        ...state,
        weatherData: payload.data,
        searchHistory: [
          ...state.searchHistory,
          { name: payload.data.name, date: moment().format('MMMM Do YYYY'), time: moment().format('h:mm:ss a') }
        ]
      }
    }
    default: {
      return state
    }
  }
};
