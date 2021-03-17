import React, { Component } from 'react';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/geral.css'
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';

import { Provider } from 'react-redux'
import store from './store';
/*import { createStore } from 'redux'
import Reducers from './Reducers' 

const store = createStore(Reducers)*/


export default class App extends Component {

  render()
  {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Routes />
          </Router>
        </div>
      </Provider>
    );
  }
}
