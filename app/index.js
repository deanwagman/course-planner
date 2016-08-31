import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
const store = createStoreWithMiddleware(reducers);

const Package = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.querySelector('#app-container'));
