import react, { Component } from 'react';
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
