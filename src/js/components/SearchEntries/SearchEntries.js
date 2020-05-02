import React from 'react';
import { searchCity, openWeatherMap } from './SearchEntriesActions'

export default class SearchEntries extends React.Component {
  constructor(props) {
    super(props)

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleGo = this.handleGo.bind(this);
    this.preSetButton = this.preSetButton.bind(this);
  }
  handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchCity(value));
  };

  handleGo(event) {
    event.preventDefault();
    const { cityName, dispatch } = this.props;
    dispatch(openWeatherMap(cityName));
  };

  preSetButton(cityName) {
    const { dispatch } = this.props;
    dispatch(openWeatherMap(cityName));
  };

  render() {
    const { cityName } = this.props;
    return (
      <div className='col-md-12'>
        <div className='row'>
          <button className='hc-cities' onClick={() => this.preSetButton('San Diego')}>San Diego</button>
          <button className='hc-cities' onClick={() => this.preSetButton('New York')}>New York</button>
          <button className='hc-cities' onClick={() => this.preSetButton('Montreal')}>Montreal</button>
          <button className='hc-cities' onClick={() => this.preSetButton('London')}>London</button>
          <button className='hc-cities' onClick={() => this.preSetButton('Tokyo')}>Tokyo</button>
        </div>
        <form className='row'>
          <input className='search col-md-11' value={cityName} type='text' onChange={this.handleCityInput} />
          <button className='go btn btn-outline-dark col-md-1 btn-outline-secondary' type='button submit' onClick={this.handleGo}>Go!</button>
        </form>
      </div>
    )
  };
}
