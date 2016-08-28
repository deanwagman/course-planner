// Dean Wagman
// deanwagman@gmail.com
// August 27th, 2016
// This is the main client-side file


import React, { Component } from 'react';
import reactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

reactDOM.render(<App />, document.querySelector('#app-container'));
