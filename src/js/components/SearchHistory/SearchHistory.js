import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  max-height: 364px;
  overflow-y: auto;
`;


export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { searchHistory } = this.props;
    if (searchHistory) {
      console.log(searchHistory)
      return (
        <div className='col-12 col-md-6 mb-8'>
          <div className='card border-primary'>
            <div className='card-header text-primary alert-primary'> Search History </div>
            <CardBody className='card-body'>
              <table className='table table-striped'>
                <tbody>
                  {searchHistory.map(item => (
                    <tr key={item.date + item.time}>
                      <td>{item.name}</td>
                      <td><span></span></td>
                      <td className='text-right'><p className='mb-0'><small>{item.date},<br />{item.time}</small></p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </div>
        </div>
      )
    } else {
      return
      <div className='col-12 col-md-6 mb-8'>
        <div className='card border-primary'>
          <div className='card-header text-primary alert-primary'> Search History </div>
          <div className='card-body'>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    }
  }
};
