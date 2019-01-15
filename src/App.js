import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

import './App.css';

import AppContainer from './components/AppContainer';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
