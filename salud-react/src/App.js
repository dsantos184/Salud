import React from 'react';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/geral.css'

import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter as Router} from 'react-router-dom'


import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
