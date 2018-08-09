import React from 'react';
import ReactDOM from 'react-dom';
import Pikachu from './Pikachu';

class Root extends React.Component {
  render() {
    return(
    <div>
      <h1>One RING</h1>
      <Pikachu />
    </div>
    ); 
  }
};


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
