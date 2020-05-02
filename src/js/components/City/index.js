import { connect } from 'react-redux';
import City from './City';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    cityName: store.search.cityName,
    searchHistory: store.search.searchHistory,
    weatherData: store.search.weatherData

    // lat: store.data.lat
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(City);
