import React from 'react';
import SearchEntries from './components/SearchEntries';
import CityInfo from './components/City';
import WeatherHistory from './components/SearchHistory';
import styled from 'styled-components';

const ContainerDiv = styled.main`
  height: 100vh;
  .hc-cities {
    margin: .2rem .5rem;
    padding: 6px 12px;
    border-radius: 0.2rem;
    outline: none;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
  }
  .hc-cities:first-child {
    margin-left: 0;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <ContainerDiv className='container'>
        <div className='jumbotron'>
          <h1>Weather Application</h1>
          <p>Always know if you need an umbrela</p>
        </div>
        <SearchEntries />
        <br />
        <div className='row'>
          <CityInfo />
          <WeatherHistory />
        </div>
      </ContainerDiv>
    );
  }
}
