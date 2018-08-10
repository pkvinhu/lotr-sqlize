import React from 'react';
import ReactDOM from 'react-dom';
import Pikachu from './Pikachu';
import ContactList from './ContactList';

class Root extends React.Component {
  render() {
    return(
    <div>
      <h2 style={{alignItems:'center'}}>There is only ONE RING MASTER.</h2>
      <h1 style={{alignItems:'center'}}>IT ME.</h1>
      <ContactList />
      <Pikachu style={{alignItems:'center'}} />
    </div>
    ); 
  }
};


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
